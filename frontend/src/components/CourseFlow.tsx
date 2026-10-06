import { useEffect, useLayoutEffect, useReducer, useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLearning } from '../context/LearningContext';
import { useLearningLocation, useLearningNavigate } from '../hooks/useLearningNavigation';
import { getCoursePosition } from '../utils/courseFlow';
import { getStepStatus, markStepVisited, rememberCourseStep, setActiveCourse } from '../utils/courseProgress';
import { learningPath } from '../utils/learningRoutes';
import type { CourseStep } from '../data/courseTypes';
import './CourseFlow.css';

export default function CourseFlow({ children }: { children: ReactNode }) {
    const { pathname, search, hash, state } = useLearningLocation();
    const lastOutsidePage = useRef<string | null>(null);
    const { courses, language } = useLearning();
    const navigate = useLearningNavigate();
    const [, refresh] = useReducer(value => value + 1, 0);
    const position = getCoursePosition(courses, pathname);
    const course = position?.course;
    const step = position?.step;
    const fr = language === 'en';

    useEffect(() => {
        if (!course) {
            lastOutsidePage.current = pathname + search + hash;
            return;
        }
        if (typeof state?.bookEntry === 'string') {
            lastOutsidePage.current = state.bookEntry;
            return;
        }
        const bookEntry = lastOutsidePage.current ?? `/courses/${course.level.toLowerCase()}`;
        navigate(pathname + search + hash, { replace: true, state: { ...state, bookEntry } });
    }, [course, pathname, search, hash, state, navigate]);

    useLayoutEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    useEffect(() => {
        if (course && step) {
            rememberCourseStep(course, step, pathname);
            markStepVisited(step.id);
            setActiveCourse(course.level);
        }
    }, [course, step, pathname]);
    useLayoutEffect(() => {
        const update = () => refresh();
        window.addEventListener('courseProgressChanged', update);
        window.addEventListener('storage', update);
        return () => {
            window.removeEventListener('courseProgressChanged', update);
            window.removeEventListener('storage', update);
        };
    }, []);

    // Changing modules or moving from a lesson to its quiz starts a fresh screen.
    const content = <div key={pathname}>{children}</div>;
    if (!position) return content;
    const { previous, next, unit, unitPosition, unitTotal } = position;
    const currentCourse = position.course;
    const completed = getStepStatus(position.step, currentCourse.level) === 'complete';
    const unitTitle = unit?.title ?? currentCourse.title;
    const nextUnit = currentCourse.units?.find(item => item.number === next?.unit);
    const crossingUnit = next && next.unit !== position.step.unit;
    const nextLevel = courses[courses.findIndex(item => item.level === currentCourse.level) + 1];
    const open = (target: CourseStep) => navigate(`/courses/${currentCourse.level.toLowerCase()}${target.path}`, { state: { bookEntry: state?.bookEntry } });
    const isFinal = unit?.kind === 'final-exam';

    return <div className="course-flow course-flow--book">
        <header className="course-flow-header">
            <button type="button" className="course-flow-exit" onClick={() => navigate(typeof state?.bookEntry === 'string' ? state.bookEntry : `/courses/${currentCourse.level.toLowerCase()}`)}>
                <span aria-hidden="true">×</span> {fr ? 'Quitter' : 'Exit'}
            </button>
            <Link to={learningPath(language, `/courses/${currentCourse.level.toLowerCase()}`)}>{currentCourse.level} <span aria-hidden="true">/</span> {unitTitle}</Link>
            <div className="course-flow-controls">
                <span className="course-flow-position">{fr ? 'Activité' : 'Activity'} {unitPosition} / {unitTotal}{completed && <span className="course-flow-complete" aria-label={fr ? 'Activité terminée' : 'Activity complete'}> ✓</span>}</span>
                <nav className="course-flow-actions" aria-label={fr ? 'Parcours du cours' : 'Course sequence'}>
                    {previous ? <button type="button" title={previous.title} aria-label={`${fr ? 'Module précédent' : 'Previous module'}: ${previous.title}`} onClick={() => open(previous)}>
                        ← {fr ? 'Module précédent' : 'Previous module'}
                    </button> : <Link to={learningPath(language, `/courses/${currentCourse.level.toLowerCase()}`)}>
                        ← {fr ? 'Aperçu' : 'Overview'}
                    </Link>}
                    {next ? <button type="button" title={[crossingUnit && nextUnit?.title, next.title].filter(Boolean).join(' — ')} aria-label={`${fr ? 'Module suivant' : 'Next module'}: ${next.title}`} onClick={() => open(next)}>
                        <svg className="course-flow-book-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5.5C9 3.5 5 3.5 2 4.5v15c3-1 7-1 10 1 3-2 7-2 10-1v-15c-3-1-7-1-10 1Z"/><path d="M12 5.5v15"/></svg>
                        {fr ? 'Module suivant' : 'Next module'} →
                    </button> : <button type="button" onClick={() => {
                        if (completed && isFinal && nextLevel) { setActiveCourse(nextLevel.level); navigate(`/courses/${nextLevel.level.toLowerCase()}`); }
                        else navigate(`/courses/${currentCourse.level.toLowerCase()}`);
                    }}>{completed && isFinal && nextLevel ? (fr ? `Niveau ${nextLevel.level}` : `Level ${nextLevel.level}`) : (fr ? 'Aperçu' : 'Overview')} →</button>}
                </nav>
            </div>
        </header>
        {content}
    </div>;
}
