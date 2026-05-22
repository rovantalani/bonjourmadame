import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getModuleMastery } from '../utils/progress';
import { getActiveCourse, setActiveCourse, getStepStatus } from '../utils/courseProgress';
import { useCourses } from '../utils/modeHelpers';
import type { CourseStep } from '../data/courses';
import CourseBar from '../components/CourseBar';
import { useT } from '../utils/i18n';
import { loadLearningMode } from '../utils/settings';
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
    const navigate = useNavigate();
    const t = useT();
    const courses = useCourses();
    const [modules, setModules] = useState<VocabularyModule[]>([]);
    const [courseLevel, setCourseLevel] = useState(() => getActiveCourse() ?? 'A1');

    useEffect(() => {
        const langParam = loadLearningMode() === 'learn-english' ? '?lang=fr' : '';
        axios.get<VocabularyModule[]>(`${import.meta.env.VITE_API_BASE}/api/vocabulary-modules${langParam}`)
            .then(res => setModules(res.data))
            .catch(err => console.error('Failed to load vocabulary modules', err));
    }, []);

    const activeCourse = courses.find(c => c.level === courseLevel);
    const vocabSteps = activeCourse?.steps.filter(s => s.type === 'vocabulary') ?? [];
    const moduleMap = new Map(modules.map(m => [m.id, m]));

    const handleCourseChange = (level: string) => {
        setActiveCourse(level);
        setCourseLevel(level);
    };

    const handleNavigate = (_step: CourseStep, path: string) => {
        navigate(path);
    };

    return (
        <main className="page">
            <header className="page-header">
                <h1>{t.vocabulary.title}</h1>
                <p className="subtitle">{t.vocabulary.subtitle}</p>
            </header>

            <CourseBar activeLevel={courseLevel} onChange={handleCourseChange} />

            {vocabSteps.length === 0 ? (
                <p style={{ color: 'var(--text-3)', marginTop: '1rem' }}>No vocabulary in this course.</p>
            ) : (
                <div className="vocab-grid">
                    {vocabSteps.map(step => {
                        const module = moduleMap.get(step.contentId);
                        if (!module) return null;

                        const status = getStepStatus(step);
                        const hasReading = READING_IDS.has(module.id);
                        const { mastered, practiced } = getModuleMastery(module.id);
                        const masteryPct = module.wordCount > 0
                            ? Math.round((mastered / module.wordCount) * 100)
                            : 0;

                        const cardInner = (
                            <>
                                <div className="vocab-card-top-row">
                                    <span
                                        className="vocab-card-icon-circle"
                                        style={{ backgroundColor: `${module.color}1F` }}
                                    >
                                        <span className="vocab-card-icon">{module.icon}</span>
                                    </span>
                                    <span className={`vocab-step-status vocab-step-status--${status}`}>
                                        {status === 'complete' ? '✓' : status === 'visited' ? '◑' : '○'}
                                    </span>
                                </div>
                                <span className="vocab-card-title">{module.title}</span>
                                <div className="vocab-card-footer">
                                    <span className="vocab-card-badge">{t.vocabulary.words(module.wordCount)}</span>
                                    {practiced > 0 && (
                                        <span className="vocab-card-mastery" style={{ color: module.color }}>
                                            {t.vocabulary.mastered(mastered, module.wordCount)}
                                        </span>
                                    )}
                                </div>
                                {practiced > 0 && (
                                    <div className="progress-track vocab-card-progress">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${masteryPct}%`, backgroundColor: module.color }}
                                        />
                                    </div>
                                )}
                            </>
                        );

                        if (hasReading) {
                            return (
                                <div key={module.id} className="vocab-card vocab-card--reading">
                                    {cardInner}
                                    <div className="vocab-card-actions">
                                        <button
                                            className="vocab-card-action-btn"
                                            onClick={() => handleNavigate(step, `/vocabulary/${module.id}`)}
                                            type="button"
                                        >
                                            {t.vocabulary.quiz}
                                        </button>
                                        <button
                                            className="vocab-card-action-btn vocab-card-action-btn--read"
                                            onClick={() => handleNavigate(step, `/reading/${module.id}`)}
                                            type="button"
                                            style={{ borderColor: module.color, color: module.color }}
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
                                onClick={() => handleNavigate(step, `/vocabulary/${module.id}`)}
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
