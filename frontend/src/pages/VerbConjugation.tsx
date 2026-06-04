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
    group?: string;
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

/** Longest common prefix of an array of strings. */
function longestCommonPrefix(forms: string[]): string {
    if (forms.length === 0) return '';
    let stem = forms[0];
    for (const f of forms.slice(1)) {
        while (stem.length > 0 && !f.startsWith(stem)) {
            stem = stem.slice(0, -1);
        }
        if (stem.length === 0) break;
    }
    return stem;
}

/** Render a conjugation form split into muted stem + coloured ending. */
function ConjForm({ form, stem }: { form: string; stem: string }) {
    if (!stem || !form.startsWith(stem)) {
        return <span className="conj-irregular">{form}</span>;
    }
    const ending = form.slice(stem.length);
    return (
        <>
            <span className="conj-stem">{stem}</span>
            <span className="conj-ending">{ending}</span>
        </>
    );
}

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
    const tenses: TenseDef[] = verb.columns
        ? verb.columns.map((col, i) => {
            const keys: (keyof ConjugationRow)[] = ['present', 'passeCompose', 'imparfait', 'futurSimple'];
            return { key: keys[i] ?? 'present', label: col, quizzable: true };
        })
        : (TENSES_BY_LEVEL[levelKey] ?? TENSES_BY_LEVEL['a2']);

    // Compute stem per tense column from the 6 present forms
    const stemByTense: Record<string, string> = {};
    for (const tense of tenses) {
        const forms = verb.rows
            .map(r => (r[tense.key] as string | undefined) ?? '')
            .filter(Boolean);
        stemByTense[tense.key] = longestCommonPrefix(forms);
    }

    return (
        <main className="page">
            <button className="back-btn" onClick={() => navigate(-1)}>
                {t.verbConjugation.back}
            </button>

            <header className="vc-header">
                <div className="vc-title-block">
                    <h1 className="vc-title">{verb.title}</h1>
                    <div className="vc-meta">
                        {verb.group && (
                            <span className="vc-group-badge">{verb.group}</span>
                        )}
                        <span className="vc-translation">{verb.translation}</span>
                    </div>
                </div>
                <SpeakerButton
                    text={verb.title}
                    lang={isENMode ? 'en-US' : 'fr-FR'}
                />
            </header>

            {/* Legend */}
            <div className="vc-legend">
                <span><i className="vc-legend-stem"></i> stem</span>
                <span><i className="vc-legend-ending"></i> ending</span>
                <span><i className="vc-legend-irr"></i> irregular</span>
            </div>

            <div className="card vc-table-card">
                <div className="table-scroll">
                    <table className="conj-table">
                        <thead>
                            <tr style={{ backgroundColor: verb.color }}>
                                <th>—</th>
                                {tenses.map(tns => (
                                    <th key={tns.key} style={!tns.quizzable ? { opacity: 0.7, fontStyle: 'italic' } : undefined}>
                                        {tns.label}{!tns.quizzable ? ' *' : ''}
                                    </th>
                                ))}
                                <th style={{ width: 44 }}></th>
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
                                        {tenses.map(tns => {
                                            const form = (row[tns.key] as string | undefined) ?? '—';
                                            return (
                                                <td
                                                    key={tns.key}
                                                    className="conj-cell"
                                                    style={!tns.quizzable ? { opacity: 0.7, fontStyle: 'italic' } : undefined}
                                                >
                                                    {form === '—' ? '—' : (
                                                        <ConjForm
                                                            form={form}
                                                            stem={stemByTense[tns.key]}
                                                        />
                                                    )}
                                                </td>
                                            );
                                        })}
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
                {tenses.some(tns => !tns.quizzable) && (
                    <p className="scroll-hint">* Recognition only — not quizzed</p>
                )}
                <p className="scroll-hint">Scroll to see all tenses →</p>
            </div>
        </main>
    );
}
