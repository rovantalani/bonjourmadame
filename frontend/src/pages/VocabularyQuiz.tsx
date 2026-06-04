import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addWrongWords, loadShufflePref, saveShufflePref } from '../utils/wordQueue';
import { recordAnswer, recordSession, loadMastery, syncAnswerToApi, syncSessionToApi } from '../utils/progress';
import { useAuth } from '../context/AuthContext';
import { isAnswerCorrect } from '../utils/answerValidator';
import { loadQuizDirection, type QuizDirection } from '../utils/settings';
import { useT } from '../utils/i18n';
import SpeakerButton from '../components/SpeakerButton';
import { StarIcon, CheckCircleIcon } from '../components/icons';
import './VocabularyQuiz.css';

interface Word {
    id: number;
    english: string;
    french: string;
}

export default function VocabularyQuiz() {
    const navigate = useNavigate();
    const { level, moduleId } = useParams<{ level: string; moduleId: string }>();
    const { user } = useAuth();

    const [allWords, setAllWords] = useState<Word[]>([]);
    const [words, setWords] = useState<Word[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);
    const [wrongWords, setWrongWords] = useState<Word[]>([]);
    const [correctCount, setCorrectCount] = useState(0);
    const [isReviewMode, setIsReviewMode] = useState(false);
    const [quizComplete, setQuizComplete] = useState(false);
    const [shuffle, setShuffle] = useState<boolean>(loadShufflePref);
    const [allMastered, setAllMastered] = useState(false);
    const [quizDir] = useState<QuizDirection>(loadQuizDirection);
    const t = useT();

    const firstRoundWrong = useRef<Word[]>([]);

    // Allow Enter to advance past the reveal screen without re-clicking
    useEffect(() => {
        if (!showAnswer) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Enter') handleNext(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [showAnswer]); // eslint-disable-line react-hooks/exhaustive-deps

    const getUnmastered = (data: Word[]) => {
        const mastery = loadMastery();
        return data.filter(w => (mastery[`${moduleId}:${w.id}`]?.level ?? 0) < 3);
    };

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE}/api/vocabulary/${moduleId}`)
            .then(res => res.json())
            .then((data: Word[]) => {
                setAllWords(data);
                const unmastered = getUnmastered(data);
                if (unmastered.length === 0) {
                    setAllMastered(true);
                } else {
                    const ordered = shuffle ? [...unmastered].sort(() => Math.random() - 0.5) : unmastered;
                    setWords(ordered);
                }
            });
    }, [moduleId]); // eslint-disable-line react-hooks/exhaustive-deps

    const currentWord = words[currentIndex];

    const handleSubmit = () => {
        if (!userAnswer.trim()) return;

        const target = quizDir === 'fr-en' ? currentWord.english : currentWord.french;
        const isCorrect = isAnswerCorrect(userAnswer, target);

        const mastery = recordAnswer(moduleId!, currentWord.id, isCorrect);
        if (user) syncAnswerToApi(`${moduleId}:${currentWord.id}`, moduleId!, isCorrect, mastery.level);

        if (isCorrect) {
            setCorrectCount(correctCount + 1);
            handleNext();
        } else {
            setShowAnswer(true);
            if (!wrongWords.find(w => w.id === currentWord.id)) {
                setWrongWords([...wrongWords, currentWord]);
            }
        }
    };

    const handleSkip = () => {
        const mastery = recordAnswer(moduleId!, currentWord.id, false);
        if (user) syncAnswerToApi(`${moduleId}:${currentWord.id}`, moduleId!, false, mastery.level);
        setShowAnswer(true);
        if (!wrongWords.find(w => w.id === currentWord.id)) {
            setWrongWords([...wrongWords, currentWord]);
        }
    };

    const handleNext = () => {
        setUserAnswer('');
        setShowAnswer(false);

        if (currentIndex < words.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            if (wrongWords.length > 0 && !isReviewMode) {
                firstRoundWrong.current = wrongWords;
                setIsReviewMode(true);
                setWords(wrongWords);
                setCurrentIndex(0);
                setWrongWords([]);
            } else {
                if (!isReviewMode && wrongWords.length === 0) {
                    firstRoundWrong.current = wrongWords;
                }
                if (firstRoundWrong.current.length > 0 && moduleId) {
                    addWrongWords(moduleId, firstRoundWrong.current);
                }
                const sessionType = isReviewMode ? 'review' : 'vocabulary';
                recordSession(moduleId!, sessionType, correctCount, allWords.length);
                if (user) syncSessionToApi(moduleId!, sessionType, correctCount, allWords.length);
                setQuizComplete(true);
            }
        }
    };

    const handleToggleShuffle = () => {
        const next = !shuffle;
        setShuffle(next);
        saveShufflePref(next);
        const unmastered = getUnmastered(allWords);
        const base = unmastered.length > 0 ? unmastered : allWords;
        const ordered = next ? [...base].sort(() => Math.random() - 0.5) : base;
        setWords(ordered);
        setCurrentIndex(0);
        setUserAnswer('');
        setShowAnswer(false);
        setWrongWords([]);
        setCorrectCount(0);
        setIsReviewMode(false);
        firstRoundWrong.current = [];
    };

    const handleRestart = () => {
        const unmastered = getUnmastered(allWords);
        if (unmastered.length === 0) {
            setAllMastered(true);
            setQuizComplete(false);
            return;
        }
        const ordered = shuffle ? [...unmastered].sort(() => Math.random() - 0.5) : unmastered;
        setWords(ordered);
        setCurrentIndex(0);
        setUserAnswer('');
        setShowAnswer(false);
        setWrongWords([]);
        setCorrectCount(0);
        setIsReviewMode(false);
        setQuizComplete(false);
        firstRoundWrong.current = [];
    };

    const handlePracticeAll = () => {
        setAllMastered(false);
        const ordered = shuffle ? [...allWords].sort(() => Math.random() - 0.5) : allWords;
        setWords(ordered);
        setCurrentIndex(0);
        setUserAnswer('');
        setShowAnswer(false);
        setWrongWords([]);
        setCorrectCount(0);
        setIsReviewMode(false);
        setQuizComplete(false);
        firstRoundWrong.current = [];
    };

    const handleExit = () => {
        navigate(`/courses/${level}/vocabulary`);
    };

    if (allMastered) {
        return (
            <main className="page">
                <div className="vocq-complete card">
                    <div className="vocq-complete-emoji"><StarIcon size={52} style={{ color: 'var(--accent)' }} /></div>
                    <h1 className="vocq-complete-title">{t.quiz.allMastered}</h1>
                    <p className="vocq-complete-subtitle">{t.quiz.allMasteredSubtitle}</p>
                    <div className="vocq-complete-actions">
                        <button className="btn btn-primary" onClick={handlePracticeAll}>
                            {t.quiz.practiceAll}
                        </button>
                        <button className="btn btn-secondary" onClick={handleExit}>
                            {t.quiz.backToVocabulary}
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    if (!currentWord && !quizComplete) {
        return (
            <main className="page">
                <p className="vocq-loading">{t.quiz.loading}</p>
            </main>
        );
    }

    /* ── Completion screen ── */
    if (quizComplete) {
        const totalWords = allWords.length;
        const accuracy = Math.round((correctCount / totalWords) * 100);

        return (
            <main className="page">
                <div className="vocq-complete card">
                    <div className="vocq-complete-emoji"><CheckCircleIcon size={52} style={{ color: 'var(--success)' }} /></div>
                    <h1 className="vocq-complete-title">{t.quiz.complete}</h1>

                    <div className="vocq-stats-grid">
                        <div className="vocq-stat">
                            <span className="vocq-stat-value">{correctCount}</span>
                            <span className="vocq-stat-label">{t.quiz.score}</span>
                        </div>
                        <div className="vocq-stat">
                            <span className="vocq-stat-value">{totalWords}</span>
                            <span className="vocq-stat-label">{t.quiz.total}</span>
                        </div>
                        <div className="vocq-stat">
                            <span className="vocq-stat-value">{accuracy}%</span>
                            <span className="vocq-stat-label">{t.quiz.accuracy}</span>
                        </div>
                    </div>

                    <div className="vocq-complete-actions">
                        <button className="btn btn-primary" onClick={handleRestart}>
                            {t.quiz.tryAgain}
                        </button>
                        <button className="btn btn-secondary" onClick={handleExit}>
                            {t.quiz.backToVocabulary}
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    /* ── Active quiz ── */
    const progress = ((currentIndex + 1) / words.length) * 100;

    return (
        <main className="page">
            {/* Top bar */}
            <div className="vocq-top-bar">
                <button className="btn btn-secondary vocq-exit-btn" onClick={handleExit}>
                    {t.quiz.exit}
                </button>
                <span className="vocq-counter">
                    {isReviewMode ? `${t.quiz.reviewPrefix} — ` : ''}{t.quiz.wordCounter(currentIndex + 1, words.length)}
                </span>
                <button
                    className={`btn vocq-shuffle-btn ${shuffle ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={handleToggleShuffle}
                    title={shuffle ? t.quiz.shuffledTitle : t.quiz.inOrderTitle}
                >
                    {shuffle ? t.quiz.shuffled : t.quiz.inOrder}
                </button>
            </div>

            {/* Progress bar */}
            <div className="progress-track vocq-progress">
                <div
                    className="progress-fill"
                    style={{ width: `${progress}%`, backgroundColor: 'var(--accent)' }}
                />
            </div>

            {/* Question card */}
            <div className="card vocq-card">
                <div className="vocq-question-top">
                    <p className="section-label vocq-word-label">
                        {quizDir === 'fr-en' ? t.quiz.translateToEnglish : t.quiz.translateToFrench}
                    </p>
                    <div className="vocq-word-row">
                        <h2 className="vocq-word-english">
                            {quizDir === 'fr-en' ? currentWord.french : currentWord.english}
                        </h2>
                        <SpeakerButton
                            text={quizDir === 'fr-en' ? currentWord.english : currentWord.french}
                            lang={quizDir === 'fr-en' ? 'en-US' : 'fr-FR'}
                        />
                    </div>
                </div>

                <hr className="vocq-divider" />

                {!showAnswer ? (
                    <div className="vocq-answer-section">
                        <input
                            type="text"
                            className="field-input vocq-input"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                            placeholder={t.quiz.placeholder}
                            autoFocus
                        />
                        <div className="vocq-btn-row">
                            <button className="btn btn-secondary" onClick={handleSkip}>
                                {t.quiz.skip}
                            </button>
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
                                {quizDir === 'fr-en' ? currentWord.english : currentWord.french}
                            </p>
                            <SpeakerButton
                                text={quizDir === 'fr-en' ? currentWord.english : currentWord.french}
                                lang={quizDir === 'fr-en' ? 'en-US' : 'fr-FR'}
                            />
                        </div>
                        {userAnswer && (
                            <p className="vocq-wrong-answer">{userAnswer}</p>
                        )}
                        <button className="btn btn-primary" onClick={handleNext}>
                            {t.quiz.nextWord}
                        </button>
                    </div>
                )}
            </div>

            {/* Stats bar */}
            <div className="vocq-stats-bar">
                <div className="vocq-stat-pill vocq-stat-correct">
                    <span>✓</span>
                    <span>{correctCount} {t.quiz.correct}</span>
                </div>
                <div className="vocq-stat-pill vocq-stat-wrong">
                    <span>✗</span>
                    <span>{wrongWords.length} {t.quiz.toReview}</span>
                </div>
            </div>
        </main>
    );
}
