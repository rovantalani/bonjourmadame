const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

const source = fs.readFileSync(path.join(__dirname, '../src/utils/loadCurriculum.ts'), 'utf8')
    .replace('import.meta.env.VITE_API_BASE', "''");
const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;

function setup(response) {
    const calls = [];
    const exports = {};
    const verbs = {
        '../data/fr/verbs': { TENSES_BY_LEVEL: { A1: ['fr'] }, HELPERS: ['fr helper'] },
        '../data/en/verbs': { TENSES_BY_LEVEL: { A1: ['en'] }, HELPERS: ['en helper'] },
    };
    vm.runInNewContext(compiled, {
        exports,
        require: name => verbs[name],
        fetch: async url => { calls.push(url); return response; },
    });
    return { loadCurriculum: exports.loadCurriculum, calls };
}

for (const language of ['fr', 'en']) {
    test(`${language} curriculum comes from the language-scoped course API`, async () => {
        const courses = [{ level: 'A1', steps: [{ id: `${language}-step` }] }];
        const { loadCurriculum, calls } = setup({ ok: true, json: async () => courses });
        const curriculum = await loadCurriculum(language);
        assert.deepEqual(calls, [`/api/learning/${language}/courses`]);
        assert.equal(curriculum.courses, courses);
        assert.equal(curriculum.tenses.A1[0], language);
        assert.equal(curriculum.helpers[0], `${language} helper`);
    });
}

test('course API failures reject instead of showing an empty curriculum', async () => {
    const { loadCurriculum } = setup({ ok: false, status: 503 });
    await assert.rejects(loadCurriculum('fr'), /Could not load fr courses \(503\)/);
});
