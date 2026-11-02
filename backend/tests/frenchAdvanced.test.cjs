const { test } = require('node:test');
const assert = require('node:assert/strict');
const { learningContent } = require('../dist/services/learningContent');
const { writingLessons } = require('../dist/services/writing/lessons');
const { speakingLessons } = require('../dist/services/speaking/lessons');
const { verbsData, verbById } = require('../dist/content/fr/verbs');
const fr = learningContent.fr;
for (const level of ['B1', 'B2', 'C1', 'C2']) {
    test(`${level}: all seven units pair readings with vocabulary and end in a published exam`, () => {
        const course = fr.courses.find(course => course.level === level);
        assert.equal(course.units.length, 8);
        assert.equal(fr.reading.filter(item => item.level === level).length, 28);
        assert.equal(fr.grammar.filter(item => item.level === level).length, 19);
        assert.equal(fr.modules.filter(item => item.level === level).length, 42);
        for (let unit = 1; unit <= 7; unit++) {
            const steps = course.steps.filter(step => step.unit === unit);
            assert.equal(steps.at(-1).type, 'exams');
            assert.equal(steps.at(-1).available, true);
            const readings = steps.filter(step => step.type === 'reading');
            assert.equal(readings.length, 4);
            for (const step of readings) {
                const next = steps[steps.indexOf(step) + 1];
                assert.equal(next.type, 'vocabulary');
                assert.equal(next.contentId, step.contentId);
                assert.ok(fr.vocabulary[step.contentId]?.length);
            }
        }
        const exams = fr.exams.filter(exam => exam.level === level);
        assert.equal(exams.length, 8);
        assert.equal(exams.find(exam => exam.unit === 'final').questions.length, 28);
        assert.ok(exams.every(exam => !exam.isDemo && exam.questions.length >= 12));
    });
    test(`${level}: writing has the actual reference texts and speaking activities stay level-scoped`, () => {
        for (const catalog of [writingLessons.fr, speakingLessons.fr]) {
            const lessons = catalog.filter(item => item.level === level);
            assert.deepEqual(lessons.map(item => item.unit), [1, 2, 3, 4, 5, 6, 7]);
            assert.equal(new Set(catalog.map(item => item.id)).size, catalog.length);
        }
        for (const lesson of writingLessons.fr.filter(item => item.level === level)) {
            const expected = fr.reading.filter(item => item.level === level && item.unit === lesson.unit);
            assert.deepEqual(lesson.sources, expected.map(item => ({ title: item.title, text: item.paragraphs.join('\n\n') })));
        }
        for (const verb of verbsData[level.toLowerCase()]) {
            assert.equal(verbById[verb.id].level, level);
            assert.ok(verb.id.startsWith(level.toLowerCase() + '-'));
        }
    });
    test(`${level}: comprehension uses choices instead of rejecting valid free paraphrases`, () => {
        for (const exam of fr.exams.filter(item => item.level === level)) {
            for (const question of exam.questions.filter(item => item.context)) {
                assert.equal(question.options.length, 4);
                assert.equal(new Set(question.options).size, 4);
                assert.ok(question.options.includes(question.answers[0]));
                const step = fr.courses.find(course => course.level === level).steps.find(step => step.id === question.sourceStepId);
                const passage = fr.reading.find(passage => passage.moduleId === step.contentId);
                assert.equal(question.context, passage.paragraphs.join('\n\n'));
            }
        }
    });
}
test('nuancer preserves the soft c before a and o, including literary forms', () => {
    const verb = verbsData.c1.find(verb => verb.infinitive === 'nuancer');
    assert.equal(verb.rows[3].present, 'nuançons');
    assert.equal(verb.rows[0].imparfait, 'nuançais');
    assert.equal(verb.rows[0].passeSimple, 'nuançai');
    assert.equal(verb.rows[2].subjonctifImparfait, 'nuançât');
    assert.equal(verb.rows[3].imparfait, 'nuancions');
});
