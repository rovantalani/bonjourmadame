const { before, after, test } = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const express = require('express');
const { pool } = require('../dist/db/client');
const auth = require('../dist/middleware/auth');
let server, base;
const saved = new Map();
// Isolate persistence and authentication; these tests never connect to a database.
auth.requireAuth = (req, _res, next) => { req.userId = 1; next(); };
pool.query = async (sql, values) => {
    if (sql.includes('SELECT srs_box')) return { rows: [] };
    if (sql.includes('INSERT INTO word_mastery')) {
        saved.set(values[1], { word_id: values[1], module_id: values[2], is_known: values[3], correct_count: values[4], wrong_count: values[5], last_seen_at: '2026-09-24', srs_box: values[6] });
        return { rows: [] };
    }
    if (sql.includes('FROM word_mastery')) return { rows: [...saved.values()] };
    if (sql.includes('FROM quiz_sessions')) return { rows: [] };
    throw new Error('Unexpected query: ' + sql);
};
before(async () => {
    const app = express(); app.use(express.json());
    app.use('/api/progress', require('../dist/routes/progress').default);
    server = app.listen(0, '127.0.0.1'); await once(server, 'listening');
    base = `http://127.0.0.1:${server.address().port}/api/progress`;
});
after(() => new Promise(resolve => server.close(resolve)));

test('one correct response makes a word known; a later error clears known status', async () => {
    for (const correct of [true, false, true]) {
        const response = await fetch(base + '/word', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ word_id: 'greetings:1', module_id: 'greetings', correct, mastery_level: 5 }) });
        assert.equal(response.status, 200);
        const progress = await (await fetch(base)).json();
        assert.equal(progress.mastery['greetings:1'].known, correct);
        assert.equal('level' in progress.mastery['greetings:1'], false);
        const due = await (await fetch(base + '/due')).json();
        assert.equal(due[0].known, correct);
    }
});

test('nonboolean answers cannot update word knowledge', async () => {
    const response = await fetch(base + '/word', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ word_id: 'greetings:2', module_id: 'greetings', correct: 'true' }) });
    assert.equal(response.status, 400);
    assert.equal(saved.has('greetings:2'), false);
});
