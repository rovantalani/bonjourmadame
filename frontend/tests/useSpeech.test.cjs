const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

const source = fs.readFileSync(path.join(__dirname, '../src/hooks/useSpeech.ts'), 'utf8');
const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;

function setup() {
    const calls = [];
    const synth = {
        getVoices: () => [],
        addEventListener() {},
        removeEventListener() {},
        speak(utterance) { calls.push({ action: 'speak', utterance }); utterance.onstart?.(); },
        cancel() { calls.push({ action: 'cancel' }); },
    };
    class Utterance {
        constructor(text) { this.text = text; }
    }
    const exports = {};
    const react = {
        useState: initial => [initial, () => {}],
        useRef: initial => ({ current: initial }),
        useCallback: callback => callback,
        useEffect: effect => { effect(); },
    };
    vm.runInNewContext(compiled, {
        exports,
        require: name => name === 'react' ? react : undefined,
        window: { speechSynthesis: synth, SpeechSynthesisUtterance: Utterance },
        SpeechSynthesisUtterance: Utterance,
    });
    return { useSpeech: exports.useSpeech, calls };
}

test('paragraph speech reads the full text in the selected language and can be stopped', () => {
    const { useSpeech, calls } = setup();
    const audio = useSpeech();
    const paragraph = 'Bonjour ! Je m’appelle Marie. J’habite à Toulouse.';
    audio.speak(paragraph, 'fr-FR');
    assert.equal(calls[0].action, 'speak');
    assert.equal(calls[0].utterance.text, paragraph);
    assert.equal(calls[0].utterance.lang, 'fr-FR');
    audio.stop();
    assert.equal(calls[1].action, 'cancel');
});

test('starting another recording stops the previous one', () => {
    const { useSpeech, calls } = setup();
    const paragraph = useSpeech();
    const word = useSpeech();
    paragraph.speak('The whole paragraph.', 'en-US');
    word.speak('word', 'en-US');
    assert.deepEqual(calls.map(call => call.action), ['speak', 'cancel', 'speak']);
    assert.equal(calls[2].utterance.text, 'word');
});
