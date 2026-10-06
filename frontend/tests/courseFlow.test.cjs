const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
function load(file, imports = {}) {
    const exports = {};
    const source = fs.readFileSync(path.join(__dirname, '../src/utils', file), 'utf8');
    vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText,
        { exports, require: name => imports[name] });
    return exports;
}
const routes = load('learningRoutes.ts');
const { getCoursePosition } = load('courseFlow.ts', { './learningRoutes': routes });
const course = { level: 'A1', units: [{ number: 1 }, { number: 2 }], steps: [
    { id: 'reading', module: 'lectures', unit: 1, path: '/lectures/reading/story' },
    { id: 'vocab', module: 'vocabulary', unit: 1, path: '/vocabulary/story' },
    { id: 'draft', module: 'exams', unit: 1, path: '/exams/1', available: false },
    { id: 'verb', module: 'verbs', unit: 2, path: '/verbs/etre/table' },
    { id: 'phrases', module: 'lectures', unit: 2, path: '/lectures/phrases/greetings' },
    { id: 'final', module: 'exams', unit: 3, path: '/exams/final', available: true },
] };
test('course navigation follows the authored sequence, crosses units and skips draft exams', () => {
    const reading = getCoursePosition([course], '/learn/fr/courses/a1/lectures/reading/story');
    assert.equal(reading.previous, null);
    assert.equal(reading.next.id, 'vocab');
    const vocab = getCoursePosition([course], '/courses/a1/vocabulary/story');
    assert.equal(vocab.unitPosition, 2);
    assert.equal(vocab.unitTotal, 2);
    assert.equal(vocab.next.id, 'verb');
    assert.equal(vocab.next.unit, 2);
    const final = getCoursePosition([course], '/courses/a1/exams/final');
    assert.equal(final.previous.id, 'phrases');
    assert.equal(final.next, null);
});
test('lesson, table and quiz views identify the same module without matching category pages', () => {
    for (const view of ['table', 'learn', 'quiz']) {
        assert.equal(getCoursePosition([course], `/learn/en/courses/a1/verbs/etre/${view}`).step.id, 'verb');
    }
    assert.equal(getCoursePosition([course], '/courses/a1/lectures/phrases/greetings/quiz').step.id, 'phrases');
    for (const url of ['/courses/a1', '/courses/a1/verbs', '/courses/a1/lectures', '/review-queue', '/courses/a1/exams/1', '/courses/a2/vocabulary/story']) {
        assert.equal(getCoursePosition([course], url), null, url);
    }
});
