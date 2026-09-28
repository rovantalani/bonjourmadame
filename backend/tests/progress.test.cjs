const { before, after, test } = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const fs = require('node:fs');
const path = require('node:path');
const express = require('express');
const { PGlite } = require('@electric-sql/pglite');
const { pool } = require('../dist/db/client');
const auth = require('../dist/middleware/auth');
const { migrate } = require('../dist/db/migrate');
let server, base, db, original;
// Only authentication is stubbed; every route and migration query executes in PostgreSQL.
auth.requireAuth = (req, res, next) => {
    if (req.headers['x-test-user'] === 'none') { res.sendStatus(401); return; }
    req.userId = Number(req.headers['x-test-user'] || 1); next();
};
before(async () => {
    db = new PGlite();
    pool.query = (sql, params) => db.query(sql, params);
    pool.connect = async () => ({ query: pool.query, release() {} });
    await db.exec(fs.readFileSync(path.join(__dirname, 'fixtures/progress-before-language.sql'), 'utf8'));
    original = {};
    for (const table of ['word_mastery', 'quiz_sessions', 'lesson_progress']) original[table] = (await db.query(`SELECT * FROM ${table}`)).rows;
    await migrate();
    const app = express(); app.use(express.json());
    app.use('/api/progress', require('../dist/routes/progress').default);
    server = app.listen(0, '127.0.0.1'); await once(server, 'listening');
    base = `http://127.0.0.1:${server.address().port}/api/progress`;
});
after(async () => { if (server) await new Promise(resolve => server.close(resolve)); if (db) await db.close(); });
async function request(url, body, status = 200, user = 1) {
    const response = await fetch(base + url, {
        method: body ? 'POST' : 'GET', headers: { 'content-type': 'application/json', 'x-test-user': String(user) },
        ...(body ? { body: JSON.stringify(body) } : {}),
    });
    assert.equal(response.status, status, url);
    return status === 401 ? null : response.json();
}
const answer = correct => ({ word_id: 'greetings-basics:1', module_id: 'greetings-basics', correct });
const session = score => ({ module_id: 'greetings-basics', session_type: 'vocabulary', score, total: 10 });

test('migration retains old records without attributing them to either language and is repeatable', async () => {
    await migrate();
    for (const table of ['word_mastery', 'quiz_sessions', 'lesson_progress']) {
        const rows = (await db.query(`SELECT * FROM ${table} WHERE target_language = 'legacy'`)).rows;
        assert.deepEqual(rows.map(({ target_language, ...row }) => row), original[table]);
    }
    for (const language of ['fr', 'en']) {
        assert.deepEqual(await request(`/${language}`), { mastery: {}, sessions: [] });
        assert.deepEqual(await request(`/${language}/due`), []);
    }
    await request('/legacy', null, 400);
    await assert.rejects(db.query("INSERT INTO quiz_sessions (user_id, module_id, session_type, score, total) VALUES (1,'x','vocabulary',1,1)"), /null value/);
    await assert.rejects(db.query("INSERT INTO quiz_sessions (user_id, module_id, session_type, score, total, target_language) VALUES (1,'x','vocabulary',1,1,'de')"), /check constraint/);
});

test('same word and session IDs have independent FR/EN progress and SRS schedules', async () => {
    for (const correct of [true, false, true]) {
        await request('/fr/word', answer(correct));
        const progress = await request('/fr');
        assert.equal(progress.mastery['greetings-basics:1'].known, correct);
        assert.equal('level' in progress.mastery['greetings-basics:1'], false);
    }
    await request('/en/word', answer(false));
    await request('/fr/session', session(8));
    await request('/en/session', session(2));
    const fr = await request('/fr'); const en = await request('/en');
    assert.equal(fr.mastery['greetings-basics:1'].correct, 2);
    assert.equal(fr.mastery['greetings-basics:1'].wrong, 1);
    assert.equal(en.mastery['greetings-basics:1'].correct, 0);
    assert.equal(en.mastery['greetings-basics:1'].wrong, 1);
    assert.equal(fr.sessions[0].score, 8); assert.equal(en.sessions[0].score, 2);
    const rows = (await db.query("SELECT target_language, srs_box, next_review_at > NOW() AS future FROM word_mastery WHERE target_language <> 'legacy' ORDER BY target_language")).rows;
    assert.deepEqual(rows, [{ target_language: 'en', srs_box: 1, future: true }, { target_language: 'fr', srs_box: 2, future: true }]);
    await db.query("UPDATE word_mastery SET next_review_at = NOW() - INTERVAL '1 day' WHERE target_language = 'en'");
    assert.equal((await request('/en/due')).length, 1);
    assert.equal((await request('/fr/due')).length, 0);
    assert.deepEqual(await request('/en', null, 200, 2), { mastery: {}, sessions: [] });
    assert.deepEqual(await request('/en/due', null, 200, 2), []);
});

test('concurrent correct answers advance only the selected language without losing counts', async () => {
    await Promise.all(Array.from({ length: 4 }, () => request('/fr/word', answer(true))));
    const row = (await db.query("SELECT correct_count, srs_box, next_review_at > NOW() + INTERVAL '13 days' AS scheduled FROM word_mastery WHERE target_language = 'fr'")).rows[0];
    assert.deepEqual(row, { correct_count: 6, srs_box: 5, scheduled: true });
    assert.equal((await request('/en')).mastery['greetings-basics:1'].correct, 0);
});

test('invalid language, content, scores and mismatched word IDs cannot write progress', async () => {
    const before = (await db.query('SELECT COUNT(*) AS count FROM word_mastery')).rows;
    for (const suffix of ['', '/de', '/word', '/legacy', '/constructor']) await request(suffix, null, 400);
    await request('/word', answer(true), 400);
    await request('/fr/word', { ...answer(true), correct: 'true' }, 400);
    await request('/fr/word', { ...answer(true), word_id: 'other:1' }, 404);
    await request('/fr/word', { word_id: 'a1en-first-day:1', module_id: 'a1en-first-day', correct: true }, 404);
    await request('/en/word', { word_id: 'constructor:1', module_id: 'constructor', correct: true }, 404);
    await request('/en/session', { module_id: 'etre', session_type: 'verb', score: 1, total: 1 }, 404);
    await request('/fr/session', { module_id: 'to-be', session_type: 'verb', score: 1, total: 1 }, 404);
    for (const score of [-1, 11, 1.5, '1']) await request('/fr/session', session(score), 400);
    await request('/fr', null, 401, 'none');
    assert.deepEqual((await db.query('SELECT COUNT(*) AS count FROM word_mastery')).rows, before);
});

test('phrase answers and verb sessions validate against the selected catalog', async () => {
    await request('/en/word', { word_id: 'phrase-introducing-yourself:1', module_id: 'phrase-introducing-yourself', correct: true });
    await request('/en/session', { module_id: 'phrase-introducing-yourself', session_type: 'vocabulary', score: 1, total: 1 });
    await request('/en/session', { module_id: 'to-be', session_type: 'verb', score: 1, total: 1 });
    assert((await request('/en')).mastery['phrase-introducing-yourself:1']);
    assert.equal((await request('/fr')).mastery['phrase-introducing-yourself:1'], undefined);
});

test('lesson progress primary keys permit identical IDs in both languages', async () => {
    for (const language of ['fr', 'en']) await db.query(`INSERT INTO lesson_progress
        (user_id, item_type, item_id, completed, target_language) VALUES (1,'grammar','shared',TRUE,$1)`, [language]);
    assert.equal((await db.query("SELECT * FROM lesson_progress WHERE item_id = 'shared'")).rows.length, 2);
});
