import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    loadQueue,
    saveQueue,
    removeCorrectWord,
    totalQueuedCount,
    type WordQueue,
    type QueuedWord,
} from '../utils/wordQueue';
import { isAnswerCorrect } from '../utils/answerValidator';
import './ReviewQueue.css';

interface ReviewSession {
    words: (QueuedWord & { moduleId: string })[];
    currentIndex: number;
    userAnswer: string;
    showAnswer: boolean;
    correctCount: number;
    done: boolean;
}

export default function ReviewQueue() {
    const navigate = useNavigate();
    const [queue, setQueue] = useState<WordQueue>({});
    const [session, setSession] = useState<ReviewSession | null>(null);

    useEffect(() => {
        setQueue(loadQueue());
    }, []);

    // Allow Enter to advance past the reveal screen without re-clicking
    useEffect(() => {
        if (!session?.showAnswer) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key !== 'Enter') return;
            setSession(s => {
                if (!s) return s;
                if (s.currentIndex >= s.words.length - 1) return { ...s, done: true };
                return { ...s, currentIndex: s.currentIndex + 1, userAnswer: '', showAnswer: false };
            });
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [session?.showAnswer]); // eslint-disable-line react-hooks/exhaustive-deps

    const totalCount = totalQueuedCount(queue);

    const startReview = () => {
        const flat: (QueuedWord & { moduleId: string })[] = [];
        for (const [moduleId, words] of Object.entries(queue)) {
            for (const w of words) {
                flat.push({ ...w, moduleId });
            }
        }
        const shuffled = [...flat].sort(() => Math.random() - 0.5);
        setSession({
            words: shuffled,
            currentIndex: 0,
            userAnswer: '',
            showAnswer: false,
            correctCount: 0,
            done: false,
        });
    };

    const clearModule = (moduleId: string) => {
        const updated = { ...queue };
        delete updated[moduleId];
        saveQueue(updated);
        setQueue(updated);
    };

    if (!session) {
        return (
            <main className="page">
                <div className="rq-header page-header">
                    <h1>Review Queue</h1>
                    <p className="subtitle">
                        {totalCount === 0
                            ? 'No words queued — complete a vocabulary quiz to add words here.'
                            : `${totalCount} word${totalCount !== 1 ? 's' : ''} waiting for review`}
                    </p>
                </div>

                {totalCount > 0 && (
                    <button className="btn btn-primary rq-start-btn" onClick={startReview}>
                        Start Review ({totalCount} words)
                    </button>
                )}

                {Object.entries(queue).map(([moduleId, words]) => (
                    <div key={moduleId} className="card rq-module-card">
                        <div className="rq-module-header">
                            <div>
                                <span className="section-label">Module {moduleId}</span>
                                <p className="rq-module-count">
                                    {words.length} word{words.length !== 1 ? 's' : ''}
                                </p>
                            </div>
                            <button
                                className="btn btn-secondary rq-clear-btn"
                                onClick={() => clearModule(moduleId)}
                            >
                                Clear
                            </button>
                        </div>
                        <ul className="rq-word-list">
                            {words.map(w => (
                                <li key={w.id} className="rq-word-item">
                                    <span className="rq-word-english">{w.english}</span>
                                    <span className="rq-word-french">{w.french}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {totalCount === 0 && (
                    <button
                        className="btn btn-secondary rq-back-btn"
                        onClick={() => navigate('/vocabulary')}
                    >
                        Go to Vocabulary
                    </button>
                )}
            </main>
        );
    }

    if (session.done) {
        return (
            <main className="page">
                <div className="vocq-complete card">
                    <div className="vocq-complete-emoji">✅</div>
                    <h1 className="vocq-complete-title">Review Complete!</h1>
                    <div className="vocq-stats-grid">
                        <div className="vocq-stat">
                            <span className="vocq-stat-value">{session.correctCount}</span>
                            <span className="vocq-stat-label">Correct</span>
                        </div>
                        <div className="vocq-stat">
                            <span className="vocq-stat-value">{session.words.length}</span>
                            <span className="vocq-stat-label">Total</span>
                        </div>
                        <div className="vocq-stat">
                            <span className="vocq-stat-value">
                                {Math.round((session.correctCount / session.words.length) * 100)}%
                            </span>
                            <span className="vocq-stat-label">Accuracy</span>
                        </div>
                    </div>
                    <div className="vocq-complete-actions">
                        {totalQueuedCount(loadQueue()) > 0 && (
                            <button className="btn btn-primary" onClick={() => { setQueue(loadQueue()); setSession(null); }}>
                                Review Remaining
                            </button>
                        )}
                        <button className="btn btn-secondary" onClick={() => navigate('/')}>
                            Home
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    const current = session.words[session.currentIndex];
    const progress = ((session.currentIndex + 1) / session.words.length) * 100;

    const handleSubmit = () => {
        if (!session.userAnswer.trim()) return;
        const isCorrect = isAnswerCorrect(session.userAnswer, current.french);

        if (isCorrect) {
            removeCorrectWord(current.moduleId, current.id);
            if (session.currentIndex >= session.words.length - 1) {
                setSession(s => s && ({ ...s, correctCount: s.correctCount + 1, done: true }));
            } else {
                setSession(s => s && ({
                    ...s,
                    correctCount: s.correctCount + 1,
                    currentIndex: s.currentIndex + 1,
                    userAnswer: '',
                    showAnswer: false,
                }));
            }
        } else {
            setSession(s => s && ({ ...s, showAnswer: true }));
        }
    };

    const handleSkip = () => {
        setSession(s => s && ({ ...s, showAnswer: true }));
    };

    const handleNext = () => {
        if (session.currentIndex >= session.words.length - 1) {
            setSession(s => s && ({ ...s, done: true }));
        } else {
            setSession(s => s && ({
                ...s,
                currentIndex: s.currentIndex + 1,
                userAnswer: '',
                showAnswer: false,
            }));
        }
    };

    return (
        <main className="page">
            <div className="vocq-top-bar">
                <button
                    className="btn btn-secondary vocq-exit-btn"
                    onClick={() => { setQueue(loadQueue()); setSession(null); }}
                >
                    ✕ Exit
                </button>
                <span className="vocq-counter">
                    Word {session.currentIndex + 1} of {session.words.length}
                </span>
            </div>

            <div className="progress-track vocq-progress">
                <div
                    className="progress-fill"
                    style={{ width: `${progress}%`, backgroundColor: 'var(--accent)' }}
                />
            </div>

            <div className="card vocq-card">
                <div className="vocq-question-top">
                    <p className="section-label vocq-word-label">Translate to French</p>
                    <h2 className="vocq-word-english">{current.english}</h2>
                </div>

                <hr className="vocq-divider" />

                {!session.showAnswer ? (
                    <div className="vocq-answer-section">
                        <input
                            type="text"
                            className="field-input vocq-input"
                            value={session.userAnswer}
                            onChange={e => setSession(s => s && ({ ...s, userAnswer: e.target.value }))}
                            onKeyPress={e => e.key === 'Enter' && handleSubmit()}
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
                                disabled={!session.userAnswer.trim()}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="vocq-reveal-section">
                        <p className="vocq-correct-answer">{current.french}</p>
                        {session.userAnswer && (
                            <p className="vocq-wrong-answer">{session.userAnswer}</p>
                        )}
                        <button className="btn btn-primary" onClick={handleNext}>
                            Next Word →
                        </button>
                    </div>
                )}
            </div>

            <div className="vocq-stats-bar">
                <div className="vocq-stat-pill vocq-stat-correct">
                    <span>✓</span>
                    <span>{session.correctCount} Correct</span>
                </div>
            </div>
        </main>
    );
}
