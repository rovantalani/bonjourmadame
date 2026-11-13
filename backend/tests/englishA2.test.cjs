const { test } = require('node:test');
const assert = require('node:assert/strict');
const { learningContent } = require('../dist/services/learningContent');
const { englishWritingLessons } = require('../dist/content/en/writing');
const { speakingLessons } = require('../dist/content/en/speaking');
const c = learningContent.en;
const course = c.courses.find(x => x.level === 'A2');

test('English A2 has seven teaching units, paired reading quizzes and complete practice exams', () => {
    assert.equal(course.units.length, 8);
    assert.equal(course.steps.length, 114);
    assert.equal(course.steps.at(-1).path, '/exams/final');
    assert.equal(course.steps.filter(x => x.type === 'grammar').length, 21);
    const readings = course.steps.filter(x => x.type === 'reading');
    assert.equal(readings.length, 28);
    for (const step of readings) {
        const next = course.steps[course.steps.indexOf(step) + 1];
        assert.equal(next.type, 'vocabulary');
        assert.equal(next.unit, step.unit);
        assert.deepEqual(c.vocabulary[next.contentId], c.vocabulary[step.contentId]);
        const passage = c.reading.find(x => x.moduleId === step.contentId).paragraphs.join('\n').toLowerCase();
        for (const word of c.vocabulary[next.contentId]) assert(passage.includes(word.english.toLowerCase()));
    }
    const exams = c.exams.filter(x => x.level === 'A2');
    assert.equal(exams.length, 8);
    assert.equal(exams.reduce((sum, x) => sum + x.questions.length, 0), 119);
    for (const exam of exams) {
        assert.equal(exam.isDemo, false);
        assert.equal(exam.questions.length, exam.unit === 'final' ? 35 : 12);
    }
});

test('English A2 vocabulary quizzes add 317 distinct entries beyond the integrated A1 course', () => {
    const normalize = value => value.toLowerCase().trim().replaceAll('’', "'").replace(/^(a|an|the|to) /, '');
    const wordsFor = level => c.modules.filter(x => x.level === level).flatMap(x => c.vocabulary[x.id].map(w => normalize(w.english)));
    const a1 = new Set(wordsFor('A1'));
    const a2 = wordsFor('A2');
    assert.equal(a2.length, 317);
    assert.equal(new Set(a2).size, a2.length);
    assert.deepEqual(a2.filter(word => a1.has(word)), []);
});

test('English A2 verb routes resolve six-person paradigms without clobbering other levels', () => {
    const steps = course.steps.filter(x => x.type === 'verbs');
    assert.equal(steps.length, 7);
    for (const step of steps) {
        assert.equal(step.path, `/verbs/${step.contentId}/learn`);
        const verb = c.verbById[step.contentId];
        assert.equal(verb.level, 'A2');
        assert.equal(verb.unit, step.unit);
        assert.equal(verb.rows.length, 6);
        assert.equal(c.verbGroupMap[step.contentId], 'a2');
    }
    for (const id of ['a1en-to-be', 'a1en-to-have', 'a1en-to-do', 'a1en-to-go', 'a2en-to-come']) assert(c.helpers[id]?.rows.length === 6);
});

test('English A2 writing, speaking and listening use the existing activity contracts', () => {
    const writing = englishWritingLessons.filter(x => x.level === 'A2');
    assert.equal(writing.length, 5);
    for (const lesson of writing) {
        assert.equal(lesson.targetLanguage, 'en');
        assert(lesson.prompt && lesson.learningObjectives.length);
        assert(lesson.suggestedWords.min < lesson.suggestedWords.max);
    }
    assert(writing.find(x => x.unit === 4).sources[0].text.includes('sleeping'));
    const speaking = speakingLessons.filter(x => x.level === 'A2');
    assert.equal(speaking.filter(x => !x.listeningQuestions).length, 5);
    assert(speaking.find(x => x.id === 'a2en-speaking-03').description.includes('Oak House'));
    const listening = speaking.filter(x => x.listeningQuestions);
    assert.deepEqual(listening.map(x => x.unit), [1,2,3,4,5,6,7]);
    for (const lesson of listening) {
        assert(lesson.phrases[0].text && lesson.description);
        assert.equal(lesson.listeningQuestions.length, 2);
        assert(lesson.listeningQuestions.every(x => x.answers.length && x.prompt));
    }
    assert.equal(englishWritingLessons.filter(x => x.level === 'A1').length, 5);
    assert.equal(speakingLessons.filter(x => x.level === 'A1').length, 12);
});
