import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLearning } from '../context/LearningContext';
import { useLearningNavigate } from '../hooks/useLearningNavigation';
import { recordQuizPass, setContentStatus, getContentStatus } from '../utils/courseProgress';
import { scoreExam, type ExamData } from '../utils/unitExam';
import './UnitExam.css';

export default function UnitExam() {
    const { level = '', unit = '' } = useParams();
    const { language, courses } = useLearning();
    return <ExamAttempt key={`${language}/${level}/${unit}`} language={language} level={level} unit={unit}
        unitTitle={courses.find(course => course.level.toLowerCase() === level.toLowerCase())?.units?.find(item => String(item.number) === unit)?.title} />;
}

function ExamAttempt({ language, level, unit, unitTitle }: {
    language: 'fr' | 'en'; level: string; unit: string; unitTitle?: string;
}) {
    const french = language === 'en';
    const navigate = useLearningNavigate();
    const [exam, setExam] = useState<ExamData | null>(null);
    const [error, setError] = useState(false);
    const [retryLoad, setRetryLoad] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [result, setResult] = useState<ReturnType<typeof scoreExam> | null>(null);
    const resultHeading = useRef<HTMLHeadingElement>(null);
    const title = french ? `Examen de l’unité ${unit}` : `Unit ${unit} exam`;
    const coursePath = `/courses/${level.toLowerCase()}`;

    useEffect(() => {
        const controller = new AbortController();
        fetch(`${import.meta.env.VITE_API_BASE}/api/learning/${language}/exams/${encodeURIComponent(level)}/${encodeURIComponent(unit)}`, { signal: controller.signal })
            .then(response => { if (!response.ok) throw new Error('Exam unavailable'); return response.json(); })
            .then((data: ExamData) => {
                if (controller.signal.aborted) return;
                setExam(data);
                if (data.questions.length && getContentStatus(`${coursePath}/exams/${unit}`) !== 'complete') {
                    setContentStatus(`${coursePath}/exams/${unit}`, 'visited');
                }
            })
            .catch(() => { if (!controller.signal.aborted) setError(true); });
        return () => controller.abort();
    }, [language, level, unit, coursePath, retryLoad]);

    useEffect(() => { if (result) resultHeading.current?.focus(); }, [result]);

    const back = <button type="button" onClick={() => navigate(coursePath)}>
        {french ? 'Retour au cours' : 'Back to course'}
    </button>;
    if (error) return <main className="page unit-exam"><h1>{title}</h1><p role="alert">
        {french ? 'Impossible de charger cet examen.' : 'Could not load this exam.'}</p>
        <button type="button" onClick={() => { setError(false); setRetryLoad(value => value + 1); }}>
            {french ? 'Réessayer' : 'Retry'}</button> {back}</main>;
    if (!exam) return <main className="page unit-exam"><p role="status">{french ? 'Chargement…' : 'Loading…'}</p></main>;

    const submit = () => {
        if (result) return;
        const scored = scoreExam(exam, answers);
        setResult(scored);
        if (scored.passed) {
            const path = `${coursePath}/exams/${unit}`;
            recordQuizPass(path);
            setContentStatus(path, 'complete');
        }
    };

    return <main className="page unit-exam">
        <h1>{title}</h1>
        <p className="subtitle">{unitTitle}</p>
        {exam.isDemo && <p className="exam-notice">{french ?
            'Examen de démonstration : ces questions illustrent le format, sans couvrir toute l’unité.' :
            'Demo exam: these sample questions show the format and do not cover the whole unit.'}</p>}
        {!exam.questions.length ? <><p>{french ? 'Bientôt disponible.' : 'Coming soon.'}</p>{back}</> : result ? <>
            <h2 ref={resultHeading} tabIndex={-1}>{result.correct}/{exam.questions.length} · {Math.round(result.percent)}%</h2>
            <p role="status">{result.passed ?
                (french ? 'Examen réussi ! Il est marqué comme terminé.' : 'Passed! This exam is marked complete.') :
                (french ? `Il faut ${exam.passPercent}% pour réussir. Consultez les corrections, puis réessayez.` :
                    `You need ${exam.passPercent}% to pass. Review the corrections and try again.`)}</p>
            <ol className="exam-questions">
                {result.results.map(({ question, answer, correct }) => <li key={question.id} className={`exam-question exam-question--${correct ? 'correct' : 'wrong'}`}>
                    {question.context && <blockquote>{question.context}</blockquote>}
                    <h3>{question.prompt}</h3>
                    <p><strong>{correct ? 'Correct' : 'Incorrect'}</strong></p>
                    <p>{french ? 'Votre réponse : ' : 'Your answer: '}{answer || (french ? 'Aucune réponse' : 'No answer')}</p>
                    {!correct && <p>{french ? 'Réponse attendue : ' : 'Expected answer: '}{question.answers.join(' / ')}</p>}
                    <p>{question.explanation}</p>
                </li>)}
            </ol>
            <div className="exam-actions"><button type="button" onClick={() => { setAnswers({}); setResult(null); window.scrollTo(0, 0); }}>
                {french ? 'Recommencer' : 'Try again'}</button>{back}</div>
        </> : <form onSubmit={event => { event.preventDefault(); submit(); }}>
            <p>{french ? `Répondez à toutes les questions, puis envoyez vos réponses. Seuil : ${exam.passPercent}%.` :
                `Answer the questions, then submit your exam. Pass mark: ${exam.passPercent}%.`}</p>
            <ol className="exam-questions">
                {exam.questions.map(question => <li key={question.id} className="exam-question">
                    {question.context && <blockquote>{question.context}</blockquote>}
                    {question.options ? <fieldset><legend>{question.prompt}</legend>
                        {question.options.map(option => <label className="exam-option" key={option}>
                            <input type="radio" name={question.id} value={option} checked={answers[question.id] === option}
                                onChange={() => setAnswers(value => ({ ...value, [question.id]: option }))} />{option}
                        </label>)}
                    </fieldset> : <label htmlFor={`exam-${question.id}`}>{question.prompt}
                        <input id={`exam-${question.id}`} type="text" autoComplete="off" value={answers[question.id] ?? ''}
                            onChange={event => setAnswers(value => ({ ...value, [question.id]: event.target.value }))}
                            onKeyDown={event => { if (event.key === 'Enter') event.preventDefault(); }} />
                    </label>}
                </li>)}
            </ol>
            <div className="exam-actions"><button type="submit">{french ? 'Envoyer mes réponses' : 'Submit exam'}</button>{back}</div>
        </form>}
    </main>;
}
