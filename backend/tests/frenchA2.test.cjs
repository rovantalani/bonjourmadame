const { test } = require('node:test');
const assert = require('node:assert/strict');
const { learningContent } = require('../dist/services/learningContent');
const { writingLessons } = require('../dist/services/writing/lessons');
const { speakingLessons } = require('../dist/services/speaking/lessons');
const { verbsA2 } = require('../dist/content/fr/verbs/a2');
const fr = learningContent.fr;
const course = fr.courses.find(course => course.level === 'A2');

test('French A2 readings pair with vocabulary before each unit exam', () => {
    assert.equal(course.units.length, 8);
    assert.equal(fr.reading.filter(passage => passage.level === 'A2').length, 28);
    for (let unit = 1; unit <= 7; unit++) {
        const steps = course.steps.filter(step => step.unit === unit);
        assert.equal(steps.at(-1).type, 'exams');
        const readings = steps.filter(step => step.type === 'reading');
        assert.equal(readings.length, 4);
        for (const step of readings) {
            const next = steps[steps.indexOf(step) + 1];
            assert.equal(next.type, 'vocabulary');
            assert.equal(next.contentId, step.contentId);
            assert.ok(fr.vocabulary[step.contentId].length);
        }
    }
    assert.equal(fr.exams.filter(exam => exam.level === 'A2').reduce((sum, exam) => sum + exam.questions.length, 0), 122);
});

test('French content IDs remain unique across levels and verb lookups keep their level', () => {
    for (const kind of ['grammar', 'phrases', 'reading', 'modules']) {
        const ids = fr[kind].map(item => item.id ?? item.moduleId);
        assert.equal(new Set(ids).size, ids.length, kind);
    }
    const { verbById, verbsData } = require('../dist/content/fr/verbs');
    const all = Object.values(verbsData).flat();
    assert.equal(new Set(all.map(verb => verb.id)).size, all.length);
    for (const verb of verbsA2) assert.equal(verbById[verb.id].level, 'A2');
    assert.equal(verbById.savoir.level, 'B1');
    assert.equal(verbById.offrir.level, 'C1');
});

test('French A2 writing and speaking are registered alongside A1 with unique IDs', () => {
    for (const catalog of [writingLessons.fr, speakingLessons.fr]) {
        assert.ok(catalog.some(lesson => lesson.level === 'A1'));
        const lessons = catalog.filter(lesson => lesson.level === 'A2');
        assert.deepEqual(lessons.map(lesson => lesson.unit), [1, 2, 3, 4, 5, 6, 7]);
        assert.equal(new Set(catalog.map(lesson => lesson.id)).size, catalog.length);
    }
});

test('reflexive conjugations and assessment include the required pronoun and elision', () => {
    const rows = verbsA2.find(verb => verb.id === 'se-lever').rows;
    assert.equal(rows[1].passeCompose, 't’es levé(e)');
    assert.equal(rows[2].passeCompose, 's’est levé(e)');
    assert.equal(rows[0].plusQueParfait, 'm’étais levé(e)');
    const question = fr.exams.find(exam => exam.level === 'A2' && exam.unit === 1).questions.find(q => q.id === 'a2-u1-verb-se-lever');
    assert.deepEqual(question.answers, ['se lève']);
});
