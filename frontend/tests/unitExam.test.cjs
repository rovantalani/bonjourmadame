const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
function load(file, imports = {}) {
    const exports = {};
    vm.runInNewContext(ts.transpileModule(fs.readFileSync(path.join(__dirname, '../src/utils', file), 'utf8'), {
        compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    }).outputText, { exports, require: name => imports[name] });
    return exports;
}
const validator = load('answerValidator.ts');
const { scoreExam } = load('unitExam.ts', { './answerValidator': validator });
const exam = { passPercent: 80, questions: [
    { id: 'a', answers: ['bonjour'] },
    { id: 'b', answers: ['Je m’appelle Marie'] },
    { id: 'c', answers: ['une'], options: ['un', 'une'] },
    { id: 'd', answers: ['11', 'onze'] },
    { id: 'e', answers: ['Toulouse'] },
] };
test('exam passes exactly at the threshold, using existing text tolerance and alternate answers', () => {
    const score = scoreExam(exam, { a: 'Bonjour', b: "je m'appelle marie", c: 'une', d: 'onze', e: 'Paris' });
    assert.equal(score.correct, 4);
    assert.equal(score.percent, 80);
    assert.equal(score.passed, true);
    assert.equal(score.results[4].correct, false);
});
test('blanks and wrong choices fail; an empty draft cannot pass; retries use only the new answers', () => {
    assert.equal(scoreExam(exam, { a: 'bonjour', c: 'UNE' }).correct, 1);
    assert.equal(scoreExam(exam, {}).passed, false);
    assert.equal(scoreExam({ passPercent: 80, questions: [] }, {}).passed, false);
    scoreExam(exam, { a: 'bonjour', b: 'Je m’appelle Marie', c: 'une', d: '11', e: 'Toulouse' });
    assert.equal(scoreExam(exam, { a: 'wrong' }).correct, 0);
});
test('pass decision uses the real percentage rather than its rounded display value', () => {
    const questions = Array.from({ length: 500 }, (_, i) => ({ id: String(i), answers: ['yes'] }));
    const answers = Object.fromEntries(questions.slice(0, 399).map(q => [q.id, 'yes']));
    const score = scoreExam({ questions, passPercent: 80 }, answers);
    assert.equal(Math.round(score.percent), 80);
    assert.equal(score.passed, false);
});
