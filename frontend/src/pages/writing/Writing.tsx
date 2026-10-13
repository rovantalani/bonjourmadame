import { Link, useParams } from 'react-router-dom';
import { useLearning } from '../../context/LearningContext';
import { learningPath } from '../../utils/learningRoutes';
import { PenIcon } from '../../components/icons';
import { useWritingLessons } from './useWritingLessons';
import '../../components/NotebookCards.css';
import './Writing.css';

export default function Writing() {
    const { level } = useParams<{ level: string }>();
    const { language, courses } = useLearning();
    const fr = language === 'en';
    const course = courses.find(item => item.level.toLowerCase() === level);
    const { lessons, loading, failed, reload } = useWritingLessons(language);
    const exercises = lessons.filter(item => item.level.toLowerCase() === level);
    const units = [...new Set(exercises.map(item => item.unit))];

    return <main className="page notebook-page writing-overview">
        <header className="page-header">
            <span className="notebook-eyebrow">{course?.level ?? level?.toUpperCase()} / {fr ? 'CARNET D’ÉCRITURE' : 'WRITING NOTEBOOK'}</span>
            <h1>{fr ? 'Écriture' : 'Writing'}</h1>
            <p className="subtitle">{fr ? 'Choisissez une consigne et trouvez vos mots.' : 'Choose a prompt and find your words.'}</p>
        </header>
        {loading && <p role="status">{fr ? 'Chargement…' : 'Loading…'}</p>}
        {failed && <p role="alert">{fr ? 'Impossible de charger les exercices.' : 'Could not load writing exercises.'} <button type="button" onClick={reload}>{fr ? 'Réessayer' : 'Retry'}</button></p>}
        {!loading && !failed && units.map(unit => <section className="writing-unit" key={unit} aria-labelledby={`writing-unit-${unit}`}>
            <header className="writing-unit-heading">
                <span className="writing-unit-number">{String(unit).padStart(2, '0')}</span>
                <h2 id={`writing-unit-${unit}`}>{course?.units?.find(item => item.number === unit)?.title ?? `${fr ? 'Unité' : 'Unit'} ${unit}`}</h2>
            </header>
            <div className="notebook-grid">
                {exercises.filter(item => item.unit === unit).map((lesson, index) => <Link
                    key={lesson.id} className="notebook-card writing-exercise-card"
                    to={learningPath(language, `/courses/${level}/writing/${lesson.id}`)}>
                    <span className="notebook-tab" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <span className="notebook-illustration"><PenIcon size={32} aria-hidden="true" /></span>
                    <h3 className="notebook-title">{lesson.title}</h3>
                    <p className="notebook-description">{lesson.prompt}</p>
                    <span className="notebook-footer"><span>{lesson.suggestedWords.min}–{lesson.suggestedWords.max} {fr ? 'mots' : 'words'}</span><span>{fr ? 'Écrire' : 'Write'}</span><span aria-hidden="true">↗</span></span>
                </Link>)}
            </div>
        </section>)}
        {!loading && !failed && exercises.length === 0 && <p className="writing-empty">{fr ? 'Aucun exercice d’écriture disponible pour ce niveau pour le moment.' : 'No writing exercises are available for this level yet.'}</p>}
    </main>;
}
