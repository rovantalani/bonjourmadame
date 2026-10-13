import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { learningPath } from '../../utils/learningRoutes';
import { useLearning } from '../../context/LearningContext';
import type { WritingCorrection } from '../../types/writing';
import { writingSamples } from './samples';
import { useWritingLessons } from './useWritingLessons';
import type { WritingLesson, WritingReview } from '../../types/writing';
import './WritingPreview.css';

export default function WritingPreview() {
    const { language } = useLearning();
    const { level, exerciseId } = useParams<{ level: string; exerciseId: string }>();
    const { lessons, loading, failed, reload } = useWritingLessons(language);
    const lesson = lessons.find(item => item.id === exerciseId && item.level.toLowerCase() === level);
    const back = <Link className="writing-back" to={learningPath(language, `/courses/${level}/writing`)}>← {language === 'en' ? 'Tous les exercices d’écriture' : 'All writing exercises'}</Link>;
    if (loading) return <main className="writing-page"><p role="status">{language === 'en' ? 'Chargement…' : 'Loading…'}</p></main>;
    if (failed) return <main className="writing-page">{back}<p role="alert">{language === 'en' ? 'Impossible de charger l’exercice.' : 'Could not load this exercise.'}</p><button type="button" onClick={reload}>{language === 'en' ? 'Réessayer' : 'Retry'}</button></main>;
    if (!lesson) return <main className="writing-page">{back}<h1>{language === 'en' ? 'Exercice introuvable' : 'Exercise not found'}</h1></main>;
    return <WritingExercise key={`${language}:${lesson.id}`} lesson={lesson} sampleReview={writingSamples[language].review} back={back} />;
}

function WritingExercise({ lesson, sampleReview, back }: { lesson: WritingLesson; sampleReview: WritingReview; back: React.ReactNode }) {
    const language = lesson.targetLanguage;
    const fr = language === 'en';
    const [review, setReview] = useState(sampleReview);
    const [isSample, setIsSample] = useState(false);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState('');
    const request = useRef<AbortController | null>(null);
    useEffect(() => () => request.current?.abort(), []);
    const [draft, setDraft] = useState('');
    const [reviewing, setReviewing] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [selected, setSelected] = useState<WritingCorrection | null>(null);
    const dialog = useRef<HTMLDialogElement>(null);
    const editor = useRef<HTMLTextAreaElement>(null);
    const heading = useRef<HTMLHeadingElement>(null);
    const opener = useRef<HTMLButtonElement | null>(null);
    const words = draft.trim() ? draft.trim().split(/\s+/u).length : 0;
    async function submit() {
        if (!draft.trim() || request.current) return;
        const controller = new AbortController();
        request.current = controller;
        setBusy(true); setError('');
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE ?? ''}/api/writing/${language}/lessons/${lesson.id}/review`, {
                method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, signal: AbortSignal.any([controller.signal, AbortSignal.timeout(60000)]),
                body: JSON.stringify({ text: draft, feedbackLanguage: fr ? 'fr' : 'en' }),
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.code ?? 'service_unavailable');
            if (controller.signal.aborted) return;
            setReview(data as WritingReview); setIsSample(false); setReviewing(true); setShowAll(false);
            requestAnimationFrame(() => heading.current?.focus());
        } catch (failure) {
            if (controller.signal.aborted) return;
            const code = failure instanceof Error ? failure.message : '';
            const messages: Record<string, [string, string]> = {
                not_configured: ['Writing feedback is not enabled yet. Your text is still here.', 'La correction n’est pas encore activée. Votre texte est conservé ici.'],
                usage_limit: ['You have reached your writing review allowance. Please try again later.', 'Vous avez atteint votre quota de corrections. Réessayez plus tard.'],
                already_processing: ['This text is already being reviewed. Wait a moment, then retry.', 'Ce texte est déjà en cours de correction. Patientez, puis réessayez.'],
                evaluation_refused: ['This text could not be reviewed. Please revise it and try again.', 'Ce texte n’a pas pu être corrigé. Modifiez-le et réessayez.'],
            };
            setError((messages[code] ?? ['Could not get feedback. Your text is still here; please retry.', 'La correction a échoué. Votre texte est conservé ; réessayez.'])[fr ? 1 : 0]);
        } finally { if (!controller.signal.aborted) { setBusy(false); request.current = null; } }
    }
    const label = (c: WritingCorrection) => c.kind === 'insertion' ? (fr ? 'Mot manquant' : 'Missing word') : c.kind === 'deletion' ? (fr ? 'Supprimer' : 'Remove') : c.kind === 'suggestion' ? (fr ? 'Suggestion facultative' : 'Optional suggestion') : (fr ? 'Correction' : 'Correction');
    const card = (c: WritingCorrection) => <>
        <p className="writing-eyebrow">{c.category}</p>
        <h3>{label(c)}</h3>
        <p className="writing-replacement" lang={language}>{c.original && <del>{c.original}</del>} {c.replacement ? <ins>{c.replacement}</ins> : <span>{fr ? 'À supprimer' : 'Remove this word'}</span>}</p>
        <p>{c.explanation}</p>
    </>;
    const textParts = [];
    let cursor = 0;
    for (const correction of review.corrections) {
        textParts.push(review.originalText.slice(cursor, correction.start));
        textParts.push(<button key={correction.id} type="button" className={`writing-mark writing-mark--${correction.kind}`}
            aria-haspopup="dialog" aria-label={`${label(correction)}: ${correction.original || correction.replacement}`}
            onClick={event => { opener.current = event.currentTarget; setSelected(correction); dialog.current?.showModal(); }}>
            {correction.kind === 'insertion' ? <span>{correction.replacement}</span> : correction.kind === 'suggestion' ? correction.original : <del>{correction.original}</del>}
        </button>);
        cursor = correction.end;
    }
    textParts.push(review.originalText.slice(cursor));

    return <main className="writing-page">
        {back}
        <header><p className="writing-eyebrow">{fr ? 'ATELIER D’ÉCRITURE' : 'WRITING WORKSHOP'} · {lesson.level}</p><h1>{lesson.title}</h1>
            <p className="writing-intro">{fr ? 'Écrivez, observez les corrections, puis essayez à nouveau.' : 'Write, explore the corrections, and try again.'}</p></header>

        <section className="writing-prompt" aria-labelledby="writing-prompt-title">
            <div className="writing-prompt-header">
                <p className="writing-eyebrow">{fr ? 'À VOUS D’ÉCRIRE' : 'YOUR WRITING TASK'}</p>
                <span className="writing-word-target">{lesson.suggestedWords.min}–{lesson.suggestedWords.max} {fr ? 'mots conseillés' : 'suggested words'}</span>
            </div>
            <h2 id="writing-prompt-title">{lesson.prompt}</h2>
            <div className="writing-prompt-focus">
                <p>{fr ? 'À inclure' : 'Focus on'}</p>
                <ul>{lesson.learningObjectives.map(objective => <li key={objective}>{objective}</li>)}</ul>
            </div>
        </section>
        {!reviewing ? <section className="writing-paper">
            <div className="writing-section-heading"><label htmlFor="writing-draft">{fr ? 'Votre texte' : 'Your text'}</label><span>{words} {fr ? 'mots' : 'words'}</span></div>
            <textarea ref={editor} id="writing-draft" lang={language} maxLength={6000} disabled={busy} value={draft} onChange={event => setDraft(event.target.value)} spellCheck={false} aria-describedby="writing-sample-help" />
            <p id="writing-sample-help" className="writing-help">{fr ? 'Votre texte est envoyé à OpenAI pour correction. Les retours sont générés par une IA. Votre brouillon reste sur cette page.' : 'Your text is sent to OpenAI for feedback. Corrections are AI-generated. Your draft stays on this page.'}</p>
            {error && <p className="writing-error" role="alert">{error}</p>}
            <div className="writing-actions"><button className="writing-primary" disabled={busy || !draft.trim()} onClick={submit}>{busy ? (fr ? 'Correction en cours…' : 'Reviewing…') : error ? (fr ? 'Réessayer' : 'Retry feedback') : (fr ? 'Corriger mon texte' : 'Get feedback')}</button>
                <button disabled={busy} onClick={() => { setReview(sampleReview); setIsSample(true); setReviewing(true); setShowAll(false); requestAnimationFrame(() => heading.current?.focus()); }}>{fr ? 'Voir un exemple corrigé' : 'See a corrected example'}</button></div>
            {busy && <p role="status" className="writing-help">{fr ? 'Votre correction sera prête dans quelques instants.' : 'Your feedback will be ready shortly.'}</p>}
        </section> : <><section className="writing-paper">
            <div className="writing-section-heading"><h2 ref={heading} tabIndex={-1}>{isSample ? (fr ? 'Exemple corrigé' : 'Sample review') : (fr ? 'Votre texte corrigé' : 'Your writing, reviewed')}</h2><div className="writing-review-tools"><span>{review.corrections.length} {fr ? 'annotations' : 'annotations'}</span>
                <details className="writing-help-menu" onKeyDown={event => {
                    if (event.key === 'Escape') {
                        event.currentTarget.open = false;
                        event.currentTarget.querySelector('summary')?.focus();
                    }
                }}>
                    <summary aria-label={fr ? 'Comprendre les annotations' : 'How to read the annotations'} title={fr ? 'Comprendre les annotations' : 'How to read the annotations'}>?</summary>
                    <div className="writing-legend">
                        <strong>{fr ? 'Les annotations' : 'Reading the corrections'}</strong>
                        <p><del>{fr ? 'Erreur' : 'Mistake'}</del><span>{fr ? 'Cliquez sur le texte barré pour voir la correction.' : 'Click crossed-out text to see the correction.'}</span></p>
                        <p><span className="writing-optional">{fr ? 'Suggestion facultative' : 'Optional improvement'}</span><span>{fr ? 'Une autre formulation possible, pas une erreur.' : 'Another way to phrase it, rather than an error.'}</span></p>
                        <p><strong className="writing-insertion-example">{fr ? 'Mot ajouté' : 'Added word'}</strong><span>{fr ? 'Les mots manquants sont ajoutés et surlignés en rouge. Cliquez pour comprendre pourquoi.' : 'Missing words are added with a red highlight. Click to see why they are needed.'}</span></p>
                    </div>
                </details>
            </div></div>
            <p className="writing-help">{fr ? 'Cliquez sur une annotation pour comprendre la correction.' : 'Click a marked passage to see the correction and why it matters.'}</p>
            <p className="writing-annotated" lang={language}>{textParts}</p>
            <div className="writing-actions"><button aria-expanded={showAll} aria-controls="writing-all" onClick={() => setShowAll(!showAll)}>{showAll ? (fr ? 'Masquer les corrections' : 'Hide all corrections') : (fr ? 'Voir toutes les corrections' : 'Show all corrections')}</button>
                <button className="writing-primary" onClick={() => { setReviewing(false); setShowAll(false); requestAnimationFrame(() => editor.current?.focus()); }}>{isSample ? (fr ? 'Revenir à mon texte' : 'Back to my writing') : (fr ? 'Retravailler mon texte' : 'Revise my text')}</button></div>
            <div id="writing-all" hidden={!showAll} className="writing-all">{review.corrections.map(c => <article key={c.id}>{card(c)}</article>)}</div>
        </section>
        <aside className="writing-assessment" aria-labelledby="writing-notes-title">
            <div className="writing-rating" role="img" aria-label={fr ? `${review.rating} sur 5 étoiles` : `${review.rating} out of 5 stars`}>
                <span className="writing-stars" aria-hidden="true">{Array.from({ length: 5 }, (_, index) => <span key={index} className={index < review.rating ? 'is-filled' : ''}>★</span>)}</span>
                <strong aria-hidden="true">{review.rating}/5</strong>
            </div>
            <h2 id="writing-notes-title">{fr ? 'Remarques générales' : 'Overall notes'}</h2>
            <ul>{review.overallNotes.map(note => <li key={note}>{note}</li>)}</ul>
            {review.unplacedCorrections.length > 0 && <div className="writing-general-feedback">
                <h3>{fr ? 'Autres remarques' : 'Additional notes'}</h3>
                <ul>{review.unplacedCorrections.map((note, index) => <li key={index}>{note.explanation}</li>)}</ul>
            </div>}
        </aside></>}

        <dialog ref={dialog} className="writing-dialog" aria-label={fr ? 'Détail de la correction' : 'Correction details'} onClose={() => opener.current?.focus()} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
            <button autoFocus className="writing-dialog-close" aria-label={fr ? 'Fermer' : 'Close'} onClick={() => dialog.current?.close()}>×</button>
            {selected && card(selected)}
        </dialog>
    </main>;
}
