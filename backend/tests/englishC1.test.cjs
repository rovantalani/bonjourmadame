const { test } = require('node:test');
const assert = require('node:assert/strict');
const { learningContent } = require('../dist/services/learningContent');
const { englishWritingLessons } = require('../dist/content/en/writing');
const { speakingLessons } = require('../dist/content/en/speaking');
const c = learningContent.en;
const course = c.courses.find(x => x.level === 'C1');

test('English C1 has paired advanced readings, grammar anchors and complete unit/final assessments', () => {
    assert.equal(course.units.length, 8);
    assert.equal(course.steps.length, 114);
    assert.equal(course.steps.at(-1).path, '/exams/final');
    const readings = course.steps.filter(x => x.type === 'reading');
    assert.equal(readings.length, 28);
    for (const step of readings) {
        const next = course.steps[course.steps.indexOf(step) + 1];
        assert.equal(next.type, 'vocabulary');
        assert.equal(next.unit, step.unit);
        assert.deepEqual(c.vocabulary[next.contentId], c.vocabulary[step.contentId]);
        const passage = c.reading.find(x => x.moduleId === step.contentId).paragraphs.join('\n');
        assert(passage.split(/\s+/).length >= 240);
        for (const word of c.vocabulary[next.contentId]) assert(passage.toLowerCase().includes(word.english.toLowerCase()));
    }
    const grammar = course.steps.filter(x => x.type === 'grammar');
    assert.equal(grammar.length, 21);
    for (const step of grammar) {
        const index = course.steps.indexOf(step);
        assert.equal(course.steps[index - 1].type, 'vocabulary');
        assert.equal(course.steps[index - 2].type, 'reading');
    }
    const exams = c.exams.filter(x => x.level === 'C1');
    assert.equal(exams.length, 8);
    assert.equal(exams.reduce((sum, x) => sum + x.questions.length, 0), 119);
    const positions = [0, 0, 0];
    for (const exam of exams) {
        assert.equal(exam.isDemo, false);
        assert.equal(exam.questions.length, exam.unit === 'final' ? 35 : 12);
        for (const q of exam.questions) if (q.options) {
            assert.equal(new Set(q.options).size, 3);
            assert(q.answers.every(a => q.options.includes(a)));
            positions[q.options.indexOf(q.answers[0])]++;
        }
    }
    assert(Math.max(...positions) - Math.min(...positions) <= 1);
});

test('English C1 vocabulary introduces 318 entries distinct from integrated A1/A2/B1', () => {
    const normalize = value => value.toLowerCase().trim().replaceAll('’', "'").replace(/^(a|an|the|to) /, '');
    const wordsFor = levels => c.modules.filter(x => levels.includes(x.level)).flatMap(x => c.vocabulary[x.id].map(w => normalize(w.english)));
    const previous = new Set(wordsFor(['A1', 'A2', 'B1']));
    const words = wordsFor(['C1']);
    assert.equal(words.length, 318);
    assert.equal(new Set(words).size, words.length);
    assert.deepEqual(words.filter(word => previous.has(word)), []);
});

test('English C1 verb routes and editorial corrections match the intended learning targets', () => {
    const steps = course.steps.filter(x => x.type === 'verbs');
    assert.equal(steps.length, 7);
    for (const step of steps) {
        assert.equal(step.path, `/verbs/${step.contentId}/learn`);
        const verb = c.verbById[step.contentId];
        assert.equal(verb.level, 'C1');
        assert.equal(verb.unit, step.unit);
        assert.equal(verb.rows.length, 6);
        assert.equal(c.verbGroupMap[step.contentId], 'c1');
    }
    const offset = c.exams.find(x => x.level === 'C1' && x.unit === 5).questions[8];
    assert(offset.prompt.includes('The new planting scheme'));
    assert.equal(offset.answers[0], 'offsets');
    const final = c.exams.find(x => x.level === 'C1' && x.unit === 'final');
    assert(final.questions[21].answers.includes('despite'));
    assert(final.questions[11].answers.includes('having altered'));
    assert(final.questions[33].answers.includes('should be given'));
    const determiners = c.grammar.find(x => x.id === 'en-c1-grammar-17');
    assert(determiners.exercises[2].sentence.includes('Of the two books'));
});

test('English C1 tasks include source material, consistent writing targets and five-minute speaking capacity', () => {
    const writing = englishWritingLessons.filter(x => x.level === 'C1');
    assert.equal(writing.length, 5);
    for (const lesson of writing) {
        assert.equal(lesson.targetLanguage, 'en');
        assert(lesson.learningObjectives.length && lesson.sources.every(x => x.title && x.text));
        assert.equal(lesson.suggestedWords.min, 220);
        assert.equal(lesson.suggestedWords.max, 260);
    }
    const study = writing.find(x => x.unit === 7).sources[0].text;
    assert(study.includes('invented for language practice'));
    assert(study.includes('280 completed') && study.includes('255 completed'));
    assert(study.includes('not randomly allocated'));
    const speaking = speakingLessons.filter(x => x.level === 'C1' && !x.listeningQuestions);
    assert.equal(speaking.length, 5);
    assert(speaking.every(x => x.taskRecordingSeconds >= 300 && x.sources.length && x.phrases.length === 3));
    assert.equal(speaking.find(x => x.unit === 7).sources[0].text, study);
});

test('English C1 listening retains scripts, all multiple-choice options and contrastive pronunciation prompts', () => {
    const listening = speakingLessons.filter(x => x.level === 'C1' && x.listeningQuestions);
    assert.deepEqual(listening.map(x => x.unit), [1,2,3,4,5,6,7]);
    for (const lesson of listening) {
        assert(lesson.phrases[0].text && lesson.description);
        assert.equal(lesson.listeningQuestions.length, 3);
        assert.equal(lesson.pronunciationPractice.length, 3);
        for (const q of lesson.listeningQuestions) {
            assert.equal(q.options.length, 3);
            assert.equal(new Set(q.options).size, 3);
            assert(q.answers.every(a => q.options.includes(a)));
        }
    }
});
