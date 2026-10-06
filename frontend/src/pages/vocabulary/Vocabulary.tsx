import { useLearning } from '../../context/LearningContext';
import { useLearningNavigate as useNavigate } from '../../hooks/useLearningNavigation';
import VocabularyIllustration from './VocabularyIllustration';
import ProgressFlower from '../../components/ProgressFlower';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getStepStatus } from '../../utils/courseProgress';
import { useCourses } from '../../utils/modeHelpers';
import { useT } from '../../utils/i18n';
import './Vocabulary.css';

interface VocabularyModule {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    wordCount: number;
}

export default function Vocabulary() {
    const { language } = useLearning();
    const { level } = useParams<{ level: string }>();
    const navigate = useNavigate();
    const t = useT();
    const courses = useCourses();
    const [modules, setModules] = useState<VocabularyModule[]>([]);
    const [loading, setLoading] = useState(true);
    const [apiError, setApiError] = useState(false);

    useEffect(() => {
        axios.get<VocabularyModule[]>(`${import.meta.env.VITE_API_BASE}/api/learning/${language}/vocabulary/modules`)
            .then(res => { setModules(res.data); setLoading(false); setApiError(false); })
            .catch(() => { setLoading(false); setApiError(true); });
    }, [language]);

    const activeCourse = courses.find(c => c.level.toLowerCase() === (level ?? ''));
    const vocabSteps = activeCourse?.steps.filter(s => s.module === 'vocabulary') ?? [];
    const moduleMap = new Map(modules.map(m => [m.id, m]));
    const fr = language === 'en';
    const groups = [...new Set(vocabSteps.map(step => step.unit))].map(unit => ({
        unit,
        title: activeCourse?.units?.find(item => item.number === unit)?.title,
        steps: vocabSteps.filter(step => step.unit === unit && moduleMap.has(step.contentId)),
    })).filter(group => group.steps.length > 0);

    return (
        <main className="page vocabulary-notebook">
            <header className="page-header">
                <span className="vocab-eyebrow">{activeCourse?.level} / {fr ? 'CARNET DE MOTS' : 'WORD NOTEBOOK'}</span>
                <h1>{t.vocabulary.title}</h1>
                <p className="subtitle">{fr ? 'Des mots à découvrir, une collection à la fois.' : 'Discover new words, one collection at a time.'}</p>
            </header>

            {loading ? (
                <p style={{ color: 'var(--text-2)', marginTop: '1.5rem' }}>{t.vocabulary.loading}</p>
            ) : apiError ? (
                <p style={{ color: 'var(--notyet)', marginTop: '1.5rem' }}>Could not load modules — make sure the server is running.</p>
            ) : vocabSteps.length === 0 ? (
                <p style={{ color: 'var(--text-3)', marginTop: '1rem' }}>No vocabulary in this course.</p>
            ) : (
                <div className="vocab-units">
                    {groups.map(group => <section className="vocab-unit" key={group.unit ?? 'other'} aria-labelledby={`vocab-unit-${group.unit ?? 'other'}`}>
                        <header className="vocab-unit-heading">
                            <span className="vocab-unit-number">{group.unit === undefined ? '—' : String(group.unit).padStart(2, '0')}</span>
                            <h2 id={`vocab-unit-${group.unit ?? 'other'}`}>{group.title ?? (fr ? 'Collections de mots' : 'Word collections')}</h2>
                            <span className="vocab-unit-count">{group.steps.length} collections</span>
                        </header>
                        <div className="vocab-grid">
                            {group.steps.map((step, index) => {
                                const module = moduleMap.get(step.contentId)!;
                                const status = getStepStatus(step, level);
                                const title = module.title.replace(/^(Reading Vocabulary:|Vocabulaire de lecture\s*:)\s*/i, '');
                                const fromReading = title !== module.title;
                                return <button key={step.id} className="vocab-card" onClick={() => navigate(`/courses/${level}${step.path}`)} type="button">
                                    <span className="vocab-card-tab" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                                    <span className="vocab-card-top">
                                        <span className="vocab-card-illustration"><VocabularyIllustration icon={module.icon} /></span>
                                        <span className="vocab-card-kind">{fromReading ? (fr ? 'Compagnon de lecture' : 'Reading companion') : (fr ? 'Collection de mots' : 'Word collection')}</span>
                                    </span>
                                    <span className="vocab-card-title">{title}</span>
                                    <span className="vocab-card-footer">
                                        <span className="vocab-card-badge">{t.vocabulary.words(module.wordCount)}</span>
                                        <span className="vocab-card-progress"><ProgressFlower status={status} /><span aria-hidden="true">{t.progressFlower[status]}</span></span>
                                        <span className="vocab-card-arrow" aria-hidden="true">↗</span>
                                    </span>
                                </button>;
                            })}
                        </div>
                    </section>)}
                </div>
            )}
        </main>
    );
}
