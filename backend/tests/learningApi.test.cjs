const { before, after, test } = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const express = require('express');
const { learningContent } = require('../dist/services/learningContent');
const { createContentRouter } = require('../dist/routes/learning/content');

let server;
let base;
const fixtures = {};
function fixture(language) {
    const source = learningContent[language];
    const word = { id: 1, english: `${language} word`, french: `${language} translation` };
    const verb = { ...Object.values(source.verbById)[0], id: 'shared', infinitive: `${language} verb` };
    const helper = { ...Object.values(source.helpers)[0], title: `${language} helper` };
    const group = { ...source.verbGroups.a1, id: 'a1', title: `${language} group` };
    const grammar = { ...source.grammar[0], id: 'shared', title: `${language} grammar` };
    const phrases = { ...source.phrases[0], id: 'shared', title: `${language} phrases` };
    const reading = { ...source.reading[0], moduleId: 'shared', title: `${language} reading` };
    return {
        vocabulary: { shared: Array(language === 'fr' ? 1 : 2).fill(word), [`${language}-only`]: [word] },
        modules: [{ ...source.modules[0], id: 'shared', title: `${language} module` }],
        grammar: [grammar, { ...grammar, id: `${language}-only` }],
        phrases: [phrases, { ...phrases, id: `${language}-only` }],
        reading: [reading, { ...reading, moduleId: `${language}-only` }],
        verbGroups: { a1: group, [`${language}-only`]: { ...group, id: `${language}-only` } },
        verbs: { a1: [verb] },
        verbById: { shared: verb, [`${language}-only`]: { ...verb, id: `${language}-only` } },
        verbGroupMap: { shared: 'a1', [`${language}-only`]: 'a1' },
        helpers: { shared: helper, [`${language}-only`]: helper },
    };
}
before(async () => {
    const app = express();
    app.use('/api/learning', require('../dist/routes/learning').default);
    // Separate routers with deliberately colliding IDs model future divergence.
    for (const language of ['fr', 'en']) {
        fixtures[language] = fixture(language);
        app.use(`/fixtures/${language}`, createContentRouter(fixtures[language]));
    }
    app.use((_req, res) => res.send('SPA fallback'));
    server = app.listen(0, '127.0.0.1');
    await once(server, 'listening');
    base = `http://127.0.0.1:${server.address().port}`;
});
after(() => new Promise(resolve => server ? server.close(resolve) : resolve()));
async function get(url, status = 200) {
    const response = await fetch(base + url);
    assert.equal(response.status, status, url);
    assert.match(response.headers.get('content-type'), /application\/json/, url);
    return response.json();
}
const summarize = ({ id, infinitive, translation, type, color }) => ({ id, infinitive, translation, type, color });

for (const language of ['fr', 'en']) {
    test(`${language} scoped endpoints serve only their catalog and preserve response shapes`, async () => {
        const c = learningContent[language];
        const prefix = `/api/learning/${language}`;
        const modules = await get(`${prefix}/vocabulary/modules`);
        assert.deepEqual(modules, c.modules.map(({ id, title, description, icon, color }) => ({
            id, title, description, icon, color, wordCount: (c.vocabulary[id] ?? []).length,
        })));
        assert.deepEqual(await get(`${prefix}/vocabulary/${modules[0].id}`), c.vocabulary[modules[0].id]);
        assert.deepEqual(await get(`${prefix}/lectures/grammar/${c.grammar[0].id}`), c.grammar[0]);
        assert.deepEqual(await get(`${prefix}/lectures/phrases/${c.phrases[0].id}`), c.phrases[0]);
        for (const passage of c.reading) {
            assert.deepEqual(await get(`${prefix}/lectures/reading/${passage.moduleId}`), {
                ...passage, vocabulary: c.vocabulary[passage.moduleId] ?? [],
            });
        }
        for (const [id, helper] of Object.entries(c.helpers)) {
            assert.deepEqual(await get(`${prefix}/verbs/helpers/${id}`), helper);
        }
        assert.deepEqual(await get(`${prefix}/verbs/groups/a1`), { ...c.verbGroups.a1, verbs: c.verbs.a1.map(summarize) });
        const verb = c.verbs.a1[0];
        assert.deepEqual(await get(`${prefix}/verbs/conjugation/${verb.id}`), { ...verb, groupId: c.verbGroupMap[verb.id] });
        assert.deepEqual(await get(`${prefix}/verbs/courses/A2`), {
            level: 'a2', newVerbs: c.verbs.a2.map(summarize),
            reviewVerbs: [{ groupId: 'a1', groupTitle: c.verbGroups.a1.title, verbs: c.verbs.a1.map(summarize) }],
        });
        assert.deepEqual(await get(`${prefix}/vocabulary/modules?lang=${language === 'fr' ? 'fr' : 'en'}`), modules);
    });

    test(`${language} endpoints reject IDs exclusive to the other real curriculum`, async () => {
        const other = learningContent[language === 'fr' ? 'en' : 'fr'];
        const selected = learningContent[language];
        for (const [route, ownIds, otherIds] of [
            ['lectures/grammar', selected.grammar.map(x => x.id), other.grammar.map(x => x.id)],
            ['lectures/reading', selected.reading.map(x => x.moduleId), other.reading.map(x => x.moduleId)],
            ['verbs/helpers', Object.keys(selected.helpers), Object.keys(other.helpers)],
            ['verbs/conjugation', Object.keys(selected.verbById), Object.keys(other.verbById)],
        ]) {
            const exclusive = otherIds.filter(id => !ownIds.includes(id));
            assert(exclusive.length > 0, route);
            for (const id of exclusive) await get(`/api/learning/${language}/${route}/${id}`, 404);
        }
    });

    test(`${language} overlapping fixture IDs resolve independently across every content type`, async () => {
        const c = fixtures[language];
        const prefix = `/fixtures/${language}`;
        const modules = await get(`${prefix}/vocabulary/modules`);
        assert.equal(modules[0].title, `${language} module`);
        assert.equal(modules[0].wordCount, c.vocabulary.shared.length);
        assert.deepEqual(await get(`${prefix}/vocabulary/shared`), c.vocabulary.shared);
        assert.deepEqual(await get(`${prefix}/lectures/grammar/shared`), c.grammar[0]);
        assert.deepEqual(await get(`${prefix}/lectures/phrases/shared`), c.phrases[0]);
        assert.deepEqual(await get(`${prefix}/lectures/reading/shared`), { ...c.reading[0], vocabulary: c.vocabulary.shared });
        assert.deepEqual(await get(`${prefix}/verbs/helpers/shared`), c.helpers.shared);
        assert.deepEqual(await get(`${prefix}/verbs/conjugation/shared`), { ...c.verbById.shared, groupId: 'a1' });
        assert.equal((await get(`${prefix}/verbs/groups/a1`)).title, `${language} group`);
        assert.equal((await get(`${prefix}/verbs/courses/a2`)).reviewVerbs[0].verbs[0].infinitive, `${language} verb`);
        const otherId = language === 'fr' ? 'en-only' : 'fr-only';
        for (const route of ['vocabulary', 'lectures/grammar', 'lectures/phrases', 'lectures/reading', 'verbs/helpers', 'verbs/conjugation', 'verbs/groups']) {
            await get(`${prefix}/${route}/${otherId}`, 404);
        }
    });
}

test('missing or unsupported language returns 400 without a default or SPA fallback', async () => {
    for (const suffix of ['', '/', '/de/vocabulary/modules', '/FR/vocabulary/modules', '/constructor/vocabulary/modules', '/vocabulary/modules', '?lang=fr']) {
        await get('/api/learning' + suffix, 400);
    }
});

test('unknown routes and prototype property IDs return JSON 404 in both languages', async () => {
    for (const language of ['fr', 'en']) {
        const prefix = `/api/learning/${language}`;
        for (const route of ['vocabulary', 'lectures/grammar', 'lectures/phrases', 'lectures/reading', 'verbs/helpers', 'verbs/groups', 'verbs/conjugation', 'verbs/courses']) {
            for (const id of ['missing', 'constructor', '__proto__', 'toString']) {
                await get(`${prefix}/${route}/${id}`, 404);
            }
        }
        await get(`${prefix}/unknown-route`, 404);
    }
});
