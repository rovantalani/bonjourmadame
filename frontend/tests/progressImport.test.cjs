const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

function setup() {
    const values = new Map([
        ['wordMastery', JSON.stringify({ 'greetings:1': { known: true, correct: 3, wrong: 2, lastSeen: '2026-09-28T10:00:00.000Z' } })],
        ['quizHistory', JSON.stringify([{ moduleId: 'greetings', sessionType: 'vocabulary', score: 1, total: 2, date: '2026-09-28T10:00:00.000Z' }])],
    ]);
    const calls = [];
    let post = async (_url, body) => ({ data: { ok: true, importId: body.importId } });
    let blockWrites = false;
    const storage = {
        getItem: key => values.get(key) ?? null,
        setItem: (key, value) => { if (blockWrites) throw new Error('Storage full'); values.set(key, value); },
    };
    function reload() {
        const context = { exports: {}, localStorage: storage, crypto: { randomUUID: () => require('node:crypto').randomUUID() },
            require: () => ({ post: (...args) => { calls.push(args); return post(...args); } }) };
        const source = fs.readFileSync(path.join(__dirname, '../src/utils/progressImport.ts'), 'utf8').replace('import.meta.env.VITE_API_BASE', "''");
        vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true, target: ts.ScriptTarget.ES2022 } }).outputText, context);
        return context.exports;
    }
    return { values, calls, reload, setPost: fn => { post = fn; }, blockWrites: value => { blockWrites = value; } };
}

test('failed imports preserve data and retry the same snapshot after refresh', async () => {
    for (const reason of ['offline', 'timeout', '401', '500']) {
        const s = setup(); const original = new Map(s.values);
        s.setPost(async () => { throw new Error(reason); });
        await assert.rejects(s.reload().importLocalProgress(1));
        for (const [key, value] of original) assert.equal(s.values.get(key), value);
        assert.equal(s.reload().getImportStatus(1), 'available');
        s.setPost(async (_url, body) => ({ data: { ok: true, importId: body.importId } }));
        await s.reload().importLocalProgress(1);
        assert.equal(JSON.stringify(s.calls[0][1]), JSON.stringify(s.calls[1][1]));
        assert.equal(s.reload().getImportStatus(1), 'complete');
    }
});

test('success preserves counts, dates, local progress and new work done during import', async () => {
    const s = setup(); let complete;
    s.setPost((_url, body) => new Promise(resolve => { complete = () => resolve({ data: { ok: true, importId: body.importId } }); }));
    const promise = s.reload().importLocalProgress(1);
    const newer = JSON.stringify({ 'greetings:1': { known: false, correct: 3, wrong: 3, lastSeen: '2026-09-28T11:00:00.000Z' } });
    s.values.set('wordMastery', newer);
    s.values.set('quizHistory', '[]');
    complete(); await promise;
    assert.equal(s.values.get('wordMastery'), newer);
    assert.equal(s.values.get('quizHistory'), '[]');
    assert.equal(s.calls[0][1].mastery['greetings:1'].correct, 3);
    assert.equal(s.calls[0][1].mastery['greetings:1'].wrong, 2);
    assert.equal(s.calls[0][1].sessions[0].date, '2026-09-28T10:00:00.000Z');
    await s.reload().importLocalProgress(1);
    assert.equal(s.calls.length, 1);
});

test('simultaneous calls send the same import ID and acknowledgment must match', async () => {
    const s = setup(); s.setPost(async () => ({ data: { ok: true, importId: 'different' } }));
    const results = await Promise.allSettled([s.reload().importLocalProgress(1), s.reload().importLocalProgress(1)]);
    assert.ok(results.every(result => result.status === 'rejected'));
    assert.equal(s.calls[0][1].importId, s.calls[1][1].importId);
    assert.equal(s.reload().getImportStatus(1), 'available');
});

test('storage failures never send an unrecorded import or destroy source data', async () => {
    const s = setup(); s.blockWrites(true);
    await assert.rejects(s.reload().importLocalProgress(1));
    assert.equal(s.calls.length, 0);
    assert.ok(s.values.get('wordMastery'));
});

test('a failed acknowledgment write can safely retry the saved snapshot', async () => {
    const s = setup();
    s.setPost(async (_url, body) => { s.blockWrites(true); return { data: { ok: true, importId: body.importId } }; });
    await assert.rejects(s.reload().importLocalProgress(1));
    s.blockWrites(false);
    s.setPost(async (_url, body) => ({ data: { ok: true, importId: body.importId } }));
    await s.reload().importLocalProgress(1);
    assert.equal(s.calls[0][1].importId, s.calls[1][1].importId);
});

test('import receipts belong to the account and old dismissal flags do not hide progress', async () => {
    const s = setup(); s.values.set('progressImportOffered', 'true');
    assert.equal(s.reload().getImportStatus(1), 'available');
    await s.reload().importLocalProgress(1);
    assert.equal(s.reload().getImportStatus(2), 'available');
    await s.reload().importLocalProgress(2);
    assert.equal(s.calls[1][1].userId, 2);
    assert.notEqual(s.calls[0][1].importId, s.calls[1][1].importId);
});

test('invalid local JSON is preserved and never silently imported as empty progress', async () => {
    const s = setup(); s.values.set('wordMastery', '{broken');
    assert.equal(s.reload().getImportStatus(1), 'available');
    await assert.rejects(s.reload().importLocalProgress(1));
    assert.equal(s.values.get('wordMastery'), '{broken');
    assert.equal(s.calls.length, 0);
});
