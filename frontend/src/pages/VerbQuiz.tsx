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
        fetch(`http://localhost:3001/api/conjugation/${verbId}`)
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
        return <div className="verb-quiz-loading">Loading...</div>;
    }

    if (quizComplete) {
        const total = allQuestions.length;
        const accuracy = Math.round((correctCount / total) * 100);
        return (
            <div className="verb-quiz-container">
                <div className="quiz-complete">
                    <div className="complete-icon">🎉</div>
                    <h1>Quiz Complete!</h1>
                    <p className="complete-verb" style={{ color: verb.color }}>
                        {verb.infinitive} — {verb.translation}
                    </p>
                    <div className="complete-stats">
                        <div className="stat">
                            <span className="stat-value">{correctCount}</span>
                            <span className="stat-label">Correct</span>
                        </div>
                        <div className="stat">
                            <span className="stat-value">{total}</span>
                            <span className="stat-label">Total</span>
                        </div>
                        <div className="stat">
                            <span className="stat-value">{accuracy}%</span>
                            <span className="stat-label">Accuracy</span>
                        </div>
                    </div>
                    <div className="complete-actions">
                        <button
                            className="restart-button"
                            style={{ backgroundColor: verb.color }}
                            onClick={handleRestart}
                        >
                            Try Again
                        </button>
                        <button className="exit-button" onClick={handleExit}>
                            Back to Verbs
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="verb-quiz-container">
            <div className="quiz-header">
                <button className="exit-quiz-button" onClick={handleExit}>
                    ✕ Exit Quiz
                </button>
                <div className="quiz-progress">
                    <span>
                        {isReviewMode ? '🔄 Review Mode: ' : ''}
                        Question {currentIndex + 1} of {questions.length}
                    </span>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{
                                width: `${((currentIndex + 1) / questions.length) * 100}%`,
                                backgroundColor: verb.color,
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="quiz-card">
                <div className="word-display">
                    <div className="verb-identity">
                        <span className="verb-name" style={{ color: verb.color }}>{verb.infinitive}</span>
                        <span className="verb-hint">{verb.translation}</span>
                    </div>
                    <div className="question-context">
                        <span className="tense-label">{current.tenseLabel}</span>
                        <h2 className="subject-label">{current.sujet}</h2>
                    </div>
                </div>

                {!showAnswer ? (
                    <div className="answer-section">
                        <input
                            type="text"
                            className="answer-input"
                            value={userAnswer}
                            onChange={e => setUserAnswer(e.target.value)}
                            onKeyPress={e => e.key === 'Enter' && handleSubmit()}
                            placeholder="Type the conjugation..."
                            autoFocus
                        />
                        <div className="button-group">
                            <button className="skip-button" onClick={handleSkip}>
                                Skip
                            </button>
                            <button
                                className="submit-button"
                                onClick={handleSubmit}
                                disabled={!userAnswer.trim()}
                                style={{ backgroundColor: verb.color }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="reveal-section">
                        <div className="correct-answer">
                            <span className="answer-label">Correct Answer:</span>
                            <h3>{current.answer}</h3>
                        </div>
                        {userAnswer && (
                            <div className="user-answer">
                                <span className="answer-label">Your Answer:</span>
                                <p className="wrong">{userAnswer}</p>
                            </div>
                        )}
                        <button
                            className="next-button"
                            onClick={handleNext}
                            style={{ backgroundColor: verb.color }}
                        >
                            Next →
                        </button>
                    </div>
                )}
            </div>

            <div className="quiz-stats">
                <div className="stat-item correct">
                    <span>✓</span>
                    <span>{correctCount} Correct</span>
                </div>
                <div className="stat-item wrong">
                    <span>✗</span>
                    <span>{wrongQuestions.length} To Review</span>
                </div>
            </div>
        </div>
    );
}
