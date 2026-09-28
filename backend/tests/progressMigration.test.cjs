const { test } = require('node:test');
const assert = require('node:assert/strict');
const { PGlite } = require('@electric-sql/pglite');
const fs = require('node:fs');
const path = require('node:path');
const { pool } = require('../dist/db/client');
const { migrate } = require('../dist/db/migrate');
const { migrateLanguageProgress } = require('../dist/db/languageProgress');

function connect(db, fail) {
    pool.query = (sql, params) => db.query(sql, params);
    pool.connect = async () => ({
        query: (sql, params) => {
            if (fail && sql.includes('CREATE INDEX quiz_sessions_language_date_idx')) throw new Error('Simulated interruption');
            return db.query(sql, params);
        },
        release() {},
    });
}

test('a fresh database gets language-required progress tables', async () => {
    const db = new PGlite();
    try {
        connect(db);
        await migrate();
        await migrate();
        const columns = (await db.query(`SELECT table_name, is_nullable, column_default FROM information_schema.columns
            WHERE column_name = 'target_language' ORDER BY table_name`)).rows;
        assert.deepEqual(columns, ['lesson_progress', 'quiz_sessions', 'word_mastery'].map(table_name => ({ table_name, is_nullable: 'NO', column_default: null })));
    } finally { await db.close(); }
});

test('interrupted migration rolls back data and schema and can be retried', async () => {
    const db = new PGlite();
    try {
        await db.exec(fs.readFileSync(path.join(__dirname, 'fixtures/progress-before-language.sql'), 'utf8'));
        const before = (await db.query('SELECT * FROM word_mastery')).rows;
        connect(db, true);
        await assert.rejects(migrateLanguageProgress(), /Simulated interruption/);
        assert.deepEqual((await db.query('SELECT * FROM word_mastery')).rows, before);
        assert.equal((await db.query("SELECT * FROM information_schema.columns WHERE column_name = 'target_language'")).rows.length, 0);
        connect(db);
        await migrateLanguageProgress();
        assert.equal((await db.query('SELECT target_language FROM word_mastery')).rows[0].target_language, 'legacy');
    } finally { await db.close(); }
});
