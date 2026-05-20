import { Router, Response } from 'express';
import { pool } from '../db/client';
import { requireAuth, AuthRequest } from '../middleware/auth';

const router = Router();
router.use(requireAuth);

// ── POST /api/progress/word ───────────────────────────────────────────────────

router.post('/word', async (req: AuthRequest, res: Response): Promise<void> => {
    const { word_id, module_id, correct, mastery_level } = req.body as {
        word_id?: string; module_id?: string; correct?: boolean; mastery_level?: number;
    };
    if (!word_id || !module_id || correct === undefined || mastery_level === undefined) {
        res.status(400).json({ error: 'word_id, module_id, correct, mastery_level are required' });
        return;
    }

    await pool.query(`
        INSERT INTO word_mastery (user_id, word_id, module_id, mastery_level, correct_count, wrong_count, last_seen_at)
        VALUES ($1, $2, $3, $4, $5, $6, NOW())
        ON CONFLICT (user_id, word_id) DO UPDATE SET
            mastery_level = $4,
            correct_count = word_mastery.correct_count + $5,
            wrong_count   = word_mastery.wrong_count   + $6,
            last_seen_at  = NOW()
    `, [req.userId, word_id, module_id, mastery_level, correct ? 1 : 0, correct ? 0 : 1]);

    // Recompute total_words_mastered
    const { rows } = await pool.query<{ count: string }>(
        `SELECT COUNT(*) AS count FROM word_mastery WHERE user_id = $1 AND mastery_level >= 3`,
        [req.userId]
    );
    await pool.query(`
        INSERT INTO user_stats (user_id, total_words_mastered)
        VALUES ($1, $2)
        ON CONFLICT (user_id) DO UPDATE SET total_words_mastered = $2
    `, [req.userId, parseInt(rows[0].count, 10)]);

    res.json({ ok: true });
});

// ── POST /api/progress/session ────────────────────────────────────────────────

router.post('/session', async (req: AuthRequest, res: Response): Promise<void> => {
    const { module_id, session_type, score, total } = req.body as {
        module_id?: string; session_type?: string; score?: number; total?: number;
    };
    if (!module_id || !session_type || score === undefined || total === undefined) {
        res.status(400).json({ error: 'module_id, session_type, score, total are required' });
        return;
    }

    await pool.query(
        `INSERT INTO quiz_sessions (user_id, module_id, session_type, score, total) VALUES ($1, $2, $3, $4, $5)`,
        [req.userId, module_id, session_type, score, total]
    );

    // Update streak in user_stats
    const today = new Date().toISOString().slice(0, 10);
    const { rows } = await pool.query<{
        current_streak: number; longest_streak: number; last_activity_date: string | null;
    }>(
        `SELECT current_streak, longest_streak, last_activity_date FROM user_stats WHERE user_id = $1`,
        [req.userId]
    );

    const existing = rows[0] ?? { current_streak: 0, longest_streak: 0, last_activity_date: null };
    const last = existing.last_activity_date ? existing.last_activity_date.toString().slice(0, 10) : null;

    let newStreak = existing.current_streak;
    if (last !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yStr = yesterday.toISOString().slice(0, 10);
        newStreak = last === yStr ? existing.current_streak + 1 : 1;
    }
    const newLongest = Math.max(existing.longest_streak, newStreak);

    await pool.query(`
        INSERT INTO user_stats (user_id, current_streak, longest_streak, last_activity_date)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (user_id) DO UPDATE SET
            current_streak     = $2,
            longest_streak     = $3,
            last_activity_date = $4
    `, [req.userId, newStreak, newLongest, today]);

    res.json({ ok: true });
});

// ── POST /api/progress/lesson ─────────────────────────────────────────────────

router.post('/lesson', async (req: AuthRequest, res: Response): Promise<void> => {
    const { item_type, item_id, completed } = req.body as {
        item_type?: string; item_id?: string; completed?: boolean;
    };
    if (!item_type || !item_id) {
        res.status(400).json({ error: 'item_type and item_id are required' });
        return;
    }

    await pool.query(`
        INSERT INTO lesson_progress (user_id, item_type, item_id, completed, last_accessed)
        VALUES ($1, $2, $3, $4, NOW())
        ON CONFLICT (user_id, item_type, item_id) DO UPDATE SET
            completed     = COALESCE($4, lesson_progress.completed),
            last_accessed = NOW()
    `, [req.userId, item_type, item_id, completed ?? false]);

    res.json({ ok: true });
});

// ── GET /api/progress ─────────────────────────────────────────────────────────

router.get('/', async (req: AuthRequest, res: Response): Promise<void> => {
    const [masteryRes, statsRes, sessionsRes] = await Promise.all([
        pool.query<{ word_id: string; module_id: string; mastery_level: number; correct_count: number; wrong_count: number; last_seen_at: string }>(
            `SELECT word_id, module_id, mastery_level, correct_count, wrong_count, last_seen_at
             FROM word_mastery WHERE user_id = $1`,
            [req.userId]
        ),
        pool.query<{ current_streak: number; longest_streak: number; last_activity_date: string | null; total_words_mastered: number }>(
            `SELECT current_streak, longest_streak, last_activity_date, total_words_mastered
             FROM user_stats WHERE user_id = $1`,
            [req.userId]
        ),
        pool.query<{ module_id: string; session_type: string; score: number; total: number; created_at: string }>(
            `SELECT module_id, session_type, score, total, created_at
             FROM quiz_sessions WHERE user_id = $1
             ORDER BY created_at DESC LIMIT 50`,
            [req.userId]
        ),
    ]);

    const mastery: Record<string, { level: number; correct: number; wrong: number; lastSeen: string }> = {};
    for (const row of masteryRes.rows) {
        mastery[row.word_id] = {
            level:   row.mastery_level,
            correct: row.correct_count,
            wrong:   row.wrong_count,
            lastSeen: row.last_seen_at,
        };
    }

    const statsRow = statsRes.rows[0] ?? { current_streak: 0, longest_streak: 0, last_activity_date: null, total_words_mastered: 0 };

    res.json({
        mastery,
        stats: {
            currentStreak:      statsRow.current_streak,
            longestStreak:      statsRow.longest_streak,
            lastActivityDate:   statsRow.last_activity_date ? statsRow.last_activity_date.toString().slice(0, 10) : null,
            totalWordsMastered: statsRow.total_words_mastered,
        },
        sessions: sessionsRes.rows.map(r => ({
            moduleId:    r.module_id,
            sessionType: r.session_type,
            score:       r.score,
            total:       r.total,
            date:        r.created_at,
        })),
    });
});

// ── GET /api/progress/due ─────────────────────────────────────────────────────
// Stub for Phase 5 SRS — returns empty array

router.get('/due', (_req: AuthRequest, res: Response): void => {
    res.json([]);
});

export default router;
