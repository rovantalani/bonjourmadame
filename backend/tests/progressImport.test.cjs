const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const { pool } = require('../dist/db/client');
const { importProgress, isProgressImport, ImportConflict } = require('../dist/services/progressImport');
const snapshot = () => ({
    importId: '12345678-1234-4234-8234-123456789abc', userId: 1,
    mastery: { 'greetings:1': { known: true, correct: 3, wrong: 2, lastSeen: '2026-09-28T10:00:00.000Z' } },
    sessions: [{ moduleId: 'greetings', sessionType: 'vocabulary', score: 2, total: 3, date: '2026-09-27T10:00:00.000Z' }],
});

function database(failOn = '') {
    const calls = []; const receipts = new Map(); let stagedReceipt;
    pool.connect = async () => ({
        query: async (sql, params) => {
            calls.push({ sql, params });
            if (failOn && sql.includes(failOn)) throw new Error('Database unavailable');
            if (sql.includes('SELECT id FROM users')) return { rows: [{ id: 1 }] };
            if (sql.includes('SELECT payload_hash')) return { rows: receipts.has(params[1]) ? [{ payload_hash: receipts.get(params[1]) }] : [] };
            if (sql.includes('INSERT INTO progress_imports')) stagedReceipt = params;
            if (sql === 'COMMIT' && stagedReceipt) { receipts.set(stagedReceipt[1], stagedReceipt[2]); stagedReceipt = undefined; }
            if (sql === 'ROLLBACK') stagedReceipt = undefined;
            return { rows: [] };
        },
        release: () => calls.push({ sql: 'RELEASE' }),
    });
    return { calls, receipts };
}

test('validates the complete import before saving', () => {
    assert.equal(isProgressImport(snapshot()), true);
    for (const change of [s => s.userId = 0, s => s.importId = 'bad', s => s.mastery['greetings:1'].correct = -1,
        s => s.mastery['greetings:1'].known = 'true', s => s.mastery['greetings:1'].lastSeen = 'invalid',
        s => s.sessions[0].score = 4, s => s.sessions[0].sessionType = 'invalid', s => s.sessions = Array(201).fill(s.sessions[0])]) {
        const s = snapshot(); change(s); assert.equal(isProgressImport(s), false);
    }
});

test('saves original totals and dates, with non-destructive merge and one transaction', async () => {
    const db = database(); await importProgress(1, snapshot());
    assert.equal(db.calls[0].sql, 'BEGIN');
    assert.match(db.calls[1].sql, /FOR UPDATE/);
    const word = db.calls.find(c => c.sql.includes('INSERT INTO word_mastery'));
    assert.deepEqual(word.params, [1, 'greetings:1', 'greetings', true, 3, 2, '2026-09-28T10:00:00.000Z']);
    assert.match(word.sql, /GREATEST\(word_mastery.correct_count/);
    assert.match(word.sql, /EXCLUDED.last_seen_at > word_mastery.last_seen_at/);
    const session = db.calls.find(c => c.sql.includes('INSERT INTO quiz_sessions'));
    assert.equal(session.params[5], '2026-09-27T10:00:00.000Z');
    assert.match(session.sql, /WHERE NOT EXISTS/);
    assert.equal(db.calls.at(-2).sql, 'COMMIT');
    assert.equal(db.calls.at(-1).sql, 'RELEASE');
});

test('retry after a lost response does not write progress twice', async () => {
    const db = database(); await importProgress(1, snapshot()); await importProgress(1, snapshot());
    assert.equal(db.calls.filter(c => c.sql.includes('INSERT INTO word_mastery')).length, 1);
    assert.equal(db.calls.filter(c => c.sql.includes('INSERT INTO quiz_sessions')).length, 1);
});

test('a reused reference with changed data is rejected without changing progress', async () => {
    const db = database(); await importProgress(1, snapshot());
    const changed = snapshot(); changed.mastery['greetings:1'].correct++;
    await assert.rejects(importProgress(1, changed), ImportConflict);
    assert.equal(db.calls.at(-2).sql, 'ROLLBACK');
    assert.equal(db.calls.filter(c => c.sql.includes('INSERT INTO word_mastery')).length, 1);
});

test('a failure partway through rolls back and does not acknowledge the import', async () => {
    const db = database('INSERT INTO quiz_sessions');
    await assert.rejects(importProgress(1, snapshot()));
    assert.equal(db.receipts.size, 0);
    assert.equal(db.calls.some(c => c.sql === 'COMMIT'), false);
    assert.equal(db.calls.at(-2).sql, 'ROLLBACK');
    assert.equal(db.calls.at(-1).sql, 'RELEASE');
});

let server, base;
before(async () => {
    const express = require('express');
    require('../dist/middleware/auth').requireAuth = (req, res, next) => {
        if (req.headers['x-test-user'] !== '1') return res.status(401).json({ error: 'Not authenticated' });
        req.userId = 1; next();
    };
    const app = express(); app.use(express.json());
    app.use('/api/progress', require('../dist/routes/progress').default);
    server = app.listen(0, '127.0.0.1'); await once(server, 'listening');
    base = `http://127.0.0.1:${server.address().port}/api/progress/import`;
});
after(() => new Promise(resolve => server.close(resolve)));
const post = (body, user = '1') => fetch(base, { method: 'POST', headers: { 'content-type': 'application/json', 'x-test-user': user }, body: JSON.stringify(body) });

test('route rejects expired login, wrong account, and invalid data before accessing the database', async () => {
    const db = database();
    assert.equal((await post(snapshot(), '')).status, 401);
    assert.equal((await post({ ...snapshot(), userId: 2 })).status, 409);
    assert.equal((await post({ ...snapshot(), sessions: 'bad' })).status, 400);
    assert.equal(db.calls.length, 0);
});

test('route acknowledges the exact saved import reference', async () => {
    database(); const response = await post(snapshot());
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { ok: true, importId: snapshot().importId });
});
