const { before, after, test } = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const express = require('express');
const { pool } = require('../dist/db/client');
const auth = require('../dist/middleware/auth');
let server, base;
const saved = new Map();
const sessions = [];
auth.requireAuth = (req, _res, next) => { req.userId = Number(req.headers['x-test-user'] || 1); next(); };
pool.query = async (sql, values) => {
    if (sql.includes('SELECT srs_box')) {
        assert.match(sql, /target_language = \$3/);
        const row = saved.get(`${values[0]}:${values[2]}:${values[1]}`);
        return { rows: row ? [row] : [] };
    }
    if (sql.includes('INSERT INTO word_mastery')) {
        assert.match(sql, /ON CONFLICT \(user_id, target_language, word_id\)/);
        const [user_id, word_id, module_id, is_known, correct, wrong, srs_box, , target_language] = values;
        const key = `${user_id}:${target_language}:${word_id}`;
        const old = saved.get(key);
        saved.set(key, { user_id, target_language, word_id, module_id, is_known,
            correct_count: (old?.correct_count ?? 0) + correct, wrong_count: (old?.wrong_count ?? 0) + wrong,
            last_seen_at: '2026-09-24', srs_box });
        return { rows: [] };
    }
    if (sql.includes('INSERT INTO quiz_sessions')) {
        assert.match(sql, /total, target_language/);
        const [user_id, module_id, session_type, score, total, target_language] = values;
        sessions.push({ user_id, module_id, session_type, score, total, target_language });
        return { rows: [] };
    }
    assert.match(sql, /user_id = \$1 AND target_language = \$2/);
    const rows = sql.includes('FROM word_mastery') ? [...saved.values()] : sessions;
    return { rows: rows.filter(row => row.user_id === values[0] && row.target_language === values[1]) };
};
before(async () => {
    const app = express(); app.use(express.json());
    app.use('/api/progress', require('../dist/routes/progress').default);
    server = app.listen(0, '127.0.0.1'); await once(server, 'listening');
    base = `http://127.0.0.1:${server.address().port}/api/progress`;
});
after(() => new Promise(resolve => server.close(resolve)));
async function request(url, body, status = 200, user = 1) {
    const response = await fetch(base + url, {
        method: body ? 'POST' : 'GET', headers: { 'content-type': 'application/json', 'x-test-user': String(user) },
        ...(body ? { body: JSON.stringify(body) } : {}),
    });
    assert.equal(response.status, status, url);
    return response.json();
}
const answer = correct => ({ word_id: 'greetings-basics:1', module_id: 'greetings-basics', correct });

test('answers, histories and due words stay separate for identical FR/EN IDs and different accounts', async () => {
    for (const correct of [true, false, true]) {
        await request('/fr/word', answer(correct));
        assert.equal((await request('/fr')).mastery['greetings-basics:1'].known, correct);
    }
    await request('/en/word', answer(false));
    for (const [lang, score] of [['fr', 8], ['en', 2]]) {
        await request(`/${lang}/session`, { module_id: 'greetings-basics', session_type: 'vocabulary', score, total: 10 });
        assert.equal((await request(`/${lang}`)).sessions[0].score, score);
    }
    assert.equal((await request('/fr')).mastery['greetings-basics:1'].correct, 2);
    assert.equal((await request('/en')).mastery['greetings-basics:1'].correct, 0);
    assert.equal((await request('/fr/due'))[0].known, true);
    assert.equal((await request('/en/due'))[0].known, false);
    assert.deepEqual(await request('/en', null, 200, 2), { mastery: {}, sessions: [] });
    assert.deepEqual(await request('/en/due', null, 200, 2), []);
});

test('missing language and content outside the selected language cannot update progress', async () => {
    const before = saved.size;
    for (const suffix of ['', '/de', '/word', '/legacy']) await request(suffix, null, 400);
    await request('/fr/word', { ...answer(true), correct: 'true' }, 400);
    await request('/fr/word', { ...answer(true), word_id: 'other:1' }, 404);
    await request('/fr/word', { word_id: 'a1en-first-day:1', module_id: 'a1en-first-day', correct: true }, 404);
    await request('/en/session', { module_id: 'etre', session_type: 'verb', score: 1, total: 1 }, 404);
    assert.equal(saved.size, before);
});
