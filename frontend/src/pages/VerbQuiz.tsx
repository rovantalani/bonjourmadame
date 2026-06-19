import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { loadLearningMode } from '../utils/settings';
import { useT } from '../utils/i18n';
import SpeakerButton from '../components/SpeakerButton';
import { CheckCircleIcon, RefreshIcon } from '../components/icons';
import './VerbQuiz.css';

interface ConjugationRow {
    sujet: string;
    present: string;
    passeCompose: string;
    imparfait: string;
    futurSimple: string;
    conditionnelPresent?: string;
    subjonctifPresent?: string;
    plusQueParfait?: string;
    futurAnterieur?: string;
    conditionnelPasse?: string;
    subjonctifPasse?: string;
    passeSimple?: string;
    subjonctifImparfait?: string;
    subjonctifPlusQueParfait?: string;
    passeAnterieur?: string;
}

interface VerbData {
    infinitive: string;
    translation: string;
    type: string;
    color: string;
    groupId: string;
    rows: ConjugationRow[];
}

type TenseKey = keyof Omit<ConjugationRow, 'sujet'>;
type Phase = 'quiz' | 'review' | 'complete';
type CellResult = 'correct' | 'wrong';

interface TenseDef {
    key: TenseKey;
    label: string;
    labelFR: string;
}

const CEFR_ORDER = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

// All tenses cumulative per level (quizzable only — passeAnterieur excluded)
const TENSES_BY_LEVEL: Record<string, TenseDef[]> = {
    a1: [
        { key: 'present',      label: 'Présent',       labelFR: 'Présent'       },
        { key: 'passeCompose', label: 'Passé composé', labelFR: 'Passé composé' },
    ],
    a2: [
        { key: 'present',      label: 'Présent',       labelFR: 'Présent'       },
        { key: 'passeCompose', label: 'Passé composé', labelFR: 'Passé composé' },
        { key: 'imparfait',    label: 'Imparfait',     labelFR: 'Imparfait'     },
        { key: 'futurSimple',  label: 'Futur simple',  labelFR: 'Futur simple'  },
    ],
    b1: [
        { key: 'present',             label: 'Présent',              labelFR: 'Présent'              },
        { key: 'passeCompose',        label: 'Passé composé',        labelFR: 'Passé composé'        },
        { key: 'imparfait',           label: 'Imparfait',            labelFR: 'Imparfait'            },
        { key: 'futurSimple',         label: 'Futur simple',         labelFR: 'Futur simple'         },
        { key: 'conditionnelPresent', label: 'Conditionnel présent', labelFR: 'Conditionnel présent' },
        { key: 'subjonctifPresent',   label: 'Subjonctif présent',   labelFR: 'Subjonctif présent'   },
        { key: 'plusQueParfait',      label: 'Plus-que-parfait',     labelFR: 'Plus-que-parfait'     },
    ],
    b2: [
        { key: 'present',             label: 'Présent',              labelFR: 'Présent'              },
        { key: 'passeCompose',        label: 'Passé composé',        labelFR: 'Passé composé'        },
        { key: 'imparfait',           label: 'Imparfait',            labelFR: 'Imparfait'            },
        { key: 'futurSimple',         label: 'Futur simple',         labelFR: 'Futur simple'         },
        { key: 'conditionnelPresent', label: 'Conditionnel présent', labelFR: 'Conditionnel présent' },
        { key: 'subjonctifPresent',   label: 'Subjonctif présent',   labelFR: 'Subjonctif présent'   },
        { key: 'plusQueParfait',      label: 'Plus-que-parfait',     labelFR: 'Plus-que-parfait'     },
        { key: 'futurAnterieur',      label: 'Futur antérieur',      labelFR: 'Futur antérieur'      },
        { key: 'conditionnelPasse',   label: 'Conditionnel passé',   labelFR: 'Conditionnel passé'   },
        { key: 'subjonctifPasse',     label: 'Subjonctif passé',     labelFR: 'Subjonctif passé'     },
    ],
    c1: [
        { key: 'present',                  label: 'Présent',                     labelFR: 'Présent'                     },
        { key: 'passeCompose',             label: 'Passé composé',               labelFR: 'Passé composé'               },
        { key: 'imparfait',                label: 'Imparfait',                   labelFR: 'Imparfait'                   },
        { key: 'futurSimple',              label: 'Futur simple',                labelFR: 'Futur simple'                },
        { key: 'conditionnelPresent',      label: 'Conditionnel présent',        labelFR: 'Conditionnel présent'        },
        { key: 'subjonctifPresent',        label: 'Subjonctif présent',          labelFR: 'Subjonctif présent'          },
        { key: 'plusQueParfait',           label: 'Plus-que-parfait',            labelFR: 'Plus-que-parfait'            },
        { key: 'futurAnterieur',           label: 'Futur antérieur',             labelFR: 'Futur antérieur'             },
        { key: 'conditionnelPasse',        label: 'Conditionnel passé',          labelFR: 'Conditionnel passé'          },
        { key: 'subjonctifPasse',          label: 'Subjonctif passé',            labelFR: 'Subjonctif passé'            },
        { key: 'passeSimple',              label: 'Passé simple',                labelFR: 'Passé simple'                },
        { key: 'subjonctifImparfait',      label: 'Subjonctif imparfait',        labelFR: 'Subjonctif imparfait'        },
        { key: 'subjonctifPlusQueParfait', label: 'Subjonctif plus-que-parfait', labelFR: 'Subjonctif plus-que-parfait' },
    ],
    c2: [
        { key: 'present',                  label: 'Présent',                     labelFR: 'Présent'                     },
        { key: 'passeCompose',             label: 'Passé composé',               labelFR: 'Passé composé'               },
        { key: 'imparfait',                label: 'Imparfait',                   labelFR: 'Imparfait'                   },
        { key: 'futurSimple',              label: 'Futur simple',                labelFR: 'Futur simple'                },
        { key: 'conditionnelPresent',      label: 'Conditionnel présent',        labelFR: 'Conditionnel présent'        },
        { key: 'subjonctifPresent',        label: 'Subjonctif présent',          labelFR: 'Subjonctif présent'          },
        { key: 'plusQueParfait',           label: 'Plus-que-parfait',            labelFR: 'Plus-que-parfait'            },
        { key: 'futurAnterieur',           label: 'Futur antérieur',             labelFR: 'Futur antérieur'             },
        { key: 'conditionnelPasse',        label: 'Conditionnel passé',          labelFR: 'Conditionnel passé'          },
        { key: 'subjonctifPasse',          label: 'Subjonctif passé',            labelFR: 'Subjonctif passé'            },
        { key: 'passeSimple',              label: 'Passé simple',                labelFR: 'Passé simple'                },
        { key: 'subjonctifImparfait',      label: 'Subjonctif imparfait',        labelFR: 'Subjonctif imparfait'        },
        { key: 'subjonctifPlusQueParfait', label: 'Subjonctif plus-que-parfait', labelFR: 'Subjonctif plus-que-parfait' },
        // passeAnterieur excluded — recognition only, not quizzed
    ],
};

// Only the NEW tenses introduced at each level (for review verb quizzes)
const NEW_TENSES_FOR_LEVEL: Record<string, TenseDef[]> = {
    a1: TENSES_BY_LEVEL.a1,
    a2: [
        { key: 'imparfait',   label: 'Imparfait',    labelFR: 'Imparfait'    },
        { key: 'futurSimple', label: 'Futur simple', labelFR: 'Futur simple' },
    ],
    b1: [
        { key: 'conditionnelPresent', label: 'Conditionnel présent', labelFR: 'Conditionnel présent' },
        { key: 'subjonctifPresent',   label: 'Subjonctif présent',   labelFR: 'Subjonctif présent'   },
        { key: 'plusQueParfait',      label: 'Plus-que-parfait',     labelFR: 'Plus-que-parfait'     },
    ],
    b2: [
        { key: 'futurAnterieur',    label: 'Futur antérieur',    labelFR: 'Futur antérieur'    },
        { key: 'conditionnelPasse', label: 'Conditionnel passé', labelFR: 'Conditionnel passé' },
        { key: 'subjonctifPasse',   label: 'Subjonctif passé',   labelFR: 'Subjonctif passé'   },
    ],
    c1: [
        { key: 'passeSimple',              label: 'Passé simple',                labelFR: 'Passé simple'                },
        { key: 'subjonctifImparfait',      label: 'Subjonctif imparfait',        labelFR: 'Subjonctif imparfait'        },
        { key: 'subjonctifPlusQueParfait', label: 'Subjonctif plus-que-parfait', labelFR: 'Subjonctif plus-que-parfait' },
    ],
    c2: [],
};

const TENSES_EN: TenseDef[] = [
    { key: 'present',      label: 'Simple Present',     labelFR: 'Simple Present'     },
    { key: 'imparfait',    label: 'Present Continuous', labelFR: 'Present Continuous' },
    { key: 'passeCompose', label: 'Simple Past',        labelFR: 'Simple Past'        },
    { key: 'futurSimple',  label: 'Future (will)',      labelFR: 'Future (will)'      },
];

function normalize(s: string): string {
    return s.toLowerCase().trim().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function displaySujet(sujet: string, form: string): string {
    if (sujet.toLowerCase() === 'je' && /^[aeiouhyàâäéèêëîïôùûüœæ']/i.test(form.trim())) {
        return "j'";
    }
    return sujet;
}

export default function VerbQuiz() {
    const { level, verbId } = useParams<{ level: string; verbId: string }>();
    const navigate = useNavigate();
    const t = useT();
    const isENUI = loadLearningMode() === 'learn-english';

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
        const langParam = loadLearningMode() === 'learn-english' ? '?lang=fr' : '';
        fetch(`${import.meta.env.VITE_API_BASE}/api/conjugation/${verbId}${langParam}`)
            .then(res => {
                if (!res.ok) throw new Error('Not found');
                return res.json();
            })
            .then((data: VerbData) => setVerb(data))
            .catch(() => {});
    }, [verbId]);

    useEffect(() => {
        if (!submitted) {
            setTimeout(() => firstInputRef.current?.focus(), 50);
        }
    }, [tenseIndex, reviewStep, submitted]);

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

    // Which tenses to quiz: EN mode uses English tense set; FR mode uses level-aware French tenses
    const TENSES = isENUI
        ? TENSES_EN
        : isReviewVerb
            ? (NEW_TENSES_FOR_LEVEL[levelKey] ?? TENSES_BY_LEVEL[levelKey] ?? TENSES_BY_LEVEL['a2'])
            : (TENSES_BY_LEVEL[levelKey] ?? TENSES_BY_LEVEL['a2']);

    const handleExit = () => navigate(`/courses/${level}/verbs`);

    const activeTenseIdx = phase === 'review' ? reviewQueue[reviewStep] : tenseIndex;
    const currentTense = TENSES[activeTenseIdx];

    const handleSubmit = () => {
        if (!verb || submitted || !currentTense) return;

        const results: Record<string, CellResult> = {};
        const wrongSubjects: string[] = [];
        let correct = 0;

        for (const row of verb.rows) {
            if (phase === 'review' && !wrongByTense[activeTenseIdx]?.includes(row.sujet)) {
                continue;
            }
            const expected = (row[currentTense.key] as string | undefined) ?? '';
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
            if (tenseIndex < TENSES.length - 1) {
                setTenseIndex(prev => prev + 1);
            } else {
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

    /* ── Completion screen ── */
    if (phase === 'complete') {
        const totalCells = verb.rows.length * TENSES.length;
        const accuracy = totalCells > 0 ? Math.round((correctCount / totalCells) * 100) : 0;
        return (
            <main className="page">
                <div className="vq-complete card">
                    <div className="vq-complete-emoji"><CheckCircleIcon size={52} style={{ color: 'var(--success)' }} /></div>
                    <h1 className="vq-complete-title">{t.quiz.complete}</h1>
                    <p className="vq-complete-verb" style={{ color: verb.color }}>
                        <em>{verb.infinitive} — {verb.translation}</em>
                    </p>
                    {isReviewVerb && (
                        <p style={{ fontSize: '0.82rem', color: 'var(--text-3)', marginBottom: '0.5rem' }}>
                            {t.verbQuiz.reviewTenses(levelKey)}
                        </p>
                    )}

                    <div className="vq-stats-grid">
                        <div className="vq-stat">
                            <span className="vq-stat-value" style={{ color: verb.color }}>{correctCount}</span>
                            <span className="vq-stat-label">{t.quiz.score}</span>
                        </div>
                        <div className="vq-stat">
                            <span className="vq-stat-value" style={{ color: verb.color }}>{totalCells}</span>
                            <span className="vq-stat-label">{t.quiz.total}</span>
                        </div>
                        <div className="vq-stat">
                            <span className="vq-stat-value" style={{ color: verb.color }}>{accuracy}%</span>
                            <span className="vq-stat-label">{t.quiz.accuracy}</span>
                        </div>
                    </div>

                    <div className="vq-complete-actions">
                        <button
                            className="btn"
                            style={{ backgroundColor: verb.color, color: '#fff' }}
                            onClick={handleRestart}
                        >
                            {t.quiz.tryAgain}
                        </button>
                        <button className="btn btn-secondary" onClick={handleExit}>
                            {t.verbQuiz.backToVerbs}
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
        ? `${t.verbQuiz.review} ${reviewStep + 1}/${reviewQueue.length}`
        : `${t.verbQuiz.step} ${tenseIndex + 1}/${TENSES.length}`;

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
                    {t.quiz.exit}
                </button>
                <div className="vq-center-info">
                    <div className="vq-verb-name-row">
                        <span className="vq-verb-name" style={{ color: verb.color }}>
                            {verb.infinitive}
                        </span>
                        <SpeakerButton text={verb.infinitive} lang={isENUI ? 'en-US' : 'fr-FR'} />
                    </div>
                    <span className="vq-verb-hint">{verb.translation}</span>
                    {isReviewVerb && !isReview && (
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-3)' }}>
                            {t.verbQuiz.newTenses(levelKey)}
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
                    style={{ width: `${progressPct}%`, backgroundColor: verb.color }}
                />
            </div>

            {/* Tense card */}
            <div className="card vq-card">
                <div className="vq-tense-header">
                    {isReview && (
                        <span className="vq-review-badge">
                            {t.verbQuiz.review}
                        </span>
                    )}
                    <h2 className="vq-tense-title" style={{ color: verb.color }}>
                        {isENUI ? currentTense.labelFR : currentTense.label}
                    </h2>
                    {isReview && (
                        <p className="vq-review-hint">
                            {t.verbQuiz.reviewHint}
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
                                    <td className="vq-sujet" style={{ color: verb.color }}>
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
                            {t.quiz.submit}
                        </button>
                    ) : (
                        <button
                            className="btn vq-submit-btn"
                            style={{ backgroundColor: verb.color, color: '#fff' }}
                            onClick={handleNext}
                        >
                            {phase === 'quiz' && tenseIndex < TENSES.length - 1
                                ? t.quiz.next
                                : phase === 'review' && reviewStep < reviewQueue.length - 1
                                ? t.quiz.next
                                : t.verbQuiz.finish}
                        </button>
                    )}
                </div>
            </div>

            {/* Stats bar */}
            {!isReview && (
                <div className="vq-stats-bar">
                    <div className="vq-stat-pill vq-stat-correct">
                        <span>✓</span>
                        <span>{correctCount} {t.quiz.correct}</span>
                    </div>
                    <div className="vq-stat-pill vq-stat-wrong">
                        <span>✗</span>
                        <span>
                            {Object.values(wrongByTense).reduce((n, arr) => n + arr.length, 0)}{' '}
                            {t.quiz.toReview}
                        </span>
                    </div>
                </div>
            )}
        </main>
    );
}
