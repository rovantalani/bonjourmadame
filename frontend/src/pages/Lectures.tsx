import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCourses } from '../utils/modeHelpers';
import type { StepType } from '../data/courses';
import { getActiveCourse, setActiveCourse, getStepStatus, markStepVisited } from '../utils/courseProgress';
import CourseBar from '../components/CourseBar';
import { useT } from '../utils/i18n';
import './Lectures.css';

const TYPE_COLOR: Record<StepType, string> = {
    grammar:    '#059669',
    phrases:    '#0891B2',
    reading:    '#7C3AED',
    vocabulary: '#4338CA',
    verbs:      '#D97706',
};

const TYPE_ICON: Record<StepType, string> = {
    grammar:    '✏️',
    phrases:    '💬',
    reading:    '📖',
    vocabulary: '📚',
    verbs:      '🔤',
};

type LectureFilter = 'all' | 'grammar' | 'phrases' | 'reading';

const FILTERS: LectureFilter[] = ['all', 'grammar', 'phrases', 'reading'];

export default function Lectures() {
    const navigate = useNavigate();
    const t = useT();
    const courses = useCourses();
    const [courseLevel, setCourseLevel] = useState(() => getActiveCourse() ?? 'A1');
    const [filter, setFilter] = useState<LectureFilter>('all');

    const activeCourse = courses.find(c => c.level === courseLevel);
    const allLectureSteps = activeCourse?.steps.filter(
        s => s.type === 'grammar' || s.type === 'phrases' || s.type === 'reading'
    ) ?? [];
    const lectureSteps = filter === 'all'
        ? allLectureSteps
        : allLectureSteps.filter(s => s.type === filter);

    const handleCourseChange = (level: string) => {
        setActiveCourse(level);
        setCourseLevel(level);
        setFilter('all');
    };

    const filterLabel = (f: LectureFilter) =>
        f === 'all' ? t.lectures.all : t.roadmap.types[f];

    return (
        <main className="page">
            <header className="page-header">
                <h1>{t.lectures.title}</h1>
                <p className="subtitle">{t.lectures.subtitle}</p>
            </header>

            <CourseBar activeLevel={courseLevel} onChange={handleCourseChange} />

            <div className="lectures-filters" role="group" aria-label="Filter lectures">
                {FILTERS.map(f => (
                    <button
                        key={f}
                        type="button"
                        className={`lectures-filter-pill${filter === f ? ' lectures-filter-pill--active' : ''}`}
                        style={filter === f && f !== 'all' ? { backgroundColor: TYPE_COLOR[f], borderColor: TYPE_COLOR[f] } : undefined}
                        onClick={() => setFilter(f)}
                    >
                        {f !== 'all' && <span>{TYPE_ICON[f]}</span>}
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
                        const icon  = TYPE_ICON[step.type];
                        const typeLabel = t.roadmap.types[step.type];

                        return (
                            <button
                                key={step.id}
                                className="lecture-card"
                                style={{ borderLeftColor: color }}
                                onClick={() => { markStepVisited(step.id); navigate(step.path); }}
                                type="button"
                            >
                                <span className="lecture-icon">{icon}</span>

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
