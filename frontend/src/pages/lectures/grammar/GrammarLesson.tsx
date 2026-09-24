import LearningCompletion from '../../../components/LearningCompletion';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useT } from '../../../utils/i18n';
import { loadLearningMode } from '../../../utils/settings';
import SpeakerButton from '../../../components/SpeakerButton';
import { LessonIcon } from '../../../components/icons/index';
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
        .replace(/[’‘`]/g, "'")
        .replace(/\s*'\s*/g, "'")
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '');
}

export default function GrammarLesson() {
    const { lessonId } = useParams<{ lessonId: string }>();
    const navigate = useNavigate();
    const t = useT();
    const isENMode = loadLearningMode() === 'learn-english';
    const [lesson, setLesson] = useState<GrammarLessonData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [inputs, setInputs] = useState<string[]>([]);
    const [solved, setSolved] = useState<boolean[]>([]);
    const [exerciseState, setExerciseState] = useState<ExerciseState>('idle');
    const [shownHints, setShownHints] = useState<boolean[]>([]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        const langParam = loadLearningMode() === 'learn-english' ? '?lang=fr' : '';
        fetch(`${import.meta.env.VITE_API_BASE}/api/lectures/grammar/${lessonId}${langParam}`)
            .then(res => {
                if (!res.ok) throw new Error('Not found');
                return res.json();
            })
            .then((data: GrammarLessonData) => {
                setLesson(data);
                setInputs(new Array(data.exercises?.length ?? 0).fill(''));
                setSolved(new Array(data.exercises?.length ?? 0).fill(false));
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
        setExerciseState('idle');
    }

    function handleCheckAnswers() {
        const results = (lesson?.exercises ?? []).map((ex, i) => normalizeAnswer(inputs[i] ?? '') === normalizeAnswer(ex.answer));
        setSolved(prev => prev.map((wasSolved, i) => wasSolved || results[i]));
        setExerciseState('checked');
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
                <button className="back-btn" onClick={() => navigate(-1)} type="button">
                    {t.grammarLesson.back}
                </button>
                <p>{t.grammarLesson.notFound}</p>
            </main>
        );
    }

    const exercises = lesson.exercises ?? [];
    const checkedResults = exerciseState === 'checked' ? solved : [];
    const score = solved.filter(Boolean).length;

    return (
        <main className="page">
            <button className="back-btn" onClick={() => navigate(-1)} type="button">
                {t.grammarLesson.back}
            </button>

            <div className="lesson-header card">
                <span
                    className="lesson-icon-circle"
                    style={{ backgroundColor: 'var(--tag-grammar-bg)', color: 'var(--tag-grammar-text)' }}
                >
                    <LessonIcon emoji={lesson.icon} size={28} />
                </span>
                <div className="lesson-header-text">
                    <span className="level-badge" style={{ backgroundColor: `var(--level-${lesson.level.toLowerCase()}-bg)`, color: `var(--level-${lesson.level.toLowerCase()}-text)` }}>
                        {lesson.level}
                    </span>
                    <h1 style={{ color: 'var(--tag-grammar-text)' }}>{lesson.title}</h1>
                    <p className="lesson-description">{lesson.description}</p>
                </div>
            </div>

            <div className="lesson-sections">
                {lesson.sections.map((section, idx) => (
                    <div key={idx} className="lesson-section card">
                        <h2
                            className="lesson-section-title"
                            style={{ borderBottomColor: 'var(--tag-grammar-text)' }}
                        >
                            {section.title}
                        </h2>
                        <p
                            className="lesson-explanation"
                            style={{ borderLeftColor: 'var(--tag-grammar-bg)' }}
                        >
                            {section.explanation}
                        </p>
                        <div className="lesson-examples">
                            {section.examples.map((ex, i) => (
                                <div key={i} className="ex-row">
                                    <span className="ex-fr-wrap">
                                        <span className="ex-fr">{ex.french}</span>
                                        <SpeakerButton
                                            text={ex.french}
                                            lang={isENMode ? 'en-US' : 'fr-FR'}
                                        />
                                    </span>
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
                    <p className="section-label ex-panel-heading">{t.grammarLesson.exercises}</p>

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
                                            disabled={solved[i]}
                                            placeholder="___"
                                            aria-label={`Answer for exercise ${i + 1}`}
                                        />
                                        {ex.hint && exerciseState === 'idle' && !shownHints[i] && (
                                            <button
                                                type="button"
                                                className="ex-hint-btn"
                                                onClick={() => handleShowHint(i)}
                                            >
                                                {t.grammarLesson.hint}
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
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleCheckAnswers}
                            disabled={solved.every(Boolean)}
                        >
                            {t.grammarLesson.checkAnswers}
                        </button>
                    </div>
                </div>
            )}
            <LearningCompletion requireQuiz={exercises.length > 0} quizPassed={exercises.length === 0 || (checkedResults.length === exercises.length && checkedResults.every(Boolean))} />
        </main>
    );
}
