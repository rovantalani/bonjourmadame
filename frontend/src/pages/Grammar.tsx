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
];

export default function Grammar() {
    const navigate = useNavigate();
    const [lessons, setLessons] = useState<GrammarLessonMeta[]>([]);

    useEffect(() => {
        axios.get<GrammarLessonMeta[]>('http://localhost:3001/api/grammar-lessons')
            .then(res => setLessons(res.data))
            .catch(err => console.error('Failed to load grammar lessons', err));
    }, []);

    return (
        <div className="grammar-container">
            <button className="back-button" onClick={() => navigate('/')}>← Back to Home</button>

            <header className="grammar-header">
                <h1>Grammar</h1>
                <p className="subtitle">Choose a topic to practice</p>
            </header>

            <section className="grammar-section">
                <h2 className="grammar-section-title">Verb Conjugation</h2>
                <div className="grammar-modules-grid">
                    {verbModules.map((module) => (
                        <div
                            key={module.id}
                            className="grammar-module-card"
                            onClick={() => navigate(`/grammar/${module.id}`)}
                            style={{ borderColor: module.color }}
                        >
                            <div className="grammar-module-icon" style={{ backgroundColor: module.color }}>
                                {module.icon}
                            </div>
                            <h3>{module.title}</h3>
                            <p>{module.description}</p>
                            <button className="grammar-module-button" style={{ backgroundColor: module.color }}>
                                Start Learning
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {lessons.length > 0 && (
                <section className="grammar-section">
                    <h2 className="grammar-section-title">Grammar Lessons</h2>
                    <div className="grammar-modules-grid">
                        {lessons.map((lesson) => (
                            <div
                                key={lesson.id}
                                className="grammar-module-card"
                                onClick={() => navigate(`/grammar/lessons/${lesson.id}`)}
                                style={{ borderColor: lesson.color }}
                            >
                                <div className="grammar-module-icon" style={{ backgroundColor: lesson.color }}>
                                    {lesson.icon}
                                </div>
                                <span className="grammar-level-badge" style={{ backgroundColor: lesson.color }}>
                                    {lesson.level}
                                </span>
                                <h3>{lesson.title}</h3>
                                <p>{lesson.description}</p>
                                <button className="grammar-module-button" style={{ backgroundColor: lesson.color }}>
                                    Study
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
