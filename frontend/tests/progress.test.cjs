const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

function setup() {
    const values = new Map();
    let mode = 'learn-french';
    const localStorage = { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), removeItem: key => values.delete(key) };
    function load(file, imports) {
        const source = fs.readFileSync(path.join(__dirname, '../src/utils', file), 'utf8').replace('import.meta.env.VITE_API_BASE', "''");
        const context = { exports: {}, localStorage, require: name => imports[name] };
        vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, context);
        return context.exports;
    }
    const words = load('progress.ts', { axios: {} });
    const progress = load('courseProgress.ts', { './progress': words, './settings': { loadLearningMode: () => mode } });
    return { words, progress, localStorage, setMode: value => { mode = value; } };
}

test('a word is known after one correct answer and unknown after a mistake', () => {
    const { words } = setup();
    assert.equal(words.recordAnswer('greetings', 1, true).known, true);
    assert.equal(words.recordAnswer('greetings', 1, false).known, false);
    assert.equal(words.recordAnswer('greetings', 1, true).known, true);
    assert.equal(words.loadMastery()['greetings:1'].correct, 2);
});

test('quiz modules cannot be completed without a cleared quiz; old marks are not proof', () => {
    const { progress, localStorage } = setup();
    const path = '/courses/a1/vocabulary/greetings';
    localStorage.setItem('contentProgress:learn-french', JSON.stringify({ [path]: 'complete' }));
    assert.equal(progress.getContentStatus(path), 'visited');
    progress.setContentStatus(path, 'complete');
    assert.equal(progress.getContentStatus(path), 'visited');
    progress.recordQuizPass(path);
    progress.setContentStatus(path, 'complete');
    assert.equal(progress.getContentStatus(path), 'complete');
    progress.setContentStatus(path, 'visited');
    assert.equal(progress.getContentStatus(path), 'visited');
});

test('quiz proof follows a verb between table, lesson and quiz, but not between courses or languages', () => {
    const { progress, setMode } = setup();
    progress.recordQuizPass('/courses/a1/verbs/etre/quiz');
    assert.equal(progress.hasPassedQuiz('/courses/a1/verbs/etre/table'), true);
    assert.equal(progress.hasPassedQuiz('/courses/a1/verbs/etre/learn'), true);
    assert.equal(progress.hasPassedQuiz('/courses/a2/verbs/etre/quiz'), false);
    setMode('learn-english');
    assert.equal(progress.hasPassedQuiz('/courses/a1/verbs/etre/quiz'), false);
});

test('reading without a quiz can still be marked read', () => {
    const { progress } = setup();
    const path = '/courses/a1/lectures/reading/a-day';
    progress.setContentStatus(path, 'complete');
    assert.equal(progress.getContentStatus(path), 'complete');
});


test('visiting a lesson does not inflate course completion', () => {
    const { progress } = setup();
    const step = { id: 'a1-greeting', module: 'vocabulary', type: 'vocabulary', contentId: 'greetings', path: '/vocabulary/greetings' };
    const course = { level: 'A1', steps: [step] };
    const path = '/courses/a1/vocabulary/greetings';
    progress.setContentStatus(path, 'visited');
    assert.equal(progress.getCourseProgress(course).pct, 0);
    progress.recordQuizPass(path);
    progress.setContentStatus(path, 'complete');
    assert.equal(progress.getCourseProgress(course).pct, 100);
});
