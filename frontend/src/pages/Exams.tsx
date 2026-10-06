import { useParams } from 'react-router-dom';
import { useLearning } from '../context/LearningContext';
import { useLearningNavigate } from '../hooks/useLearningNavigation';
import { getStepStatus, markStepVisited, setActiveCourse } from '../utils/courseProgress';
import ProgressFlower from '../components/ProgressFlower';
import { PenIcon, StarIcon } from '../components/icons';
import '../components/NotebookCards.css';

export default function Exams() {
    const { level } = useParams();
    const { courses, language } = useLearning();
    const navigate = useLearningNavigate();
    const fr = language === 'en';
    const course = courses.find(item => item.level.toLowerCase() === level?.toLowerCase());
    if (!course) return <main className="page"><p>{fr ? 'Cours introuvable.' : 'Course not found.'}</p></main>;
    const exams = course.steps.filter(step => step.module === 'exams');
    return <main className="page notebook-page">
        <header className="page-header"><p className="notebook-eyebrow">{course.level} · {course.title}</p>
            <h1>{fr ? 'Examens' : 'Exams'}</h1><p className="subtitle">{fr ? 'Révisez chaque unité, puis faites le bilan du niveau avec l’examen final.' : 'Review each unit, then bring it all together in the final exam.'}</p>
        </header>
        <div className="notebook-grid">{exams.map((step, index) => <button key={step.id} type="button" className="notebook-card exam-notebook-card" disabled={!step.available}
            onClick={() => { setActiveCourse(course.level); markStepVisited(step.id); navigate(`/courses/${level}${step.path}`); }}>
            <span className="notebook-tab">{course.units?.find(unit => unit.number === step.unit)?.kind === 'final-exam' ? 'FINAL' : `${fr ? 'UNITÉ' : 'UNIT'} ${String(step.unit ?? index + 1).padStart(2, '0')}`}</span>
            <span className="notebook-illustration">{course.units?.find(unit => unit.number === step.unit)?.kind === 'final-exam' ? <StarIcon size={32} aria-hidden="true" /> : <PenIcon size={32} aria-hidden="true" />}</span>
            <strong className="notebook-title">{step.title}</strong>
            <span className="notebook-description">{course.units?.find(unit => unit.number === step.unit)?.title}</span>
            <span className="notebook-footer"><span>{!step.available ? (fr ? 'Bientôt disponible' : 'Coming soon') : step.isDemo ? (fr ? 'Examen de démonstration' : 'Demo exam') : (fr ? 'Disponible' : 'Available')}</span>
                {step.available && <><ProgressFlower status={getStepStatus(step, level)} /><span aria-hidden="true">↗</span></>}
            </span>
        </button>)}</div>
        {!exams.length && <p>{fr ? 'Les examens seront bientôt disponibles.' : 'Exams are coming soon.'}</p>}
    </main>;
}
