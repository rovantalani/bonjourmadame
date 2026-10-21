const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const path = require('node:path');
const compiled = ts.transpileModule(fs.readFileSync(path.join(__dirname, '../src/pages/speaking/recorder.ts'), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
function setup(options = {}) {
    const states = [], revoked = [], tracks = [], recorders = [];
    let tick, now = 0;
    function stream() {
        const track = { stopped: false, stop() { this.stopped = true; } };
        tracks.push(track);
        return { getTracks: () => [track] };
    }
    class MediaRecorder {
        state = 'inactive'; mimeType = 'audio/webm';
        constructor() { recorders.push(this); }
        start() { this.state = 'recording'; }
        stop() {
            this.state = 'inactive';
            queueMicrotask(() => {
                this.ondataavailable?.({ data: new Blob(options.empty ? [] : ['audio']) });
                this.onstop?.();
            });
        }
    }
    const exports = {};
    vm.runInNewContext(compiled, {
        exports, Blob, Error, Date: { now: () => now },
        navigator: options.unsupported ? {} : { mediaDevices: { getUserMedia: options.getUserMedia ?? (async () => stream()) } },
        MediaRecorder,
        URL: { createObjectURL: () => 'blob:test', revokeObjectURL: url => revoked.push(url) },
        setInterval: fn => { tick = fn; return 1; }, clearInterval: () => { tick = undefined; },
    });
    return { recorder: new exports.Recorder(state => states.push(state)), states, tracks, revoked, recorders, stream,
        advance: seconds => { now += seconds * 1000; tick?.(); } };
}
const flush = () => new Promise(resolve => setImmediate(resolve));
test('records, stops microphone, exposes playback, and revokes playback on discard', async () => {
    const s = setup();
    await s.recorder.start();
    assert.equal(s.states.at(-1).status, 'recording');
    s.recorder.stop(); await flush();
    assert.equal(s.states.at(-1).status, 'ready');
    assert.equal(s.states.at(-1).url, 'blob:test');
    assert.ok(s.tracks.every(track => track.stopped));
    s.recorder.reset();
    assert.deepEqual(s.revoked, ['blob:test']);
    assert.equal(s.states.at(-1).status, 'idle');
});
test('late microphone permission after navigation releases the stream without recording', async () => {
    let resolve;
    const s = setup({ getUserMedia: () => new Promise(r => { resolve = r; }) });
    const pending = s.recorder.start();
    s.recorder.dispose();
    resolve(s.stream()); await pending;
    assert.ok(s.tracks[0].stopped);
    assert.equal(s.recorders.length, 0);
    assert.equal(s.states.length, 1);
});
test('automatically stops at twenty seconds', async () => {
    const s = setup(); await s.recorder.start(); s.advance(20); await flush();
    assert.equal(s.states.at(-1).status, 'ready');
    assert.equal(s.states.at(-1).seconds, 20);
    assert.ok(s.tracks[0].stopped);
});
test('permission denial is actionable and does not create a recording', async () => {
    const error = new Error('denied'); error.name = 'NotAllowedError';
    const s = setup({ getUserMedia: async () => { throw error; } });
    await s.recorder.start();
    assert.equal(s.states.at(-1).error, 'permission');
    assert.equal(s.recorders.length, 0);
});
test('empty recordings are rejected', async () => {
    const s = setup({ empty: true }); await s.recorder.start(); s.recorder.stop(); await flush();
    assert.equal(s.states.at(-1).error, 'empty');
    assert.equal(s.states.at(-1).url, undefined);
});
test('unmount while recording prevents late playback updates', async () => {
    const s = setup(); await s.recorder.start(); s.recorder.dispose(); await flush();
    assert.ok(s.tracks[0].stopped);
    assert.equal(s.states.at(-1).status, 'recording');
});
test('unsupported browsers get an explicit error', async () => {
    const s = setup({ unsupported: true }); await s.recorder.start();
    assert.equal(s.states.at(-1).error, 'unsupported');
});
