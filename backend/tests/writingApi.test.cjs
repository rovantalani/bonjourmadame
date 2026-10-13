const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const { createWritingRouter } = require('../dist/routes/writing');
const { WritingError } = require('../dist/services/writing/evaluate');
let server, base;
let calls, cached, error, configured;
const savedSecret = process.env.JWT_SECRET;
const review = { lessonId: 'fr-writing-preview', originalText: 'Bonjour !', feedbackLanguage: 'en', rating: 5, corrections: [], unplacedCorrections: [], overallNotes: ['Clear.'] };
before(async () => {
    process.env.JWT_SECRET = 'writing-test-secret';
    const app = express(); app.use(express.json()); app.use(cookieParser());
    app.use('/api/writing', createWritingRouter({
        writingConfigured: () => configured,
        reserveWriting: async (...args) => { calls.push(['reserve', ...args]); if (error === 'quota') throw new WritingError(429, 'usage_limit'); return cached ? { cached: review } : { id: "request-1" }; },
        evaluateWriting: async (lesson, text, language) => { calls.push(['evaluate', lesson.id, text, language]); if (error === 'provider') throw new WritingError(502, 'invalid_feedback'); return { review, model: 'test', inputTokens: 10, outputTokens: 10 }; },
        finishWriting: async () => { calls.push(['finish']); }, failWriting: async () => { calls.push(['fail']); },
    }));
    server = await new Promise(resolve => { const s = app.listen(0, '127.0.0.1', () => resolve(s)); });
    base = `http://127.0.0.1:${server.address().port}/api/writing`;
});
after(async () => { await new Promise(resolve => server.close(resolve)); if(savedSecret === undefined) delete process.env.JWT_SECRET; else process.env.JWT_SECRET = savedSecret; });
function reset() { calls=[]; cached=false; error=''; configured=true; }
function request(body, language='fr', id='fr-writing-preview', authenticated=true) {
    return fetch(`${base}/${language}/lessons/${id}/review`, { method:'POST', headers: { 'Content-Type':'application/json', ...(authenticated ? { Cookie: `token=${jwt.sign({ sub: 7 }, process.env.JWT_SECRET)}` } : {}) }, body:JSON.stringify(body) });
}
test('catalog is public, language scoped and contains no prepared review', async () => {
    for(const language of ['fr','en']) {
        const response=await fetch(`${base}/${language}/lessons`); const lessons=await response.json();
        assert.equal(response.status,200); assert.equal(lessons[0].targetLanguage, language); assert(!('review' in lessons[0]));
    }
    assert.equal((await fetch(`${base}/de/lessons`)).status,400);
});
test('valid text and selected-language lesson are required before spending', async () => {
    reset();
    assert.equal((await request({ text:'Bonjour',feedbackLanguage:'en' },'fr','en-writing-preview')).status,404);
    for(const body of [{text:' ',feedbackLanguage:'en'}, {text:'x'.repeat(6001),feedbackLanguage:'en'}, {text:'Bonjour',feedbackLanguage:'de'}, {text:'Bonjour',feedbackLanguage:'en',prompt:'injected'}]) assert.equal((await request(body)).status,400);
    assert.equal(calls.length,0);
});
test('valid submission reserves, evaluates, records and returns the validated review', async () => {
    reset(); const response=await request({text:'Bonjour !',feedbackLanguage:'en'});
    assert.equal(response.status,200); assert.equal(response.headers.get('cache-control'),'no-store');
    assert.deepEqual(await response.json(),review); assert.deepEqual(calls.map(c=>c[0]),['reserve','evaluate','finish']);
    assert.equal(calls[0][1],'127.0.0.1'); assert.equal(calls[0][5],'en');
});
test('duplicate completed request reuses feedback without another model call', async () => {
    reset(); cached=true; assert.equal((await request({text:'Bonjour !',feedbackLanguage:'en'})).status,200);
    assert.deepEqual(calls.map(c=>c[0]),['reserve']);
});
test('missing key and quota reject before evaluation; provider failure records failed request', async () => {
    reset(); configured=false;
    assert.equal((await request({text:'Bonjour',feedbackLanguage:'en'})).status,503); assert.equal(calls.length,0);
    reset(); error='quota'; assert.equal((await request({text:'Bonjour',feedbackLanguage:'en'})).status,429); assert.deepEqual(calls.map(c=>c[0]),['reserve']);
    reset(); error='provider'; assert.equal((await request({text:'Bonjour',feedbackLanguage:'en'})).status,502); assert.deepEqual(calls.map(c=>c[0]),['reserve','evaluate','fail']);
});

test('guest review requires no authentication cookie, JWT secret or database', async () => {
    reset(); const previous = process.env.JWT_SECRET; delete process.env.JWT_SECRET;
    try {
        const response = await request({text:'Bonjour !',feedbackLanguage:'en'},'fr','fr-writing-preview',false);
        assert.equal(response.status,200); assert.deepEqual(await response.json(),review);
        assert.deepEqual(calls.map(c=>c[0]),['reserve','evaluate','finish']);
    } finally { process.env.JWT_SECRET = previous; }
});
