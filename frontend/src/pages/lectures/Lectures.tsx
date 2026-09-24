import ModuleTags from '../../components/ModuleTags';
import ProgressFlower from '../../components/ProgressFlower';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCourses } from '../../utils/modeHelpers';
import { isLectureStep, type LectureType } from '../../data/courses';
import { getStepStatus, markStepVisited } from '../../utils/courseProgress';
import { useT } from '../../utils/i18n';
import { PenIcon, MessageIcon, BookOpenIcon } from '../../components/icons/index';
import type { SVGProps } from 'react';
import './Lectures.css';

const TYPE_COLOR: Record<LectureType, string> = {
    grammar:    'var(--tag-grammar-text)',
    phrases:    'var(--tag-phrases-text)',
    reading:    'var(--tag-reading-text)',
};

type IconFC = React.FC<SVGProps<SVGSVGElement> & { size?: number }>;
const TYPE_ICON: Record<LectureType, IconFC> = {
    grammar:    PenIcon as IconFC,
    phrases:    MessageIcon as IconFC,
    reading:    BookOpenIcon as IconFC,
};

type LectureFilter = 'all' | LectureType;

const FILTERS: LectureFilter[] = ['all', 'grammar', 'phrases', 'reading'];

export default function Lectures() {
    const { level } = useParams<{ level: string }>();
    const navigate = useNavigate();
    const t = useT();
    const courses = useCourses();
    const [filter, setFilter] = useState<LectureFilter>('all');

    const activeCourse = courses.find(c => c.level.toLowerCase() === (level ?? ''));
    const allLectureSteps = activeCourse?.steps.filter(isLectureStep) ?? [];
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
                        style={filter === f && f !== 'all' ? { backgroundColor: `var(--tag-${f}-bg)`, borderColor: TYPE_COLOR[f], color: `var(--tag-${f}-text)` } : undefined}
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
                        const status = getStepStatus(step, level);
                        const color = TYPE_COLOR[step.type];

                        return (
                            <button
                                key={step.id}
                                className={`lecture-card lecture-card--${status}`}
                                style={{ borderLeftColor: color }}
                                onClick={() => { markStepVisited(step.id); navigate(`/courses/${level}${step.path}`); }}
                                type="button"
                            >
                                <div className="lecture-body">
                                    <span className="lecture-title">{step.title}</span>
                                    <ModuleTags step={step} showModule={false} />
                                </div>

                                <ProgressFlower status={status} />

                                <span className="lecture-arrow">›</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </main>
    );
}
