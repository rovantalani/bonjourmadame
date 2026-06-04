import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useT } from '../utils/i18n';
import { loadLearningMode } from '../utils/settings';
import { UserIcon, ListIcon, BoltIcon, FlameIcon, LessonIcon } from '../components/icons';
import './Grammar.css';

interface VerbModule {
    id: string;
    title: string;
    description: string;
    Icon: React.FC<{ size?: number }>;
    color: string;
    bg: string;
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
    { id: 'helper-verbs',            key: 'helperVerbs'            as const, Icon: UserIcon,  color: 'var(--accent)', bg: 'var(--accent-light)' },
    { id: 'regular-verbs',           key: 'regularVerbs'           as const, Icon: ListIcon,  color: 'var(--verb)',   bg: 'var(--verb-soft)'    },
    { id: 'irregular-verbs',         key: 'irregularVerbs'         as const, Icon: BoltIcon,  color: 'var(--notyet)', bg: 'var(--notyet-soft)'  },
    { id: 'advanced-irregular-verbs',key: 'advancedIrregularVerbs' as const, Icon: FlameIcon, color: 'var(--almost)', bg: 'var(--almost-soft)'  },
];

export default function Grammar() {
    const navigate = useNavigate();
    const t = useT();
    const [lessons, setLessons] = useState<GrammarLessonMeta[]>([]);

    const verbModules: VerbModule[] = VERB_MODULE_STATIC.map(m => ({
        id:          m.id,
        Icon:        m.Icon,
        color:       m.color,
        bg:          m.bg,
        title:       t.grammar.verbModules[m.key].title,
        description: t.grammar.verbModules[m.key].description,
    }));

    useEffect(() => {
        const langParam = loadLearningMode() === 'learn-english' ? '?lang=fr' : '';
        axios.get<GrammarLessonMeta[]>(`${import.meta.env.VITE_API_BASE}/api/grammar-lessons${langParam}`)
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
                                style={{ backgroundColor: module.bg, color: module.color }}
                            >
                                <module.Icon size={22} />
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
                                    <span className="grammar-lesson-icon" style={{ color: lesson.color }}>
                                        <LessonIcon emoji={lesson.icon} size={16} />
                                    </span>
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
