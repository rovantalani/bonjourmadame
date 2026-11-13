const { test } = require('node:test');
const assert = require('node:assert/strict');
const { learningContent } = require('../dist/services/learningContent');
const { englishWritingLessons } = require('../dist/content/en/writing');
const { speakingLessons } = require('../dist/content/en/speaking');
const c = learningContent.en;
const course = c.courses.find(x => x.level === 'B1');

test('English B1 has contextual readings followed by vocabulary and valid practice assessments', () => {
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
    const exams = c.exams.filter(x => x.level === 'B1');
    assert.equal(exams.length, 8);
    assert.equal(exams.reduce((sum, x) => sum + x.questions.length, 0), 119);
    const positions = [0, 0, 0];
    for (const exam of exams) {
        assert.equal(exam.isDemo, false);
        assert.equal(exam.questions.length, exam.unit === 'final' ? 35 : 12);
        for (const q of exam.questions) {
            if (q.options) {
                assert.equal(new Set(q.options).size, q.options.length);
                positions[q.options.indexOf(q.answers[0])]++;
            }
        }
        if (exam.unit !== 'final') assert(exam.questions.slice(0, 4).every(q => q.options?.length === 3));
    }
    assert(Math.max(...positions) - Math.min(...positions) <= 1);
    const coordination = exams[1].questions[3];
    assert(coordination.answers[0].includes('without coordinating'));
    const final = exams.find(x => x.unit === 'final');
    assert(final.questions[31].answers[0].includes('presentation'));
});

test('English B1 adds 337 distinct vocabulary entries beyond integrated A1 and A2', () => {
    const normalize = value => value.toLowerCase().trim().replaceAll('’', "'").replace(/^(a|an|the|to) /, '');
    const wordsFor = level => c.modules.filter(x => x.level === level).flatMap(x => c.vocabulary[x.id].map(w => normalize(w.english)));
    const previous = new Set([...wordsFor('A1'), ...wordsFor('A2')]);
    const words = wordsFor('B1');
    assert.equal(words.length, 337);
    assert.equal(new Set(words).size, words.length);
    assert.deepEqual(words.filter(word => previous.has(word)), []);
});

test('English B1 verb routes resolve complete paradigms and teach irregular participles', () => {
    const steps = course.steps.filter(x => x.type === 'verbs');
    assert.equal(steps.length, 7);
    for (const step of steps) {
        assert.equal(step.path, `/verbs/${step.contentId}/learn`);
        const verb = c.verbById[step.contentId];
        assert.equal(verb.level, 'B1');
        assert.equal(verb.unit, step.unit);
        assert.equal(verb.rows.length, 6);
        assert.equal(c.verbGroupMap[step.contentId], 'b1');
        assert(c.grammar.some(g => g.level === 'B1' && g.unit === step.unit && g.sections.some(section => section.title.includes('participe passé'))));
    }
});

test('English B1 supports connected speaking, consistent writing targets and all listening sets', () => {
    const writing = englishWritingLessons.filter(x => x.level === 'B1');
    assert.equal(writing.length, 5);
    for (const lesson of writing) {
        assert.equal(lesson.targetLanguage, 'en');
        assert(lesson.learningObjectives.length && lesson.sources[0].text);
        const match = lesson.prompt.match(/(\d+)–(\d+) mots/);
        assert.equal(lesson.suggestedWords.min, Number(match[1]));
        assert.equal(lesson.suggestedWords.max, Number(match[2]));
    }
    const speaking = speakingLessons.filter(x => x.level === 'B1');
    const tasks = speaking.filter(x => !x.listeningQuestions);
    assert.equal(tasks.length, 5);
    assert(tasks.every(x => x.taskRecordingSeconds >= 120 && x.phrases.length >= 3));
    const listening = speaking.filter(x => x.listeningQuestions);
    assert.deepEqual(listening.map(x => x.unit), [1,2,3,4,5,6,7]);
    for (const lesson of listening) {
        assert(lesson.phrases[0].text && lesson.description);
        assert.equal(lesson.listeningQuestions.length, 2);
        assert(lesson.listeningQuestions.every(x => x.answers.length && x.prompt));
    }
    const questions = c.grammar.find(x => x.id === 'en-b1-indirect-questions').exercises;
    assert.equal(questions[1].answer, 'if / whether');
});
