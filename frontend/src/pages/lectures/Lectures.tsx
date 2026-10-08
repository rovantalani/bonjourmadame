import CourseLabel from '../../components/CourseLabel';
import { useLearningNavigate as useNavigate } from '../../hooks/useLearningNavigation';
import { useLearning } from '../../context/LearningContext';
import ProgressFlower from '../../components/ProgressFlower';
import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useCourses } from '../../utils/modeHelpers';
import { isLectureStep, type LectureType } from '../../data/courseTypes';
import { getStepStatus, markStepVisited } from '../../utils/courseProgress';
import { useT } from '../../utils/i18n';
import { PenIcon, MessageIcon, BookOpenIcon } from '../../components/icons/index';
import type { SVGProps } from 'react';
import './Lectures.css';

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
    const { language } = useLearning();
    const fr = language === 'en';
    const courses = useCourses();
    const [params, setParams] = useSearchParams();
    const value = params.get('type');
    const filter: LectureFilter = value === 'grammar' || value === 'phrases' || value === 'reading' ? value : 'all';
    const setFilter = (next: LectureFilter) => setParams(next === 'all' ? {} : { type: next });

    const activeCourse = courses.find(c => c.level.toLowerCase() === (level ?? ''));
    const allLectureSteps = activeCourse?.steps.filter(isLectureStep) ?? [];
    const lectureSteps = filter === 'all'
        ? allLectureSteps
        : allLectureSteps.filter(s => s.type === filter);

    const groups = [...new Set(allLectureSteps.map(step => step.unit))].map(unit => ({
        unit,
        title: activeCourse?.units?.find(item => item.number === unit)?.title,
        steps: lectureSteps.filter(step => step.unit === unit),
    })).filter(group => group.steps.length > 0);

    const filterLabel = (f: LectureFilter) =>
        f === 'all' ? t.lectures.all : t.roadmap.types[f];

    return (
        <main className="page lesson-contents">
            <header className="page-header">
                <CourseLabel title={fr ? 'Table des matières' : 'Table of contents'} />
                <h1>{fr ? 'Leçons' : 'Lessons'}</h1>
                <p className="subtitle">{t.lectures.subtitle}</p>
            </header>

            <div className="lectures-filters" role="group" aria-label={fr ? 'Filtrer les leçons' : 'Filter lessons'}>
                {FILTERS.map(f => (
                    <button
                        key={f}
                        type="button"
                        className={`lectures-filter-pill${filter === f ? ' lectures-filter-pill--active' : ''}`}
                        aria-pressed={filter === f}
                        onClick={() => setFilter(f)}
                    >
                        {f !== 'all' && (() => { const Icon = TYPE_ICON[f]; return <Icon size={14} aria-hidden="true" />; })()}
                        {filterLabel(f)}
                    </button>
                ))}
            </div>

            {lectureSteps.length === 0 ? (
                <p className="lectures-empty">{t.lectures.empty}</p>
            ) : (
                <div className="contents-units">
                    {groups.map(group => <section className="contents-unit" key={group.unit ?? 'other'} aria-labelledby={`contents-unit-${group.unit ?? 'other'}`}>
                        <header className="contents-unit-heading">
                            <span className="contents-unit-number">{group.unit === undefined ? '—' : String(group.unit).padStart(2, '0')}</span>
                            <h2 id={`contents-unit-${group.unit ?? 'other'}`}>{group.title ?? (fr ? 'Leçons' : 'Lessons')}</h2>
                            <span className="contents-count">{group.steps.length} {fr ? 'leçons' : 'lessons'}</span>
                        </header>
                        <ol className="contents-paper">
                            {group.steps.map(step => {
                                const Icon = TYPE_ICON[step.type];
                                const title = step.title.replace(/^(Reading|Grammar|Phrases|Lecture|Grammaire)\s*:\s*/i, '');
                                return <li key={step.id}>
                                    <button className="contents-row" onClick={() => { markStepVisited(step.id); navigate(`/courses/${level}${step.path}`); }} type="button">
                                        <span className="contents-icon"><Icon size={20} aria-hidden="true" /></span>
                                        <span className="contents-title">{title}</span>
                                        <span className="contents-category">{t.roadmap.types[step.type]}</span>
                                        <ProgressFlower status={getStepStatus(step, level)} />
                                        <span className="contents-arrow" aria-hidden="true">→</span>
                                    </button>
                                </li>;
                            })}
                        </ol>
                    </section>)}
                </div>
            )}
        </main>
    );
}
