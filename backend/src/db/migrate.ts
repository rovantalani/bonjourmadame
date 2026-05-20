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
            mastery_level INTEGER DEFAULT 0,
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

    await pool.query(`
        CREATE TABLE IF NOT EXISTS user_stats (
            user_id              INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
            current_streak       INTEGER DEFAULT 0,
            longest_streak       INTEGER DEFAULT 0,
            last_activity_date   DATE,
            total_words_mastered INTEGER DEFAULT 0
        )
    `);

    console.log('DB migration complete');
}
