const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
function load(name, context = {}) {
    const source = fs.readFileSync(path.join(__dirname, '../src/pages/speaking', name + '.ts'), 'utf8');
    const exports = {};
    vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, { exports, ...context });
    return exports;
}
const { matchedWords } = load('wordProgress');
const match = (...args) => Array.from(matchedWords(...args));
test('word tracking handles French apostrophes, punctuation and casing', () => {
    assert.deepEqual(match('Bonjour, je m’appelle Camille.', "bonjour je m'appelle"), [true, true, true, false]);
    assert.deepEqual(match('J’habite à Paris.', 'j habite à paris'), [true, true, true]);
});
test('missing words stay neutral and substrings do not count as words', () => {
    assert.deepEqual(match('I live in London.', 'I in London'), [true, false, true, true]);
    assert.deepEqual(match('I live in London.', 'I liveliness'), [true, false, false, false]);
});
test('repeated words align in sequence, without marking future occurrences', () => {
    assert.deepEqual(match('Je parle et je lis.', 'je'), [true, false, false, false, false]);
    assert.deepEqual(match('Je parle et je lis.', 'je je parle'), [true, true, false, false, false]);
});
test('interim revisions and new attempts do not retain stale highlights', () => {
    assert.deepEqual(match('Hello my friend.', 'hello my'), [true, true, false]);
    assert.deepEqual(match('Hello my friend.', 'hello the'), [true, false, false]);
    assert.deepEqual(match('Hello my friend.', ''), [false, false, false]);
});
function recognitionSetup({ available = 'available', pending = false, supported = true } = {}) {
    const instances = [], checks = [];
    let resolve;
    class Engine {
        get processLocally() { return this.local; }
        set processLocally(value) { this.local = value; }
        static available(options) { checks.push(options); return pending ? new Promise(r => { resolve = r; }) : Promise.resolve(available); }
        constructor() { instances.push(this); }
        start() { this.started = true; }
        abort() { this.aborted = true; }
    }
    const { LocalRecognition } = load('localRecognition', { window: supported ? { SpeechRecognition: Engine } : {} });
    return { recognition: new LocalRecognition(), instances, checks, resolve: value => resolve(value) };
}
test('recognition requires local support and never falls back to a remote service', async () => {
    for (const available of ['unavailable', 'downloadable', 'downloading']) {
        const s = recognitionSetup({ available }); let failed = false;
        await s.recognition.start('fr-FR', () => {}, () => { failed = true; });
        assert(failed); assert.equal(s.instances.length, 0); assert.equal(s.checks[0].processLocally, true);
    }
    const s = recognitionSetup({ supported: false }); let failed = false;
    await s.recognition.start('fr-FR', () => {}, () => { failed = true; }); assert(failed);
});
test('local recognition streams transcripts and fully disconnects on stop', async () => {
    const s = recognitionSetup(); const transcripts = [];
    await s.recognition.start('fr-FR', text => transcripts.push(text), () => {});
    const engine = s.instances[0];
    assert.equal(engine.processLocally, true); assert.equal(engine.lang, 'fr-FR'); assert.equal(engine.interimResults, true);
    engine.onresult({ results: [[{ transcript: 'Bonjour' }], [{ transcript: 'je' }]] });
    assert.deepEqual(transcripts, ['Bonjour je']);
    s.recognition.stop();
    assert.equal(engine.onresult, null); assert.equal(engine.onend, null); assert(engine.aborted);
});
test('late availability after cancellation cannot start the microphone', async () => {
    const s = recognitionSetup({ pending: true });
    const start = s.recognition.start('fr-FR', () => {}, () => {});
    s.recognition.stop(); s.resolve('available'); await start;
    assert.equal(s.instances.length, 0);
});
