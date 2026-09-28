import { createHash } from 'crypto';
import { pool } from '../db/client';

interface ImportedWord {
    known: boolean;
    correct: number;
    wrong: number;
    lastSeen: string;
}
interface ImportedSession {
    moduleId: string;
    sessionType: 'vocabulary' | 'verb' | 'review';
    score: number;
    total: number;
    date: string;
}
export interface ProgressImport {
    importId: string;
    userId: number;
    mastery: Record<string, ImportedWord>;
    sessions: ImportedSession[];
}

const object = (value: unknown): value is Record<string, unknown> =>
    value !== null && typeof value === 'object' && !Array.isArray(value);
const count = (value: unknown): value is number =>
    Number.isSafeInteger(value) && (value as number) >= 0 && (value as number) <= 2147483647;
const date = (value: unknown): value is string => typeof value === 'string'
    && /^\d{4}-\d{2}-\d{2}T/.test(value) && Number.isFinite(Date.parse(value));
const identifier = (value: unknown): value is string =>
    typeof value === 'string' && /^[a-zA-Z0-9_-]{1,150}$/.test(value);

export function isProgressImport(value: unknown): value is ProgressImport {
    if (!object(value) || typeof value.importId !== 'string'
        || !/^[0-9a-f-]{36}$/i.test(value.importId) || !count(value.userId) || value.userId === 0
        || !object(value.mastery) || Object.keys(value.mastery).length > 5000
        || !Array.isArray(value.sessions) || value.sessions.length > 200) return false;
    return Object.entries(value.mastery).every(([key, word]) =>
        /^[a-zA-Z0-9_-]{1,150}:\d+$/.test(key) && object(word)
        && typeof word.known === 'boolean' && count(word.correct) && count(word.wrong) && date(word.lastSeen)
    ) && value.sessions.every(session => object(session)
        && identifier(session.moduleId) && ['vocabulary', 'verb', 'review'].includes(String(session.sessionType))
        && count(session.score) && count(session.total) && session.score <= session.total && date(session.date));
}

export class ImportConflict extends Error {}

/** Save the snapshot and its receipt together: either everything commits, or nothing does. */
export async function importProgress(userId: number, snapshot: ProgressImport): Promise<void> {
    const payloadHash = createHash('sha256').update(JSON.stringify({
        mastery: Object.entries(snapshot.mastery).sort(([a], [b]) => a.localeCompare(b)),
        sessions: snapshot.sessions,
    })).digest('hex');
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        // Serialize imports for this account, including separate tabs with different import IDs.
        const owner = await client.query('SELECT id FROM users WHERE id = $1 FOR UPDATE', [userId]);
        if (!owner.rows.length) throw new Error('Account no longer exists');
        const receipt = await client.query<{ payload_hash: string }>(
            'SELECT payload_hash FROM progress_imports WHERE user_id = $1 AND import_id = $2',
            [userId, snapshot.importId],
        );
        if (receipt.rows.length) {
            if (receipt.rows[0].payload_hash !== payloadHash) throw new ImportConflict('Import ID already used');
            await client.query('COMMIT');
            return;
        }
        for (const [wordId, word] of Object.entries(snapshot.mastery)) {
            // Old local totals may already include synchronized answers. Max avoids adding them twice.
            // The newest answer controls known status; imports do not reset existing review schedules.
            await client.query(`
                INSERT INTO word_mastery (user_id, word_id, module_id, is_known, correct_count, wrong_count, last_seen_at)
                VALUES ($1, $2, $3, $4, $5, $6, $7)
                ON CONFLICT (user_id, word_id) DO UPDATE SET
                    is_known = CASE WHEN EXCLUDED.last_seen_at > word_mastery.last_seen_at
                        THEN EXCLUDED.is_known ELSE word_mastery.is_known END,
                    correct_count = GREATEST(word_mastery.correct_count, EXCLUDED.correct_count),
                    wrong_count = GREATEST(word_mastery.wrong_count, EXCLUDED.wrong_count),
                    last_seen_at = GREATEST(word_mastery.last_seen_at, EXCLUDED.last_seen_at)
            `, [userId, wordId, wordId.split(':')[0], word.known, word.correct, word.wrong, word.lastSeen]);
        }
        for (const session of snapshot.sessions) {
            await client.query(`
                INSERT INTO quiz_sessions (user_id, module_id, session_type, score, total, created_at)
                SELECT $1, $2, $3, $4, $5, $6::timestamptz
                WHERE NOT EXISTS (
                    SELECT 1 FROM quiz_sessions WHERE user_id = $1 AND module_id = $2
                    AND session_type = $3 AND score = $4 AND total = $5 AND created_at = $6::timestamptz
                )
            `, [userId, session.moduleId, session.sessionType, session.score, session.total, session.date]);
        }
        await client.query(
            'INSERT INTO progress_imports (user_id, import_id, payload_hash) VALUES ($1, $2, $3)',
            [userId, snapshot.importId, payloadHash],
        );
        await client.query('COMMIT');
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
}
