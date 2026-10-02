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

let stopCurrentSpeech: (() => void) | null = null;

export function useSpeech() {
    const [speaking, setSpeaking] = useState(false);
    const voices = useRef<SpeechSynthesisVoice[]>([]);
    const activeUtterance = useRef<SpeechSynthesisUtterance | null>(null);
    const supported = typeof window !== 'undefined'
        && 'speechSynthesis' in window
        && 'SpeechSynthesisUtterance' in window;

    const stop = useCallback(() => {
        if (activeUtterance.current) {
            activeUtterance.current.onstart = null;
            activeUtterance.current.onend = null;
            activeUtterance.current.onerror = null;
            activeUtterance.current = null;
            window.speechSynthesis.cancel();
            setSpeaking(false);
            stopCurrentSpeech = null;
        }
    }, []);

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
                activeUtterance.current = null;
                synth.cancel();
            }
            if (stopCurrentSpeech === stop) stopCurrentSpeech = null;
        };
    }, [stop]);

    const speak = useCallback((text: string, lang = 'fr-FR') => {
        const synth = window.speechSynthesis;
        if (!synth || typeof SpeechSynthesisUtterance === 'undefined') return;
        stopCurrentSpeech?.();
        const utterance = new SpeechSynthesisUtterance(text);
        const voice = selectVoice(synth.getVoices().length ? synth.getVoices() : voices.current, lang);
        utterance.lang = voice?.lang ?? lang;
        if (voice) utterance.voice = voice;
        activeUtterance.current = utterance;
        stopCurrentSpeech = stop;
        utterance.onstart = () => setSpeaking(true);
        const finish = () => {
            if (activeUtterance.current !== utterance) return;
            activeUtterance.current = null;
            stopCurrentSpeech = null;
            setSpeaking(false);
        };
        utterance.onend = finish;
        utterance.onerror = finish;
        setSpeaking(true);
        synth.speak(utterance);
    }, [stop]);

    return { speak, stop, speaking, supported };
}
