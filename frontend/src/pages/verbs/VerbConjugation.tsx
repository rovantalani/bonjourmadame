import { useLearning } from '../../context/LearningContext';
import { useLearningNavigate as useNavigate } from '../../hooks/useLearningNavigation';
import type { ConjugationRow, TenseDef } from '../../data/courseTypes';
import LearningCompletion from '../../components/LearningCompletion';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useT } from '../../utils/i18n';
import SpeakerButton from '../../components/SpeakerButton';
import './VerbConjugation.css';



interface VerbData {
    title: string;
    translation: string;
    color: string;
    columns?: readonly string[];
    rows: ConjugationRow[];
}


export default function VerbConjugation() {
    const { tenses: TENSES_BY_LEVEL, language } = useLearning();
    const { verbId, level } = useParams<{ verbId: string; level: string }>();
    const navigate = useNavigate();
    const t = useT();
    const isENMode = language === 'en';

    const [verb, setVerb] = useState<VerbData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        fetch(`${import.meta.env.VITE_API_BASE}/api/learning/${language}/verbs/helpers/${verbId}`)
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
                <p className="vc-loading">Loading…</p>
            </main>
        );
    }

    if (error || !verb) {
        return (
            <main className="page">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    {t.verbConjugation.back}
                </button>
                <p>{t.verbConjugation.notFound}</p>
            </main>
        );
    }

    const levelKey = (level ?? 'a2').toLowerCase();
    // Helper verbs use the English columns override when in EN mode; otherwise use level-aware tenses
    const tenses: TenseDef[] = verb.columns
        ? verb.columns.map((col, i) => {
            const keys: (keyof ConjugationRow)[] = ['present', 'passeCompose', 'imparfait', 'futurSimple'];
            return { key: keys[i] ?? 'present', label: col, quizzable: true };
        })
        : (TENSES_BY_LEVEL[levelKey] ?? TENSES_BY_LEVEL['a2']);

    return (
        <main className="page">
            <button className="back-btn" onClick={() => navigate(-1)}>
                {t.verbConjugation.back}
            </button>

            <header className="vc-header">
                <div
                    className="vc-icon"
                    style={{ backgroundColor: 'var(--tag-verbs-bg)' }}
                >
                    <span style={{ fontSize: '2rem' }}>
                        {verb.title.charAt(0)}
                    </span>
                </div>
                <div className="vc-title-row">
                    <h1 className="vc-title" style={{ color: 'var(--tag-verbs-text)' }}>
                        {verb.title}
                    </h1>
                    <SpeakerButton
                        text={verb.title}
                        lang={isENMode ? 'en-US' : 'fr-FR'}
                    />
                </div>
                <span className="vc-translation">{verb.translation}</span>
            </header>

            <div className="card vc-table-card">
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
                                        <td
                                            className="sujet-cell"
                                            style={{ color: 'var(--tag-verbs-text)' }}
                                        >
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
                                        <td className="vc-speaker-cell">
                                            <SpeakerButton
                                                text={speakText}
                                                lang={isENMode ? 'en-US' : 'fr-FR'}
                                            />
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
