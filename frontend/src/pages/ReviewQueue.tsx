import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    loadQueue,
    saveQueue,
    removeCorrectWord,
    totalQueuedCount,
    type WordQueue,
    type QueuedWord,
} from '../utils/wordQueue';
import { isAnswerCorrect } from '../utils/answerValidator';
import { fetchDueWordsFromApi, syncAnswerToApi, type DueWord } from '../utils/progress';
import { loadQuizDirection, type QuizDirection } from '../utils/settings';
import { useAuth } from '../context/AuthContext';
import { useT } from '../utils/i18n';
import './ReviewQueue.css';

const API = import.meta.env.VITE_API_BASE;

interface ReviewWord extends QueuedWord {
    moduleId: string;
    masteryLevel?: number;
}

interface ReviewSession {
    words: ReviewWord[];
    currentIndex: number;
    userAnswer: string;
    showAnswer: boolean;
    correctCount: number;
    done: boolean;
}

async function loadDueWords(dueList: DueWord[]): Promise<ReviewWord[]> {
    const byModule: Record<string, DueWord[]> = {};
    for (const d of dueList) {
        (byModule[d.moduleId] ??= []).push(d);
    }

    const results: ReviewWord[] = [];
    await Promise.all(
        Object.entries(byModule).map(async ([moduleId, dues]) => {
            try {
                const res = await axios.get<{ id: number; english: string; french: string }[]>(
                    `${API}/api/vocabulary/${moduleId}`,
                    { withCredentials: true },
                );
                for (const due of dues) {
                    const numericId = parseInt(due.wordId.split(':')[1], 10);
                    const word = res.data.find(w => w.id === numericId);
                    if (word) {
                        results.push({
                            id:           word.id,
                            english:      word.english,
                            french:       word.french,
                            moduleId,
                            masteryLevel: due.masteryLevel,
                        });
                    }
                }
            } catch { /* skip module on error */ }
        })
    );
    return results;
}

export default function ReviewQueue() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const t = useT();
    const [queue, setQueue] = useState<WordQueue>({});
    const [session, setSession] = useState<ReviewSession | null>(null);
    const [loading, setLoading] = useState(false);
    const [quizDir] = useState<QuizDirection>(loadQuizDirection);

    useEffect(() => {
        if (user) {
            setLoading(true);
            fetchDueWordsFromApi().then(due => {
                loadDueWords(due).then(words => {
                    setSession(words.length > 0 ? {
                        words: [...words].sort(() => Math.random() - 0.5),
                        currentIndex: 0,
                        userAnswer: '',
                        showAnswer: false,
                        correctCount: 0,
                        done: false,
                    } : null);
                    setLoading(false);
                });
            });
        } else {
            setQueue(loadQueue());
        }
    }, [user]);

    // Allow Enter to advance past the reveal screen
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

    const totalCount = user ? (session?.words.length ?? 0) : totalQueuedCount(queue);

    const startReview = () => {
        const flat: ReviewWord[] = [];
        for (const [moduleId, words] of Object.entries(queue)) {
            for (const w of words) flat.push({ ...w, moduleId });
        }
        setSession({
            words: [...flat].sort(() => Math.random() - 0.5),
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

    if (loading) {
        return (
            <main className="page">
                <div className="rq-header page-header">
                    <h1>{t.reviewQueue.title}</h1>
                    <p className="subtitle">{t.reviewQueue.loading}</p>
                </div>
            </main>
        );
    }

    // Pre-review screen
    if (!session) {
        if (user) {
            return (
                <main className="page">
                    <div className="rq-header page-header">
                        <h1>{t.reviewQueue.title}</h1>
                        <p className="subtitle">{t.reviewQueue.noDue}</p>
                    </div>
                    <button
                        className="btn btn-secondary rq-back-btn"
                        onClick={() => navigate('/vocabulary')}
                    >
                        {t.reviewQueue.goToVocabulary}
                    </button>
                </main>
            );
        }

        return (
            <main className="page">
                <div className="rq-header page-header">
                    <h1>{t.reviewQueue.title}</h1>
                    <p className="subtitle">
                        {totalCount === 0
                            ? t.reviewQueue.noQueue
                            : t.reviewQueue.waiting(totalCount)}
                    </p>
                </div>

                {totalCount > 0 && (
                    <button className="btn btn-primary rq-start-btn" onClick={startReview}>
                        {t.reviewQueue.startReview(totalCount)}
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
                        {t.reviewQueue.goToVocabulary}
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
                    <h1 className="vocq-complete-title">{t.reviewQueue.complete}</h1>
                    <div className="vocq-stats-grid">
                        <div className="vocq-stat">
                            <span className="vocq-stat-value">{session.correctCount}</span>
                            <span className="vocq-stat-label">{t.quiz.correct}</span>
                        </div>
                        <div className="vocq-stat">
                            <span className="vocq-stat-value">{session.words.length}</span>
                            <span className="vocq-stat-label">{t.quiz.total}</span>
                        </div>
                        <div className="vocq-stat">
                            <span className="vocq-stat-value">
                                {Math.round((session.correctCount / session.words.length) * 100)}%
                            </span>
                            <span className="vocq-stat-label">{t.quiz.accuracy}</span>
                        </div>
                    </div>
                    <div className="vocq-complete-actions">
                        {!user && totalQueuedCount(loadQueue()) > 0 && (
                            <button className="btn btn-primary" onClick={() => { setQueue(loadQueue()); setSession(null); }}>
                                {t.reviewQueue.reviewRemaining}
                            </button>
                        )}
                        <button className="btn btn-secondary" onClick={() => navigate('/')}>
                            {t.reviewQueue.home}
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
        const target = quizDir === 'fr-en' ? current.english : current.french;
        const isCorrect = isAnswerCorrect(session.userAnswer, target);

        if (user) {
            const currentLevel = current.masteryLevel ?? 0;
            const newLevel = isCorrect ? Math.min(5, currentLevel + 1) : Math.max(0, currentLevel - 1);
            syncAnswerToApi(`${current.moduleId}:${current.id}`, current.moduleId, isCorrect, newLevel);
        } else if (isCorrect) {
            removeCorrectWord(current.moduleId, current.id);
        }

        if (isCorrect) {
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
        if (user) {
            const currentLevel = current.masteryLevel ?? 0;
            syncAnswerToApi(`${current.moduleId}:${current.id}`, current.moduleId, false, Math.max(0, currentLevel - 1));
        }
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
                    onClick={() => { if (!user) setQueue(loadQueue()); setSession(null); }}
                >
                    {t.quiz.exit}
                </button>
                <span className="vocq-counter">
                    {t.quiz.reviewCounter(session.currentIndex + 1, session.words.length)}
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
                    <p className="section-label vocq-word-label">
                        {quizDir === 'fr-en' ? t.quiz.translateToEnglish : t.quiz.translateToFrench}
                    </p>
                    <h2 className="vocq-word-english">
                        {quizDir === 'fr-en' ? current.french : current.english}
                    </h2>
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
                                disabled={!session.userAnswer.trim()}
                            >
                                {t.quiz.submit}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="vocq-reveal-section">
                        <p className="vocq-correct-answer">
                            {quizDir === 'fr-en' ? current.english : current.french}
                        </p>
                        {session.userAnswer && (
                            <p className="vocq-wrong-answer">{session.userAnswer}</p>
                        )}
                        <button className="btn btn-primary" onClick={handleNext}>
                            {t.quiz.nextWord}
                        </button>
                    </div>
                )}
            </div>

            <div className="vocq-stats-bar">
                <div className="vocq-stat-pill vocq-stat-correct">
                    <span>✓</span>
                    <span>{session.correctCount} {t.quiz.correct}</span>
                </div>
            </div>
        </main>
    );
}
