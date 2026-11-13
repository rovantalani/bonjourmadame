const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const express = require('express');
const router = require('../dist/routes/speaking').default;
let server, base;
before(async () => {
    const app = express(); app.use('/api/speaking', router);
    server = await new Promise(resolve => { const s = app.listen(0, '127.0.0.1', () => resolve(s)); });
    base = `http://127.0.0.1:${server.address().port}/api/speaking`;
});
after(() => new Promise(resolve => server.close(resolve)));
test('guests can load French and English speaking exercises without scores', async () => {
    for (const language of ['fr', 'en']) {
        const response = await fetch(`${base}/${language}/lessons`);
        assert.equal(response.status, 200);
        const lessons = await response.json();
        assert.equal(lessons.filter(lesson => lesson.level === 'A1').length, language === 'fr' ? 2 : 12);
        assert.equal(lessons.filter(lesson => lesson.level === 'A2').length, language === 'fr' ? 7 : 12);
        for (const lesson of lessons) {
            assert(lesson.phrases.length >= (language === 'fr' ? 4 : 1));
            assert.equal(lesson.rating, undefined);
            assert(lesson.phrases.every(phrase => phrase.text && phrase.translation));
        }
    }
    assert.equal((await fetch(`${base}/de/lessons`)).status, 400);
});
test('assessment explicitly unavailable, never returns fabricated feedback', async () => {
    const response = await fetch(`${base}/fr/lessons/first-hello/review`, { method: 'POST' });
    assert.equal(response.status, 503);
    assert.deepEqual(await response.json(), { code: 'assessment_unavailable' });
    assert.equal((await fetch(`${base}/fr/lessons/missing/review`, { method: 'POST' })).status, 404);
});
