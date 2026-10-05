const { test } = require('node:test');
const assert = require('node:assert/strict');
const { learningContent } = require('../dist/services/learningContent');
const { withUnitExams } = require('../dist/services/unitExams');

for (const language of ['fr', 'en']) {
    const catalog = learningContent[language];
    test(`${language}: each unit ends with exactly one exam, while drafts stay unavailable`, () => {
        for (const course of catalog.courses) {
            for (const unit of course.units ?? []) {
                const steps = course.steps.filter(step => step.unit === unit.number);
                const exams = steps.filter(step => step.module === 'exams');
                assert.equal(exams.length, 1);
                assert.equal(steps.at(-1), exams[0]);
                const authored = catalog.exams.find(exam => exam.level === course.level && exam.unit === unit.number);
                assert.equal(exams[0].available, !!authored?.questions.length);
                assert.equal(exams[0].isDemo, authored?.isDemo ?? false);
            }
        }
    });
    test(`${language}: authored questions refer to lessons in their own unit and have valid answers`, () => {
        const placements = new Set();
        for (const exam of catalog.exams) {
            const key = `${exam.level}/${exam.unit}`;
            assert.equal(placements.has(key), false, `Duplicate exam ${key}`);
            placements.add(key);
            const course = catalog.courses.find(course => course.level === exam.level);
            assert.ok(course?.units.some(unit => unit.number === exam.unit));
            assert.ok(exam.passPercent > 0 && exam.passPercent <= 100);
            const ids = new Set();
            for (const question of exam.questions) {
                assert.equal(ids.has(question.id), false);
                ids.add(question.id);
                assert.ok(course.steps.some(step => step.id === question.sourceStepId && step.unit === exam.unit && step.module !== 'exams'), question.sourceStepId);
                assert.ok(question.prompt && question.explanation && question.answers.length);
                assert.ok(question.answers.every(answer => answer.trim()));
                if (question.options) assert.ok(question.answers.every(answer => question.options.includes(answer)));
            }
        }
    });
}

test('syncing a new lesson keeps the exam after it without changing the authored course', () => {
    const course = { level: 'A1', units: [{ number: 1 }], steps: [
        { id: 'old', unit: 1 }, { id: 'new', unit: 1 },
    ] };
    const result = withUnitExams([course], [], 'fr')[0];
    assert.deepEqual(result.steps.map(step => step.id), ['old', 'new', 'a1-exam-1']);
    assert.equal(course.steps.length, 2);
});
