import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './GrammarLesson.css';

interface GrammarExample {
    french: string;
    english: string;
    note?: string;
}

interface GrammarSection {
    title: string;
    explanation: string;
    examples: GrammarExample[];
}

interface GrammarLessonData {
    id: string;
    title: string;
    level: string;
    description: string;
    icon: string;
    color: string;
    sections: GrammarSection[];
}

export default function GrammarLesson() {
    const { lessonId } = useParams<{ lessonId: string }>();
    const navigate = useNavigate();
    const [lesson, setLesson] = useState<GrammarLessonData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        fetch(`http://localhost:3001/api/grammar-lessons/${lessonId}`)
            .then(res => {
                if (!res.ok) throw new Error('Not found');
                return res.json();
            })
            .then((data: GrammarLessonData) => {
                setLesson(data);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, [lessonId]);

    if (loading) {
        return (
            <main className="page">
                <p className="lesson-loading">Loading…</p>
            </main>
        );
    }

    if (error || !lesson) {
        return (
            <main className="page">
                <button className="back-btn" onClick={() => navigate('/grammar')} type="button">
                    ← Grammar
                </button>
                <p>Lesson not found.</p>
            </main>
        );
    }

    return (
        <main className="page">
            <button className="back-btn" onClick={() => navigate('/grammar')} type="button">
                ← Grammar
            </button>

            <div className="lesson-header card">
                <span
                    className="lesson-icon-circle"
                    style={{ backgroundColor: lesson.color }}
                >
                    <span className="lesson-icon-emoji">{lesson.icon}</span>
                </span>
                <div className="lesson-header-text">
                    <span className="level-badge" style={{ backgroundColor: lesson.color }}>
                        {lesson.level}
                    </span>
                    <h1 style={{ color: lesson.color }}>{lesson.title}</h1>
                    <p className="lesson-description">{lesson.description}</p>
                </div>
            </div>

            <div className="lesson-sections">
                {lesson.sections.map((section, idx) => (
                    <div key={idx} className="lesson-section card">
                        <h2
                            className="lesson-section-title"
                            style={{ borderBottomColor: lesson.color }}
                        >
                            {section.title}
                        </h2>
                        <p
                            className="lesson-explanation"
                            style={{ borderLeftColor: `${lesson.color}66` }}
                        >
                            {section.explanation}
                        </p>
                        <div className="lesson-examples">
                            {section.examples.map((ex, i) => (
                                <div key={i} className="ex-row">
                                    <span className="ex-fr">{ex.french}</span>
                                    <span className="ex-arrow">→</span>
                                    <span className="ex-en">{ex.english}</span>
                                    {ex.note && (
                                        <span className="ex-note">{ex.note}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
