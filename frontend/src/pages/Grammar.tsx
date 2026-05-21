import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useT } from '../utils/i18n';
import './Grammar.css';

interface VerbModule {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
}

interface GrammarLessonMeta {
    id: string;
    title: string;
    level: string;
    description: string;
    icon: string;
    color: string;
}

const VERB_MODULE_STATIC = [
    { id: 'helper-verbs',            key: 'helperVerbs'            as const, icon: '👤', color: '#7C3AED' },
    { id: 'regular-verbs',           key: 'regularVerbs'           as const, icon: '📝', color: '#059669' },
    { id: 'irregular-verbs',         key: 'irregularVerbs'         as const, icon: '⚡', color: '#DC2626' },
    { id: 'advanced-irregular-verbs',key: 'advancedIrregularVerbs' as const, icon: '🔥', color: '#BE185D' },
];

export default function Grammar() {
    const navigate = useNavigate();
    const t = useT();
    const [lessons, setLessons] = useState<GrammarLessonMeta[]>([]);

    const verbModules: VerbModule[] = VERB_MODULE_STATIC.map(m => ({
        id:          m.id,
        icon:        m.icon,
        color:       m.color,
        title:       t.grammar.verbModules[m.key].title,
        description: t.grammar.verbModules[m.key].description,
    }));

    useEffect(() => {
        axios.get<GrammarLessonMeta[]>(`${import.meta.env.VITE_API_BASE}/api/grammar-lessons`)
            .then(res => setLessons(res.data))
            .catch(err => console.error('Failed to load grammar lessons', err));
    }, []);

    return (
        <main className="page">
            <header className="page-header">
                <h1>{t.grammar.title}</h1>
                <p className="subtitle">{t.grammar.subtitle}</p>
            </header>

            <section className="grammar-section">
                <p className="section-label">{t.grammar.conjugation}</p>
                <div className="grammar-verb-grid">
                    {verbModules.map((module) => (
                        <div
                            key={module.id}
                            className="grammar-verb-card"
                            onClick={() => navigate(`/grammar/${module.id}`)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && navigate(`/grammar/${module.id}`)}
                        >
                            <span
                                className="grammar-verb-icon-circle"
                                style={{ backgroundColor: `${module.color}1F` }}
                            >
                                <span className="grammar-verb-icon">{module.icon}</span>
                            </span>
                            <h2 className="grammar-verb-title">{module.title}</h2>
                            <p className="grammar-verb-desc">{module.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {lessons.length > 0 && (
                <section className="grammar-section">
                    <p className="section-label">{t.grammar.grammarLessons}</p>
                    <div className="grammar-lessons-grid">
                        {lessons.map((lesson) => (
                            <div
                                key={lesson.id}
                                className="grammar-lesson-card"
                                onClick={() => navigate(`/grammar/lessons/${lesson.id}`)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && navigate(`/grammar/lessons/${lesson.id}`)}
                            >
                                <div className="grammar-lesson-top">
                                    <span
                                        className="level-badge"
                                        style={{ backgroundColor: lesson.color }}
                                    >
                                        {lesson.level}
                                    </span>
                                    <span className="grammar-lesson-icon">{lesson.icon}</span>
                                </div>
                                <h2 className="grammar-lesson-title">{lesson.title}</h2>
                                <p className="grammar-lesson-desc">{lesson.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
