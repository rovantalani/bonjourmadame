import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { recordAnswer, syncAnswerToApi, syncSessionToApi, recordSession } from '../utils/progress';
import { useAuth } from '../context/AuthContext';
import { isAnswerCorrect } from '../utils/answerValidator';
import { loadQuizDirection, type QuizDirection } from '../utils/settings';
import './VocabularyQuiz.css';

interface Phrase {
    id: number;
    french: string;
    english: string;
    note?: string;
}

interface PhraseCategoryData {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    phrases: Phrase[];
}

export default function PhraseQuiz() {
    const navigate                = useNavigate();
    const { categoryId }          = useParams<{ categoryId: string }>();
    const { user }                = useAuth();

    const [phrases, setPhrases]   = useState<Phrase[]>([]);
    const [category, setCategory] = useState<PhraseCategoryData | null>(null);
    const [currentIndex, setCurrentIndex]     = useState(0);
    const [userAnswer, setUserAnswer]         = useState('');
    const [showAnswer, setShowAnswer]         = useState(false);
    const [correctCount, setCorrectCount]     = useState(0);
    const [wrongCount, setWrongCount]         = useState(0);
    const [quizComplete, setQuizComplete]     = useState(false);
    const [loading, setLoading]               = useState(true);
    const [quizDir] = useState<QuizDirection>(loadQuizDirection);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE}/api/phrase-categories/${categoryId}`)
            .then(res => res.json())
            .then((data: PhraseCategoryData) => {
                setCategory(data);
                setPhrases([...data.phrases].sort(() => Math.random() - 0.5));
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [categoryId]);

    // Enter key advances past reveal screen
    useEffect(() => {
        if (!showAnswer) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Enter') handleNext(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [showAnswer]); // eslint-disable-line react-hooks/exhaustive-deps

    const moduleKey = `phrase-${categoryId}`;

    const handleSubmit = () => {
        if (!userAnswer.trim()) return;
        const current   = phrases[currentIndex];
        const target = quizDir === 'fr-en' ? current.english : current.french;
        const isCorrect = isAnswerCorrect(userAnswer, target);
        const mastery   = recordAnswer(moduleKey, current.id, isCorrect);
        if (user) syncAnswerToApi(`${moduleKey}:${current.id}`, moduleKey, isCorrect, mastery.level);

        if (isCorrect) {
            setCorrectCount(c => c + 1);
            handleNext();
        } else {
            setWrongCount(w => w + 1);
            setShowAnswer(true);
        }
    };

    const handleSkip = () => {
        const current = phrases[currentIndex];
        const mastery = recordAnswer(moduleKey, current.id, false);
        if (user) syncAnswerToApi(`${moduleKey}:${current.id}`, moduleKey, false, mastery.level);
        setWrongCount(w => w + 1);
        setShowAnswer(true);
    };

    const handleNext = () => {
        setUserAnswer('');
        setShowAnswer(false);
        if (currentIndex < phrases.length - 1) {
            setCurrentIndex(i => i + 1);
        } else {
            const score = correctCount + (showAnswer ? 0 : 1);
            recordSession(moduleKey, 'vocabulary', score, phrases.length);
            if (user) syncSessionToApi(moduleKey, 'vocabulary', score, phrases.length);
            setQuizComplete(true);
        }
    };

    if (loading) {
        return <main className="page"><p className="vocq-loading">Loading…</p></main>;
    }

    if (quizComplete) {
        const accuracy = Math.round((correctCount / phrases.length) * 100);
        return (
            <main className="page">
                <div className="vocq-complete card">
                    <div className="vocq-complete-emoji">🎉</div>
                    <h1 className="vocq-complete-title">Quiz Complete!</h1>
                    <div className="vocq-stats-grid">
                        <div className="vocq-stat">
                            <span className="vocq-stat-value">{correctCount}</span>
                            <span className="vocq-stat-label">Correct</span>
                        </div>
                        <div className="vocq-stat">
                            <span className="vocq-stat-value">{phrases.length}</span>
                            <span className="vocq-stat-label">Total</span>
                        </div>
                        <div className="vocq-stat">
                            <span className="vocq-stat-value">{accuracy}%</span>
                            <span className="vocq-stat-label">Accuracy</span>
                        </div>
                    </div>
                    <div className="vocq-complete-actions">
                        <button className="btn btn-primary" onClick={() => navigate(`/phrases/${categoryId}`)}>
                            Back to Phrases
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    if (!phrases.length) return null;

    const current  = phrases[currentIndex];
    const progress = ((currentIndex + 1) / phrases.length) * 100;

    return (
        <main className="page">
            <div className="vocq-top-bar">
                <button
                    className="btn btn-secondary vocq-exit-btn"
                    onClick={() => navigate(`/phrases/${categoryId}`)}
                >
                    ✕ Exit
                </button>
                <span className="vocq-counter">
                    Phrase {currentIndex + 1} of {phrases.length}
                </span>
                <span style={{ width: '80px' }} />
            </div>

            <div className="progress-track vocq-progress">
                <div
                    className="progress-fill"
                    style={{ width: `${progress}%`, backgroundColor: category?.color ?? 'var(--accent)' }}
                />
            </div>

            <div className="card vocq-card">
                <div className="vocq-question-top">
                    <p className="section-label vocq-word-label">
                        {quizDir === 'fr-en' ? 'Translate to English' : 'Translate to French'}
                    </p>
                    <h2 className="vocq-word-english">
                        {quizDir === 'fr-en' ? current.french : current.english}
                    </h2>
                    {current.note && <p style={{ fontSize: '0.82rem', color: 'var(--text-3)', marginTop: '0.4rem' }}>{current.note}</p>}
                </div>

                <hr className="vocq-divider" />

                {!showAnswer ? (
                    <div className="vocq-answer-section">
                        <input
                            type="text"
                            className="field-input vocq-input"
                            value={userAnswer}
                            onChange={e => setUserAnswer(e.target.value)}
                            onKeyPress={e => e.key === 'Enter' && handleSubmit()}
                            placeholder="Type your answer…"
                            autoFocus
                        />
                        <div className="vocq-btn-row">
                            <button className="btn btn-secondary" onClick={handleSkip}>Skip</button>
                            <button
                                className="btn btn-primary"
                                onClick={handleSubmit}
                                disabled={!userAnswer.trim()}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="vocq-reveal-section">
                        <p className="vocq-correct-answer">
                            {quizDir === 'fr-en' ? current.english : current.french}
                        </p>
                        {userAnswer && <p className="vocq-wrong-answer">{userAnswer}</p>}
                        <button className="btn btn-primary" onClick={handleNext}>
                            Next →
                        </button>
                    </div>
                )}
            </div>

            <div className="vocq-stats-bar">
                <div className="vocq-stat-pill vocq-stat-correct">
                    <span>✓</span>
                    <span>{correctCount} Correct</span>
                </div>
                <div className="vocq-stat-pill vocq-stat-wrong">
                    <span>✗</span>
                    <span>{wrongCount} Wrong</span>
                </div>
            </div>
        </main>
    );
}
