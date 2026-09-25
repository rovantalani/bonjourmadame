import { useState, useCallback, useEffect, useRef } from 'react';

function selectVoice(voices: SpeechSynthesisVoice[], lang: string) {
    const locale = lang.toLowerCase();
    const language = locale.split('-')[0];
    const candidates = voices.filter(voice => voice.lang.toLowerCase().replace(/_/g, '-').split('-')[0] === language);
    const score = (voice: SpeechSynthesisVoice) => {
        const name = voice.name.toLowerCase();
        let quality = 0;
        if (/natural|neural|premium/.test(name)) quality = 40;
        else if (/enhanced|google/.test(name)) quality = 30;
        else if (/samantha|ava|audrey|amelie|amélie|thomas/.test(name)) quality = 20;
        return quality + (voice.lang.toLowerCase().replace(/_/g, '-') === locale ? 10 : 0);
    };
    return candidates.sort((a, b) => score(b) - score(a))[0];
}

export function useSpeech() {
    const [speaking, setSpeaking] = useState(false);
    const voices = useRef<SpeechSynthesisVoice[]>([]);
    const activeUtterance = useRef<SpeechSynthesisUtterance | null>(null);

    useEffect(() => {
        const synth = window.speechSynthesis;
        if (!synth) return;
        const updateVoices = () => { voices.current = synth.getVoices(); };
        updateVoices();
        synth.addEventListener('voiceschanged', updateVoices);
        return () => {
            synth.removeEventListener('voiceschanged', updateVoices);
            if (activeUtterance.current) {
                activeUtterance.current.onstart = null;
                activeUtterance.current.onend = null;
                activeUtterance.current.onerror = null;
                synth.cancel();
            }
        };
    }, []);

    const speak = useCallback((text: string, lang = 'fr-FR') => {
        const synth = window.speechSynthesis;
        if (!synth) return;
        synth.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        const voice = selectVoice(synth.getVoices().length ? synth.getVoices() : voices.current, lang);
        utterance.lang = voice?.lang ?? lang;
        if (voice) utterance.voice = voice;
        activeUtterance.current = utterance;
        utterance.onstart = () => setSpeaking(true);
        const finish = () => {
            if (activeUtterance.current !== utterance) return;
            activeUtterance.current = null;
            setSpeaking(false);
        };
        utterance.onend = finish;
        utterance.onerror = finish;
        synth.speak(utterance);
    }, []);

    return { speak, speaking };
}
