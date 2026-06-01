import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useT } from '../utils/i18n';
import { loadLearningMode } from '../utils/settings';
import SpeakerButton from '../components/SpeakerButton';
import './VerbConjugation.css';

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
    title: string;
    translation: string;
    color: string;
    columns?: readonly string[];
    rows: ConjugationRow[];
}

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

export default function VerbConjugation() {
    const { verbId, level } = useParams<{ verbId: string; level: string }>();
    const navigate = useNavigate();
    const t = useT();
    const isENMode = loadLearningMode() === 'learn-english';

    const [verb, setVerb] = useState<VerbData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        const langParam = loadLearningMode() === 'learn-english' ? '?lang=fr' : '';
        fetch(`${import.meta.env.VITE_API_BASE}/api/helper-verbs/${verbId}${langParam}`)
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
                    style={{ backgroundColor: `${verb.color}1F` }}
                >
                    <span style={{ fontSize: '2rem' }}>
                        {verb.title.charAt(0)}
                    </span>
                </div>
                <div className="vc-title-row">
                    <h1 className="vc-title" style={{ color: verb.color }}>
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
                                        <td
                                            className="sujet-cell"
                                            style={{ color: verb.color }}
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
        </main>
    );
}
