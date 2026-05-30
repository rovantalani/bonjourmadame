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
}

interface VerbData {
    title: string;
    translation: string;
    color: string;
    columns?: readonly [string, string, string, string];
    rows: ConjugationRow[];
}

export default function VerbConjugation() {
    const { verbId } = useParams<{ verbId: string }>();
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
                                {(verb.columns ?? t.verbConjugation.columns).map(col => <th key={col}>{col}</th>)}
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
                                        <td>{row.present}</td>
                                        <td>{row.passeCompose}</td>
                                        <td>{row.imparfait}</td>
                                        <td>{row.futurSimple}</td>
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
                <p className="scroll-hint">Scroll to see all tenses →</p>
            </div>
        </main>
    );
}
