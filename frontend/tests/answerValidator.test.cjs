const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const context = { exports: {} };
vm.runInNewContext(ts.transpileModule(fs.readFileSync(path.join(__dirname, '../src/utils/answerValidator.ts'), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText, context);
const { gradeAnswer, isAnswerCorrect } = context.exports;

test('symbol mistakes receive partial feedback and full credit', () => {
    for (const [actual, expected] of [["j´aime", "j'aime"], ['j`aime', "j'aime"], ['jaime', "j'aime"], ['peut–être', 'peut-être'], ['peutêtre', 'peut-être'], ['bonjour!', 'bonjour'], ['l’ami', "l'ami"]]) {
        assert.equal(gradeAnswer(actual, expected), 'partial', actual);
        assert.equal(isAnswerCorrect(actual, expected), true);
    }
});
test('existing accepted forms remain correct', () => {
    for (const [actual, expected] of [['enchantée', 'enchanté(e)'], ['fougueuse', 'fougueux(-euse)'], ['housemaid', 'the maid / housemaid'], ['bonjour', 'bonjour!']]) {
        assert.equal(gradeAnswer(actual, expected), 'correct');
    }
});
test('capitalization and accents pass with a warning in words and phrases', () => {
    for (const [actual, expected] of [['ENCHANTEE', 'enchanté(e)'], ['bonjour', 'Bonjour'], ['bonjour, je suis marie', 'Bonjour, je suis Marie'], ['cafe', 'café']]) {
        assert.equal(gradeAnswer(actual, expected), 'partial', actual);
        assert.equal(isAnswerCorrect(actual, expected), true);
    }
});
test('one missing or extra final s passes with a warning', () => {
    for (const [actual, expected] of [['ami', 'amis'], ['amies', 'amie'], ['Je mange des pomme', 'Je mange des pommes'], ['j\'aimes', "j'aime"]]) {
        assert.equal(gradeAnswer(actual, expected), 'partial', actual);
    }
    assert.equal(gradeAnswer('des pomme verte', 'des pommes vertes'), 'wrong');
    assert.equal(gradeAnswer('a', 'as'), 'wrong');
});
test('spaces replacing punctuation receive partial feedback and full credit', () => {
    for (const [actual, expected] of [['soixante dix', 'soixante-dix'], ['soixante   dix', 'soixante-dix'], ['quatre vingt-dix', 'quatre-vingt-dix'], ['j aime', "j'aime"]]) {
        assert.equal(gradeAnswer(actual, expected), 'partial', actual);
        assert.equal(isAnswerCorrect(actual, expected), true);
    }
    assert.equal(gradeAnswer('soixante-dix', 'soixante-dix'), 'correct');
    assert.equal(gradeAnswer('soixante dis', 'soixante-dix'), 'wrong');
    assert.equal(gradeAnswer('apart', 'a part'), 'wrong');
    assert.equal(gradeAnswer('soix ante dix', 'soixante-dix'), 'wrong');
});
test('letter mistakes and empty or symbol-only answers remain wrong', () => {
    for (const actual of ['jaimes', '', '---', 'jame']) {
        assert.equal(gradeAnswer(actual, "j'aime"), 'wrong', actual);
        assert.equal(isAnswerCorrect(actual, "j'aime"), false);
    }
});
