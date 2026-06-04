import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCourses } from '../utils/modeHelpers';
import type { StepType } from '../data/courses';
import { getStepStatus, markStepVisited } from '../utils/courseProgress';
import { useT } from '../utils/i18n';
import { PenIcon, MessageIcon, BookOpenIcon, BookIcon, BoltIcon } from '../components/icons';
import type { SVGProps } from 'react';
import './Lectures.css';

const TYPE_COLOR: Record<StepType, string> = {
    vocabulary: 'var(--accent)',
    grammar:    'var(--verb)',
    verbs:      'var(--verb)',
    phrases:    'var(--almost)',
    reading:    'var(--masc)',
};

type IconFC = React.FC<SVGProps<SVGSVGElement> & { size?: number }>;
const TYPE_ICON: Record<StepType, IconFC> = {
    grammar:    PenIcon as IconFC,
    phrases:    MessageIcon as IconFC,
    reading:    BookOpenIcon as IconFC,
    vocabulary: BookIcon as IconFC,
    verbs:      BoltIcon as IconFC,
};

type LectureFilter = 'all' | 'grammar' | 'phrases' | 'reading';

const FILTERS: LectureFilter[] = ['all', 'grammar', 'phrases', 'reading'];

export default function Lectures() {
    const { level } = useParams<{ level: string }>();
    const navigate = useNavigate();
    const t = useT();
    const courses = useCourses();
    const [filter, setFilter] = useState<LectureFilter>('all');

    const activeCourse = courses.find(c => c.level.toLowerCase() === (level ?? ''));
    const allLectureSteps = activeCourse?.steps.filter(
        s => s.type === 'grammar' || s.type === 'phrases' || s.type === 'reading'
    ) ?? [];
    const lectureSteps = filter === 'all'
        ? allLectureSteps
        : allLectureSteps.filter(s => s.type === filter);

    const filterLabel = (f: LectureFilter) =>
        f === 'all' ? t.lectures.all : t.roadmap.types[f];

    return (
        <main className="page">
            <header className="page-header">
                <h1>{t.lectures.title}</h1>
                <p className="subtitle">{t.lectures.subtitle}</p>
            </header>

            <div className="lectures-filters" role="group" aria-label="Filter lectures">
                {FILTERS.map(f => (
                    <button
                        key={f}
                        type="button"
                        className={`lectures-filter-pill${filter === f ? ' lectures-filter-pill--active' : ''}`}
                        style={filter === f && f !== 'all' ? { backgroundColor: TYPE_COLOR[f], borderColor: TYPE_COLOR[f] } : undefined}
                        onClick={() => setFilter(f)}
                    >
                        {f !== 'all' && (() => { const Icon = TYPE_ICON[f]; return <Icon size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} />; })()}
                        {filterLabel(f)}
                    </button>
                ))}
            </div>

            {lectureSteps.length === 0 ? (
                <p className="lectures-empty">{t.lectures.empty}</p>
            ) : (
                <div className="lectures-list">
                    {lectureSteps.map(step => {
                        const status = getStepStatus(step);
                        const color = TYPE_COLOR[step.type];
                        const Icon  = TYPE_ICON[step.type];
                        const typeLabel = t.roadmap.types[step.type];

                        return (
                            <button
                                key={step.id}
                                className="lecture-card"
                                style={{ borderLeftColor: color }}
                                onClick={() => { markStepVisited(step.id); navigate(`/courses/${level}${step.path}`); }}
                                type="button"
                            >
                                <span className="lecture-icon" style={{ color }}><Icon size={18} /></span>

                                <div className="lecture-body">
                                    <span className="lecture-title">{step.title}</span>
                                    <span className="lecture-type" style={{ color }}>
                                        {typeLabel}
                                    </span>
                                </div>

                                <span className={`lecture-status lecture-status--${status}`}>
                                    {status === 'complete' ? '✓' : status === 'visited' ? '◑' : '○'}
                                </span>

                                <span className="lecture-arrow">›</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </main>
    );
}
