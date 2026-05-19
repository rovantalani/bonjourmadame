import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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

const verbModules: VerbModule[] = [
    { id: 'helper-verbs', title: 'Helper Verbs', description: 'Master the 5 essential helper verbs in French', icon: '👤', color: '#7C3AED' },
    { id: 'regular-verbs', title: 'Regular Verbs', description: 'Learn conjugation patterns for regular verbs', icon: '📝', color: '#059669' },
    { id: 'irregular-verbs', title: 'Irregular Verbs', description: 'Master the most common irregular verb forms', icon: '⚡', color: '#DC2626' },
    { id: 'advanced-irregular-verbs', title: 'Advanced Irregular Verbs', description: 'Complex irregular patterns for fluent-level mastery', icon: '🔥', color: '#BE185D' },
];

export default function Grammar() {
    const navigate = useNavigate();
    const [lessons, setLessons] = useState<GrammarLessonMeta[]>([]);

    useEffect(() => {
        axios.get<GrammarLessonMeta[]>(`${import.meta.env.VITE_API_BASE}/api/grammar-lessons`)
            .then(res => setLessons(res.data))
            .catch(err => console.error('Failed to load grammar lessons', err));
    }, []);

    return (
        <main className="page">
            <header className="page-header">
                <h1>Grammar</h1>
                <p className="subtitle">Conjugation &amp; lessons</p>
            </header>

            <section className="grammar-section">
                <p className="section-label">Conjugation</p>
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
                    <p className="section-label">Grammar Lessons</p>
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
