import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

interface QuizQuestion {
    sujet: string;
    tenseKey: keyof Omit<ConjugationRow, 'sujet'>;
    tenseLabel: string;
    answer: string;
}

const TENSES: { key: keyof Omit<ConjugationRow, 'sujet'>; label: string }[] = [
    { key: 'present',      label: 'Présent' },
    { key: 'passeCompose', label: 'Passé composé' },
    { key: 'imparfait',    label: 'Imparfait' },
    { key: 'futurSimple',  label: 'Futur simple' },
];

function buildQuestions(rows: ConjugationRow[]): QuizQuestion[] {
    const questions: QuizQuestion[] = [];
    for (const row of rows) {
        for (const tense of TENSES) {
            questions.push({
                sujet: row.sujet,
                tenseKey: tense.key,
                tenseLabel: tense.label,
                answer: row[tense.key],
            });
        }
    }
    return questions.sort(() => Math.random() - 0.5);
}

function normalize(s: string): string {
    return s.toLowerCase().trim().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

export default function VerbQuiz() {
    const { verbId } = useParams<{ verbId: string }>();
    const navigate = useNavigate();

    const [verb, setVerb] = useState<VerbData | null>(null);
    const [allQuestions, setAllQuestions] = useState<QuizQuestion[]>([]);
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);
    const [wrongQuestions, setWrongQuestions] = useState<QuizQuestion[]>([]);
    const [correctCount, setCorrectCount] = useState(0);
    const [isReviewMode, setIsReviewMode] = useState(false);
    const [quizComplete, setQuizComplete] = useState(false);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE}/api/conjugation/${verbId}`)
            .then(res => {
                if (!res.ok) throw new Error('Not found');
                return res.json();
            })
            .then((data: VerbData) => {
                setVerb(data);
                const q = buildQuestions(data.rows);
                setAllQuestions(q);
                setQuestions(q);
            })
            .catch(() => {});
    }, [verbId]);

    const current = questions[currentIndex];

    const handleNext = () => {
        setUserAnswer('');
        setShowAnswer(false);
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            if (wrongQuestions.length > 0 && !isReviewMode) {
                setIsReviewMode(true);
                setQuestions(wrongQuestions);
                setCurrentIndex(0);
                setWrongQuestions([]);
            } else {
                setQuizComplete(true);
            }
        }
    };

    const handleSubmit = () => {
        if (!userAnswer.trim() || !current) return;
        const correct = normalize(userAnswer) === normalize(current.answer);
        if (correct) {
            setCorrectCount(correctCount + 1);
            handleNext();
        } else {
            setShowAnswer(true);
            if (!wrongQuestions.find(q => q.sujet === current.sujet && q.tenseKey === current.tenseKey)) {
                setWrongQuestions([...wrongQuestions, current]);
            }
        }
    };

    const handleSkip = () => {
        if (!current) return;
        setShowAnswer(true);
        if (!wrongQuestions.find(q => q.sujet === current.sujet && q.tenseKey === current.tenseKey)) {
            setWrongQuestions([...wrongQuestions, current]);
        }
    };

    const handleRestart = () => {
        if (!verb) return;
        const q = buildQuestions(verb.rows);
        setAllQuestions(q);
        setQuestions(q);
        setCurrentIndex(0);
        setUserAnswer('');
        setShowAnswer(false);
        setWrongQuestions([]);
        setCorrectCount(0);
        setIsReviewMode(false);
        setQuizComplete(false);
    };

    const handleExit = () => {
        navigate(`/grammar/${verb?.groupId ?? 'regular-verbs'}`);
    };

    if (!verb || (!current && !quizComplete)) {
        return (
            <main className="page">
                <p className="vq-loading">Loading…</p>
            </main>
        );
    }

    /* ── Completion screen ── */
    if (quizComplete) {
        const total = allQuestions.length;
        const accuracy = Math.round((correctCount / total) * 100);
        return (
            <main className="page">
                <div className="vq-complete card">
                    <div className="vq-complete-emoji">🎉</div>
                    <h1 className="vq-complete-title">Quiz Complete!</h1>
                    <p className="vq-complete-verb" style={{ color: verb.color }}>
                        <em>{verb.infinitive} — {verb.translation}</em>
                    </p>

                    <div className="vq-stats-grid">
                        <div className="vq-stat">
                            <span className="vq-stat-value" style={{ color: verb.color }}>{correctCount}</span>
                            <span className="vq-stat-label">Score</span>
                        </div>
                        <div className="vq-stat">
                            <span className="vq-stat-value" style={{ color: verb.color }}>{total}</span>
                            <span className="vq-stat-label">Total</span>
                        </div>
                        <div className="vq-stat">
                            <span className="vq-stat-value" style={{ color: verb.color }}>{accuracy}%</span>
                            <span className="vq-stat-label">Accuracy</span>
                        </div>
                    </div>

                    <div className="vq-complete-actions">
                        <button
                            className="btn"
                            style={{ backgroundColor: verb.color, color: '#fff' }}
                            onClick={handleRestart}
                        >
                            Try Again
                        </button>
                        <button className="btn btn-secondary" onClick={handleExit}>
                            Back to Verbs
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    /* ── Active quiz ── */
    const progress = ((currentIndex + 1) / questions.length) * 100;

    return (
        <main className="page">
            {/* Top bar */}
            <div className="vq-top-bar">
                <button className="btn btn-secondary vq-exit-btn" onClick={handleExit}>
                    ✕ Exit
                </button>
                <div className="vq-center-info">
                    <span className="vq-verb-name" style={{ color: verb.color }}>
                        {verb.infinitive}
                    </span>
                    <span className="vq-verb-hint">{verb.translation}</span>
                </div>
                <span className="vq-counter">
                    {isReviewMode && '🔄 '}Question {currentIndex + 1} of {questions.length}
                </span>
            </div>

            {/* Progress bar */}
            <div className="progress-track vq-progress">
                <div
                    className="progress-fill"
                    style={{ width: `${progress}%`, backgroundColor: verb.color }}
                />
            </div>

            {/* Question card */}
            <div className="card vq-card">
                <div className="vq-question-top">
                    <p className="section-label vq-tense-label">{current.tenseLabel}</p>
                    <h2 className="vq-subject">{current.sujet}</h2>
                </div>

                <hr className="vq-divider" />

                {!showAnswer ? (
                    <div className="vq-answer-section">
                        <input
                            type="text"
                            className="field-input vq-input"
                            style={{ '--focus-color': verb.color } as React.CSSProperties}
                            value={userAnswer}
                            onChange={e => setUserAnswer(e.target.value)}
                            onKeyPress={e => e.key === 'Enter' && handleSubmit()}
                            placeholder="Type the conjugation…"
                            autoFocus
                        />
                        <div className="vq-btn-row">
                            <button className="btn btn-secondary" onClick={handleSkip}>
                                Skip
                            </button>
                            <button
                                className="btn"
                                style={{ backgroundColor: verb.color, color: '#fff' }}
                                onClick={handleSubmit}
                                disabled={!userAnswer.trim()}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="vq-reveal-section">
                        <p className="vq-correct-answer">{current.answer}</p>
                        {userAnswer && (
                            <p className="vq-wrong-answer">{userAnswer}</p>
                        )}
                        <button
                            className="btn"
                            style={{ backgroundColor: verb.color, color: '#fff' }}
                            onClick={handleNext}
                        >
                            Next →
                        </button>
                    </div>
                )}
            </div>

            {/* Stats bar */}
            <div className="vq-stats-bar">
                <div className="vq-stat-pill vq-stat-correct">
                    <span>✓</span>
                    <span>{correctCount} Correct</span>
                </div>
                <div className="vq-stat-pill vq-stat-wrong">
                    <span>✗</span>
                    <span>{wrongQuestions.length} To Review</span>
                </div>
            </div>
        </main>
    );
}
