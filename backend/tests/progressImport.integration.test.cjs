const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const { PGlite } = require('@electric-sql/pglite');
const { pool } = require('../dist/db/client');
const { migrate } = require('../dist/db/migrate');
const { importProgress } = require('../dist/services/progressImport');
let db;
before(async () => {
    db = new PGlite();
    pool.query = (...args) => db.query(...args);
    pool.connect = async () => ({ query: (...args) => db.query(...args), release() {} });
    await migrate();
    await db.query("INSERT INTO users (id, email, password_hash) VALUES (1, 'one@example.test', 'test'), (2, 'two@example.test', 'test'), (3, 'three@example.test', 'test')");
});
after(async () => { await db.close(); await pool.end(); });
const snapshot = (userId = 1) => ({
    userId, importId: '12345678-1234-4234-8234-123456789abc',
    mastery: { 'greetings:1': { known: true, correct: 3, wrong: 2, lastSeen: '2026-09-28T10:00:00.000Z' } },
    sessions: [{ moduleId: 'greetings', sessionType: 'vocabulary', score: 2, total: 3, date: '2026-09-27T10:00:00.000Z' }],
});

test('PostgreSQL preserves original totals/dates and deduplicates retries and equivalent snapshots', async () => {
    await importProgress(1, snapshot());
    await importProgress(1, snapshot());
    await importProgress(1, { ...snapshot(), importId: '22345678-1234-4234-8234-123456789abc' });
    const word = (await db.query('SELECT * FROM word_mastery WHERE user_id = 1')).rows[0];
    assert.equal(word.correct_count, 3);
    assert.equal(word.wrong_count, 2);
    assert.equal(word.is_known, true);
    assert.equal(word.last_seen_at.toISOString(), snapshot().mastery['greetings:1'].lastSeen);
    const sessions = (await db.query('SELECT * FROM quiz_sessions WHERE user_id = 1')).rows;
    assert.equal(sessions.length, 1);
    assert.equal(sessions[0].created_at.toISOString(), snapshot().sessions[0].date);
});

test('PostgreSQL keeps newer account progress and existing review schedules', async () => {
    await db.query(`INSERT INTO word_mastery (user_id, word_id, module_id, is_known, correct_count, wrong_count, last_seen_at, srs_box, next_review_at)
        VALUES (2, 'greetings:1', 'greetings', false, 10, 1, '2026-09-29T10:00:00Z', 4, '2026-10-06T10:00:00Z')`);
    await importProgress(2, snapshot(2));
    let word = (await db.query('SELECT * FROM word_mastery WHERE user_id = 2')).rows[0];
    assert.equal(word.correct_count, 10);
    assert.equal(word.wrong_count, 2);
    assert.equal(word.is_known, false);
    assert.equal(word.last_seen_at.toISOString(), '2026-09-29T10:00:00.000Z');
    assert.equal(word.srs_box, 4);
    assert.equal(word.next_review_at.toISOString(), '2026-10-06T10:00:00.000Z');
    const newer = snapshot(2);
    newer.importId = '32345678-1234-4234-8234-123456789abc';
    newer.mastery['greetings:1'].lastSeen = '2026-09-30T10:00:00.000Z';
    await importProgress(2, newer);
    word = (await db.query('SELECT * FROM word_mastery WHERE user_id = 2')).rows[0];
    assert.equal(word.is_known, true);
    assert.equal(word.correct_count, 10);
});

test('PostgreSQL rolls back words, sessions, and receipt if any part fails, then allows retry', async () => {
    await db.query("ALTER TABLE quiz_sessions ADD CONSTRAINT test_reject CHECK (module_id <> 'fail-import')");
    const failing = snapshot(3);
    failing.sessions.push({ ...failing.sessions[0], moduleId: 'fail-import' });
    await assert.rejects(importProgress(3, failing));
    for (const table of ['word_mastery', 'quiz_sessions', 'progress_imports']) {
        assert.equal((await db.query(`SELECT * FROM ${table} WHERE user_id = 3`)).rows.length, 0);
    }
    await db.query('ALTER TABLE quiz_sessions DROP CONSTRAINT test_reject');
    await importProgress(3, failing);
    assert.equal((await db.query('SELECT * FROM quiz_sessions WHERE user_id = 3')).rows.length, 2);
    assert.equal((await db.query('SELECT * FROM progress_imports WHERE user_id = 3')).rows.length, 1);
});
