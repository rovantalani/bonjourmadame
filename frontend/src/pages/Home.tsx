import { useState, useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { loadQueue, totalQueuedCount } from '../utils/wordQueue';
import { loadStreak, loadDailyProgress, loadDailyGoal, fetchProgressFromApi, fetchDueWordsFromApi } from '../utils/progress';
import { useAuth } from '../context/AuthContext';
import ProgressImportBanner from '../components/ProgressImportBanner';
import { getActiveCourse, getNextStep, getCourseProgress } from '../utils/courseProgress';
import { useCourses } from '../utils/modeHelpers';
import { useT } from '../utils/i18n';
import { loadLearningMode } from '../utils/settings';

export default function Home() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const t = useT();

    const isEnglishMode = loadLearningMode() === 'learn-english';
    const [showENBanner, setShowENBanner] = useState(() => {
        return isEnglishMode && localStorage.getItem('onboardingShownEN') !== 'true';
    });

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

    const courses           = useCourses();
    const activeCourseLevel = getActiveCourse();
    const activeCourse      = courses.find(c => c.level === activeCourseLevel) ?? null;
    const nextStep          = activeCourse ? getNextStep(activeCourse) : null;
    const courseProgress    = activeCourse ? getCourseProgress(activeCourse) : null;
    const activeLevel       = activeCourseLevel?.toLowerCase() ?? 'a1';

    const SECTION_CARDS = [
        { id: 'vocabulary', path: `/courses/${activeLevel}/vocabulary`, color: '#4338CA', icon: '📖', ...t.home.sections.vocabulary  },
        { id: 'lectures',   path: `/courses/${activeLevel}/lectures`,   color: '#059669', icon: '✏️', ...t.home.sections.grammar     },
        { id: 'verbs',      path: `/courses/${activeLevel}/verbs`,      color: '#D97706', icon: '⚡', ...t.home.sections.helperVerbs },
    ];

    return (
        <main className="page">
            <ProgressImportBanner />
            {showENBanner && (
                <div className="home-en-banner">
                    <span>🇬🇧 Vous apprenez l'anglais. Votre interface est en français.</span>
                    <button
                        type="button"
                        className="home-en-banner-close"
                        onClick={() => { localStorage.setItem('onboardingShownEN', 'true'); setShowENBanner(false); }}
                        aria-label="Fermer"
                    >
                        ✕
                    </button>
                </div>
            )}
            <div className="home-hero">
                <img src="/logo_no_text.png" alt="Bonjour Madame logo" className="home-logo" />
                <h1>Bonjour Madame</h1>
                <p className="home-subtitle">{t.home.subtitle}</p>
                <hr className="home-rule" />
                <div className="home-status-row">
                    <button className="home-streak-pill" onClick={() => navigate('/stats')} type="button">
                        <span className="home-streak-fire">&#x1F525;</span>
                        <span className="home-streak-num">{streak}</span>
                        <span className="home-streak-label">{t.home.dayStreak}</span>
                    </button>
                    <div className="home-daily-goal">
                        <div className="home-daily-label">
                            <span>{t.home.wordsToday(wordsToday, dailyGoal)}</span>
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
                        <strong>{t.home.reviewQueue}</strong>
                        {user
                            ? <span>{t.home.wordsDue(dueCount)}</span>
                            : <span>{t.home.wordsReady(queueCount)}</span>
                        }
                    </div>
                    <span className="home-review-badge">{user ? dueCount : queueCount}</span>
                </button>
            )}

            {activeCourse && (
                <button
                    className="home-course-banner card"
                    onClick={() => navigate(`/courses/${activeCourse.level.toLowerCase()}${nextStep ? nextStep.path : ''}`)}
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
                        <span>{nextStep ? nextStep.title : t.home.courseComplete}</span>
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
