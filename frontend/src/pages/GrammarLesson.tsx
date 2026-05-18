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

    if (loading) return <div className="lesson-loading">Loading...</div>;

    if (error || !lesson) {
        return (
            <div className="lesson-container">
                <button className="back-button" onClick={() => navigate('/grammar')}>← Back to Grammar</button>
                <p>Lesson not found.</p>
            </div>
        );
    }

    return (
        <div className="lesson-container">
            <button className="back-button" onClick={() => navigate('/grammar')}>← Back to Grammar</button>

            <header className="lesson-header">
                <div className="lesson-icon" style={{ backgroundColor: lesson.color }}>{lesson.icon}</div>
                <div className="lesson-header-text">
                    <span className="lesson-level-badge" style={{ backgroundColor: lesson.color }}>{lesson.level}</span>
                    <h1 style={{ color: lesson.color }}>{lesson.title}</h1>
                    <p className="lesson-description">{lesson.description}</p>
                </div>
            </header>

            <div className="lesson-sections">
                {lesson.sections.map((section, idx) => (
                    <div key={idx} className="lesson-section">
                        <h2 className="section-title" style={{ borderColor: lesson.color }}>{section.title}</h2>
                        <p className="section-explanation">{section.explanation}</p>
                        <div className="section-examples">
                            {section.examples.map((ex, i) => (
                                <div key={i} className="example-row">
                                    <span className="example-french">{ex.french}</span>
                                    <span className="example-divider">→</span>
                                    <span className="example-english">{ex.english}</span>
                                    {ex.note && <span className="example-note">{ex.note}</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
