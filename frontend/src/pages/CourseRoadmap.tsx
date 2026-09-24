import ProgressFlower from '../components/ProgressFlower';
import { useParams, useNavigate } from 'react-router-dom';
import { useCourses } from '../utils/modeHelpers';
import {
    getStepStatus,
    getCourseProgress,
    getNextStep,
    getActiveCourse,
    setActiveCourse,
    markStepVisited,
} from '../utils/courseProgress';
import type { CourseStep, StepType } from '../data/courses';
import { useT } from '../utils/i18n';
import './CourseRoadmap.css';

const TYPE_COLORS: Record<StepType, string> = {
    vocabulary: 'var(--accent)',
    grammar:    'var(--verb)',
    verbs:      'var(--verb)',
    phrases:    'var(--almost)',
    reading:    'var(--masc)',
};

const TYPE_SOFT: Record<StepType, string> = {
    vocabulary: 'var(--accent-light)',
    grammar:    'var(--verb-soft)',
    verbs:      'var(--verb-soft)',
    phrases:    'var(--almost-soft)',
    reading:    'var(--masc-soft)',
};

export default function CourseRoadmap() {
    const { level } = useParams<{ level: string }>();
    const navigate  = useNavigate();
    const t = useT();
    const courses = useCourses();

    const course = courses.find(c => c.level.toLowerCase() === level?.toLowerCase());
    if (!course) return <main className="page"><p>{t.roadmap.notFound}</p></main>;

    const progress  = getCourseProgress(course);
    const isActive  = getActiveCourse() === course.level;
    const nextStep  = getNextStep(course);
    const hasStarted = progress.completed + progress.visited > 0;

    const handleStepClick = (path: string, stepId: string) => {
        markStepVisited(stepId);
        navigate(`/courses/${level}${path}`);
    };

    const renderStepItem = (step: CourseStep, index: number, isLast: boolean) => {
        const status = getStepStatus(step, level);
        return (
            <li key={step.id} className={`cr-step cr-step--${status}`}>
                {!isLast && <span className="cr-connector" />}
                <button
                    className="cr-step-btn"
                    onClick={() => handleStepClick(step.path, step.id)}
                    type="button"
                >
                    <span className="cr-node cr-node--todo">{index + 1}</span>
                    <div className="cr-step-body">
                        <span className="cr-step-title">{step.title}</span>
                        <span
                            className="cr-type-badge"
                            style={{
                                backgroundColor: TYPE_SOFT[step.type],
                                color: TYPE_COLORS[step.type],
                            }}
                        >
                            {t.roadmap.types[step.type]}
                        </span>
                    </div>
                    <ProgressFlower status={status} />
                    <span className="cr-step-arrow">›</span>
                </button>
            </li>
        );
    };

    const hasUnits = course.units && course.units.length > 0 && course.steps.some(s => s.unit != null);

    return (
        <main className="page">

            {/* ── Course header ── */}
            <div className="cr-header">
                <span className="cr-level-badge" style={{ backgroundColor: course.color }}>
                    {course.level}
                </span>
                <div className="cr-header-text">
                    <h1>{course.title}</h1>
                    <p className="subtitle">{course.description}</p>
                </div>
            </div>

            {/* ── Progress inline line ── */}
            <div className="cr-progress-line">
                <span className="cr-progress-label">
                    {t.roadmap.steps(progress.completed, progress.total)}
                </span>
                <div className="progress-track cr-progress-bar">
                    <div className="progress-fill" style={{ width: `${progress.pct}%`, backgroundColor: course.color }} />
                </div>
                <span className="cr-progress-pct">{progress.pct}%</span>
                {!isActive && (
                    <button
                        className="btn btn-primary cr-set-active-btn"
                        style={{ backgroundColor: course.color }}
                        onClick={() => setActiveCourse(course.level)}
                    >
                        {t.roadmap.setActive}
                    </button>
                )}
            </div>

            <div className="cr-content">
                {nextStep && hasStarted && (
                    <button
                        className="cr-continue"
                        onClick={() => handleStepClick(nextStep.path, nextStep.id)}
                        type="button"
                    >
                        <span className="cr-continue__body">
                            <span className="cr-continue__label">{t.roadmap.continueLabel}</span>
                            <span className="cr-continue__step">
                                <strong>{nextStep.title}</strong>{' '}
                                <span className="cr-continue__type">
                                    · {t.roadmap.types[nextStep.type]}
                                </span>
                            </span>
                        </span>
                        <span className="cr-continue__action">{t.roadmap.resumeBtn}</span>
                    </button>
                )}

                {hasUnits ? (
                    course.units!.map(unit => {
                        const unitSteps = course.steps.filter(s => s.unit === unit.number);
                        const unitOffset = course.steps.findIndex(s => s.unit === unit.number);
                        return (
                            <div key={unit.number} className="cr-unit">
                                <p className="cr-unit-title">{unit.title}</p>
                                <ol className="cr-steps">
                                    {unitSteps.map((step, i) =>
                                        renderStepItem(step, unitOffset + i, i === unitSteps.length - 1)
                                    )}
                                </ol>
                            </div>
                        );
                    })
                ) : (
                    <ol className="cr-steps">
                        {course.steps.map((step, i) =>
                            renderStepItem(step, i, i === course.steps.length - 1)
                        )}
                    </ol>
                )}
            </div>
        </main>
    );
}
