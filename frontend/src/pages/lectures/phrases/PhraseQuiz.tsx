import { useLearningVisit } from '../../../hooks/useLearningVisit';
import LearningCompletion from '../../../components/LearningCompletion';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { recordAnswer, syncAnswerToApi, syncSessionToApi, recordSession } from '../../../utils/progress';
import { useAuth } from '../../../context/AuthContext';
import { isAnswerCorrect } from '../../../utils/answerValidator';
import { loadLearningMode, loadQuizDirection, type QuizDirection } from '../../../utils/settings';
import { useT } from '../../../utils/i18n';
import SpeakerButton from '../../../components/SpeakerButton';
import { CheckCircleIcon } from '../../../components/icons/index';
import '../../vocabulary/VocabularyQuiz.css';

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
    const [wrongPhrases, setWrongPhrases] = useState<Phrase[]>([]);
    const [isReviewMode, setIsReviewMode] = useState(false);
    const [loadError, setLoadError] = useState(false);
    const [quizComplete, setQuizComplete]     = useState(false);
    const [loading, setLoading]               = useState(true);
    const [quizDir] = useState<QuizDirection>(loadQuizDirection);
    const t = useT();

    useEffect(() => {
        const lang = loadLearningMode() === 'learn-english' ? '?lang=fr' : '';
        fetch(`${import.meta.env.VITE_API_BASE}/api/lectures/phrases/${categoryId}${lang}`)
            .then(res => { if (!res.ok) throw new Error('Load failed'); return res.json(); })
            .then((data: PhraseCategoryData) => {
                if (!data.phrases?.length) throw new Error('Empty quiz');
                setCategory(data);
                setPhrases([...data.phrases].sort(() => Math.random() - 0.5));
                setLoading(false);
            })
            .catch(() => { setLoadError(true); setLoading(false); });
    }, [categoryId]);

    const moduleKey = `phrase-${categoryId}`;

    const handleSubmit = () => {
        if (!userAnswer.trim() || showAnswer || quizComplete) return;
        const current   = phrases[currentIndex];
        const target = quizDir === 'fr-en' ? current.english : current.french;
        const isCorrect = isAnswerCorrect(userAnswer, target);
        recordAnswer(moduleKey, current.id, isCorrect);
        if (user) syncAnswerToApi(`${moduleKey}:${current.id}`, moduleKey, isCorrect);

        if (isCorrect) {
            const score = correctCount + 1;
            setCorrectCount(score);
            handleNext(score);
        } else {
            setWrongPhrases(items => [...items, current]);
            setShowAnswer(true);
        }
    };

    const handleSkip = () => {
        if (showAnswer || quizComplete) return;
        const current = phrases[currentIndex];
        recordAnswer(moduleKey, current.id, false);
        if (user) syncAnswerToApi(`${moduleKey}:${current.id}`, moduleKey, false);
        setWrongPhrases(items => [...items, current]);
        setShowAnswer(true);
    };

    const handleNext = (score = correctCount) => {
        setUserAnswer('');
        setShowAnswer(false);
        if (currentIndex < phrases.length - 1) {
            setCurrentIndex(i => i + 1);
        } else if (wrongPhrases.length > 0) {
            setPhrases(wrongPhrases);
            setWrongPhrases([]);
            setCurrentIndex(0);
            setIsReviewMode(true);
        } else {
            recordSession(moduleKey, 'vocabulary', score, category!.phrases.length);
            if (user) syncSessionToApi(moduleKey, 'vocabulary', score, category!.phrases.length);
            setQuizComplete(true);
        }
    };

    // Enter key advances past reveal screen
    useEffect(() => {
        if (!showAnswer) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Enter' && !e.repeat && !(e.target instanceof HTMLButtonElement)) { e.preventDefault(); handleNext(); } };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [showAnswer]); // eslint-disable-line react-hooks/exhaustive-deps

    useLearningVisit(!loading && phrases.length > 0);

    if (loading) {
        return <main className="page"><p className="vocq-loading">{t.quiz.loading}</p></main>;
    }

    if (loadError) return <main className="page"><p>{t.quiz.loadError}</p></main>;

    if (quizComplete) {
        const accuracy = Math.round((correctCount / category!.phrases.length) * 100);
        return (
            <main className="page">
                <div className="vocq-complete card">
                    <div className="vocq-complete-emoji"><CheckCircleIcon size={52} style={{ color: 'var(--success)' }} /></div>
                    <h1 className="vocq-complete-title">{t.quiz.complete}</h1>
                    <div className="vocq-stats-grid">
                        <div className="vocq-stat">
                            <span className="vocq-stat-value">{correctCount}</span>
                            <span className="vocq-stat-label">{t.quiz.correct}</span>
                        </div>
                        <div className="vocq-stat">
                            <span className="vocq-stat-value">{category!.phrases.length}</span>
                            <span className="vocq-stat-label">{t.quiz.total}</span>
                        </div>
                        <div className="vocq-stat">
                            <span className="vocq-stat-value">{accuracy}%</span>
                            <span className="vocq-stat-label">{t.quiz.accuracy}</span>
                        </div>
                    </div>
                    <LearningCompletion quizPassed />
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
                    {isReviewMode ? `${t.quiz.reviewPrefix} — ` : ''}{t.quiz.phraseCounter(currentIndex + 1, phrases.length)}
                </span>
                <span style={{ width: '80px' }} />
            </div>

            <div className="progress-track vocq-progress">
                <div
                    className="progress-fill"
                    style={{ width: `${progress}%`, backgroundColor: 'var(--tag-phrases-text)' }}
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
                        <button className="btn btn-primary" onClick={() => handleNext()}>
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
                    <span>{wrongPhrases.length} {t.quiz.toReview}</span>
                </div>
            </div>
        </main>
    );
}
