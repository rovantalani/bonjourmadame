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

interface GrammarExercise {
    sentence: string;
    answer: string;
    hint?: string;
}

interface GrammarLessonData {
    id: string;
    title: string;
    level: string;
    description: string;
    icon: string;
    color: string;
    sections: GrammarSection[];
    exercises?: GrammarExercise[];
}

type ExerciseState = 'idle' | 'checked';

function normalizeAnswer(str: string): string {
    return str
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '');
}

export default function GrammarLesson() {
    const { lessonId } = useParams<{ lessonId: string }>();
    const navigate = useNavigate();
    const [lesson, setLesson] = useState<GrammarLessonData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [inputs, setInputs] = useState<string[]>([]);
    const [exerciseState, setExerciseState] = useState<ExerciseState>('idle');
    const [shownHints, setShownHints] = useState<boolean[]>([]);

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
                setInputs(new Array(data.exercises?.length ?? 0).fill(''));
                setShownHints(new Array(data.exercises?.length ?? 0).fill(false));
                setExerciseState('idle');
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, [lessonId]);

    function handleInputChange(index: number, value: string) {
        setInputs(prev => prev.map((v, i) => (i === index ? value : v)));
    }

    function handleCheckAnswers() {
        setExerciseState('checked');
    }

    function handleTryAgain() {
        setInputs(new Array(lesson?.exercises?.length ?? 0).fill(''));
        setShownHints(new Array(lesson?.exercises?.length ?? 0).fill(false));
        setExerciseState('idle');
    }

    function handleShowHint(index: number) {
        setShownHints(prev => prev.map((v, i) => (i === index ? true : v)));
    }

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

    const exercises = lesson.exercises ?? [];
    const checkedResults = exerciseState === 'checked'
        ? exercises.map((ex, i) => normalizeAnswer(inputs[i]) === normalizeAnswer(ex.answer))
        : [];
    const score = checkedResults.filter(Boolean).length;

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

            {exercises.length > 0 && (
                <div className="ex-panel card">
                    <p className="section-label ex-panel-heading">Exercises</p>

                    {exerciseState === 'checked' && (
                        <p className="ex-score">
                            {score} / {exercises.length} correct
                        </p>
                    )}

                    <div className="ex-list">
                        {exercises.map((ex, i) => {
                            const isCorrect = exerciseState === 'checked' && checkedResults[i];
                            const isWrong = exerciseState === 'checked' && !checkedResults[i];
                            return (
                                <div
                                    key={i}
                                    className={
                                        'ex-item' +
                                        (isCorrect ? ' ex-item--correct' : '') +
                                        (isWrong ? ' ex-item--wrong' : '')
                                    }
                                >
                                    <p className="ex-sentence">{ex.sentence}</p>
                                    <div className="ex-input-row">
                                        <input
                                            type="text"
                                            className="field-input ex-input"
                                            value={inputs[i]}
                                            onChange={e => handleInputChange(i, e.target.value)}
                                            disabled={exerciseState === 'checked'}
                                            placeholder="___"
                                            aria-label={`Answer for exercise ${i + 1}`}
                                        />
                                        {ex.hint && exerciseState === 'idle' && !shownHints[i] && (
                                            <button
                                                type="button"
                                                className="ex-hint-btn"
                                                onClick={() => handleShowHint(i)}
                                            >
                                                Hint
                                            </button>
                                        )}
                                    </div>
                                    {shownHints[i] && exerciseState === 'idle' && (
                                        <p className="ex-hint-text">{ex.hint}</p>
                                    )}
                                    {isWrong && (
                                        <p className="ex-correct-reveal">
                                            Correct: <strong>{ex.answer}</strong>
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="ex-actions">
                        {exerciseState === 'idle' ? (
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleCheckAnswers}
                            >
                                Check Answers
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleTryAgain}
                            >
                                Try Again
                            </button>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
}
