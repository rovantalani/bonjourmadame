import { useParams } from 'react-router-dom';
import { useLearning } from '../context/LearningContext';
import { useLearningNavigate } from '../hooks/useLearningNavigation';
import { getStepStatus, markStepVisited, setActiveCourse } from '../utils/courseProgress';
import ProgressFlower from '../components/ProgressFlower';
import './lectures/Lectures.css';

export default function Exams() {
    const { level } = useParams();
    const { courses, language } = useLearning();
    const navigate = useLearningNavigate();
    const fr = language === 'en';
    const course = courses.find(item => item.level.toLowerCase() === level?.toLowerCase());
    if (!course) return <main className="page"><p>{fr ? 'Cours introuvable.' : 'Course not found.'}</p></main>;
    const exams = course.steps.filter(step => step.module === 'exams');
    return <main className="page">
        <header className="page-header"><p className="section-label">{course.level} · {course.title}</p>
            <h1>{fr ? 'Examens' : 'Exams'}</h1><p className="subtitle">{fr ? 'Révisez chaque unité, puis faites le bilan du niveau avec l’examen final.' : 'Review each unit, then bring it all together in the final exam.'}</p>
        </header>
        <div className="lectures-list">{exams.map(step => <button key={step.id} type="button" className="lecture-card sidebar-exam-card" disabled={!step.available}
            onClick={() => { setActiveCourse(course.level); markStepVisited(step.id); navigate(`/courses/${level}${step.path}`); }}>
            <span className="lecture-body"><strong className="lecture-title">{step.title}</strong>
                <span>{course.units?.find(unit => unit.number === step.unit)?.title}</span>
                <small>{!step.available ? (fr ? 'Bientôt disponible' : 'Coming soon') : step.isDemo ? (fr ? 'Examen de démonstration' : 'Demo exam') : (fr ? 'Disponible' : 'Available')}</small>
            </span><ProgressFlower status={getStepStatus(step, level)} /><span aria-hidden="true">→</span>
        </button>)}</div>
        {!exams.length && <p>{fr ? 'Les examens seront bientôt disponibles.' : 'Exams are coming soon.'}</p>}
    </main>;
}
