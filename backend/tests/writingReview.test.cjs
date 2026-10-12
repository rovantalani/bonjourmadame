const { test } = require('node:test');
const assert = require('node:assert/strict');
const { validateWritingReview } = require('../dist/services/writing/validateReview');
const edit = (original, replacement, extra = {}) => ({ kind: 'replacement', original, replacement, prefix: '', suffix: '', category: 'Grammar', explanation: 'Explanation.', ...extra });
const run = (text, corrections, extra = {}) => validateWritingReview({ lessonId: 'example', originalText: text, feedbackLanguage: 'en' }, { rating: 4, overallNotes: ['Short assessment.'], corrections, ...extra });

test('places French corrections in document order without altering the submission', () => {
    const text = 'Je suis 25 ans. Je habite à Lyon.';
    const result = run(text, [edit('Je habite', 'J’habite'), edit('suis', 'ai')]);
    assert.equal(result.originalText, text);
    assert.deepEqual(result.corrections.map(c => c.original), ['suis', 'Je habite']);
    for (const c of result.corrections) assert.equal(text.slice(c.start, c.end), c.original);
    assert.equal(result.unplacedCorrections.length, 0);
});
test('repeated words require exact adjacent context', () => {
    const text = 'with with my friends';
    assert.equal(run(text, [edit('with', '', { kind: 'deletion' })]).unplacedCorrections[0].reason, 'ambiguous');
    const result = run(text, [edit('with ', '', { kind: 'deletion', prefix: 'with ' })]);
    assert.equal(result.corrections[0].start, 5);
});
test('anchors missing words at the middle, start and end', () => {
    for (const [text, prefix, suffix, replacement, start] of [
        ['I work in café.', 'in ', 'café.', 'a ', 10],
        ['work here.', '', 'work here.', 'I ', 0],
        ['Hello', 'Hello', '', '!', 5],
    ]) {
        const c = run(text, [edit('', replacement, { kind: 'insertion', prefix, suffix })]).corrections[0];
        assert.equal(c.start, start); assert.equal(c.end, start);
    }
    assert.equal(run('Hello', [edit('', 'I ', { kind: 'insertion' })]).unplacedCorrections[0].reason, 'invalid-edit');
});
test('does not normalize quotes, accents, whitespace or guess a missing excerpt', () => {
    for (const [text, original] of [['J’aime le café.', "J'aime"], ['café', 'cafe'], ['I  like it.', 'I like'], ['Hello.', 'Bye']]) {
        assert.equal(run(text, [edit(original, 'replacement')]).unplacedCorrections[0].reason, 'not-found');
    }
});
test('UTF-16 offsets preserve emoji, combining accents and line breaks', () => {
    const text = '👩‍💻\r\nJe suis ici. Cafe\u0301.';
    const result = run(text, [edit('suis', 'reste'), edit('Cafe\u0301', 'Café')]);
    assert.equal(result.corrections.length, 2);
    for (const c of result.corrections) assert.equal(text.slice(c.start, c.end), c.original);
    assert.equal(run('👩‍💻 hello', [edit('👩', 'woman')]).unplacedCorrections[0].reason, 'unsafe-boundary');
    assert.equal(run('Cafe\u0301', [edit('Cafe', 'Coffee')]).unplacedCorrections[0].reason, 'unsafe-boundary');
});
test('rejects matches and insertions inside words', () => {
    assert.equal(run('cat', [edit('a', 'o')]).unplacedCorrections[0].reason, 'unsafe-boundary');
    assert.equal(run('cat', [edit('', 'r', { kind: 'insertion', prefix: 'c', suffix: 'at' })]).unplacedCorrections[0].reason, 'unsafe-boundary');
});
test('rejects all conflicting edits including insertion boundaries; allows adjacent replacements', () => {
    const overlapping = [edit('I has', 'I have'), edit('has', 'have')];
    for (const edits of [overlapping, [...overlapping].reverse()]) {
        const result = run('I has tea.', edits);
        assert.equal(result.corrections.length, 0);
        assert(result.unplacedCorrections.every(c => c.reason === 'overlap'));
    }
    assert.equal(run('Hello!', [edit('Hello', 'Hi'), edit('', ' there', { kind: 'insertion', prefix: 'Hello', suffix: '!' })]).corrections.length, 0);
    assert.equal(run('Hello!', [edit('Hello', 'Hi'), edit('!', '.')]).corrections.length, 2);
});
test('deduplicates identical edits and retains optional suggestions', () => {
    const correction = edit('good', 'pleasant', { kind: 'suggestion' });
    const result = run('A good day.', [correction, correction]);
    assert.equal(result.corrections.length, 1);
    assert.equal(result.corrections[0].kind, 'suggestion');
});
test('invalid edit semantics are retained as unplaced feedback', () => {
    for (const c of [edit('hello', 'hello'), edit('hello', 'x', { kind: 'deletion' }), edit('hello', 'x', { kind: 'insertion' }), edit('', 'hi')]) {
        const result = run('hello', [c]);
        assert.equal(result.corrections.length, 0);
        assert.equal(result.unplacedCorrections[0].reason, 'invalid-edit');
    }
});
test('rejects malformed, oversized or untrusted response fields', () => {
    for (const extra of [{ rating: 6 }, { rating: '4' }, { rating: 2.5 }, { overallNotes: [] }, { overallNotes: [' '] }, { originalText: 'injected' }, { corrections: [null] }, { corrections: [edit('Hi', 'Hello', { start: 0 })] }, { corrections: Array(51).fill(edit('Hi', 'Hello')) }]) {
        assert.throws(() => run('Hi', [], extra), /Invalid writing review response/);
    }
    assert.throws(() => run('x'.repeat(12001), []), /Invalid writing submission/);
    assert.throws(() => run(' ', []), /Invalid writing submission/);
});
test('accepts a clean response with no invented corrections and copies notes', () => {
    const notes = ['The message is clear.'];
    const result = run('Bonjour !', [], { rating: 5, overallNotes: notes });
    notes.push('changed');
    assert.deepEqual(result.overallNotes, ['The message is clear.']);
    assert.equal(result.rating, 5);
    assert.equal(result.corrections.length, 0);
});
