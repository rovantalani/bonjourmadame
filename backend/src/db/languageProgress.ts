import { pool } from './client';

/** Preserve unclassified old records without guessing or sharing their language. */
export async function migrateLanguageProgress(): Promise<void> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        await client.query('SELECT pg_advisory_xact_lock(728341)');
        await client.query(`CREATE TABLE IF NOT EXISTS schema_migrations (
            name TEXT PRIMARY KEY, applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )`);
        const applied = await client.query("SELECT name FROM schema_migrations WHERE name = 'language-progress-v1'");
        if (!applied.rows.length) {
            // 'legacy' is a reserved retention bucket, never accepted by the API.
            // A default is used only while existing rows are backfilled, then removed.
            for (const table of ['word_mastery', 'quiz_sessions', 'lesson_progress']) {
                await client.query(`ALTER TABLE ${table} ADD COLUMN target_language TEXT NOT NULL DEFAULT 'legacy'
                    CHECK (target_language IN ('fr', 'en', 'legacy'))`);
                await client.query(`ALTER TABLE ${table} ALTER COLUMN target_language DROP DEFAULT`);
            }
            await client.query(`ALTER TABLE word_mastery DROP CONSTRAINT word_mastery_pkey,
                ADD PRIMARY KEY (user_id, target_language, word_id)`);
            await client.query(`ALTER TABLE lesson_progress DROP CONSTRAINT lesson_progress_pkey,
                ADD PRIMARY KEY (user_id, target_language, item_type, item_id)`);
            await client.query(`CREATE INDEX word_mastery_language_due_idx
                ON word_mastery (user_id, target_language, next_review_at)`);
            await client.query(`CREATE INDEX quiz_sessions_language_date_idx
                ON quiz_sessions (user_id, target_language, created_at DESC)`);
            await client.query("INSERT INTO schema_migrations (name) VALUES ('language-progress-v1')");
        }
        await client.query('COMMIT');
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
}
