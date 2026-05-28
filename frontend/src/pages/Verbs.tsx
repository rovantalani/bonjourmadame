import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCourses } from '../utils/modeHelpers';
import { getActiveCourse, getStepStatus, markStepVisited } from '../utils/courseProgress';
import { useT } from '../utils/i18n';
import './Verbs.css';

const VERB_ICONS: Record<string, string> = {
    etre:                    '🔵',
    avoir:                   '🟢',
    faire:                   '🟡',
    aller:                   '🔴',
    venir:                   '🟣',
    'regular-verbs':         '📝',
    'irregular-verbs':       '⚡',
    'advanced-irregular-verbs': '🔥',
};

export default function Verbs() {
    const navigate = useNavigate();
    const t = useT();
    const courses = useCourses();
    const [courseLevel, setCourseLevel] = useState(() => getActiveCourse() ?? 'A1');

    useEffect(() => {
        const handler = (e: Event) => setCourseLevel((e as CustomEvent<string>).detail);
        window.addEventListener('activeCourseChanged', handler);
        return () => window.removeEventListener('activeCourseChanged', handler);
    }, []);

    const activeCourse = courses.find(c => c.level === courseLevel);
    const verbSteps = activeCourse?.steps.filter(s => s.type === 'verbs') ?? [];

    return (
        <main className="page">
            <header className="page-header">
                <h1>{t.verbs.title}</h1>
                <p className="subtitle">{t.verbs.subtitle}</p>
            </header>

            {verbSteps.length === 0 ? (
                <p className="verbs-empty">{t.verbs.empty}</p>
            ) : (
                <div className="verbs-grid">
                    {verbSteps.map(step => {
                        const status = getStepStatus(step);
                        const icon = VERB_ICONS[step.contentId] ?? '✏️';

                        return (
                            <button
                                key={step.id}
                                className="verbs-card"
                                onClick={() => { markStepVisited(step.id); navigate(step.path); }}
                                type="button"
                            >
                                <div className="verbs-card-header">
                                    <span className="verbs-card-icon">{icon}</span>
                                    <span className={`verbs-status verbs-status--${status}`}>
                                        {status === 'complete' ? '✓' : status === 'visited' ? '◑' : '○'}
                                    </span>
                                </div>
                                <h2 className="verbs-card-title">{step.title}</h2>
                                <span className="verbs-card-arrow">›</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </main>
    );
}
