const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const { learningContent } = require('../dist/services/learningContent');
const frVerbs = require('../dist/content/fr/verbs');
const enVerbs = require('../dist/content/en/verbs');

function courses(language) {
    const source = fs.readFileSync(path.join(__dirname, `../../frontend/src/data/${language}/courses.ts`), 'utf8');
    const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
    const exports = {};
    vm.runInNewContext(compiled, { exports });
    return Object.values(exports)[0];
}

for (const language of ['fr', 'en']) {
    test(`${language} modules have one valid level and unit, matching their course placement`, () => {
        const curriculum = courses(language);
        const unitCount = new Map(curriculum.map(course => [course.level, course.units.length]));
        const catalog = learningContent[language];
        const rawVerbs = language === 'fr' ? frVerbs.verbsData : enVerbs.verbsDataEN;
        const modules = {
            vocabulary: catalog.modules.map(module => [module.id, module]),
            grammar: catalog.grammar.map(module => [module.id, module]),
            phrases: catalog.phrases.map(module => [module.id, module]),
            reading: catalog.reading.map(module => [module.moduleId, module]),
            verbs: [...Object.values(rawVerbs).flat().map(module => [module.id, module]),
                ...Object.entries(catalog.helpers)],
        };
        const index = {};
        for (const [type, entries] of Object.entries(modules)) {
            const ids = new Set();
            for (const [id, module] of entries) {
                assert(!ids.has(id), `${language}: duplicate ${type} module ${id}`);
                ids.add(id);
                assert(unitCount.has(module.level), `${language}: ${type}/${id} has invalid level`);
                assert(Number.isInteger(module.unit) && module.unit >= 1 && module.unit <= unitCount.get(module.level),
                    `${language}: ${type}/${id} has invalid unit`);
                if (type === 'phrases') {
                    const phraseIds = module.phrases.map(phrase => phrase.id);
                    assert.equal(new Set(phraseIds).size, phraseIds.length,
                        `${language}: ${type}/${id} has duplicate phrase IDs`);
                }
            }
            index[type] = new Map(entries);
        }
        const seen = new Set();
        for (const course of curriculum) {
            for (const step of course.steps) {
                const key = `${step.type}:${step.contentId}`;
                assert(!seen.has(key), `${language}: repeated course module ${key}`);
                seen.add(key);
                // Legacy verb-group pages are navigation, not individual verb modules.
                if (step.type === 'verbs' && !index.verbs.has(step.contentId)) continue;
                const module = index[step.type].get(step.contentId);
                assert(module, `${language}: course module ${key} does not exist`);
                assert.equal(module.level, course.level, `${language}: ${key} level differs from course`);
                assert.equal(module.unit, step.unit, `${language}: ${key} unit differs from course`);
            }
        }
    });
}
