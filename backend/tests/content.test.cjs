const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

test('course steps use valid modules, lecture types and matching content paths', () => {
    for (const language of ['fr', 'en']) {
        const file = path.resolve(__dirname, `../../frontend/src/data/${language}/courses.ts`);
        const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
            compilerOptions: { module: ts.ModuleKind.CommonJS },
        }).outputText;
        const context = { exports: {} };
        vm.runInNewContext(code, context);
        for (const course of (context.exports.COURSES ?? context.exports.COURSES_EN)) {
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
