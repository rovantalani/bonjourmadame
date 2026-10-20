import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLearning } from '../../context/LearningContext';
import { useSpeech } from '../../hooks/useSpeech';
import { learningPath } from '../../utils/learningRoutes';
import { MicIcon } from '../../components/icons';
import type { SpeakingLesson } from './lessons';
import { useSpeakingLessons } from './useSpeakingLessons';
import { Recorder, type RecordingState } from './recorder';
import { LocalRecognition } from './localRecognition';
import { matchedWords } from './wordProgress';
import './Speaking.css';

function ListenIcon() {
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m11 5-6 4H2v6h3l6 4zM15 8a6 6 0 0 1 0 8M18 5a10 10 0 0 1 0 14" /></svg>;
}

function PhrasePractice({ lesson, index, fr, onMove }: { lesson: SpeakingLesson; index: number; fr: boolean; onMove: (index: number) => void }) {
    const phrase = lesson.phrases[index];
    const locale = fr ? 'en-GB' : 'fr-FR';
    const [recording, setRecording] = useState<RecordingState>({ status: 'idle', seconds: 0 });
    const [recorder] = useState(() => new Recorder(setRecording));
    const [recognition] = useState(() => new LocalRecognition());
    const [transcript, setTranscript] = useState('');
    const [tracking, setTracking] = useState<boolean | null>(null);
    const player = useRef<HTMLAudioElement>(null);
    const mobileList = useRef<HTMLDetailsElement>(null);
    const speech = useSpeech();
    useEffect(() => {
        let active = true;
        void LocalRecognition.available(locale).then(available => { if (active) setTracking(available); });
        return () => { active = false; recorder.dispose(); recognition.stop(); };
    }, [locale, recorder, recognition]);
    useEffect(() => {
        if (recording.status !== 'recording') { recognition.stop(); return; }
        void recognition.start(locale, setTranscript, () => setTracking(false));
        return () => recognition.stop();
    }, [recording.status, recognition, locale]);
    const busy = recording.status === 'recording' || recording.status === 'requesting';
    const matched = matchedWords(phrase.text, transcript);
    const errors = {
        permission: fr ? 'Autorisez le microphone dans votre navigateur, puis réessayez.' : 'Allow microphone access in your browser, then try again.',
        missing: fr ? 'Branchez un microphone et réessayez.' : 'Connect a microphone and try again.',
        unsupported: fr ? 'Utilisez un navigateur compatible, sur HTTPS ou localhost.' : 'Use a supported browser on HTTPS or localhost.',
        empty: fr ? 'Enregistrement vide. Réessayez.' : 'Empty recording. Try again.',
        failed: fr ? 'Enregistrement interrompu. Réessayez.' : 'Recording interrupted. Try again.',
    };
    const selectPhrase = (next: number) => {
        mobileList.current?.removeAttribute('open');
        if (index !== next) onMove(next);
    };
    const phraseItems = () => <ol>{lesson.phrases.map((item, itemIndex) => <li key={item.text}>
        <button type="button" disabled={busy} aria-current={index === itemIndex ? 'step' : undefined} onClick={() => selectPhrase(itemIndex)} title={item.text}>
            <span className="speaking-item-number">{String(itemIndex + 1).padStart(2, '0')}</span><span className="speaking-item-text" lang={fr ? 'en' : 'fr'}>{item.text}</span>
        </button>
    </li>)}</ol>;
    return <div className="speaking-workspace">
        <nav className="speaking-items" aria-label={fr ? 'Phrases' : 'Phrases'}><p className="speaking-label">{lesson.phrases.length} PHRASES</p>{phraseItems()}</nav>
        <details ref={mobileList} className="speaking-mobile-items"><summary>{fr ? 'Phrases' : 'Phrases'} <span>{index + 1} / {lesson.phrases.length}</span></summary>{phraseItems()}</details>
        <section className="speaking-paper speaking-studio" aria-labelledby="speaking-phrase">
            <div className="speaking-studio-top"><span className="speaking-label">{fr ? `PHRASE ${index + 1} SUR ${lesson.phrases.length}` : `PHRASE ${index + 1} OF ${lesson.phrases.length}`}</span>
                <details className="speaking-help"><summary aria-label={fr ? 'À propos de cet exercice' : 'About this exercise'}>?</summary><div>
                    <p>{fr ? 'Écoutez le modèle, puis enregistrez la même phrase. Les mots reconnus deviennent roses lorsque la reconnaissance locale est disponible.' : 'Listen to the example, then record the same phrase. Recognized words turn pink when on-device recognition is available.'}</p>
                    <p>{fr ? 'Le rose indique les mots détectés, pas une note de prononciation. Les fleurs et le passage automatique seront disponibles avec l’évaluation.' : 'Pink marks detected words, not a pronunciation score. Flowers and automatic progression will be available with assessment.'}</p>
                    <p>{fr ? 'Votre enregistrement reste sur cet appareil et est effacé lorsque vous changez de phrase ou quittez la page.' : 'Your recording stays on this device and is cleared when you change phrases or leave the page.'}</p>
                </div></details>
            </div>
            <div className="speaking-example">
                <div className="speaking-sentence-row"><h2 id="speaking-phrase" lang={fr ? 'en' : 'fr'}>{phrase.text}</h2>
                    <button className="speaking-listen" disabled={busy || !speech.supported} aria-label={speech.speaking ? (fr ? 'Arrêter la lecture' : 'Stop listening') : (fr ? 'Écouter la phrase' : 'Listen to the phrase')} title={fr ? 'Écouter' : 'Listen'} aria-pressed={speech.speaking} onClick={() => {
                        player.current?.pause();
                        if (speech.speaking) speech.stop(); else speech.speak(phrase.text, locale);
                    }}><ListenIcon /></button>
                </div>
                <p className="speaking-translation">{phrase.translation}</p>
                {!speech.supported && <p className="speaking-muted">{fr ? 'Lecture vocale indisponible.' : 'Speech playback unavailable.'}</p>}
            </div>
            <div className="speaking-attempt">
                <span className="speaking-label">{fr ? 'À VOUS' : 'YOUR TURN'}</span>
                <p className="speaking-repeat" lang={fr ? 'en' : 'fr'} aria-label={phrase.text}>{phrase.text.split(/\s+/).map((word, wordIndex) => <span key={wordIndex} aria-hidden="true" className={matched[wordIndex] ? 'is-heard' : undefined}>{word}{' '}</span>)}</p>
                <div className="speaking-controls">
                    <button className={`speaking-button speaking-primary${busy ? ' is-recording' : ''}`} onClick={() => {
                        if (recording.status === 'recording') { recognition.stop(); recorder.stop(); }
                        else if (recording.status === 'requesting') recorder.reset();
                        else { speech.stop(); player.current?.pause(); setTranscript(''); void recorder.start(); }
                    }}><MicIcon size={17} aria-hidden="true" />{recording.status === 'recording' ? (fr ? 'Terminer' : 'Stop') : recording.status === 'requesting' ? (fr ? 'Annuler' : 'Cancel') : recording.url ? (fr ? 'Réessayer' : 'Try again') : (fr ? 'Enregistrer' : 'Record')}</button>
                    {recording.status === 'recording' && <span className="speaking-timer" role="timer" aria-label={fr ? 'Durée' : 'Recording duration'}>0:{String(recording.seconds).padStart(2, '0')}</span>}
                    {recording.status === 'requesting' && <span className="speaking-muted" role="status">{fr ? 'Autorisez le microphone…' : 'Allow microphone access…'}</span>}
                </div>
                {recording.url && <audio ref={player} controls src={recording.url} onPlay={speech.stop} aria-label={fr ? 'Votre enregistrement' : 'Your recording'} />}
                {recording.error && <p className="speaking-error" role="alert">{errors[recording.error]}</p>}
                {tracking === false && busy && <p className="speaking-muted" role="status">{fr ? 'Suivi des mots indisponible dans ce navigateur.' : 'Word highlighting is unavailable in this browser.'}</p>}
            </div>
            <footer className="speaking-studio-footer">{fr ? 'Entraînement libre · Évaluation à venir' : 'Free practice · Assessment coming soon'}</footer>
        </section>
    </div>;
}

export default function SpeakingExercise() {
    const { level, exerciseId } = useParams();
    const { language } = useLearning();
    const fr = language === 'en';
    const [index, setIndex] = useState(0);
    const { lessons, loading, failed, reload } = useSpeakingLessons(language);
    const lesson = lessons.find(item => item.id === exerciseId && item.level.toLowerCase() === level);
    return <main className="speaking-page">
        <Link className="speaking-back" to={learningPath(language, `/courses/${level}/speaking`)}>← {fr ? 'Tous les exercices' : 'All speaking exercises'}</Link>
        {loading ? <p role="status">{fr ? 'Chargement…' : 'Loading…'}</p> : failed ? <p role="alert">{fr ? 'Impossible de charger cet exercice.' : 'Could not load this exercise.'} <button className="speaking-button" onClick={reload}>{fr ? 'Réessayer' : 'Retry'}</button></p> : lesson ? <><header className="speaking-header"><span className="speaking-label">{lesson.level} / {fr ? 'EXPRESSION ORALE' : 'SPEAKING'}</span><h1>{lesson.title}</h1></header><PhrasePractice key={`${language}-${lesson.id}-${index}`} lesson={lesson} index={index} fr={fr} onMove={setIndex} /></> : <h1>{fr ? 'Exercice introuvable' : 'Exercise not found'}</h1>}
    </main>;
}
