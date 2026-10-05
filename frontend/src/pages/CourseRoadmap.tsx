import { useLearningNavigate as useNavigate } from '../hooks/useLearningNavigation';
import { useState } from 'react';
import { BookOpenIcon } from '../components/icons';
import ModuleTags from '../components/ModuleTags';
import ProgressFlower from '../components/ProgressFlower';
import { useParams } from 'react-router-dom';
import { useCourses } from '../utils/modeHelpers';
import {
    getStepStatus,
    getCourseProgress,
    getNextStep,
    getActiveCourse,
    setActiveCourse,
    markStepVisited,
} from '../utils/courseProgress';
import type { CourseStep } from '../data/courseTypes';
import { useLearning } from '../context/LearningContext';
import { useT } from '../utils/i18n';
import './CourseRoadmap.css';

export default function CourseRoadmap() {
    const { level } = useParams<{ level: string }>();
    const navigate  = useNavigate();
    const t = useT();
    const { language } = useLearning();
    const courses = useCourses();
    const [showAll, setShowAll] = useState(false);
    const fr = language === 'en';

    const course = courses.find(c => c.level.toLowerCase() === level?.toLowerCase());
    if (!course) return <main className="page"><p>{t.roadmap.notFound}</p></main>;

    const progress  = getCourseProgress(course);
    const isActive  = getActiveCourse() === course.level;
    const nextStep  = getNextStep(course);
    const hasStarted = progress.completed + progress.visited > 0;

    const handleStepClick = (path: string, stepId: string) => {
        setActiveCourse(course.level);
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
                    disabled={step.module === 'exams' && !step.available}
                >
                    <span className="cr-node cr-node--todo">{index + 1}</span>
                    <div className="cr-step-body">
                        <span className="cr-step-title">{step.title}</span>
                        <ModuleTags step={step} />
                        {step.module === 'exams' && <small>
                            {!step.available ? (language === 'en' ? 'Bientôt disponible' : 'Coming soon') :
                                step.isDemo ? (language === 'en' ? 'Examen de démonstration' : 'Demo exam') : null}
                        </small>}
                    </div>
                    <ProgressFlower status={status} />
                    <span className="cr-step-arrow">›</span>
                </button>
            </li>
        );
    };

    const units = course.units ?? [];
    const currentUnit = units.find(unit => unit.number === nextStep?.unit) ?? units[0];
    const unitSteps = course.steps.filter(step => step.unit === currentUnit?.number);
    const unitProgress = getCourseProgress({ ...course, steps: unitSteps });
    const lessonUnits = units.filter(unit => unit.kind !== 'final-exam');
    const completedUnits = lessonUnits.filter(unit => {
        const value = getCourseProgress({ ...course, steps: course.steps.filter(step => step.unit === unit.number) });
        return value.total > 0 && value.completed === value.total;
    }).length;
    const upcoming = course.steps.filter(step => (step.module !== 'exams' || step.available) && getStepStatus(step, course.level) !== 'complete').slice(0, 3);
    const unitTitle = currentUnit?.title.replace(/^Unit \d+\s*[—–-]\s*/, '') ?? course.title;
    const unitLabel = currentUnit?.kind === 'final-exam' ? 'FINAL EXAM' : `${fr ? 'UNITÉ' : 'UNIT'} ${String(currentUnit?.number ?? 1).padStart(2, '0')}`;

    return (
        <main className="page course-overview" key={course.level}>
            <header className="ov-heading">
                <div>
                    <p className="ov-eyebrow">{fr ? 'VOTRE PARCOURS EN ANGLAIS' : 'YOUR FRENCH COURSE'} <span> / </span> {course.level}</p>
                    <h1>{fr ? 'Votre prochain chapitre.' : 'Your next chapter.'}</h1>
                    <p className="ov-intro">{fr ? 'Votre progression et les prochaines étapes du cours.' : 'Your progress and what to study next.'}</p>
                </div>
            </header>

            <div className="ov-main-grid">
                <section className="ov-chapter" aria-labelledby="chapter-title">
                    <div className="ov-chapter-top">
                        <span className="ov-chapter-label"><span className="ov-live-dot" />{nextStep ? (hasStarted ? (fr ? 'EN COURS' : 'IN PROGRESS') : (fr ? 'COMMENCEZ ICI' : 'START HERE')) : (fr ? 'BIEN JOUÉ' : 'WELL DONE')}</span>
                        <BookOpenIcon size={25} aria-hidden="true" />
                    </div>
                    <div className="ov-chapter-copy">
                        <p className="ov-eyebrow">{nextStep ? unitLabel : course.level}</p>
                        <h2 id="chapter-title">{nextStep ? unitTitle : (fr ? 'Vous êtes à jour.' : 'You’re all caught up.')}</h2>
                        <p>{nextStep ? Array.from(new Set(unitSteps.filter(step => step.module !== 'exams').map(step => t.roadmap.types[step.type]))).join(' · ') : (fr ? 'Toutes les activités disponibles sont terminées. Vous pouvez les revoir à tout moment.' : 'You’ve completed every available activity. Revisit any lesson whenever you like.')}</p>
                    </div>
                    <div className="ov-chapter-action">
                        {nextStep ? <button className="ov-continue" type="button" onClick={() => handleStepClick(nextStep.path, nextStep.id)}>
                            {hasStarted ? (fr ? 'Continuer le cours' : 'Continue course') : (fr ? 'Commencer le cours' : 'Start course')} <span aria-hidden="true">→</span>
                        </button> : <button className="ov-continue" type="button" onClick={() => navigate('/courses')}>
                            {fr ? 'Explorer les niveaux' : 'Explore the levels'} <span aria-hidden="true">→</span>
                        </button>}
                        {nextStep && <span className="ov-current-lesson">{fr ? 'À REPRENDRE' : 'YOUR NEXT ACTIVITY'}<strong>{nextStep.title}</strong></span>}
                    </div>
                    {nextStep && <div className="ov-unit-progress">
                        <div><span>{fr ? 'Progression de l’unité' : 'Unit progress'}</span><strong>{unitProgress.completed}<span> / {unitProgress.total}</span></strong></div>
                        <div className="ov-track" role="progressbar" aria-label={fr ? 'Progression de l’unité' : 'Unit progress'} aria-valuenow={unitProgress.completed} aria-valuemin={0} aria-valuemax={unitProgress.total || 1}><span style={{ width: `${unitProgress.pct}%` }} /></div>
                    </div>}
                    <span className="ov-chapter-number" aria-hidden="true">{nextStep && currentUnit?.kind !== 'final-exam' ? String(currentUnit?.number ?? 1).padStart(2, '0') : '✓'}</span>
                </section>

                <aside className="ov-progress-card" aria-labelledby="level-progress-title">
                    <div className="ov-card-heading"><h2 id="level-progress-title">{fr ? 'Progression du niveau' : 'Level progress'}</h2><span className="ov-level-badge">{course.level}</span></div>
                    <div className="ov-progress-ring" role="progressbar" aria-label={fr ? 'Progression du niveau' : 'Level progress'} aria-valuenow={progress.pct} aria-valuemin={0} aria-valuemax={100}>
                        <svg viewBox="0 0 160 160" aria-hidden="true"><circle cx="80" cy="80" r="69" /><circle className="ov-ring-fill" cx="80" cy="80" r="69" pathLength="100" strokeDasharray={`${progress.pct} 100`} /></svg>
                        <div><strong>{progress.pct}<span>%</span></strong><span>{fr ? 'du niveau terminé' : 'of the level complete'}</span></div>
                    </div>
                    <dl className="ov-stats"><div><dt>{fr ? 'Activités terminées' : 'Activities completed'}</dt><dd>{progress.completed}<span> / {progress.total}</span></dd></div><div><dt>{fr ? 'Unités terminées' : 'Units completed'}</dt><dd>{completedUnits}<span> / {lessonUnits.length}</span></dd></div></dl>
                    <p className="ov-progress-note">{fr ? 'Leçons et examens disponibles inclus.' : 'Includes available lessons and exams.'}</p>
                </aside>
            </div>

            {upcoming.length > 0 && <section className="ov-upcoming" aria-labelledby="upcoming-title">
                <div className="ov-section-heading"><div><p className="ov-eyebrow">{fr ? 'LA SUITE DU PARCOURS' : 'YOUR LEARNING PATH'}</p><h2 id="upcoming-title">{fr ? 'Vos prochaines étapes' : 'Up next'}</h2></div><span>{fr ? 'Dans l’ordre du cours' : 'In your course order'}</span></div>
                <ol className="ov-next-list">{upcoming.map((step, index) => <li key={step.id}>
                    <button className={`ov-next-step${index === 0 ? ' ov-next-step--current' : ''}`} type="button" onClick={() => handleStepClick(step.path, step.id)}>
                        <span className="ov-next-number" aria-hidden="true">{index === 0 ? '→' : String(index + 1).padStart(2, '0')}</span>
                        <span className="ov-next-copy"><span className="ov-next-label">{index === 0 ? (fr ? 'À REPRENDRE' : 'PICK UP HERE') : (fr ? 'ENSUITE' : 'THEN')} · {step.unit === units.find(unit => unit.kind === 'final-exam')?.number ? 'FINAL EXAM' : `${fr ? 'UNITÉ' : 'UNIT'} ${step.unit ?? ''}`}</span><strong>{step.title}</strong></span>
                        <ModuleTags step={step} /><span className="ov-next-arrow" aria-hidden="true">↗</span>
                    </button>
                </li>)}</ol>
            </section>}

            <section className="ov-explore" aria-labelledby="explore-title">
                <div className="ov-explore-heading"><div className="ov-explore-icon"><BookOpenIcon size={24} /></div><div><h2 id="explore-title">{fr ? 'Tout le cours, à portée de main.' : 'Your whole course, always here.'}</h2><p>{fr ? 'Revoir une leçon ou explorer une autre unité.' : 'Revisit a lesson or explore another unit at your own pace.'}</p></div><button className="ov-text-button" type="button" aria-expanded={showAll} aria-controls="course-all-units" onClick={() => setShowAll(value => !value)}>{showAll ? (fr ? 'Masquer les unités' : 'Hide units') : (fr ? 'Voir toutes les unités' : 'View all units')}<span aria-hidden="true">{showAll ? '−' : '+'}</span></button></div>
                <div id="course-all-units" hidden={!showAll} className="ov-all-units">
                    {units.length ? units.map(unit => {
                        const steps = course.steps.filter(step => step.unit === unit.number);
                        const unitValue = getCourseProgress({ ...course, steps });
                        return <details key={unit.number} className="ov-unit-disclosure"><summary><span>{unit.kind === 'final-exam' ? '✧' : String(unit.number).padStart(2, '0')}</span><strong>{unit.title}</strong><small>{unitValue.completed} / {unitValue.total}</small></summary><ol className="cr-steps">{steps.map((step, i) => renderStepItem(step, i, i === steps.length - 1))}</ol></details>;
                    }) : <ol className="cr-steps">{course.steps.map((step, i) => renderStepItem(step, i, i === course.steps.length - 1))}</ol>}
                </div>
            </section>
            {!isActive && <button className="ov-text-button ov-set-active" type="button" onClick={() => { setActiveCourse(course.level); navigate(`/courses/${course.level.toLowerCase()}`); }}>{t.roadmap.setActive} →</button>}
        </main>
    );
}
