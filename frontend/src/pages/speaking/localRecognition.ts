interface Recognition {
    processLocally: boolean;
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    onresult: ((event: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
    onerror: (() => void) | null;
    onend: (() => void) | null;
    start: () => void;
    abort: () => void;
}
interface RecognitionConstructor {
    new(): Recognition;
    available?: (options: { langs: string[]; processLocally: boolean }) => Promise<string>;
}
function constructor(): RecognitionConstructor | undefined {
    const browser = window as unknown as { SpeechRecognition?: RecognitionConstructor; webkitSpeechRecognition?: RecognitionConstructor };
    return browser.SpeechRecognition ?? browser.webkitSpeechRecognition;
}

export class LocalRecognition {
    private session?: Recognition;
    private generation = 0;
    static async available(locale: string) {
        try {
            const Engine = constructor();
            return !!Engine?.available && 'processLocally' in Engine.prototype
                && await Engine.available({ langs: [locale], processLocally: true }) === 'available';
        } catch { return false; }
    }
    async start(locale: string, onTranscript: (text: string) => void, onUnavailable: () => void) {
        this.stop();
        const generation = this.generation;
        if (!await LocalRecognition.available(locale)) {
            if (generation === this.generation) onUnavailable();
            return;
        }
        if (generation !== this.generation) return;
        const Engine = constructor()!;
        try {
            const session = new Engine();
            this.session = session;
            session.processLocally = true;
            session.lang = locale;
            session.continuous = true;
            session.interimResults = true;
            session.onresult = event => {
                if (generation !== this.generation) return;
                onTranscript(Array.from(event.results).map(result => result[0]?.transcript ?? '').join(' '));
            };
            session.onerror = () => { if (generation === this.generation) { this.stop(); onUnavailable(); } };
            session.onend = () => { if (generation === this.generation) { this.stop(); onUnavailable(); } };
            session.start();
        } catch { this.stop(); onUnavailable(); }
    }
    stop() {
        this.generation++;
        if (!this.session) return;
        this.session.onresult = null;
        this.session.onerror = null;
        this.session.onend = null;
        try { this.session.abort(); } catch { /* Already stopped by browser. */ }
        this.session = undefined;
    }
}
