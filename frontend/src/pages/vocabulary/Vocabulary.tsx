import { useLearning } from '../../context/LearningContext';
import { useLearningNavigate as useNavigate } from '../../hooks/useLearningNavigation';
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

    return (
        <main className="page">
            <header className="page-header">
                <h1>{t.vocabulary.title}</h1>
                <p className="subtitle">{t.vocabulary.subtitle}</p>
            </header>

            {loading ? (
                <p style={{ color: 'var(--text-2)', marginTop: '1.5rem' }}>{t.vocabulary.loading}</p>
            ) : apiError ? (
                <p style={{ color: 'var(--notyet)', marginTop: '1.5rem' }}>Could not load modules — make sure the server is running.</p>
            ) : vocabSteps.length === 0 ? (
                <p style={{ color: 'var(--text-3)', marginTop: '1rem' }}>No vocabulary in this course.</p>
            ) : (
                <div className="vocab-grid">
                    {vocabSteps.map(step => {
                        const module = moduleMap.get(step.contentId);
                        if (!module) return null;

                        const status = getStepStatus(step, level);
                        const cardInner = (
                            <>
                                <span className="vocab-card-icon-circle">
                                    <span className="vocab-card-icon">{module.icon}</span>
                                </span>
                                <span className="vocab-card-body">
                                    <span className="vocab-card-title">{module.title}</span>
                                    <span className="vocab-card-badge">{t.vocabulary.words(module.wordCount)}</span>
                                </span>
                                <ProgressFlower status={status} />
                                <span className="vocab-card-arrow" aria-hidden="true">›</span>
                            </>
                        );
                        return (
                            <button
                                key={module.id}
                                className="vocab-card"
                                onClick={() => navigate(`/courses/${level}/vocabulary/${module.id}`)}
                                type="button"
                            >
                                {cardInner}
                            </button>
                        );
                    })}
                </div>
            )}
        </main>
    );
}
