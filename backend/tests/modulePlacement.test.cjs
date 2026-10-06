const { test } = require('node:test');
const assert = require('node:assert/strict');
const { learningContent } = require('../dist/services/learningContent');
const frVerbs = require('../dist/content/fr/verbs');
const enVerbs = require('../dist/content/en/verbs');
const { vocabularyData } = require('../dist/content/fr/vocabulary');

function courses(language) {
    const data = require(`../dist/content/${language}/courses`);
    return data.COURSES ?? data.COURSES_EN;
}

test('French A1 readings and their vocabulary follow the seven-unit syllabus', () => {
    const expected = [
        ['a1-bonjour-je-mappelle-marie', 'a1-une-nouvelle-collegue', 'a1-mon-ami-thomas', 'a1-la-famille-martin'],
        ['a1-une-journee-typique', 'a1-le-samedi-de-sophie', 'a1-une-journee-au-travail', 'a1-apres-le-travail'],
        ['a1-mon-appartement', 'a1-chez-mes-parents', 'a1-mon-quartier', 'a1-une-promenade-dans-le-quartier'],
        ['a1-au-cafe', 'a1-au-marche', 'a1-a-la-boulangerie', 'a1-au-restaurant'],
        ['a1-jaime-le-sport', 'a1-on-va-au-cinema', 'a1-une-soiree-entre-amis', 'a1-tu-viens-samedi'],
        ['a1-je-vais-au-travail', 'a1-ou-est-la-gare', 'a1-a-la-gare', 'a1-un-week-end-a-lyon'],
        ['a1-une-journee-a-marseille', 'a1-une-visite-chez-des-amis', 'a1-mes-premieres-semaines-en-france', 'a1-un-week-end-a-la-campagne'],
    ];
    const titles = ['Faire connaissance', 'La vie quotidienne', 'La maison et le quartier',
        'Manger et faire les courses', 'Loisirs et vie sociale', 'Se déplacer et voyager', 'La vie en France'];
    const course = courses('fr').find(item => item.level === 'A1');
    assert.deepEqual(Array.from(course.units.filter(unit => unit.kind !== 'final-exam'), unit => unit.title), titles);
    const passages = learningContent.fr.reading;
    const modules = new Map(learningContent.fr.modules.map(module => [module.id, module]));
    for (let unit = 1; unit <= 7; unit++) {
        const readingSteps = course.steps.filter(step => step.unit === unit && step.type === 'reading');
        assert.deepEqual(Array.from(readingSteps, step => step.contentId), expected[unit - 1]);
        for (const id of expected[unit - 1]) {
            const passage = passages.find(item => item.moduleId === id);
            const module = modules.get(id);
            assert.equal(passage?.unit, unit, `reading ${id}`);
            assert.equal(module?.unit, unit, `vocabulary ${id}`);
            assert.equal(passage.level, 'A1');
            assert.equal(module.level, 'A1');
            assert.equal(vocabularyData[id]?.length, 15, `vocabulary words for ${id}`);
            const readingIndex = course.steps.findIndex(step => step.type === 'reading' && step.contentId === id);
            const vocabularyStep = course.steps[readingIndex + 1];
            assert.equal(vocabularyStep?.type, 'vocabulary');
            assert.equal(vocabularyStep?.contentId, id);
        }
    }
});

for (const language of ['fr', 'en']) {
    test(`${language} level files contain only their own course content`, () => {
        for (const level of ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']) {
            const root = `../dist/content/${language}`;
            const upper = level.toUpperCase();
            const course = require(`${root}/courses/${level}`)[`course${upper}`];
            assert.equal(course.level, upper);
            for (const kind of ['grammar', 'phrases', 'reading']) {
                const entries = require(`${root}/${kind}/${level}`)[`${kind}${upper}`];
                for (const entry of entries) assert.equal(entry.level, upper, `${kind}/${level}`);
            }
            const vocabulary = require(`${root}/vocabulary/${level}`);
            for (const module of vocabulary[`modules${upper}`]) {
                assert.equal(module.level, upper, `vocabulary/${module.id}`);
                assert(module.words.length > 0, `vocabulary/${module.id} has no words`);
                assert.deepEqual(learningContent[language].vocabulary[module.id], module.words);
            }
            for (const id of Object.keys(vocabulary[`readingWords${upper}`])) {
                assert(id.toLowerCase().startsWith(level), `reading words ${id} in ${level}`);
            }
            const verbs = require(`${root}/verbs/${level}`);
            assert.equal(verbs[`verbGroup${upper}`].id, level);
            for (const entry of verbs[`verbs${upper}`]) assert.equal(entry.level, upper, `verb/${entry.id}`);
            for (const entry of Object.values(verbs[`helpers${upper}`])) assert.equal(entry.level, upper);
        }
    });

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
                // Exams have their own placement and authored-question checks.
                if (step.type === 'exams') continue;
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
