import { useLearning } from '../../context/LearningContext';
import { useLearningNavigate as useNavigate } from '../../hooks/useLearningNavigation';
import type { ConjugationRow } from '../../data/courseTypes';
import LearningCompletion from '../../components/LearningCompletion';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SpeakerButton from '../../components/SpeakerButton';
import { useT } from '../../utils/i18n';
import './VerbLearn.css';



interface VerbData {
    infinitive: string;
    translation: string;
    type: string;
    color: string;
    groupId: string;
    rows: ConjugationRow[];
}

const CEFR_ORDER = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];


export default function VerbLearn() {
    const { tenses: TENSES_BY_LEVEL, language } = useLearning();
    const { level, verbId } = useParams<{ level: string; verbId: string }>();
    const navigate = useNavigate();
    const isENMode = language === 'en';
    const speakLang = isENMode ? 'en-US' : 'fr-FR';
    const t = useT();

    const [verb, setVerb] = useState<VerbData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        fetch(`${import.meta.env.VITE_API_BASE}/api/learning/${language}/verbs/conjugation/${verbId}`)
            .then(res => {
                if (!res.ok) throw new Error('Not found');
                return res.json();
            })
            .then((data: VerbData) => {
                setVerb(data);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, [verbId, language]);

    if (loading) {
        return (
            <main className="page">
                <p className="vl-loading">Loading…</p>
            </main>
        );
    }

    if (error || !verb) {
        return (
            <main className="page">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    ← Back
                </button>
                <p>Verb not found.</p>
            </main>
        );
    }

    const levelKey = (level ?? 'a1').toLowerCase();
    const tenses = TENSES_BY_LEVEL[levelKey] ?? TENSES_BY_LEVEL['a2'];

    // Determine if this is a review verb (introduced at a lower level)
    const verbLevel = verb.groupId.toLowerCase();
    const verbLevelIdx = CEFR_ORDER.indexOf(verbLevel);
    const currentLevelIdx = CEFR_ORDER.indexOf(levelKey);
    const isReview = verbLevelIdx >= 0 && currentLevelIdx > verbLevelIdx;

    const groupLabel = verb.groupId === 'regular-verbs' ? 'Regular Verbs' : verb.groupId.toUpperCase();

    return (
        <main className="page">
            <div className="vl-nav">
                <button
                    className="back-btn"
                    onClick={() => navigate(`/courses/${level}/verbs`)}
                >
                    ← Back to Verbs
                </button>
                <button
                    className="btn vl-quiz-btn"
                    style={{ backgroundColor: 'var(--tag-verbs-bg)', color: 'var(--tag-verbs-text)' }}
                    onClick={() => navigate(`/courses/${level}/verbs/${verbId}/quiz`)}
                >
                    Take Quiz →
                </button>
            </div>

            <header className="vl-header">
                <div className="vl-infinitive-row">
                    <h1 style={{ color: 'var(--tag-verbs-text)' }}>{verb.infinitive}</h1>
                    <SpeakerButton text={verb.infinitive} lang={speakLang} />
                </div>
                <div className="vl-badges">
                    <span className="level-badge" style={{ backgroundColor: 'var(--tag-verbs-bg)', color: 'var(--tag-verbs-text)' }}>
                        {verb.type}
                    </span>
                    {isReview && (
                        <span className="level-badge" style={{ backgroundColor: 'var(--text-3)', fontSize: '0.72rem' }}>
                            Review — {groupLabel}
                        </span>
                    )}
                </div>
                <span className="vl-translation">{verb.translation}</span>
            </header>

            <p className="vl-practice-instruction">{t.verbLearn.listenRepeat}</p>

            <div className="card vl-table-card">
                <div className="table-scroll">
                    <table className="conj-table">
                        <thead>
                            <tr style={{ backgroundColor: 'var(--tag-verbs-bg)', color: 'var(--tag-verbs-text)' }}>
                                <th>—</th>
                                {tenses.map(t => (
                                    <th key={t.key} style={!t.quizzable ? { opacity: 0.7, fontStyle: 'italic' } : undefined}>
                                        {t.label}{!t.quizzable ? ' *' : ''}
                                    </th>
                                ))}
                                <th>🔊</th>
                            </tr>
                        </thead>
                        <tbody>
                            {verb.rows.map((row, i) => {
                                const speakText = `${row.sujet} ${row.present}`;
                                return (
                                    <tr
                                        key={row.sujet}
                                        className={i % 2 === 0 ? 'row-even' : 'row-odd'}
                                    >
                                        <td className="sujet-cell" style={{ color: 'var(--tag-verbs-text)' }}>
                                            {row.sujet}
                                        </td>
                                        {tenses.map(t => (
                                            <td
                                                key={t.key}
                                                style={!t.quizzable ? { opacity: 0.7, fontStyle: 'italic' } : undefined}
                                            >
                                                {(row[t.key] as string | undefined) ?? '—'}
                                            </td>
                                        ))}
                                        <td className="vl-speaker-cell">
                                            <SpeakerButton text={speakText} lang={speakLang} />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                {tenses.some(t => !t.quizzable) && (
                    <p className="scroll-hint">* Recognition only — not quizzed</p>
                )}
                <p className="scroll-hint">Scroll to see all tenses →</p>
            </div>
            <LearningCompletion />
        </main>
    );
}
