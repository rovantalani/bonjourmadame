import { useParams, useNavigate } from 'react-router-dom';
import { COURSES } from '../data/courses';
import {
    getStepStatus,
    getCourseProgress,
    getActiveCourse,
    setActiveCourse,
    markStepVisited,
    type StepStatus,
} from '../utils/courseProgress';
import type { StepType } from '../data/courses';
import './CourseRoadmap.css';

const TYPE_LABELS: Record<StepType, string> = {
    vocabulary: 'Vocabulary',
    grammar:    'Grammar',
    verbs:      'Verbs',
    phrases:    'Phrases',
    reading:    'Reading',
};

const TYPE_COLORS: Record<StepType, string> = {
    vocabulary: '#4338CA',
    grammar:    '#059669',
    verbs:      '#D97706',
    phrases:    '#0891B2',
    reading:    '#7C3AED',
};

function StatusIcon({ status }: { status: StepStatus }) {
    if (status === 'complete') {
        return <span className="cr-status-icon cr-status-complete">✓</span>;
    }
    if (status === 'visited') {
        return <span className="cr-status-icon cr-status-visited">◑</span>;
    }
    return <span className="cr-status-icon cr-status-not-started">○</span>;
}

export default function CourseRoadmap() {
    const { level } = useParams<{ level: string }>();
    const navigate  = useNavigate();

    const course = COURSES.find(c => c.level.toLowerCase() === level?.toLowerCase());
    if (!course) return <main className="page"><p>Course not found.</p></main>;

    const progress   = getCourseProgress(course);
    const isActive   = getActiveCourse() === course.level;

    const handleStepClick = (path: string, stepId: string) => {
        markStepVisited(stepId);
        navigate(path);
    };

    return (
        <main className="page">
            <button className="btn btn-secondary cr-back-btn" onClick={() => navigate('/courses')}>
                ← All Courses
            </button>

            <div className="cr-header">
                <span
                    className="cr-level-badge"
                    style={{ backgroundColor: course.color }}
                >
                    {course.level}
                </span>
                <div className="cr-header-text">
                    <h1>{course.title}</h1>
                    <p className="subtitle">{course.description}</p>
                </div>
            </div>

            <div className="cr-progress-row">
                <span className="cr-progress-label">
                    {progress.completed + progress.visited} / {progress.total} steps
                </span>
                {!isActive && (
                    <button
                        className="btn btn-primary cr-set-active-btn"
                        style={{ backgroundColor: course.color }}
                        onClick={() => setActiveCourse(course.level)}
                    >
                        Set as Active Course
                    </button>
                )}
            </div>

            <div className="progress-track cr-progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${progress.pct}%`, backgroundColor: course.color }}
                />
            </div>

            <ol className="cr-steps">
                {course.steps.map((step, i) => {
                    const status = getStepStatus(step);
                    return (
                        <li key={step.id} className={`cr-step cr-step--${status}`}>
                            {i < course.steps.length - 1 && (
                                <span className="cr-connector" />
                            )}
                            <button
                                className="cr-step-btn"
                                onClick={() => handleStepClick(step.path, step.id)}
                                type="button"
                            >
                                <StatusIcon status={status} />

                                <div className="cr-step-body">
                                    <span className="cr-step-title">{step.title}</span>
                                    <span
                                        className="cr-step-type"
                                        style={{ color: TYPE_COLORS[step.type] }}
                                    >
                                        {TYPE_LABELS[step.type]}
                                    </span>
                                </div>

                                <span className="cr-step-arrow">›</span>
                            </button>
                        </li>
                    );
                })}
            </ol>
        </main>
    );
}
