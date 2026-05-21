import { useNavigate } from 'react-router-dom';
import { COURSES } from '../data/courses';
import { getCourseProgress, getActiveCourse, setActiveCourse } from '../utils/courseProgress';
import { useT } from '../utils/i18n';
import './Courses.css';

export default function Courses() {
    const navigate = useNavigate();
    const t = useT();
    const activeCourse = getActiveCourse();

    const handleStart = (level: string) => {
        setActiveCourse(level);
        navigate(`/courses/${level.toLowerCase()}`);
    };

    return (
        <main className="page">
            <div className="page-header">
                <h1>{t.courses.title}</h1>
                <p className="subtitle">{t.courses.subtitle}</p>
            </div>

            <div className="courses-grid">
                {COURSES.map(course => {
                    const progress = getCourseProgress(course);
                    const isActive = activeCourse === course.level;

                    return (
                        <button
                            key={course.level}
                            className={`courses-card card ${isActive ? 'courses-card--active' : ''}`}
                            onClick={() => handleStart(course.level)}
                            type="button"
                        >
                            <div className="courses-card-top">
                                <span
                                    className="courses-level-badge"
                                    style={{ backgroundColor: course.color }}
                                >
                                    {course.level}
                                </span>
                                {isActive && <span className="courses-active-tag">{t.courses.active}</span>}
                            </div>

                            <h2 className="courses-card-title">{course.title}</h2>
                            <p className="courses-card-desc">{course.description}</p>

                            <div className="courses-card-footer">
                                <span className="courses-step-count">
                                    {t.courses.steps(progress.completed + progress.visited, progress.total)}
                                </span>
                                <div className="progress-track courses-bar">
                                    <div
                                        className="progress-fill"
                                        style={{
                                            width:           `${progress.pct}%`,
                                            backgroundColor: course.color,
                                        }}
                                    />
                                </div>
                            </div>

                            <span
                                className="btn btn-primary courses-cta"
                                style={{ backgroundColor: course.color }}
                            >
                                {isActive ? t.courses.continue : progress.pct > 0 ? t.courses.resume : t.courses.start}
                            </span>
                        </button>
                    );
                })}
            </div>
        </main>
    );
}
