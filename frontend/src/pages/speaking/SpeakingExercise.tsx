import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLearning } from '../../context/LearningContext';
import { useSpeech } from '../../hooks/useSpeech';
import { learningPath } from '../../utils/learningRoutes';
import { MicIcon } from '../../components/icons';
import type { SpeakingLesson } from './lessons';
import { useSpeakingLessons } from './useSpeakingLessons';
import { MAX_SECONDS, Recorder, type RecordingState } from './recorder';
import './Speaking.css';

function PhrasePractice({ lesson, index, fr, onMove }: { lesson: SpeakingLesson; index: number; fr: boolean; onMove: (index: number) => void }) {
    const phrase = lesson.phrases[index];
    const [recording, setRecording] = useState<RecordingState>({ status: 'idle', seconds: 0 });
    const [recorder] = useState(() => new Recorder(setRecording));
    const [sample, setSample] = useState(false);
    const [wordOpen, setWordOpen] = useState(false);
    const player = useRef<HTMLAudioElement>(null);
    const speech = useSpeech();
    useEffect(() => () => recorder.dispose(), [recorder]);
    const busy = recording.status === 'recording' || recording.status === 'requesting';
    const errors = {
        permission: fr ? 'L’accès au microphone a été refusé. Autorisez-le dans votre navigateur, puis réessayez.' : 'Microphone access was denied. Allow it in your browser, then try again.',
        missing: fr ? 'Aucun microphone trouvé. Branchez-en un et réessayez.' : 'No microphone found. Connect one and try again.',
        unsupported: fr ? 'L’enregistrement nécessite un navigateur compatible et une connexion HTTPS (ou localhost).' : 'Recording needs a supported browser on HTTPS (or localhost).',
        empty: fr ? 'Cet enregistrement est vide. Réessayez.' : 'This recording is empty. Please try again.',
        failed: fr ? 'L’enregistrement a été interrompu. Vérifiez votre microphone et réessayez.' : 'Recording was interrupted. Check your microphone and try again.',
    };
    return <>
        <nav className="speaking-phrase-list" aria-label={fr ? 'Phrases de cet exercice' : 'Phrases in this exercise'}>
            <div className="speaking-phrase-list-heading"><h2>{fr ? 'Les phrases de cet exercice' : 'Phrases in this exercise'}</h2><span>{lesson.phrases.length} phrases</span></div>
            <ol>{lesson.phrases.map((item, phraseIndex) => <li key={item.text}><button
                type="button" disabled={busy} aria-current={phraseIndex === index ? 'step' : undefined}
                onClick={() => { if (phraseIndex !== index) onMove(phraseIndex); }}>
                <span className="speaking-phrase-number">{String(phraseIndex + 1).padStart(2, '0')}</span>
                <span lang={fr ? 'en' : 'fr'}>{item.text}</span>
            </button></li>)}</ol>
        </nav>
        <section className="speaking-paper speaking-prompt" aria-labelledby="speaking-phrase">
            <div className="speaking-card-heading"><span className="speaking-label">{fr ? `PHRASE ${index + 1} SUR ${lesson.phrases.length}` : `PHRASE ${index + 1} OF ${lesson.phrases.length}`}</span><span>{fr ? 'Écoutez, puis répétez' : 'Listen, then repeat'}</span></div>
            <h2 id="speaking-phrase" lang={fr ? 'en' : 'fr'}>{phrase.text}</h2>
            <p className="speaking-translation">{phrase.translation}</p>
            <div className="speaking-listen-row"><button className="speaking-button" disabled={busy || !speech.supported} onClick={() => {
                player.current?.pause();
                if (speech.speaking) speech.stop(); else speech.speak(phrase.text, fr ? 'en-GB' : 'fr-FR');
            }}><span aria-hidden="true">{speech.speaking ? '■' : '▷'}</span> {speech.speaking ? (fr ? 'Arrêter' : 'Stop listening') : (fr ? 'Écouter la phrase' : 'Listen to the phrase')}</button>
                {!speech.supported && <span>{fr ? 'Lecture vocale indisponible.' : 'Speech playback unavailable.'}</span>}</div>
        <div className="speaking-record" aria-labelledby="record-heading">
            <div className="speaking-card-heading"><h2 id="record-heading">{fr ? 'Votre enregistrement' : 'Your recording'}</h2><span className="speaking-timer">0:{String(recording.seconds).padStart(2, '0')} / 0:{MAX_SECONDS}</span></div>
            {busy && <p className="speaking-record-status" role="status">{recording.status === 'recording' ? (fr ? 'Enregistrement en cours…' : 'Recording…') : (fr ? 'Autorisez votre microphone…' : 'Allow microphone access…')}</p>}
            {recording.url && <audio ref={player} controls src={recording.url} onPlay={speech.stop} aria-label={fr ? 'Votre enregistrement' : 'Your recording'} />}
            <div className="speaking-controls">
                {recording.status === 'recording' ? <button className="speaking-button speaking-primary" onClick={() => recorder.stop()}>■ {fr ? 'Terminer' : 'Stop recording'}</button> : recording.status === 'requesting' ? <button className="speaking-button" onClick={() => recorder.reset()}>{fr ? 'Annuler' : 'Cancel'}</button> : <button className="speaking-button speaking-primary" onClick={() => { speech.stop(); player.current?.pause(); void recorder.start(); }}><MicIcon size={16} aria-hidden="true" />{recording.url ? (fr ? 'Recommencer' : 'Record again') : (fr ? 'Enregistrer' : 'Record')}</button>}
                {recording.url && <button className="speaking-button" onClick={() => recorder.reset()}>{fr ? 'Supprimer' : 'Discard'}</button>}
            </div>
            {recording.error && <p className="speaking-error" role="alert">{errors[recording.error]}</p>}
            <p className="speaking-local-note">{fr ? 'Votre audio reste sur cet appareil. Il est effacé lorsque vous changez de phrase ou quittez la page.' : 'Your audio stays on this device. It is cleared when you change phrases or leave this page.'}</p>
        </div>
        </section>
        <nav className="speaking-pagination" aria-label={fr ? 'Navigation des phrases' : 'Phrase navigation'}><button className="speaking-button" disabled={index === 0 || busy} onClick={() => onMove(index - 1)}>← {fr ? 'Précédente' : 'Previous'}</button><span>{index + 1} / {lesson.phrases.length}</span><button className="speaking-button" disabled={index === lesson.phrases.length - 1 || busy} onClick={() => onMove(index + 1)}>{fr ? 'Suivante' : 'Next phrase'} →</button></nav>
        <div className="speaking-assessment-notice"><span>{fr ? 'Évaluation de la prononciation à venir.' : 'Pronunciation assessment coming soon.'}</span><button className="speaking-text-button" aria-expanded={sample} onClick={() => setSample(!sample)}>{sample ? (fr ? 'Masquer l’aperçu' : 'Hide preview') : (fr ? 'Aperçu des commentaires' : 'Preview feedback')}</button></div>
        {sample && <><section className="speaking-paper speaking-feedback" aria-label={fr ? 'Exemple de commentaires' : 'Sample feedback'}>
            <div className="speaking-card-heading"><span className="speaking-label">{fr ? 'EXEMPLE UNIQUEMENT' : 'SAMPLE ONLY'}</span><details className="speaking-help"><summary aria-label={fr ? 'Comprendre les indications' : 'About the highlights'}>?</summary><p>{fr ? 'Les mots soulignés indiquent un passage à écouter de nouveau. Cliquez pour en savoir plus.' : 'Underlined words mark a part to listen to again. Click for details.'}</p></details></div>
            <p className="speaking-sample-disclaimer">{fr ? 'Ces commentaires illustrent le résultat à venir. Ils ne concernent pas votre enregistrement.' : 'This shows how feedback will look. It is not an assessment of your recording.'}</p>
            <p className="speaking-sample-phrase" lang={fr ? 'en' : 'fr'}>{fr ? 'I live in ' : 'J’habite à '}<button aria-expanded={wordOpen} className="speaking-mark" onClick={() => setWordOpen(!wordOpen)}>{fr ? 'London.' : 'Paris.'}</button></p>
            {wordOpen && <p className="speaking-word-note">{fr ? 'London : ce mot est moins net dans cet exemple. Écoutez le modèle pour comparer.' : 'Paris: this word is less clear in this example. Listen to the model to compare.'}</p>}
            </section><section className="speaking-paper speaking-overall"><div className="speaking-rating"><span aria-hidden="true">★★★★☆</span><strong>{fr ? '4/5 · Exemple' : '4/5 · Example'}</strong></div><h3>{fr ? 'Vue d’ensemble' : 'Overall notes'}</h3><ul><li>{fr ? 'La plupart des mots sont clairs.' : 'Most words are clear.'}</li><li>{fr ? 'Le dernier mot est moins précis que le reste de la phrase.' : 'The final word is less clear than the rest of the phrase.'}</li></ul>
        </section></>}

    </>;
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
        {loading ? <p role="status">{fr ? 'Chargement…' : 'Loading…'}</p> : failed ? <p role="alert">{fr ? 'Impossible de charger cet exercice.' : 'Could not load this exercise.'} <button className="speaking-button" onClick={reload}>{fr ? 'Réessayer' : 'Retry'}</button></p> : lesson ? <><header className="speaking-header"><span className="speaking-label">{lesson.level} / {fr ? 'ÉCOUTER & RÉPÉTER' : 'LISTEN & REPEAT'}</span><h1>{lesson.title}</h1><p>{lesson.description}</p></header><PhrasePractice key={`${language}-${lesson.id}-${index}`} lesson={lesson} index={index} fr={fr} onMove={setIndex} /></> : <h1>{fr ? 'Exercice introuvable' : 'Exercise not found'}</h1>}
    </main>;
}
