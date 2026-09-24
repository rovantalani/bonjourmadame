import React, { useState, useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { loadQueue, totalQueuedCount } from '../utils/wordQueue';
import { fetchDueWordsFromApi } from '../utils/progress';
import { useAuth } from '../context/AuthContext';
import GuestBanner from '../components/GuestBanner';
import { getActiveCourse, getNextStep, getCourseProgress } from '../utils/courseProgress';
import { useCourses } from '../utils/modeHelpers';
import { useT } from '../utils/i18n';
import { BookIcon, BookOpenIcon, BoltIcon, RefreshIcon } from '../components/icons';
import type { SVGProps } from 'react';

export default function Home() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const t = useT();

    const [queueCount] = useState(() => totalQueuedCount(loadQueue()));
    const [dueCount, setDueCount] = useState(0);

    useEffect(() => {
        if (!user) return;
        let cancelled = false;
        fetchDueWordsFromApi().then(due => {
            if (!cancelled) setDueCount(due.length);
        });
        return () => { cancelled = true; };
    }, [user]);

    const courses           = useCourses();
    const activeCourseLevel = getActiveCourse();
    const activeCourse      = courses.find(c => c.level === activeCourseLevel) ?? null;
    const nextStep          = activeCourse ? getNextStep(activeCourse) : null;
    const courseProgress    = activeCourse ? getCourseProgress(activeCourse) : null;
    const activeLevel       = activeCourseLevel?.toLowerCase() ?? 'a1';

    type IconFC = React.FC<SVGProps<SVGSVGElement> & { size?: number }>;
    const SECTION_CARDS = [
        { id: 'vocabulary', path: `/courses/${activeLevel}/vocabulary`, color: 'var(--accent)', Icon: BookIcon as IconFC, ...t.home.sections.vocabulary  },
        { id: 'verbs',      path: `/courses/${activeLevel}/verbs`,      color: 'var(--verb)',   Icon: BoltIcon as IconFC, ...t.home.sections.verbs },
        { id: 'lectures',   path: `/courses/${activeLevel}/lectures`,   color: 'var(--almost)', Icon: BookOpenIcon as IconFC, ...t.home.sections.lectures },
    ];

    return (
        <main className="page">
            <GuestBanner />
            <div className="home-hero">
                <img src="/logo_no_text.png" alt="Bonjour Madame logo" className="home-logo" />
                <h1>Bonjour Madame</h1>
                <p className="home-subtitle">{t.home.subtitle}</p>
            </div>

            {(user ? dueCount : queueCount) > 0 && (
                <button
                    className="home-review-banner"
                    onClick={() => navigate('/review-queue')}
                    type="button"
                >
                    <span className="home-review-icon"><RefreshIcon size={20} /></span>
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
                            <span className="home-card-icon" style={{ color: card.color }}><card.Icon size={22} /></span>
                            <h2 className="home-card-title">{card.title}</h2>
                            <p className="home-card-desc">{card.description}</p>
                        </div>
                    </button>
                ))}
            </div>
        </main>
    );
}
