const { test } = require('node:test');
const assert = require('node:assert/strict');

test('course steps use valid modules, lecture types and matching content paths', () => {
    for (const language of ['fr', 'en']) {
        const data = require(`../dist/content/${language}/courses`);
        for (const course of (data.COURSES ?? data.COURSES_EN)) {
            const ids = new Set();
            for (const step of course.steps) {
                assert(!ids.has(step.id), `Duplicate step: ${step.id}`);
                ids.add(step.id);
                assert(['vocabulary', 'verbs', 'lectures'].includes(step.module));
                assert(step.path.startsWith(`/${step.module}/`), step.path);
                if (step.module === 'lectures') {
                    assert(['grammar', 'phrases', 'reading'].includes(step.type));
                    assert(step.path.startsWith(`/lectures/${step.type}/`), step.path);
                } else {
                    assert.equal(step.type, step.module);
                }
            }
        }
    }
});
