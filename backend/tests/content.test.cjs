const { before, after, test } = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const express = require('express');

let server;
let base;
before(async () => {
    const app = express();
    app.use('/api/vocabulary', require('../dist/routes/vocabulary').default);
    app.use('/api/verbs', require('../dist/routes/verbs').default);
    app.use('/api/lectures', require('../dist/routes/lectures').default);
    server = app.listen(0, '127.0.0.1');
    await once(server, 'listening');
    base = `http://127.0.0.1:${server.address().port}/api`;
});
after(() => new Promise(resolve => server ? server.close(resolve) : resolve()));

async function get(url) {
    const response = await fetch(base + url);
    assert.equal(response.status, 200, url);
    return response.json();
}

test('vocabulary module listing remains distinct from individual word routes', async () => {
    const englishLabels = await get('/vocabulary/modules');
    const frenchLabels = await get('/vocabulary/modules?lang=fr');
    assert.equal(englishLabels.length, frenchLabels.length);
    const module = englishLabels.find(m => m.id === 'greetings-basics');
    assert(module);
    assert.notEqual(module.title, frenchLabels.find(m => m.id === module.id).title);
    const words = await get(`/vocabulary/${module.id}`);
    assert.equal(words.length, module.wordCount);
    assert(words.every(word => word.french && word.english));
});

test('verb routes load the appropriate language and preserve review progression', async () => {
    for (const [query, verbId] of [['', 'etre'], ['?lang=fr', 'to-be']]) {
        const helper = await get(`/verbs/helpers/${verbId}${query}`);
        assert(helper.rows.length > 0);
        const course = await get(`/verbs/courses/a2${query}`);
        assert(course.newVerbs.length > 0);
        assert(course.reviewVerbs.some(group => group.groupId === 'a1'));
        const group = await get(`/verbs/groups/a1${query}`);
        const conjugation = await get(`/verbs/conjugation/${group.verbs[0].id}${query}`);
        assert.equal(conjugation.groupId, 'a1');
        assert(conjugation.rows.length > 0);
    }
});

test('lectures serve grammar, bilingual phrases and reading in both languages', async () => {
    for (const [suffix, query] of [['fr', ''], ['en', '?lang=fr']]) {
        const grammar = require(`../dist/data/lectures/grammar/grammar_${suffix}`);
        const lessons = suffix === 'fr' ? grammar.grammarLessons : grammar.grammarLessonsEN;
        const lesson = await get(`/lectures/grammar/${lessons[0].id}${query}`);
        assert.deepEqual(lesson, lessons[0]);
        const phrases = await get(`/lectures/phrases/introducing-yourself${query}`);
        assert(phrases.phrases.every(phrase => phrase.french && phrase.english));
        const reading = require(`../dist/data/lectures/reading/reading_${suffix}`);
        const passages = suffix === 'fr' ? reading.readingPassages : reading.readingPassagesEN;
        const passage = await get(`/lectures/reading/${passages[0].moduleId}${query}`);
        assert.deepEqual(passage.paragraphs, passages[0].paragraphs);
        assert(passage.vocabulary.length > 0);
    }
});

test('unknown content IDs return 404 under each module', async () => {
    for (const route of ['/vocabulary/missing', '/verbs/helpers/missing', '/verbs/groups/missing', '/verbs/conjugation/missing', '/verbs/courses/missing', '/lectures/grammar/missing', '/lectures/phrases/missing', '/lectures/reading/missing']) {
        assert.equal((await fetch(base + route)).status, 404, route);
    }
});

test('course steps put lecture subtypes under Lectures and keep matching browser paths', () => {
    const file = path.resolve(__dirname, '../../frontend/src/data/courses.ts');
    const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
        compilerOptions: { module: ts.ModuleKind.CommonJS },
    }).outputText;
    const context = { exports: {} };
    vm.runInNewContext(code, context);
    for (const course of [...context.exports.COURSES, ...context.exports.COURSES_EN]) {
        const ids = new Set();
        for (const step of course.steps) {
            assert(!ids.has(step.id), `Duplicate step: ${step.id}`);
            ids.add(step.id);
            assert(['vocabulary', 'verbs', 'lectures'].includes(step.module));
            assert(step.path.startsWith(`/${step.module}/`), step.path);
            if (step.module === 'lectures') {
                assert(['grammar', 'phrases', 'reading'].includes(step.type));
                assert(step.path.startsWith(`/lectures/${step.type}/`), step.path);
            } else {
                assert.equal(step.type, step.module);
            }
        }
    }
});
