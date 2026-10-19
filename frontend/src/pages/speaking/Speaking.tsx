import { Link, useParams } from 'react-router-dom';
import { useLearning } from '../../context/LearningContext';
import { learningPath } from '../../utils/learningRoutes';
import { MicIcon } from '../../components/icons';
import { useSpeakingLessons } from './useSpeakingLessons';
import '../../components/NotebookCards.css';
import './Speaking.css';

export default function Speaking() {
    const { level } = useParams();
    const { language, courses } = useLearning();
    const fr = language === 'en';
    const { lessons: catalog, loading, failed, reload } = useSpeakingLessons(language);
    const lessons = catalog.filter(item => item.level.toLowerCase() === level);
    const course = courses.find(item => item.level.toLowerCase() === level);
    return <main className="page notebook-page speaking-overview">
        <header className="page-header">
            <span className="notebook-eyebrow">{level?.toUpperCase()} / {fr ? 'CARNET D’ORAL' : 'SPEAKING NOTEBOOK'}</span>
            <h1>{fr ? 'Expression orale' : 'Speaking'}</h1>
            <p className="subtitle">{fr ? 'Écoutez, prenez la parole, trouvez votre rythme.' : 'Listen, say it aloud, find your rhythm.'}</p>
        </header>
        <p className="speaking-overview-note">{fr ? 'Écoute et enregistrement disponibles · Évaluation de la prononciation à venir' : 'Listening and recording available · Pronunciation assessment coming soon'}</p>
        {loading && <p role="status">{fr ? 'Chargement…' : 'Loading…'}</p>}
        {failed && <p role="alert">{fr ? 'Impossible de charger les exercices.' : 'Could not load exercises.'} <button className="speaking-button" onClick={reload}>{fr ? 'Réessayer' : 'Retry'}</button></p>}
        {[...new Set(lessons.map(item => item.unit))].map(unit => <section className="speaking-unit" key={unit}>
            <h2><span>{String(unit).padStart(2, '0')}</span>{course?.units?.find(item => item.number === unit)?.title ?? `${fr ? 'Unité' : 'Unit'} ${unit}`}</h2>
            <div className="notebook-grid">{lessons.filter(item => item.unit === unit).map((lesson, index) => <Link className="notebook-card" key={lesson.id} to={learningPath(language, `/courses/${level}/speaking/${lesson.id}`)}>
                <span className="notebook-tab">{String(index + 1).padStart(2, '0')}</span>
                <span className="notebook-illustration"><MicIcon size={30} aria-hidden="true" /></span>
                <h3 className="notebook-title">{lesson.title}</h3>
                <p className="notebook-description">{lesson.description}</p>
                <span className="notebook-footer"><span>{lesson.phrases.length} phrases</span><span>{fr ? 'Parler' : 'Speak'}</span><span aria-hidden="true">↗</span></span>
            </Link>)}</div>
        </section>)}
        {!loading && !failed && !lessons.length && <p className="speaking-overview-note">{fr ? 'Les exercices de ce niveau arrivent bientôt.' : 'Speaking exercises for this level are coming soon.'}</p>}
    </main>;
}
