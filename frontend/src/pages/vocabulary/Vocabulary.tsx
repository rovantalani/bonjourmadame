import ProgressFlower from '../../components/ProgressFlower';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { getStepStatus } from '../../utils/courseProgress';
import { useCourses } from '../../utils/modeHelpers';
import { useT } from '../../utils/i18n';
import { loadLearningMode } from '../../utils/settings';
import './Vocabulary.css';

interface VocabularyModule {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    wordCount: number;
}

const READING_IDS = new Set(['sherlock-holmes-ch1', 'sherlock-holmes-ch2']);

export default function Vocabulary() {
    const { level } = useParams<{ level: string }>();
    const navigate = useNavigate();
    const t = useT();
    const courses = useCourses();
    const [modules, setModules] = useState<VocabularyModule[]>([]);
    const [loading, setLoading] = useState(true);
    const [apiError, setApiError] = useState(false);

    useEffect(() => {
        const langParam = loadLearningMode() === 'learn-english' ? '?lang=fr' : '';
        axios.get<VocabularyModule[]>(`${import.meta.env.VITE_API_BASE}/api/vocabulary/modules${langParam}`)
            .then(res => { setModules(res.data); setLoading(false); setApiError(false); })
            .catch(() => { setLoading(false); setApiError(true); });
    }, []);

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
                        const hasReading = READING_IDS.has(module.id);
                        const cardInner = (
                            <>
                                <div className="vocab-card-top-row">
                                    <span
                                        className="vocab-card-icon-circle"
                                        style={{ backgroundColor: 'var(--tag-vocabulary-bg)' }}
                                    >
                                        <span className="vocab-card-icon">{module.icon}</span>
                                    </span>
                                    <ProgressFlower status={status} />
                                </div>
                                <span className="vocab-card-title">{module.title}</span>
                                <div className="vocab-card-footer">
                                    <span className="vocab-card-badge">{t.vocabulary.words(module.wordCount)}</span>
                                </div>
                            </>
                        );

                        if (hasReading) {
                            return (
                                <div key={module.id} className="vocab-card vocab-card--reading">
                                    {cardInner}
                                    <div className="vocab-card-actions">
                                        <button
                                            className="vocab-card-action-btn"
                                            onClick={() => navigate(`/courses/${level}/vocabulary/${module.id}`)}
                                            type="button"
                                        >
                                            {t.vocabulary.quiz}
                                        </button>
                                        <button
                                            className="vocab-card-action-btn vocab-card-action-btn--read"
                                            onClick={() => navigate(`/courses/${level}/lectures/reading/${module.id}`)}
                                            type="button"
                                            style={{ borderColor: 'var(--tag-reading-text)', color: 'var(--tag-reading-text)' }}
                                        >
                                            {t.vocabulary.read}
                                        </button>
                                    </div>
                                </div>
                            );
                        }
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
