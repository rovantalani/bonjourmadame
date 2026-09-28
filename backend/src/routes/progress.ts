import { Router, type Response } from 'express';
import { pool } from '../db/client';
import { requireAuth, type AuthRequest } from '../middleware/auth';
import { isTargetLanguage, type TargetLanguage } from '../services/learningContent';
import { validProgressWord, validProgressSession } from '../services/progressContent';

const router = Router();
const scoped = Router();
router.use(requireAuth);
router.use('/:targetLanguage', (req, res, next) => {
    if (!isTargetLanguage(req.params.targetLanguage)) {
        res.status(400).json({ error: 'targetLanguage must be fr or en' });
        return;
    }
    res.locals.targetLanguage = req.params.targetLanguage;
    scoped(req, res, next);
});
router.use((_req, res) => { res.status(400).json({ error: 'targetLanguage is required' }); });
const language = (res: Response): TargetLanguage => res.locals.targetLanguage;

scoped.post('/word', async (req: AuthRequest, res: Response): Promise<void> => {
    const { word_id, module_id, correct } = req.body ?? {};
    if (typeof word_id !== 'string' || typeof module_id !== 'string' || typeof correct !== 'boolean') {
        res.status(400).json({ error: 'word_id, module_id, correct are required' });
        return;
    }
    if (!validProgressWord(language(res), module_id, word_id)) {
        res.status(404).json({ error: 'Word not found in selected language' });
        return;
    }
    // One atomic upsert preserves counts and SRS advancement under concurrent answers.
    await pool.query(`
        INSERT INTO word_mastery (user_id, word_id, module_id, is_known, correct_count, wrong_count,
            last_seen_at, srs_box, next_review_at, target_language)
        VALUES ($1, $2, $3, $4, CASE WHEN $4 THEN 1 ELSE 0 END, CASE WHEN $4 THEN 0 ELSE 1 END,
            NOW(), CASE WHEN $4 THEN 2 ELSE 1 END,
            NOW() + (CASE WHEN $4 THEN 2 ELSE 1 END) * INTERVAL '1 day', $5)
        ON CONFLICT (user_id, target_language, word_id) DO UPDATE SET
            is_known = $4,
            correct_count = word_mastery.correct_count + CASE WHEN $4 THEN 1 ELSE 0 END,
            wrong_count = word_mastery.wrong_count + CASE WHEN $4 THEN 0 ELSE 1 END,
            last_seen_at = NOW(),
            srs_box = CASE WHEN $4 THEN LEAST(word_mastery.srs_box + 1, 5) ELSE 1 END,
            next_review_at = NOW() + (CASE WHEN $4 THEN
                (ARRAY[1,2,4,7,14])[LEAST(word_mastery.srs_box + 1, 5)] ELSE 1 END) * INTERVAL '1 day'
    `, [req.userId, word_id, module_id, correct, language(res)]);
    res.json({ ok: true });
});

scoped.post('/session', async (req: AuthRequest, res: Response): Promise<void> => {
    const { module_id, session_type, score, total } = req.body ?? {};
    if (typeof module_id !== 'string' || typeof session_type !== 'string'
        || !Number.isSafeInteger(score) || !Number.isSafeInteger(total)
        || score < 0 || total < 0 || score > total || total > 2147483647) {
        res.status(400).json({ error: 'Valid module_id, session_type, score and total are required' });
        return;
    }
    if (!validProgressSession(language(res), module_id, session_type)) {
        res.status(404).json({ error: 'Session content not found in selected language' });
        return;
    }
    await pool.query(`INSERT INTO quiz_sessions (user_id, module_id, session_type, score, total, target_language)
        VALUES ($1, $2, $3, $4, $5, $6)`, [req.userId, module_id, session_type, score, total, language(res)]);
    res.json({ ok: true });
});

scoped.get('/', async (req: AuthRequest, res: Response): Promise<void> => {
    const [masteryRes, sessionsRes] = await Promise.all([
        pool.query<{ word_id: string; is_known: boolean; correct_count: number; wrong_count: number; last_seen_at: string }>(
            `SELECT word_id, is_known, correct_count, wrong_count, last_seen_at FROM word_mastery
             WHERE user_id = $1 AND target_language = $2`, [req.userId, language(res)]),
        pool.query<{ module_id: string; session_type: string; score: number; total: number; created_at: string }>(
            `SELECT module_id, session_type, score, total, created_at FROM quiz_sessions
             WHERE user_id = $1 AND target_language = $2 ORDER BY created_at DESC LIMIT 50`, [req.userId, language(res)]),
    ]);
    res.json({
        mastery: Object.fromEntries(masteryRes.rows.map(row => [row.word_id, {
            known: row.is_known, correct: row.correct_count, wrong: row.wrong_count, lastSeen: row.last_seen_at,
        }])),
        sessions: sessionsRes.rows.map(row => ({
            moduleId: row.module_id, sessionType: row.session_type, score: row.score, total: row.total, date: row.created_at,
        })),
    });
});

scoped.get('/due', async (req: AuthRequest, res: Response): Promise<void> => {
    const { rows } = await pool.query<{ word_id: string; module_id: string; srs_box: number; is_known: boolean }>(
        `SELECT word_id, module_id, srs_box, is_known FROM word_mastery
         WHERE user_id = $1 AND target_language = $2 AND next_review_at <= NOW()
         ORDER BY next_review_at ASC`, [req.userId, language(res)]);
    res.json(rows.map(row => ({ wordId: row.word_id, moduleId: row.module_id, srsBox: row.srs_box, known: row.is_known })));
});
scoped.use((_req, res) => { res.status(404).json({ error: 'Progress route not found' }); });
export default router;
