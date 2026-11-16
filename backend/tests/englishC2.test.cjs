const { test } = require('node:test');
const assert = require('node:assert/strict');
const { learningContent } = require('../dist/services/learningContent');
const { englishWritingLessons } = require('../dist/content/en/writing');
const { speakingLessons } = require('../dist/content/en/speaking');
const c = learningContent.en;
const course = c.courses.find(x => x.level === 'C2');

test('English C2 pairs extended readings with local vocabulary and complete practice exams', () => {
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
        assert(passage.split(/\s+/).length >= 300);
        for (const word of c.vocabulary[next.contentId]) assert(passage.toLowerCase().includes(word.english.toLowerCase()));
    }
    const grammar = course.steps.filter(x => x.type === 'grammar');
    assert.equal(grammar.length, 21);
    for (const step of grammar) {
        const index = course.steps.indexOf(step);
        assert.equal(course.steps[index - 1].type, 'vocabulary');
        assert.equal(course.steps[index - 2].type, 'reading');
    }
    const exams = c.exams.filter(x => x.level === 'C2');
    assert.equal(exams.length, 8);
    assert.equal(exams.reduce((sum, x) => sum + x.questions.length, 0), 119);
    const positions = [0, 0, 0];
    for (const exam of exams) {
        assert.equal(exam.isDemo, false);
        assert.equal(exam.questions.length, exam.unit === 'final' ? 35 : 12);
        for (const q of exam.questions) {
            if (q.options) {
                assert.equal(new Set(q.options).size, 3);
                assert(q.answers.every(a => q.options.includes(a)));
                positions[q.options.indexOf(q.answers[0])]++;
            }
            const step = course.steps.find(x => x.id === q.sourceStepId);
            if (step.type === 'reading') assert.equal(q.context, c.reading.find(x => x.moduleId === step.contentId).paragraphs.join('\n\n'));
        }
    }
    assert(Math.max(...positions) - Math.min(...positions) <= 1);
});

test('English C2 introduces 318 distinct entries beyond integrated A1/A2/B1/C1', () => {
    const normalize = value => value.toLowerCase().trim().replaceAll('’', "'").replace(/^(a|an|the|to) /, '');
    const wordsFor = levels => c.modules.filter(x => levels.includes(x.level)).flatMap(x => c.vocabulary[x.id].map(w => normalize(w.english)));
    const previous = new Set(wordsFor(['A1', 'A2', 'B1', 'C1']));
    const words = wordsFor(['C2']);
    assert.equal(words.length, 318);
    assert.equal(new Set(words).size, words.length);
    assert.deepEqual(words.filter(word => previous.has(word)), []);
});

test('English C2 has real verb routes and consistent first-person narratives', () => {
    const steps = course.steps.filter(x => x.type === 'verbs');
    assert.equal(steps.length, 7);
    for (const step of steps) {
        assert.equal(step.path, `/verbs/${step.contentId}/learn`);
        const verb = c.verbById[step.contentId];
        assert.equal(verb.level, 'C2');
        assert.equal(verb.unit, step.unit);
        assert.equal(verb.rows.length, 6);
        assert.equal(c.verbGroupMap[step.contentId], 'c2');
    }
    const paragraph = number => c.reading.find(x => x.moduleId === `c2en-reading-${number}`).paragraphs[2];
    assert(paragraph(14).includes('I chose'));
    assert(paragraph(19).includes('I do not dispute'));
    assert(paragraph(24).includes('I hesitated'));
    assert(!paragraph(24).includes('the writer'));
    const apology = c.exams.find(x => x.level === 'C2' && x.unit === 1).questions[0];
    assert(apology.prompt.includes('première et la troisième'));
    assert(apology.explanation.includes('deuxième version'));
});

test('English C2 writing retains supplied sources and adds the missing measurement basis', () => {
    const writing = englishWritingLessons.filter(x => x.level === 'C2');
    assert.equal(writing.length, 5);
    for (const lesson of writing) {
        assert.equal(lesson.targetLanguage, 'en');
        assert(lesson.learningObjectives.length && lesson.sources.every(x => x.title && x.text));
        assert.equal(lesson.suggestedWords.min, [1,7].includes(lesson.unit) ? 240 : 280);
        assert.equal(lesson.suggestedWords.max, [1,7].includes(lesson.unit) ? 280 : 320);
    }
    for (const unit of [1, 7]) assert.equal(writing.find(x => x.unit === unit).sources.length, 2);
    const brief = writing.find(x => x.unit === 3).sources[0].text;
    assert(brief.includes('invented figures') && brief.includes('1,000 tonnes') && brief.includes('288 were accepted'));
    assert(brief.includes('18 percentage points; a 60% relative increase'));
    assert(brief.includes('projection, not an observed result'));
});

test('English C2 speaking provides two studies and testimony; listening retains explanations', () => {
    const speaking = speakingLessons.filter(x => x.level === 'C2' && !x.listeningQuestions);
    assert.equal(speaking.length, 5);
    assert(speaking.every(x => x.taskRecordingSeconds >= 300 && x.sources.length && x.phrases.length === 3));
    const synthesis = speaking.find(x => x.unit === 7);
    assert.equal(synthesis.sources.length, 3);
    assert(synthesis.sources.every(x => x.title.includes('Invented')));
    assert(synthesis.sources[1].text.includes('no comparison group'));
    const listening = speakingLessons.filter(x => x.level === 'C2' && x.listeningQuestions);
    assert.deepEqual(listening.map(x => x.unit), [1,2,3,4,5,6,7]);
    for (const lesson of listening) {
        assert(lesson.phrases[0].text && lesson.description);
        assert.equal(lesson.listeningQuestions.length, 2);
        assert.equal(lesson.pronunciationPractice.length, 2);
        assert(lesson.listeningQuestions.every(q => q.answers.length && q.explanation));
    }
});
