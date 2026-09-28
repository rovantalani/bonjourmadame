import { pool } from './client';

export async function migrate(): Promise<void> {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id            SERIAL PRIMARY KEY,
            email         TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            created_at    TIMESTAMPTZ DEFAULT NOW()
        )
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS word_mastery (
            user_id       INTEGER REFERENCES users(id) ON DELETE CASCADE,
            word_id       TEXT NOT NULL,
            module_id     TEXT NOT NULL,
            is_known      BOOLEAN NOT NULL DEFAULT FALSE,
            correct_count INTEGER DEFAULT 0,
            wrong_count   INTEGER DEFAULT 0,
            last_seen_at  TIMESTAMPTZ DEFAULT NOW(),
            PRIMARY KEY (user_id, word_id)
        )
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS quiz_sessions (
            id           SERIAL PRIMARY KEY,
            user_id      INTEGER REFERENCES users(id) ON DELETE CASCADE,
            module_id    TEXT NOT NULL,
            session_type TEXT NOT NULL,
            score        INTEGER NOT NULL,
            total        INTEGER NOT NULL,
            created_at   TIMESTAMPTZ DEFAULT NOW()
        )
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS lesson_progress (
            user_id       INTEGER REFERENCES users(id) ON DELETE CASCADE,
            item_type     TEXT NOT NULL,
            item_id       TEXT NOT NULL,
            completed     BOOLEAN DEFAULT FALSE,
            last_accessed TIMESTAMPTZ DEFAULT NOW(),
            PRIMARY KEY (user_id, item_type, item_id)
        )
    `);

    await pool.query(`ALTER TABLE word_mastery ADD COLUMN IF NOT EXISTS is_known BOOLEAN NOT NULL DEFAULT FALSE`);
    await pool.query(`ALTER TABLE word_mastery ADD COLUMN IF NOT EXISTS srs_box INTEGER DEFAULT 1`);
    await pool.query(`ALTER TABLE word_mastery ADD COLUMN IF NOT EXISTS next_review_at TIMESTAMPTZ DEFAULT NOW()`);

    // Existing unclassified rows stay intact; APIs accept only fr/en.
    // One atomic schema update, with no migration registry or import machinery.
    await pool.query(`DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns
            WHERE table_schema = current_schema() AND table_name = 'word_mastery' AND column_name = 'target_language') THEN
            ALTER TABLE word_mastery ADD COLUMN target_language TEXT NOT NULL DEFAULT 'legacy' CHECK (target_language IN ('fr', 'en', 'legacy'));
            ALTER TABLE quiz_sessions ADD COLUMN target_language TEXT NOT NULL DEFAULT 'legacy' CHECK (target_language IN ('fr', 'en', 'legacy'));
            ALTER TABLE lesson_progress ADD COLUMN target_language TEXT NOT NULL DEFAULT 'legacy' CHECK (target_language IN ('fr', 'en', 'legacy'));
            ALTER TABLE word_mastery ALTER COLUMN target_language DROP DEFAULT,
                DROP CONSTRAINT word_mastery_pkey, ADD PRIMARY KEY (user_id, target_language, word_id);
            ALTER TABLE quiz_sessions ALTER COLUMN target_language DROP DEFAULT;
            ALTER TABLE lesson_progress ALTER COLUMN target_language DROP DEFAULT,
                DROP CONSTRAINT lesson_progress_pkey, ADD PRIMARY KEY (user_id, target_language, item_type, item_id);
        END IF;
    END $$`);

    console.log('DB migration complete');
}
