import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addWrongWords, loadShufflePref, saveShufflePref } from '../utils/wordQueue';
import './VocabularyQuiz.css';

interface Word {
    id: number;
    english: string;
    french: string;
}

export default function VocabularyQuiz() {
    const navigate = useNavigate();
    const { moduleId } = useParams();

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

    const firstRoundWrong = useRef<Word[]>([]);

    useEffect(() => {
        fetch(`http://localhost:3001/api/vocabulary/${moduleId}`)
            .then(res => res.json())
            .then((data: Word[]) => {
                setAllWords(data);
                const ordered = shuffle ? [...data].sort(() => Math.random() - 0.5) : data;
                setWords(ordered);
            });
    }, [moduleId]);

    const currentWord = words[currentIndex];

    const normalizeString = (str: string): string => {
        return str
            .toLowerCase()
            .trim()
            .normalize('NFD')
            .replace(/[̀-ͯ]/g, '');
    };

    const handleSubmit = () => {
        if (!userAnswer.trim()) return;

        const isCorrect = normalizeString(userAnswer) === normalizeString(currentWord.french);

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
                setQuizComplete(true);
            }
        }
    };

    const handleToggleShuffle = () => {
        const next = !shuffle;
        setShuffle(next);
        saveShufflePref(next);
        const ordered = next ? [...allWords].sort(() => Math.random() - 0.5) : allWords;
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
        navigate('/vocabulary');
    };

    if (!currentWord && !quizComplete) {
        return (
            <main className="page">
                <p className="vocq-loading">Loading…</p>
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
                    <div className="vocq-complete-emoji">🎉</div>
                    <h1 className="vocq-complete-title">Quiz Complete!</h1>

                    <div className="vocq-stats-grid">
                        <div className="vocq-stat">
                            <span className="vocq-stat-value">{correctCount}</span>
                            <span className="vocq-stat-label">Score</span>
                        </div>
                        <div className="vocq-stat">
                            <span className="vocq-stat-value">{totalWords}</span>
                            <span className="vocq-stat-label">Total</span>
                        </div>
                        <div className="vocq-stat">
                            <span className="vocq-stat-value">{accuracy}%</span>
                            <span className="vocq-stat-label">Accuracy</span>
                        </div>
                    </div>

                    <div className="vocq-complete-actions">
                        <button className="btn btn-primary" onClick={handleRestart}>
                            Try Again
                        </button>
                        <button className="btn btn-secondary" onClick={handleExit}>
                            Back to Vocabulary
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
                    ✕ Exit
                </button>
                <span className="vocq-counter">
                    {isReviewMode ? '🔄 Review — ' : ''}Word {currentIndex + 1} of {words.length}
                </span>
                <button
                    className={`btn vocq-shuffle-btn ${shuffle ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={handleToggleShuffle}
                    title={shuffle ? 'Shuffled — click for In Order' : 'In Order — click to Shuffle'}
                >
                    {shuffle ? '⇄ Shuffled' : '↕ In Order'}
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
                    <p className="section-label vocq-word-label">Translate to French</p>
                    <h2 className="vocq-word-english">{currentWord.english}</h2>
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
                            placeholder="Type your answer…"
                            autoFocus
                        />
                        <div className="vocq-btn-row">
                            <button className="btn btn-secondary" onClick={handleSkip}>
                                Skip
                            </button>
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
                        <p className="vocq-correct-answer">{currentWord.french}</p>
                        {userAnswer && (
                            <p className="vocq-wrong-answer">{userAnswer}</p>
                        )}
                        <button className="btn btn-primary" onClick={handleNext}>
                            Next Word →
                        </button>
                    </div>
                )}
            </div>

            {/* Stats bar */}
            <div className="vocq-stats-bar">
                <div className="vocq-stat-pill vocq-stat-correct">
                    <span>✓</span>
                    <span>{correctCount} Correct</span>
                </div>
                <div className="vocq-stat-pill vocq-stat-wrong">
                    <span>✗</span>
                    <span>{wrongWords.length} To Review</span>
                </div>
            </div>
        </main>
    );
}
