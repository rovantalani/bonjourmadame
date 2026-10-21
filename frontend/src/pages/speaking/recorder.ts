export type RecordingState = { status: 'idle' | 'requesting' | 'recording' | 'ready' | 'error'; seconds: number; url?: string; error?: 'permission' | 'missing' | 'unsupported' | 'empty' | 'failed' };
export const MAX_SECONDS = 20;

// Own the microphone and object URL in one place, including late permission responses.
export class Recorder {
    private generation = 0;
    private stream?: MediaStream;
    private recorder?: MediaRecorder;
    private timer?: ReturnType<typeof setInterval>;
    private url?: string;
    private seconds = 0;
    private update: (state: RecordingState) => void;
    constructor(update: (state: RecordingState) => void) { this.update = update; }
    private release() {
        clearInterval(this.timer);
        if (this.recorder) {
            this.recorder.ondataavailable = null;
            this.recorder.onstop = null;
            this.recorder.onerror = null;
            if (this.recorder.state !== 'inactive') this.recorder.stop();
        }
        this.stream?.getTracks().forEach(track => track.stop());
        this.stream = undefined;
        this.recorder = undefined;
    }
    dispose() {
        this.generation++;
        this.release();
        if (this.url) URL.revokeObjectURL(this.url);
        this.url = undefined;
    }
    reset() { this.dispose(); this.update({ status: 'idle', seconds: 0 }); }
    stop() {
        if (this.recorder?.state === 'recording') this.recorder.stop();
        clearInterval(this.timer);
        this.stream?.getTracks().forEach(track => track.stop());
    }
    async start() {
        this.dispose();
        const generation = this.generation;
        this.seconds = 0;
        if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
            this.update({ status: 'error', seconds: 0, error: 'unsupported' }); return;
        }
        this.update({ status: 'requesting', seconds: 0 });
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            if (generation !== this.generation) { stream.getTracks().forEach(track => track.stop()); return; }
            this.stream = stream;
            const recorder = new MediaRecorder(stream);
            this.recorder = recorder;
            const chunks: Blob[] = [];
            recorder.ondataavailable = event => { if (event.data.size) chunks.push(event.data); };
            recorder.onerror = () => {
                this.release();
                this.update({ status: 'error', seconds: this.seconds, error: 'failed' });
            };
            recorder.onstop = () => {
                if (generation !== this.generation) return;
                const blob = new Blob(chunks, { type: recorder.mimeType });
                this.release();
                if (!blob.size) { this.update({ status: 'error', seconds: 0, error: 'empty' }); return; }
                this.url = URL.createObjectURL(blob);
                this.update({ status: 'ready', seconds: this.seconds, url: this.url });
            };
            recorder.start();
            const started = Date.now();
            this.update({ status: 'recording', seconds: 0 });
            this.timer = setInterval(() => {
                this.seconds = Math.min(MAX_SECONDS, Math.floor((Date.now() - started) / 1000));
                this.update({ status: 'recording', seconds: this.seconds });
                if (this.seconds >= MAX_SECONDS) this.stop();
            }, 250);
        } catch (error) {
            if (generation !== this.generation) return;
            this.release();
            const name = error instanceof Error ? error.name : '';
            this.update({ status: 'error', seconds: 0, error: name === 'NotAllowedError' ? 'permission' : name === 'NotFoundError' ? 'missing' : 'failed' });
        }
    }
}
