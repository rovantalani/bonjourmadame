const { test } = require('node:test');
const assert = require('node:assert/strict');
const { learningContent } = require('../dist/services/learningContent');
const { englishWritingLessons } = require('../dist/content/en/writing');
const { speakingLessons } = require('../dist/content/en/speaking');
const c = learningContent.en;
const course = c.courses.find(x => x.level === 'A1');
test('English A1 readings immediately precede their matching vocabulary quiz', () => {
    const readings = course.steps.filter(x => x.type === 'reading');
    assert.equal(readings.length, 28);
    for (const step of readings) {
        const next = course.steps[course.steps.indexOf(step) + 1];
        assert.equal(next.type, 'vocabulary');
        assert.equal(next.unit, step.unit);
        assert.deepEqual(c.vocabulary[next.contentId], c.vocabulary[step.contentId]);
    }
});
test('English A1 verb roadmap uses real conjugation endpoints with complete subject rows', () => {
    for (const step of course.steps.filter(x => x.type === 'verbs')) {
        assert.equal(step.path, `/verbs/${step.contentId}/learn`);
        const verb = c.verbById[step.contentId];
        assert.equal(verb.level, 'A1');
        assert.equal(verb.unit, step.unit);
        assert.equal(verb.rows.length, 6);
        assert(verb.rows.some(row => row.sujet === 'they'));
    }
    for (const id of ['a1en-to-be', 'a1en-to-have']) assert.equal(c.helpers[id].rows.length, 6);
});
test('English A1 productive tasks and listening supplements are available through typed activity catalogs', () => {
    assert.equal(englishWritingLessons.length, 5);
    for (const lesson of englishWritingLessons) {
        assert.equal(lesson.targetLanguage, 'en');
        assert(lesson.prompt && lesson.learningObjectives.length);
        assert(lesson.suggestedWords.min < lesson.suggestedWords.max);
    }
    assert.equal(speakingLessons.filter(x => !x.listeningQuestions).length, 5);
    const listening = speakingLessons.filter(x => x.listeningQuestions);
    assert.deepEqual(listening.map(x => x.unit), [1,2,3,4,5,6,7]);
    for (const lesson of listening) {
        assert(lesson.phrases[0].text);
        assert.equal(lesson.listeningQuestions.length, 2);
        assert(lesson.listeningQuestions.every(x => x.answers.length && x.prompt));
    }
    assert.equal(course.steps[0].contentId, 'a1en-alphabet-numbers');
    assert(c.grammar.find(x => x.id === 'a1en-alphabet-numbers').sections[0].explanation.includes('/eɪ/'));
});
