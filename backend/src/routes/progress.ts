import { Router, Response } from 'express';
import { pool } from '../db/client';
import { requireAuth, AuthRequest } from '../middleware/auth';
import { isTargetLanguage, type TargetLanguage } from '../services/learningContent';
import { validProgressWord, validProgressSession } from '../services/progressContent';

const router = Router({ mergeParams: true });
router.use(requireAuth);
router.use((req, res, next) => {
    if (!isTargetLanguage(req.params.targetLanguage)) {
        res.status(400).json({ error: 'targetLanguage must be fr or en' });
        return;
    }
    res.locals.targetLanguage = req.params.targetLanguage;
    next();
});
const language = (res: Response): TargetLanguage => res.locals.targetLanguage;

const SRS_INTERVALS_DAYS = [0, 1, 2, 4, 7, 14]; // index = box (1–5)

// ── POST /api/progress/:targetLanguage/word ───────────────────────────────────────────────────

router.post('/word', async (req: AuthRequest, res: Response): Promise<void> => {
    const { word_id, module_id, correct } = req.body as {
        word_id?: string; module_id?: string; correct?: boolean;
    };
    if (typeof word_id !== 'string' || typeof module_id !== 'string' || typeof correct !== 'boolean') {
        res.status(400).json({ error: 'word_id, module_id, correct are required' });
        return;
    }

    if (!validProgressWord(language(res), module_id, word_id)) {
        res.status(404).json({ error: 'Word not found in selected language' });
        return;
    }

    const existingRow = await pool.query<{ srs_box: number }>(
        `SELECT srs_box FROM word_mastery WHERE user_id = $1 AND word_id = $2 AND target_language = $3`,
        [req.userId, word_id, language(res)]
    );
    const currentBox: number = existingRow.rows[0]?.srs_box ?? 1;
    const newBox = correct ? Math.min(currentBox + 1, 5) : 1;
    const intervalDays = SRS_INTERVALS_DAYS[newBox];

    await pool.query(`
        INSERT INTO word_mastery (user_id, word_id, module_id, is_known, correct_count, wrong_count, last_seen_at, srs_box, next_review_at, target_language)
        VALUES ($1, $2, $3, $4, $5, $6, NOW(), $7, NOW() + ($8 || ' days')::INTERVAL, $9)
        ON CONFLICT (user_id, target_language, word_id) DO UPDATE SET
            is_known  = $4,
            correct_count  = word_mastery.correct_count + $5,
            wrong_count    = word_mastery.wrong_count   + $6,
            last_seen_at   = NOW(),
            srs_box        = $7,
            next_review_at = NOW() + ($8 || ' days')::INTERVAL
    `, [req.userId, word_id, module_id, correct, correct ? 1 : 0, correct ? 0 : 1, newBox, intervalDays, language(res)]);

    res.json({ ok: true });
});

// ── POST /api/progress/:targetLanguage/session ────────────────────────────────────────────────

router.post('/session', async (req: AuthRequest, res: Response): Promise<void> => {
    const { module_id, session_type, score, total } = req.body as {
        module_id?: string; session_type?: string; score?: number; total?: number;
    };
    if (typeof module_id !== 'string' || typeof session_type !== 'string' || score === undefined || total === undefined) {
        res.status(400).json({ error: 'module_id, session_type, score, total are required' });
        return;
    }

    if (!validProgressSession(language(res), module_id, session_type)) {
        res.status(404).json({ error: 'Session content not found in selected language' });
        return;
    }
    await pool.query(
        `INSERT INTO quiz_sessions (user_id, module_id, session_type, score, total, target_language) VALUES ($1, $2, $3, $4, $5, $6)`,
        [req.userId, module_id, session_type, score, total, language(res)]
    );

    res.json({ ok: true });
});

// ── GET /api/progress/:targetLanguage ─────────────────────────────────────────────────────────

router.get('/', async (req: AuthRequest, res: Response): Promise<void> => {
    const [masteryRes, sessionsRes] = await Promise.all([
        pool.query<{ word_id: string; module_id: string; is_known: boolean; correct_count: number; wrong_count: number; last_seen_at: string }>(
            `SELECT word_id, module_id, is_known, correct_count, wrong_count, last_seen_at
             FROM word_mastery WHERE user_id = $1 AND target_language = $2`,
            [req.userId, language(res)]
        ),
        pool.query<{ module_id: string; session_type: string; score: number; total: number; created_at: string }>(
            `SELECT module_id, session_type, score, total, created_at
             FROM quiz_sessions WHERE user_id = $1 AND target_language = $2
             ORDER BY created_at DESC LIMIT 50`,
            [req.userId, language(res)]
        ),
    ]);

    const mastery: Record<string, { known: boolean; correct: number; wrong: number; lastSeen: string }> = {};
    for (const row of masteryRes.rows) {
        mastery[row.word_id] = {
            known:   row.is_known,
            correct: row.correct_count,
            wrong:   row.wrong_count,
            lastSeen: row.last_seen_at,
        };
    }

    res.json({
        mastery,
        sessions: sessionsRes.rows.map(r => ({
            moduleId:    r.module_id,
            sessionType: r.session_type,
            score:       r.score,
            total:       r.total,
            date:        r.created_at,
        })),
    });
});

// ── GET /api/progress/:targetLanguage/due ─────────────────────────────────────────────────────

router.get('/due', async (req: AuthRequest, res: Response): Promise<void> => {
    const { rows } = await pool.query<{ word_id: string; module_id: string; srs_box: number; is_known: boolean }>(
        `SELECT word_id, module_id, srs_box, is_known
         FROM word_mastery
         WHERE user_id = $1 AND target_language = $2 AND next_review_at <= NOW()
         ORDER BY next_review_at ASC`,
        [req.userId, language(res)]
    );
    res.json(rows.map(r => ({
        wordId:       r.word_id,
        moduleId:     r.module_id,
        srsBox:       r.srs_box,
        known:        r.is_known,
    })));
});

const scopedRouter = Router();
scopedRouter.use('/:targetLanguage', router);
scopedRouter.use(requireAuth, (_req, res) => { res.status(400).json({ error: 'targetLanguage is required' }); });
export default scopedRouter;
