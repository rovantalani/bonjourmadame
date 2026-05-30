import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { recordAnswer, syncAnswerToApi, syncSessionToApi, recordSession } from '../utils/progress';
import { useAuth } from '../context/AuthContext';
import { isAnswerCorrect } from '../utils/answerValidator';
import { loadQuizDirection, type QuizDirection } from '../utils/settings';
import { useT } from '../utils/i18n';
import SpeakerButton from '../components/SpeakerButton';
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
    const { level, categoryId }   = useParams<{ level: string; categoryId: string }>();
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
    const t = useT();

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
        return <main className="page"><p className="vocq-loading">{t.quiz.loading}</p></main>;
    }

    if (quizComplete) {
        const accuracy = Math.round((correctCount / phrases.length) * 100);
        return (
            <main className="page">
                <div className="vocq-complete card">
                    <div className="vocq-complete-emoji">🎉</div>
                    <h1 className="vocq-complete-title">{t.quiz.complete}</h1>
                    <div className="vocq-stats-grid">
                        <div className="vocq-stat">
                            <span className="vocq-stat-value">{correctCount}</span>
                            <span className="vocq-stat-label">{t.quiz.correct}</span>
                        </div>
                        <div className="vocq-stat">
                            <span className="vocq-stat-value">{phrases.length}</span>
                            <span className="vocq-stat-label">{t.quiz.total}</span>
                        </div>
                        <div className="vocq-stat">
                            <span className="vocq-stat-value">{accuracy}%</span>
                            <span className="vocq-stat-label">{t.quiz.accuracy}</span>
                        </div>
                    </div>
                    <div className="vocq-complete-actions">
                        <button className="btn btn-primary" onClick={() => navigate(`/courses/${level}/lectures/phrases/${categoryId}`)}>
                            {t.quiz.backToPhrases}
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
                    onClick={() => navigate(`/courses/${level}/lectures/phrases/${categoryId}`)}
                >
                    {t.quiz.exit}
                </button>
                <span className="vocq-counter">
                    {t.quiz.phraseCounter(currentIndex + 1, phrases.length)}
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
                        {quizDir === 'fr-en' ? t.quiz.translateToEnglish : t.quiz.translateToFrench}
                    </p>
                    <div className="vocq-word-row">
                        <h2 className="vocq-word-english">
                            {quizDir === 'fr-en' ? current.french : current.english}
                        </h2>
                        <SpeakerButton
                            text={quizDir === 'fr-en' ? current.english : current.french}
                            lang={quizDir === 'fr-en' ? 'en-US' : 'fr-FR'}
                        />
                    </div>
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
                            placeholder={t.quiz.placeholder}
                            autoFocus
                        />
                        <div className="vocq-btn-row">
                            <button className="btn btn-secondary" onClick={handleSkip}>{t.quiz.skip}</button>
                            <button
                                className="btn btn-primary"
                                onClick={handleSubmit}
                                disabled={!userAnswer.trim()}
                            >
                                {t.quiz.submit}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="vocq-reveal-section">
                        <div className="vocq-word-row">
                            <p className="vocq-correct-answer">
                                {quizDir === 'fr-en' ? current.english : current.french}
                            </p>
                            <SpeakerButton
                                text={quizDir === 'fr-en' ? current.english : current.french}
                                lang={quizDir === 'fr-en' ? 'en-US' : 'fr-FR'}
                            />
                        </div>
                        {userAnswer && <p className="vocq-wrong-answer">{userAnswer}</p>}
                        <button className="btn btn-primary" onClick={handleNext}>
                            {t.quiz.next}
                        </button>
                    </div>
                )}
            </div>

            <div className="vocq-stats-bar">
                <div className="vocq-stat-pill vocq-stat-correct">
                    <span>✓</span>
                    <span>{correctCount} {t.quiz.correct}</span>
                </div>
                <div className="vocq-stat-pill vocq-stat-wrong">
                    <span>✗</span>
                    <span>{wrongCount} {t.quiz.wrong}</span>
                </div>
            </div>
        </main>
    );
}
