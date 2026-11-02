const { test } = require('node:test');
const assert = require('node:assert/strict');
const { learningContent } = require('../dist/services/learningContent');
const { writingLessons } = require('../dist/services/writing/lessons');
const { speakingLessons } = require('../dist/services/speaking/lessons');
const { verbsDataEN, helperVerbsDataEN } = require('../dist/content/en/verbs');
const en = learningContent.en;
for (const level of ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']) {
    test(`English ${level}: seven units pair every reading with vocabulary and a published exam`, () => {
        const course = en.courses.find(course => course.level === level);
        assert.equal(course.units.length, 8);
        assert.equal(course.steps.length, 114);
        assert.equal(en.reading.filter(item => item.level === level).length, 28);
        assert.equal(en.modules.filter(item => item.level === level).length, 42);
        assert.equal(en.grammar.filter(item => item.level === level).length, 19);
        for (let unit = 1; unit <= 7; unit++) {
            const steps = course.steps.filter(step => step.unit === unit);
            assert.equal(steps.at(-1).module, 'exams');
            assert.equal(steps.at(-1).available, true);
            const readings = steps.filter(step => step.type === 'reading');
            assert.equal(readings.length, 4);
            for (const step of readings) {
                const next = steps[steps.indexOf(step) + 1];
                assert.equal(next.type, 'vocabulary');
                assert.equal(next.contentId, step.contentId);
                assert.ok(en.vocabulary[step.contentId]?.length);
            }
        }
        const exams = en.exams.filter(exam => exam.level === level);
        assert.equal(exams.length, 8);
        assert.equal(exams.reduce((sum, exam) => sum + exam.questions.length, 0), 103);
        const normalize = s => s.toLowerCase().normalize('NFC').replace(/[’']/g, "'");
        for (const exam of exams) for (const question of exam.questions.filter(q => q.context)) {
            const step = course.steps.find(step => step.id === question.sourceStepId);
            const reading = en.reading.find(item => item.moduleId === step.contentId);
            assert.equal(question.context, reading.paragraphs.join('\n\n'));
            assert.ok(question.answers.some(answer => normalize(question.context).includes(normalize(answer))), question.id);
        }
    });
    test(`English ${level}: speaking, writing and reference texts are registered for every unit`, () => {
        for (const catalog of [writingLessons.en, speakingLessons.en]) {
            const lessons = catalog.filter(item => item.level === level);
            assert.deepEqual(lessons.map(item => item.unit), [1, 2, 3, 4, 5, 6, 7]);
            assert.equal(new Set(catalog.map(item => item.id)).size, catalog.length);
        }
        for (const lesson of writingLessons.en.filter(item => item.level === level)) {
            assert.equal(lesson.targetLanguage, 'en');
            assert.deepEqual(lesson.sources, en.reading.filter(p => p.level === level && p.unit === lesson.unit).map(p => ({ title: p.title, text: p.paragraphs.join('\n\n') })));
        }
    });
}
test('English IDs are unique across levels and all ordinary verbs use their base form with I', () => {
    for (const kind of ['grammar', 'phrases', 'reading', 'modules']) {
        const ids = en[kind].map(item => item.id ?? item.moduleId);
        assert.equal(new Set(ids).size, ids.length, kind);
    }
    const verbs = Object.values(verbsDataEN).flat();
    assert.equal(new Set(verbs.map(v => v.id)).size, verbs.length);
    for (const verb of verbs) {
        assert.equal(verb.rows.length, 6);
        assert.equal(verb.rows.find(row => row.sujet === 'I').present, verb.infinitive, verb.id);
    }
    assert.equal(helperVerbsDataEN['to-have'].rows[0].present, 'have');
    assert.equal(helperVerbsDataEN['to-be'].rows[0].present, 'am');
    const go = verbs.find(v => v.infinitive === 'go');
    assert.equal(go.rows[2].present, 'goes');
    assert.equal(go.rows[0].passeCompose, 'went');
    assert.equal(verbs.find(v => v.infinitive === 'eat').rows[0].passeCompose, 'ate');
});
