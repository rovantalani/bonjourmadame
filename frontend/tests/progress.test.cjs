const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

function setup() {
    const values = new Map();
    values.set('learningMode', 'learn-french');
    const calls = [];
    let resolveGet;
    const localStorage = { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), removeItem: key => values.delete(key) };
    function load(file, imports) {
        const source = fs.readFileSync(path.join(__dirname, '../src/utils', file), 'utf8').replace('import.meta.env.VITE_API_BASE', "''");
        const context = { exports: {}, localStorage, require: name => imports[name], window: { dispatchEvent() {} }, Event: class {}, CustomEvent: class {} };
        vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, context);
        return context.exports;
    }
    const settings = load('settings.ts', {});
    const axios = {
        post: async (...args) => { calls.push(args); },
        get: (...args) => { calls.push(args); return new Promise(resolve => { resolveGet = resolve; }); },
    };
    const words = load('progress.ts', { axios: { default: axios }, './settings': settings });
    const routes = load('learningRoutes.ts', {});
    const progress = load('courseProgress.ts', { './progress': words, './settings': settings, './learningRoutes': routes });
    const queue = load('wordQueue.ts', { './settings': settings });
    return { words, progress, queue, settings, calls, localStorage,
        resolveGet: data => resolveGet({ data }),
        setMode: value => { if (value === null) localStorage.removeItem('learningMode'); else settings.saveLearningMode(value); } };

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

test('reaching the end of a reading can complete it without quiz proof', () => {
    const { progress } = setup();
    const path = '/courses/a1/lectures/reading/a-day';
    progress.completeLesson(`/learn/fr${path}`);
    assert.equal(progress.getContentStatus(path), 'complete');
    assert.equal(progress.hasPassedQuiz(path), false);
});

test('a grammar lesson without exercises can complete after reaching the end', () => {
    const { progress } = setup();
    const path = '/courses/a1/lectures/grammar/articles';
    progress.completeLesson(`/learn/fr${path}`);
    assert.equal(progress.getContentStatus(path), 'complete');
});


test('visiting a lesson does not inflate course completion', () => {
    const { progress } = setup();
    const step = { id: 'a1-greeting', module: 'vocabulary', type: 'vocabulary', contentId: 'greetings', path: '/vocabulary/greetings' };
    const course = { level: 'A1', steps: [step] };
    const path = '/courses/a1/vocabulary/greetings';
    progress.setContentStatus(`/learn/fr${path}`, 'visited');
    assert.equal(progress.getCourseProgress(course).pct, 0);
    progress.completeLesson(`/learn/fr${path}`);
    assert.equal(progress.getCourseProgress(course).pct, 100);
});

test('automatic completion shares progress between scoped pages and course steps', () => {
    const { progress } = setup();
    const step = { id: 'a1-etre', module: 'verbs', type: 'verbs', contentId: 'etre', path: '/verbs/etre/table' };
    progress.completeLesson('/learn/fr/courses/a1/verbs/etre/quiz');
    assert.equal(progress.getStepStatus(step, 'A1'), 'complete');
    assert.equal(progress.hasPassedQuiz('/courses/a1/verbs/etre/table'), true);
});

test('progress saved under old language-prefixed keys remains visible', () => {
    const { progress, localStorage } = setup();
    const key = '/learn/fr/courses/a1/vocabulary/greetings';
    localStorage.setItem('contentProgress:learn-french', JSON.stringify({ [key]: 'complete' }));
    localStorage.setItem('passedQuizzes:learn-french', JSON.stringify([key]));
    assert.equal(progress.getContentStatus('/courses/a1/vocabulary/greetings'), 'complete');
    progress.setContentStatus('/courses/a1/vocabulary/greetings', 'complete');
    assert.deepEqual(JSON.parse(localStorage.getItem('contentProgress:learn-french')), { '/courses/a1/vocabulary/greetings': 'complete' });
});


test('mastery, histories, review queues, visited steps and active course stay separate', () => {
    const { words, progress, queue, setMode } = setup();
    const step = { id: 'shared-step', module: 'verbs', type: 'verbs', contentId: 'shared', path: '/verbs/shared' };
    words.recordAnswer('shared', 1, true);
    words.recordSession('shared', 'vocabulary', 1, 1);
    queue.addWrongWords('shared', [{ id: 1, english: 'English', french: 'French' }]);
    progress.markStepVisited(step.id);
    progress.setActiveCourse('A2');
    setMode('learn-english');
    assert.equal(Object.keys(words.loadMastery()).length, 0);
    assert.equal(words.loadHistory().length, 0);
    assert.equal(Object.keys(queue.loadQueue()).length, 0);
    assert.equal(progress.getStepStatus(step), 'not-started');
    assert.equal(progress.getActiveCourse(), null);
    words.recordAnswer('shared', 1, false);
    words.recordSession('shared', 'vocabulary', 0, 1);
    progress.setActiveCourse('B1');
    assert.equal(words.loadMastery()['shared:1'].known, false);
    words.resetAllProgress();
    setMode('learn-french');
    assert.equal(words.loadMastery()['shared:1'].known, true);
    assert.equal(words.loadHistory()[0].score, 1);
    assert.equal(queue.loadQueue().shared.length, 1);
    assert.equal(progress.getStepStatus(step), 'visited');
    assert.equal(progress.getActiveCourse(), 'A2');
});

test('unscoped local records are retained but never attributed to a selected language', () => {
    const { words, queue, progress, localStorage, setMode } = setup();
    const old = { wordMastery: '{"shared:1":{"known":true}}', quizHistory: '[{}]', wordQueue: '{"shared":[{}]}', activeCourse: 'C2', courseStepVisited: '["shared-step"]' };
    for (const [key, value] of Object.entries(old)) localStorage.setItem(key, value);
    for (const mode of ['learn-french', 'learn-english']) {
        setMode(mode);
        assert.equal(Object.keys(words.loadMastery()).length, 0);
        assert.equal(words.loadHistory().length, 0);
        assert.equal(Object.keys(queue.loadQueue()).length, 0);
        assert.equal(progress.getActiveCourse(), null);
        words.resetAllProgress();
    }
    for (const [key, value] of Object.entries(old)) assert.equal(localStorage.getItem(key), value);
});

test('sync uses explicit language URLs and keeps the request language during mode changes', async () => {
    const { words, calls, setMode, resolveGet } = setup();
    await words.syncAnswerToApi('shared:1', 'shared', true);
    await words.syncSessionToApi('shared', 'vocabulary', 1, 1);
    const pending = words.fetchDueWordsFromApi();
    setMode('learn-english');
    resolveGet([]);
    await pending;
    await words.syncAnswerToApi('shared:1', 'shared', false);
    await words.syncSessionToApi('shared', 'vocabulary', 0, 1);
    await words.syncAnswerToApi('shared:1', 'shared', true, 'fr');
    assert.deepEqual(calls.map(call => call[0]), [
        '/api/progress/fr/word', '/api/progress/fr/session', '/api/progress/fr/due',
        '/api/progress/en/word', '/api/progress/en/session', '/api/progress/fr/word',
    ]);
    assert(calls.every(call => call.at(-1).withCredentials === true));
});

test('new progress never silently defaults to French without a selected mode', async () => {
    const { words, setMode, calls } = setup();
    setMode(null);
    assert.throws(() => words.recordAnswer('shared', 1, true), /Select a learning language/);
    await assert.rejects(words.syncAnswerToApi('shared:1', 'shared', true), /Select a learning language/);
    assert.equal(calls.length, 0);
});
