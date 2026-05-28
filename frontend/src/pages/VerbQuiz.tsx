import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { loadLearningMode } from '../utils/settings';
import './VerbQuiz.css';

interface ConjugationRow {
    sujet: string;
    present: string;
    passeCompose: string;
    imparfait: string;
    futurSimple: string;
}

interface VerbData {
    infinitive: string;
    translation: string;
    type: string;
    color: string;
    groupId: string;
    rows: ConjugationRow[];
}

type TenseKey = 'present' | 'passeCompose' | 'imparfait' | 'futurSimple';
type Phase = 'quiz' | 'review' | 'complete';
type CellResult = 'correct' | 'wrong';

const TENSES: { key: TenseKey; label: string; labelFR: string }[] = [
    { key: 'present',      label: 'Présent',        labelFR: 'Présent'        },
    { key: 'passeCompose', label: 'Passé composé',   labelFR: 'Passé composé'  },
    { key: 'imparfait',    label: 'Imparfait',       labelFR: 'Imparfait'      },
    { key: 'futurSimple',  label: 'Futur simple',    labelFR: 'Futur simple'   },
];

function normalize(s: string): string {
    return s.toLowerCase().trim().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

export default function VerbQuiz() {
    const { level, verbId } = useParams<{ level: string; verbId: string }>();
    const navigate = useNavigate();
    const isENUI = loadLearningMode() === 'learn-english';

    const [verb, setVerb] = useState<VerbData | null>(null);

    // Phase & tense tracking
    const [phase, setPhase] = useState<Phase>('quiz');
    const [tenseIndex, setTenseIndex] = useState(0);
    const [reviewQueue, setReviewQueue] = useState<number[]>([]);
    const [reviewStep, setReviewStep] = useState(0);

    // Per-tense input / feedback state
    const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);
    const [cellResults, setCellResults] = useState<Record<string, CellResult>>({});

    // Accumulated misses across the quiz phase
    const [wrongByTense, setWrongByTense] = useState<Record<number, string[]>>({});

    // Stats (quiz phase only)
    const [correctCount, setCorrectCount] = useState(0);

    const firstInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const langParam = loadLearningMode() === 'learn-english' ? '?lang=fr' : '';
        fetch(`${import.meta.env.VITE_API_BASE}/api/conjugation/${verbId}${langParam}`)
            .then(res => {
                if (!res.ok) throw new Error('Not found');
                return res.json();
            })
            .then((data: VerbData) => setVerb(data))
            .catch(() => {});
    }, [verbId]);

    // Focus first input when tense changes
    useEffect(() => {
        if (!submitted) {
            setTimeout(() => firstInputRef.current?.focus(), 50);
        }
    }, [tenseIndex, reviewStep, submitted]);

    const handleExit = () => navigate(`/courses/${level}/verbs/${verb?.groupId ?? 'regular-verbs'}`);

    // Current tense index (0-3) regardless of phase
    const activeTenseIdx = phase === 'review' ? reviewQueue[reviewStep] : tenseIndex;
    const currentTense = TENSES[activeTenseIdx];

    const handleSubmit = () => {
        if (!verb || submitted) return;

        const results: Record<string, CellResult> = {};
        const wrongSubjects: string[] = [];
        let correct = 0;

        for (const row of verb.rows) {
            // In review mode, skip rows that were correct in the quiz (pre-filled)
            if (phase === 'review' && !wrongByTense[activeTenseIdx]?.includes(row.sujet)) {
                continue;
            }
            const expected = row[currentTense.key];
            const userAnswer = userAnswers[row.sujet] ?? '';
            const isCorrect = normalize(userAnswer) === normalize(expected);
            results[row.sujet] = isCorrect ? 'correct' : 'wrong';
            if (isCorrect) correct++;
            else wrongSubjects.push(row.sujet);
        }

        setCellResults(results);
        setSubmitted(true);

        if (phase === 'quiz') {
            setCorrectCount(prev => prev + correct);
            if (wrongSubjects.length > 0) {
                setWrongByTense(prev => ({ ...prev, [activeTenseIdx]: wrongSubjects }));
            }
        }
    };

    const handleNext = () => {
        setUserAnswers({});
        setSubmitted(false);
        setCellResults({});

        if (phase === 'quiz') {
            if (tenseIndex < 3) {
                setTenseIndex(prev => prev + 1);
            } else {
                // All 4 tenses done — build review queue from accumulated misses
                const queue = Object.keys(wrongByTense).map(Number).sort((a, b) => a - b);
                if (queue.length > 0) {
                    setReviewQueue(queue);
                    setReviewStep(0);
                    setPhase('review');
                } else {
                    setPhase('complete');
                }
            }
        } else if (phase === 'review') {
            if (reviewStep < reviewQueue.length - 1) {
                setReviewStep(prev => prev + 1);
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

    if (!verb) {
        return (
            <main className="page">
                <p className="vq-loading">Loading…</p>
            </main>
        );
    }

    /* ── Completion screen ── */
    if (phase === 'complete') {
        const totalCells = verb.rows.length * TENSES.length; // 6 × 4 = 24
        const accuracy = totalCells > 0 ? Math.round((correctCount / totalCells) * 100) : 0;
        return (
            <main className="page">
                <div className="vq-complete card">
                    <div className="vq-complete-emoji">🎉</div>
                    <h1 className="vq-complete-title">{isENUI ? 'Quiz terminé !' : 'Quiz Complete!'}</h1>
                    <p className="vq-complete-verb" style={{ color: verb.color }}>
                        <em>{verb.infinitive} — {verb.translation}</em>
                    </p>

                    <div className="vq-stats-grid">
                        <div className="vq-stat">
                            <span className="vq-stat-value" style={{ color: verb.color }}>{correctCount}</span>
                            <span className="vq-stat-label">{isENUI ? 'Score' : 'Score'}</span>
                        </div>
                        <div className="vq-stat">
                            <span className="vq-stat-value" style={{ color: verb.color }}>{totalCells}</span>
                            <span className="vq-stat-label">{isENUI ? 'Total' : 'Total'}</span>
                        </div>
                        <div className="vq-stat">
                            <span className="vq-stat-value" style={{ color: verb.color }}>{accuracy}%</span>
                            <span className="vq-stat-label">{isENUI ? 'Précision' : 'Accuracy'}</span>
                        </div>
                    </div>

                    <div className="vq-complete-actions">
                        <button
                            className="btn"
                            style={{ backgroundColor: verb.color, color: '#fff' }}
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
        : `${isENUI ? 'Étape' : 'Step'} ${tenseIndex + 1}/4`;

    const wrongSubjectsForTense = wrongByTense[activeTenseIdx] ?? [];

    let inputIndex = 0;

    return (
        <main className="page">
            {/* Top bar */}
            <div className="vq-top-bar">
                <button className="btn btn-secondary vq-exit-btn" onClick={handleExit}>
                    ✕ {isENUI ? 'Quitter' : 'Exit'}
                </button>
                <div className="vq-center-info">
                    <span className="vq-verb-name" style={{ color: verb.color }}>
                        {verb.infinitive}
                    </span>
                    <span className="vq-verb-hint">{verb.translation}</span>
                </div>
                <span className="vq-counter">
                    {isReview && '🔄 '}{stepLabel}
                </span>
            </div>

            {/* Progress bar */}
            <div className="progress-track vq-progress">
                <div
                    className="progress-fill"
                    style={{ width: `${progressPct}%`, backgroundColor: verb.color }}
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
                    <h2 className="vq-tense-title" style={{ color: verb.color }}>
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
                            const expected = row[currentTense.key];
                            const isFirst = !isPrefill && inputIndex++ === 0;

                            return (
                                <tr
                                    key={row.sujet}
                                    className={`vq-row${submitted && result ? ` vq-row--${result}` : ''}`}
                                >
                                    <td
                                        className="vq-sujet"
                                        style={{ color: verb.color }}
                                    >
                                        {row.sujet}
                                    </td>
                                    <td className="vq-answer-cell">
                                        {isPrefill ? (
                                            <span className="vq-prefill">{expected}</span>
                                        ) : submitted ? (
                                            <div className="vq-submitted-cell">
                                                <span className={`vq-user-val vq-user-val--${result}`}>
                                                    {userAnswers[row.sujet] || '—'}
                                                </span>
                                                {result === 'wrong' && (
                                                    <span className="vq-correct-reveal">{expected}</span>
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
                            style={{ backgroundColor: verb.color, color: '#fff' }}
                            onClick={handleSubmit}
                        >
                            {isENUI ? 'Valider' : 'Submit'}
                        </button>
                    ) : (
                        <button
                            className="btn vq-submit-btn"
                            style={{ backgroundColor: verb.color, color: '#fff' }}
                            onClick={handleNext}
                        >
                            {phase === 'quiz' && tenseIndex < 3
                                ? (isENUI ? 'Suivant →' : 'Next →')
                                : phase === 'review' && reviewStep < reviewQueue.length - 1
                                ? (isENUI ? 'Suivant →' : 'Next →')
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
