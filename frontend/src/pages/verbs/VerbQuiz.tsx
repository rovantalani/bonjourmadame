import { useLearning } from '../../context/LearningContext';
import { useLearningNavigate as useNavigate } from '../../hooks/useLearningNavigation';
import type { ConjugationRow } from '../../data/courseTypes';
import { gradeAnswer, type AnswerResult } from '../../utils/answerValidator';
import { useT } from '../../utils/i18n';
import { useLearningVisit } from '../../hooks/useLearningVisit';
import LearningCompletion from '../../components/LearningCompletion';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import SpeakerButton from '../../components/SpeakerButton';
import { CheckCircleIcon, RefreshIcon } from '../../components/icons/index';
import './VerbQuiz.css';


interface VerbData {
    infinitive: string;
    translation: string;
    type: string;
    color: string;
    groupId: string;
    rows: ConjugationRow[];
}

type Phase = 'quiz' | 'review' | 'complete';
type CellResult = AnswerResult;


const CEFR_ORDER = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

// All tenses cumulative per level (quizzable only — passeAnterieur excluded)

// Only the NEW tenses introduced at each level (for review verb quizzes)


function displaySujet(sujet: string, form: string): string {
    if (sujet.toLowerCase() === 'je' && /^[aeiouhyàâäéèêëîïôùûüœæ']/i.test(form.trim())) {
        return "j'";
    }
    return sujet;
}

export default function VerbQuiz() {
    const { tenses: TENSES_BY_LEVEL, language } = useLearning();
    const t = useT();
    const { level, verbId } = useParams<{ level: string; verbId: string }>();
    const navigate = useNavigate();
    const isENUI = language === 'en';

    const [verb, setVerb] = useState<VerbData | null>(null);

    const [phase, setPhase] = useState<Phase>('quiz');
    const [tenseIndex, setTenseIndex] = useState(0);
    const [reviewQueue, setReviewQueue] = useState<number[]>([]);
    const [reviewStep, setReviewStep] = useState(0);

    const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);
    const [cellResults, setCellResults] = useState<Record<string, CellResult>>({});

    const [wrongByTense, setWrongByTense] = useState<Record<number, string[]>>({});
    const [correctCount, setCorrectCount] = useState(0);

    const firstInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE}/api/learning/${language}/verbs/conjugation/${verbId}`)
            .then(res => {
                if (!res.ok) throw new Error('Not found');
                return res.json();
            })
            .then((data: VerbData) => setVerb(data))
            .catch(() => {});
    }, [verbId, language]);

    useEffect(() => {
        if (!submitted) {
            setTimeout(() => firstInputRef.current?.focus(), 50);
        }
    }, [tenseIndex, reviewStep, submitted]);

    useLearningVisit(verb !== null);

    if (!verb) {
        return (
            <main className="page">
                <p className="vq-loading">Loading…</p>
            </main>
        );
    }

    const levelKey = (level ?? 'a2').toLowerCase();
    const verbLevel = verb.groupId.toLowerCase();
    const verbLevelIdx = CEFR_ORDER.indexOf(verbLevel);
    const currentLevelIdx = CEFR_ORDER.indexOf(levelKey);
    const isReviewVerb = verbLevelIdx >= 0 && currentLevelIdx > verbLevelIdx;

    // Which tenses to quiz: if review verb → only new tenses for this level; if new verb → all cumulative tenses
    const available = (TENSES_BY_LEVEL[levelKey] ?? []).filter(tense =>
        tense.quizzable && verb.rows.every(row => !!row[tense.key]));
    const previousKeys = new Set((TENSES_BY_LEVEL[CEFR_ORDER[currentLevelIdx - 1]] ?? []).map(tense => tense.key));
    const newTenses = available.filter(tense => !previousKeys.has(tense.key));
    const TENSES = isReviewVerb && newTenses.length ? newTenses : available;

    const handleExit = () => navigate(`/courses/${level}/verbs`);

    const activeTenseIdx = phase === 'review' ? reviewQueue[reviewStep] : tenseIndex;
    const currentTense = TENSES[activeTenseIdx];

    const handleSubmit = () => {
        if (!verb || submitted || !currentTense) return;

        const results: Record<string, CellResult> = {};
        let correct = 0;

        for (const row of verb.rows) {
            if (phase === 'review' && !wrongByTense[activeTenseIdx]?.includes(row.sujet)) {
                continue;
            }
            const expected = (row[currentTense.key] as string | undefined) ?? '';
            const userAnswer = userAnswers[row.sujet] ?? '';
            const result = gradeAnswer(userAnswer, expected);
            const isCorrect = result !== 'wrong';
            results[row.sujet] = result;
            if (isCorrect) correct++;
        }

        setCellResults(results);
        setSubmitted(true);

        setCorrectCount(prev => prev + correct);
    };

    const handleNext = () => {
        if (!submitted) return;
        const remaining = { ...wrongByTense };
        const missed = Object.entries(cellResults).filter(([, result]) => result === 'wrong').map(([subject]) => subject);
        if (missed.length) remaining[activeTenseIdx] = missed;
        else delete remaining[activeTenseIdx];
        setWrongByTense(remaining);
        setUserAnswers({});
        setSubmitted(false);
        setCellResults({});

        if (phase === 'quiz' && tenseIndex < TENSES.length - 1) {
            setTenseIndex(prev => prev + 1);
        } else if (phase === 'review' && reviewStep < reviewQueue.length - 1) {
            setReviewStep(prev => prev + 1);
        } else {
            const queue = Object.keys(remaining).map(Number).sort((a, b) => a - b);
            if (queue.length) {
                setReviewQueue(queue);
                setReviewStep(0);
                setPhase('review');
            } else {
                setPhase('complete');
            }
        }
    };

    const handleRestart = () => {
        setPhase('quiz');
        setTenseIndex(0);
        setReviewQueue([]);
        setReviewStep(0);
        setUserAnswers({});
        setSubmitted(false);
        setCellResults({});
        setWrongByTense({});
        setCorrectCount(0);
    };

    /* ── Completion screen ── */
    if (phase === 'complete') {
        const totalCells = verb.rows.length * TENSES.length;
        const accuracy = totalCells > 0 ? Math.round((correctCount / totalCells) * 100) : 0;
        return (
            <main className="page">
                <div className="vq-complete card">
                    <div className="vq-complete-emoji"><CheckCircleIcon size={52} style={{ color: 'var(--success)' }} /></div>
                    <h1 className="vq-complete-title">{isENUI ? 'Quiz terminé !' : 'Quiz Complete!'}</h1>
                    <p className="vq-complete-verb" style={{ color: 'var(--tag-verbs-text)' }}>
                        <em>{verb.infinitive} — {verb.translation}</em>
                    </p>
                    {isReviewVerb && (
                        <p style={{ fontSize: '0.82rem', color: 'var(--text-3)', marginBottom: '0.5rem' }}>
                            {isENUI ? `Révision — tenses de ${levelKey.toUpperCase()}` : `Review — ${levelKey.toUpperCase()} tenses`}
                        </p>
                    )}

                    <div className="vq-stats-grid">
                        <div className="vq-stat">
                            <span className="vq-stat-value" style={{ color: 'var(--tag-verbs-text)' }}>{correctCount}</span>
                            <span className="vq-stat-label">Score</span>
                        </div>
                        <div className="vq-stat">
                            <span className="vq-stat-value" style={{ color: 'var(--tag-verbs-text)' }}>{totalCells}</span>
                            <span className="vq-stat-label">Total</span>
                        </div>
                        <div className="vq-stat">
                            <span className="vq-stat-value" style={{ color: 'var(--tag-verbs-text)' }}>{accuracy}%</span>
                            <span className="vq-stat-label">{isENUI ? 'Précision' : 'Accuracy'}</span>
                        </div>
                    </div>

                    <LearningCompletion quizPassed />
                    <div className="vq-complete-actions">
                        <button
                            className="btn"
                            style={{ backgroundColor: 'var(--tag-verbs-bg)', color: 'var(--tag-verbs-text)' }}
                            onClick={handleRestart}
                        >
                            {isENUI ? 'Réessayer' : 'Try Again'}
                        </button>
                        <button className="btn btn-secondary" onClick={handleExit}>
                            {isENUI ? 'Retour aux verbes' : 'Back to Verbs'}
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    /* ── Active quiz / review ── */
    const isReview = phase === 'review';
    const progressPct = isReview
        ? ((reviewStep + 1) / reviewQueue.length) * 100
        : ((tenseIndex + 1) / TENSES.length) * 100;

    const stepLabel = isReview
        ? `${isENUI ? 'Révision' : 'Review'} ${reviewStep + 1}/${reviewQueue.length}`
        : `${isENUI ? 'Étape' : 'Step'} ${tenseIndex + 1}/${TENSES.length}`;

    const wrongSubjectsForTense = wrongByTense[activeTenseIdx] ?? [];

    let inputIndex = 0;

    if (!currentTense) {
        return null;
    }

    return (
        <main className="page">
            {/* Top bar */}
            <div className="vq-top-bar">
                <button className="btn btn-secondary vq-exit-btn" onClick={handleExit}>
                    ✕ {isENUI ? 'Quitter' : 'Exit'}
                </button>
                <div className="vq-center-info">
                    <div className="vq-verb-name-row">
                        <span className="vq-verb-name" style={{ color: 'var(--tag-verbs-text)' }}>
                            {verb.infinitive}
                        </span>

                    </div>
                    <span className="vq-verb-hint">{verb.translation}</span>
                    {isReviewVerb && !isReview && (
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-3)' }}>
                            {isENUI ? `Révision — nouveaux temps ${levelKey.toUpperCase()}` : `Review — new ${levelKey.toUpperCase()} tenses`}
                        </span>
                    )}
                </div>
                <span className="vq-counter">
                    {isReview && <RefreshIcon size={12} style={{ verticalAlign: 'middle', marginRight: 3 }} />}{stepLabel}
                </span>
            </div>

            {/* Progress bar */}
            <div className="progress-track vq-progress">
                <div
                    className="progress-fill"
                    style={{ width: `${progressPct}%`, backgroundColor: 'var(--tag-verbs-text)' }}
                />
            </div>

            {/* Tense card */}
            <div className="card vq-card">
                <div className="vq-tense-header">
                    {isReview && (
                        <span className="vq-review-badge">
                            {isENUI ? 'Révision' : 'Review'}
                        </span>
                    )}
                    <h2 className="vq-tense-title" style={{ color: 'var(--tag-verbs-text)' }}>
                        {currentTense.label}
                    </h2>
                    {isReview && (
                        <p className="vq-review-hint">
                            {isENUI
                                ? 'Complétez les formes manquantes'
                                : 'Complete the missing forms'}
                        </p>
                    )}
                </div>

                <table className="vq-table">
                    <tbody>
                        {verb.rows.map((row, i) => {
                            const isPrefill = isReview && !wrongSubjectsForTense.includes(row.sujet);
                            const result = cellResults[row.sujet];
                            const expected = (row[currentTense.key] as string | undefined) ?? '';
                            const isFirst = !isPrefill && inputIndex++ === 0;

                            return (
                                <tr
                                    key={row.sujet}
                                    className={`vq-row${submitted && result ? ` vq-row--${result}` : ''}`}
                                >
                                    <td className="vq-sujet" style={{ color: 'var(--tag-verbs-text)' }}>
                                        {displaySujet(row.sujet, expected)}
                                    </td>
                                    <td className="vq-answer-cell">
                                        {isPrefill ? (
                                            <span className="vq-prefill">{expected}</span>
                                        ) : submitted ? (
                                            <div className="vq-submitted-cell">
                                                <span className={`vq-user-val vq-user-val--${result}`}>
                                                    {userAnswers[row.sujet] || '—'}
                                                </span>
                                                {result === 'partial' && <span className="vq-partial-warning" role="status">{t.quiz.partialWarning}</span>}
                                                {result !== 'correct' && (
                                                    <span className="vq-correct-reveal">
                                                        {expected}
                                                        <SpeakerButton text={expected} lang={isENUI ? 'en-US' : 'fr-FR'} />
                                                    </span>
                                                )}
                                            </div>
                                        ) : (
                                            <input
                                                ref={isFirst ? firstInputRef : undefined}
                                                key={`${activeTenseIdx}-${row.sujet}`}
                                                type="text"
                                                className="vq-cell-input"
                                                style={{ '--focus-color': verb.color } as React.CSSProperties}
                                                value={userAnswers[row.sujet] ?? ''}
                                                onChange={e =>
                                                    setUserAnswers(prev => ({
                                                        ...prev,
                                                        [row.sujet]: e.target.value,
                                                    }))
                                                }
                                                onKeyDown={e => {
                                                    if (e.key === 'Enter') {
                                                        if (i === verb.rows.length - 1) handleSubmit();
                                                        else {
                                                            const inputs = document.querySelectorAll<HTMLInputElement>('.vq-cell-input');
                                                            const idx = [...inputs].indexOf(e.currentTarget);
                                                            inputs[idx + 1]?.focus();
                                                        }
                                                    }
                                                }}
                                                placeholder="…"
                                                autoComplete="off"
                                                spellCheck={false}
                                            />
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <div className="vq-card-actions">
                    {!submitted ? (
                        <button
                            className="btn vq-submit-btn"
                            style={{ backgroundColor: 'var(--tag-verbs-bg)', color: 'var(--tag-verbs-text)' }}
                            onClick={handleSubmit}
                        >
                            {isENUI ? 'Valider' : 'Submit'}
                        </button>
                    ) : (
                        <button
                            className="btn vq-submit-btn"
                            style={{ backgroundColor: 'var(--tag-verbs-bg)', color: 'var(--tag-verbs-text)' }}
                            onClick={handleNext}
                        >
                            {phase === 'quiz' && tenseIndex < TENSES.length - 1
                                ? (isENUI ? 'Suivant →' : 'Next →')
                                : phase === 'review' && reviewStep < reviewQueue.length - 1
                                ? (isENUI ? 'Suivant →' : 'Next →')
                                : Object.values(cellResults).includes('wrong') || Object.entries(wrongByTense).some(([i, subjects]) => Number(i) !== activeTenseIdx && subjects.length > 0)
                                ? (isENUI ? 'Revoir les erreurs →' : 'Review missed answers →')
                                : (isENUI ? 'Terminer ✓' : 'Finish ✓')}
                        </button>
                    )}
                </div>
            </div>

            {/* Stats bar */}
            {!isReview && (
                <div className="vq-stats-bar">
                    <div className="vq-stat-pill vq-stat-correct">
                        <span>✓</span>
                        <span>{correctCount} {isENUI ? 'Correct' : 'Correct'}</span>
                    </div>
                    <div className="vq-stat-pill vq-stat-wrong">
                        <span>✗</span>
                        <span>
                            {Object.values(wrongByTense).reduce((n, arr) => n + arr.length, 0)}{' '}
                            {isENUI ? 'À revoir' : 'To Review'}
                        </span>
                    </div>
                </div>
            )}
        </main>
    );
}
