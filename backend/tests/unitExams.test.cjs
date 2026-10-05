const { test } = require('node:test');
const assert = require('node:assert/strict');
const { learningContent } = require('../dist/services/learningContent');

for (const language of ['fr', 'en']) {
    const catalog = learningContent[language];
    test(`${language}: each unit ends with exactly one exam, while drafts stay unavailable`, () => {
        for (const course of catalog.courses) {
            for (const unit of course.units ?? []) {
                const steps = course.steps.filter(step => step.unit === unit.number);
                const exams = steps.filter(step => step.module === 'exams');
                assert.equal(exams.length, 1);
                assert.equal(steps.at(-1), exams[0]);
                const authored = catalog.exams.find(exam => exam.level === course.level && exam.unit === (unit.kind === 'final-exam' ? 'final' : unit.number));
                assert.equal(exams[0].available, !!authored?.questions.length);
                assert.equal(exams[0].isDemo, authored?.isDemo ?? false);
                assert.equal(exams[0].path, unit.kind === 'final-exam' ? '/exams/final' : `/exams/${unit.number}`);
                assert.equal(exams[0].contentId, `${course.level.toLowerCase()}-exam-${unit.kind === 'final-exam' ? 'final' : unit.number}`);
            }
        }
    });
    test(`${language}: authored questions refer to lessons in their unit or level and have valid answers`, () => {
        const placements = new Set();
        for (const exam of catalog.exams) {
            const key = `${exam.level}/${exam.unit}`;
            assert.equal(placements.has(key), false, `Duplicate exam ${key}`);
            placements.add(key);
            const course = catalog.courses.find(course => course.level === exam.level);
            assert.ok(course?.units.some(unit => exam.unit === 'final' ? unit.kind === 'final-exam' : unit.number === exam.unit));
            assert.ok(exam.passPercent > 0 && exam.passPercent <= 100);
            const ids = new Set();
            for (const question of exam.questions) {
                assert.equal(ids.has(question.id), false);
                ids.add(question.id);
                assert.ok(course.steps.some(step => step.id === question.sourceStepId && (exam.unit === 'final' || step.unit === exam.unit) && step.module !== 'exams'), question.sourceStepId);
                assert.ok(question.prompt && question.explanation && question.answers.length);
                assert.ok(question.answers.every(answer => answer.trim()));
                if (question.options) assert.ok(question.answers.every(answer => question.options.includes(answer)));
            }
        }
    });
}

for (const language of ['fr', 'en']) {
    test(`${language}: each level ends with its own FINAL EXAM unit and stable exam route`, () => {
        for (const course of learningContent[language].courses) {
            const finalUnit = course.units.at(-1);
            assert.equal(finalUnit.title, 'FINAL EXAM');
            assert.equal(finalUnit.kind, 'final-exam');
            assert.equal(course.units.filter(unit => unit.kind === 'final-exam').length, 1);
            const finalStep = course.steps.at(-1);
            assert.equal(finalStep.unit, finalUnit.number);
            assert.equal(finalStep.path, '/exams/final');
            assert.equal(course.steps.filter(step => step.unit === finalUnit.number).length, 1);
            assert.equal(finalStep.available, course.level === 'A1');
            const raw = require(`../dist/content/${language}/courses`);
            assert.deepEqual(course, (raw.COURSES ?? raw.COURSES_EN).find(item => item.level === course.level));
        }
        const finalExam = learningContent[language].exams.find(exam => exam.unit === 'final');
        const course = learningContent[language].courses.find(course => course.level === finalExam.level);
        const coveredUnits = new Set(finalExam.questions.map(question => course.steps.find(step => step.id === question.sourceStepId).unit));
        assert.ok(coveredUnits.size > 1, 'Final demo must sample several units');
    });
}
