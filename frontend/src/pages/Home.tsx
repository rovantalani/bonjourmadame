import { useState, useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { loadQueue, totalQueuedCount } from '../utils/wordQueue';
import { loadStreak, loadDailyProgress, loadDailyGoal, fetchProgressFromApi, fetchDueWordsFromApi } from '../utils/progress';
import { useAuth } from '../context/AuthContext';
import ProgressImportBanner from '../components/ProgressImportBanner';
import { COURSES } from '../data/courses';
import { getActiveCourse, getNextStep, getCourseProgress } from '../utils/courseProgress';

interface SectionCard {
    id: string;
    path: string;
    color: string;
    icon: string;
    title: string;
    description: string;
    meta: string;
}

const SECTION_CARDS: SectionCard[] = [
    {
        id: 'vocabulary',
        path: '/vocabulary',
        color: '#4338CA',
        icon: '📖',
        title: 'Vocabulary',
        description: 'Words, flashcards & quizzes across 20 curated modules',
        meta: '20 modules · 400+ words',
    },
    {
        id: 'grammar',
        path: '/grammar',
        color: '#059669',
        icon: '✏️',
        title: 'Grammar',
        description: 'Conjugation tables and 10 structured grammar lessons',
        meta: '10 lessons · 52 verbs',
    },
    {
        id: 'phrases',
        path: '/phrases',
        color: '#0891B2',
        icon: '💬',
        title: 'Phrases',
        description: '90 essential expressions for real conversations',
        meta: '6 categories · 90 phrases',
    },
    {
        id: 'helper-verbs',
        path: '/helper-verbs',
        color: '#D97706',
        icon: '⚡',
        title: 'Helper Verbs',
        description: 'The 5 essential verbs: être, avoir, faire, aller, venir',
        meta: '5 verbs · 4 tenses',
    },
];

export default function Home() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [queueCount, setQueueCount] = useState(0);
    const [dueCount, setDueCount] = useState(0);
    const [streak, setStreak] = useState(0);
    const [wordsToday, setWordsToday] = useState(0);
    const [dailyGoal, setDailyGoal] = useState(10);

    useEffect(() => {
        setDailyGoal(loadDailyGoal());

        if (user) {
            fetchProgressFromApi().then(api => {
                if (!api) return;
                setStreak(api.stats.currentStreak);
                const today = new Date().toISOString().slice(0, 10);
                const wordsStudied = api.sessions
                    .filter(s => s.date.startsWith(today))
                    .reduce((sum, s) => sum + s.total, 0);
                setWordsToday(wordsStudied);
            });
            fetchDueWordsFromApi().then(due => setDueCount(due.length));
        } else {
            setQueueCount(totalQueuedCount(loadQueue()));
            setStreak(loadStreak().currentStreak);
            setWordsToday(loadDailyProgress().wordsStudied);
        }
    }, [user]);

    const activeCourseLevel = getActiveCourse();
    const activeCourse      = COURSES.find(c => c.level === activeCourseLevel) ?? null;
    const nextStep          = activeCourse ? getNextStep(activeCourse) : null;
    const courseProgress    = activeCourse ? getCourseProgress(activeCourse) : null;

    return (
        <main className="page">
            <ProgressImportBanner />
            <div className="home-hero">
                <img src="/logo_no_text.png" alt="Bonjour Madame logo" className="home-logo" />
                <h1>Bonjour Madame</h1>
                <p className="home-subtitle">Your personal French course</p>
                <hr className="home-rule" />
                <div className="home-status-row">
                    <button className="home-streak-pill" onClick={() => navigate('/stats')} type="button">
                        <span className="home-streak-fire">&#x1F525;</span>
                        <span className="home-streak-num">{streak}</span>
                        <span className="home-streak-label">day streak</span>
                    </button>
                    <div className="home-daily-goal">
                        <div className="home-daily-label">
                            <span>{wordsToday} / {dailyGoal} words today</span>
                        </div>
                        <div className="progress-track home-daily-bar">
                            <div
                                className="progress-fill"
                                style={{
                                    width: `${Math.min(100, (wordsToday / dailyGoal) * 100)}%`,
                                    backgroundColor: wordsToday >= dailyGoal ? 'var(--success)' : 'var(--accent)',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {(user ? dueCount : queueCount) > 0 && (
                <button
                    className="home-review-banner"
                    onClick={() => navigate('/review-queue')}
                    type="button"
                >
                    <span className="home-review-icon">🔄</span>
                    <div className="home-review-text">
                        <strong>Review Queue</strong>
                        {user
                            ? <span>{dueCount} word{dueCount !== 1 ? 's' : ''} due for review</span>
                            : <span>{queueCount} word{queueCount !== 1 ? 's' : ''} ready for review</span>
                        }
                    </div>
                    <span className="home-review-badge">{user ? dueCount : queueCount}</span>
                </button>
            )}

            {activeCourse && (
                <button
                    className="home-course-banner card"
                    onClick={() => navigate(nextStep ? nextStep.path : `/courses/${activeCourse.level.toLowerCase()}`)}
                    type="button"
                >
                    <span
                        className="home-course-badge"
                        style={{ backgroundColor: activeCourse.color }}
                    >
                        {activeCourse.level}
                    </span>
                    <div className="home-course-text">
                        <strong>{activeCourse.title}</strong>
                        <span>{nextStep ? nextStep.title : 'Course complete!'}</span>
                    </div>
                    <div className="home-course-right">
                        {courseProgress && (
                            <span className="home-course-pct">{courseProgress.pct}%</span>
                        )}
                        <span className="home-course-arrow">›</span>
                    </div>
                </button>
            )}

            <div className="home-grid">
                {SECTION_CARDS.map((card) => (
                    <button
                        key={card.id}
                        className="home-section-card"
                        onClick={() => navigate(card.path)}
                        type="button"
                    >
                        <span
                            className="home-card-accent-bar"
                            style={{ backgroundColor: card.color }}
                        />
                        <div className="home-card-body">
                            <span className="home-card-icon">{card.icon}</span>
                            <h2 className="home-card-title">{card.title}</h2>
                            <p className="home-card-desc">{card.description}</p>
                            <span className="home-card-meta">{card.meta}</span>
                        </div>
                    </button>
                ))}
            </div>
        </main>
    );
}
