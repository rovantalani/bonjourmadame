import { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { learningPath } from '../../utils/learningRoutes';
import { useLearning } from '../../context/LearningContext';
import type { WritingCorrection } from '../../types/writing';
import { writingExercises } from './samples';
import type { WritingLesson, WritingReview } from '../../types/writing';
import './WritingPreview.css';

export default function WritingPreview() {
    const { language } = useLearning();
    const { level, exerciseId } = useParams<{ level: string; exerciseId: string }>();
    const exercise = writingExercises[language].find(item => item.lesson.id === exerciseId && item.lesson.level.toLowerCase() === level);
    const back = <Link className="writing-back" to={learningPath(language, `/courses/${level}/writing`)}>← {language === 'en' ? 'Tous les exercices d’écriture' : 'All writing exercises'}</Link>;
    if (!exercise) return <main className="writing-page">{back}<h1>{language === 'en' ? 'Exercice introuvable' : 'Exercise not found'}</h1></main>;
    return <WritingExercise key={`${language}:${exercise.lesson.id}`} lesson={exercise.lesson} review={exercise.review} back={back} />;
}

function WritingExercise({ lesson, review, back }: { lesson: WritingLesson; review: WritingReview; back: React.ReactNode }) {
    const language = lesson.targetLanguage;
    const fr = review.feedbackLanguage === 'fr';
    const [draft, setDraft] = useState(review.originalText);
    const [reviewing, setReviewing] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [selected, setSelected] = useState<WritingCorrection | null>(null);
    const dialog = useRef<HTMLDialogElement>(null);
    const editor = useRef<HTMLTextAreaElement>(null);
    const heading = useRef<HTMLHeadingElement>(null);
    const opener = useRef<HTMLButtonElement | null>(null);
    const words = draft.trim() ? draft.trim().split(/\s+/u).length : 0;
    const exactSample = draft === review.originalText;
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
        <aside className="writing-notice">{fr ? 'Aperçu interactif : les corrections sont préparées pour le texte exemple uniquement. Votre brouillon reste sur cette page et n’est pas enregistré.' : 'Interactive preview: feedback is prepared for the sample text only. Your draft stays on this page and is not saved.'}</aside>
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
            <textarea ref={editor} id="writing-draft" lang={language} value={draft} onChange={event => setDraft(event.target.value)} spellCheck={false} aria-describedby="writing-sample-help" />
            <p id="writing-sample-help" className="writing-help">{exactSample ? (fr ? 'Explorez les corrections du texte exemple.' : 'Explore the teacher-style corrections on this sample.') : (fr ? 'La correction de textes libres sera disponible à une prochaine étape. Rechargez l’exemple pour voir les corrections.' : 'Feedback on your own writing is coming in a later step. Restore the sample to explore its corrections.')}</p>
            <div className="writing-actions"><button className="writing-primary" disabled={!exactSample} onClick={() => { setReviewing(true); requestAnimationFrame(() => heading.current?.focus()); }}>{fr ? 'Voir les corrections de l’exemple' : 'Review sample text'}</button>
                {!exactSample && <button onClick={() => { setDraft(review.originalText); editor.current?.focus(); }}>{fr ? 'Restaurer le texte exemple' : 'Restore sample text'}</button>}</div>
        </section> : <><section className="writing-paper">
            <div className="writing-section-heading"><h2 ref={heading} tabIndex={-1}>{fr ? 'Votre texte corrigé' : 'Your writing, reviewed'}</h2><div className="writing-review-tools"><span>{review.corrections.length} {fr ? 'annotations' : 'annotations'}</span>
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
                <button className="writing-primary" onClick={() => { setReviewing(false); setShowAll(false); requestAnimationFrame(() => editor.current?.focus()); }}>{fr ? 'Retravailler mon texte' : 'Revise my text'}</button></div>
            <div id="writing-all" hidden={!showAll} className="writing-all">{review.corrections.map(c => <article key={c.id}>{card(c)}</article>)}</div>
        </section>
        <aside className="writing-assessment" aria-labelledby="writing-notes-title">
            <div className="writing-rating" role="img" aria-label={fr ? `${review.rating} sur 5 étoiles` : `${review.rating} out of 5 stars`}>
                <span className="writing-stars" aria-hidden="true">{Array.from({ length: 5 }, (_, index) => <span key={index} className={index < review.rating ? 'is-filled' : ''}>★</span>)}</span>
                <strong aria-hidden="true">{review.rating}/5</strong>
            </div>
            <h2 id="writing-notes-title">{fr ? 'Remarques générales' : 'Overall notes'}</h2>
            <ul>{review.overallNotes.map(note => <li key={note}>{note}</li>)}</ul>
        </aside></>}

        <dialog ref={dialog} className="writing-dialog" aria-label={fr ? 'Détail de la correction' : 'Correction details'} onClose={() => opener.current?.focus()} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
            <button autoFocus className="writing-dialog-close" aria-label={fr ? 'Fermer' : 'Close'} onClick={() => dialog.current?.close()}>×</button>
            {selected && card(selected)}
        </dialog>
    </main>;
}
