import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SpeakerButton from '../components/SpeakerButton';
import { loadLearningMode } from '../utils/settings';
import './VerbLearn.css';

interface ConjugationRow {
    sujet: string;
    present: string;
    passeCompose: string;
    imparfait: string;
    futurSimple: string;
    conditionnelPresent?: string;
    subjonctifPresent?: string;
    plusQueParfait?: string;
    futurAnterieur?: string;
    conditionnelPasse?: string;
    subjonctifPasse?: string;
    passeSimple?: string;
    subjonctifImparfait?: string;
    subjonctifPlusQueParfait?: string;
    passeAnterieur?: string;
}

interface TenseDef {
    key: keyof ConjugationRow;
    label: string;
    quizzable: boolean;
}

interface VerbData {
    infinitive: string;
    translation: string;
    type: string;
    color: string;
    groupId: string;
    rows: ConjugationRow[];
}

const CEFR_ORDER = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

const TENSES_BY_LEVEL: Record<string, TenseDef[]> = {
    a1: [
        { key: 'present',      label: 'Présent',       quizzable: true },
        { key: 'passeCompose', label: 'Passé composé', quizzable: true },
    ],
    a2: [
        { key: 'present',      label: 'Présent',       quizzable: true },
        { key: 'passeCompose', label: 'Passé composé', quizzable: true },
        { key: 'imparfait',    label: 'Imparfait',     quizzable: true },
        { key: 'futurSimple',  label: 'Futur simple',  quizzable: true },
    ],
    b1: [
        { key: 'present',             label: 'Présent',              quizzable: true },
        { key: 'passeCompose',        label: 'Passé composé',        quizzable: true },
        { key: 'imparfait',           label: 'Imparfait',            quizzable: true },
        { key: 'futurSimple',         label: 'Futur simple',         quizzable: true },
        { key: 'conditionnelPresent', label: 'Conditionnel présent', quizzable: true },
        { key: 'subjonctifPresent',   label: 'Subjonctif présent',   quizzable: true },
        { key: 'plusQueParfait',      label: 'Plus-que-parfait',     quizzable: true },
    ],
    b2: [
        { key: 'present',             label: 'Présent',              quizzable: true },
        { key: 'passeCompose',        label: 'Passé composé',        quizzable: true },
        { key: 'imparfait',           label: 'Imparfait',            quizzable: true },
        { key: 'futurSimple',         label: 'Futur simple',         quizzable: true },
        { key: 'conditionnelPresent', label: 'Conditionnel présent', quizzable: true },
        { key: 'subjonctifPresent',   label: 'Subjonctif présent',   quizzable: true },
        { key: 'plusQueParfait',      label: 'Plus-que-parfait',     quizzable: true },
        { key: 'futurAnterieur',      label: 'Futur antérieur',      quizzable: true },
        { key: 'conditionnelPasse',   label: 'Conditionnel passé',   quizzable: true },
        { key: 'subjonctifPasse',     label: 'Subjonctif passé',     quizzable: true },
    ],
    c1: [
        { key: 'present',                  label: 'Présent',                     quizzable: true },
        { key: 'passeCompose',             label: 'Passé composé',               quizzable: true },
        { key: 'imparfait',                label: 'Imparfait',                   quizzable: true },
        { key: 'futurSimple',              label: 'Futur simple',                quizzable: true },
        { key: 'conditionnelPresent',      label: 'Conditionnel présent',        quizzable: true },
        { key: 'subjonctifPresent',        label: 'Subjonctif présent',          quizzable: true },
        { key: 'plusQueParfait',           label: 'Plus-que-parfait',            quizzable: true },
        { key: 'futurAnterieur',           label: 'Futur antérieur',             quizzable: true },
        { key: 'conditionnelPasse',        label: 'Conditionnel passé',          quizzable: true },
        { key: 'subjonctifPasse',          label: 'Subjonctif passé',            quizzable: true },
        { key: 'passeSimple',              label: 'Passé simple',                quizzable: true },
        { key: 'subjonctifImparfait',      label: 'Subjonctif imparfait',        quizzable: true },
        { key: 'subjonctifPlusQueParfait', label: 'Subjonctif plus-que-parfait', quizzable: true },
    ],
    c2: [
        { key: 'present',                  label: 'Présent',                     quizzable: true },
        { key: 'passeCompose',             label: 'Passé composé',               quizzable: true },
        { key: 'imparfait',                label: 'Imparfait',                   quizzable: true },
        { key: 'futurSimple',              label: 'Futur simple',                quizzable: true },
        { key: 'conditionnelPresent',      label: 'Conditionnel présent',        quizzable: true },
        { key: 'subjonctifPresent',        label: 'Subjonctif présent',          quizzable: true },
        { key: 'plusQueParfait',           label: 'Plus-que-parfait',            quizzable: true },
        { key: 'futurAnterieur',           label: 'Futur antérieur',             quizzable: true },
        { key: 'conditionnelPasse',        label: 'Conditionnel passé',          quizzable: true },
        { key: 'subjonctifPasse',          label: 'Subjonctif passé',            quizzable: true },
        { key: 'passeSimple',              label: 'Passé simple',                quizzable: true },
        { key: 'subjonctifImparfait',      label: 'Subjonctif imparfait',        quizzable: true },
        { key: 'subjonctifPlusQueParfait', label: 'Subjonctif plus-que-parfait', quizzable: true },
        { key: 'passeAnterieur',           label: 'Passé antérieur',             quizzable: false },
    ],
};

export default function VerbLearn() {
    const { level, verbId } = useParams<{ level: string; verbId: string }>();
    const navigate = useNavigate();
    const isENMode = loadLearningMode() === 'learn-english';
    const speakLang = isENMode ? 'en-US' : 'fr-FR';

    const [verb, setVerb] = useState<VerbData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        const langParam = loadLearningMode() === 'learn-english' ? '?lang=fr' : '';
        fetch(`${import.meta.env.VITE_API_BASE}/api/conjugation/${verbId}${langParam}`)
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
    }, [verbId]);

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
                    style={{ backgroundColor: verb.color, color: '#fff' }}
                    onClick={() => navigate(`/courses/${level}/verbs/${verbId}/quiz`)}
                >
                    Take Quiz →
                </button>
            </div>

            <header className="vl-header">
                <div className="vl-infinitive-row">
                    <h1 style={{ color: verb.color }}>{verb.infinitive}</h1>
                    <SpeakerButton text={verb.infinitive} lang={speakLang} />
                </div>
                <div className="vl-badges">
                    <span className="level-badge" style={{ backgroundColor: verb.color }}>
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

            <div className="card vl-table-card">
                <div className="table-scroll">
                    <table className="conj-table">
                        <thead>
                            <tr style={{ backgroundColor: verb.color }}>
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
                                        <td className="sujet-cell" style={{ color: verb.color }}>
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
        </main>
    );
}
