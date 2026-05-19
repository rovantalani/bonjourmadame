import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
    rows: ConjugationRow[];
}

export default function VerbConjugation() {
    const { verbId } = useParams<{ verbId: string }>();
    const navigate = useNavigate();

    const [verb, setVerb] = useState<VerbData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        fetch(`${import.meta.env.VITE_API_BASE}/api/helper-verbs/${verbId}`)
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
                <button className="back-btn" onClick={() => navigate('/helper-verbs')}>
                    ← Back to Helper Verbs
                </button>
                <p>Verb not found.</p>
            </main>
        );
    }

    return (
        <main className="page">
            <button className="back-btn" onClick={() => navigate('/helper-verbs')}>
                ← Back to Helper Verbs
            </button>

            <header className="vc-header">
                <div
                    className="vc-icon"
                    style={{ backgroundColor: `${verb.color}1F` }}
                >
                    <span style={{ fontSize: '2rem' }}>
                        {/* Use first letter as fallback icon */}
                        {verb.title.charAt(0)}
                    </span>
                </div>
                <h1 className="vc-title" style={{ color: verb.color }}>
                    {verb.title}
                </h1>
                <span className="vc-translation">{verb.translation}</span>
            </header>

            <div className="card vc-table-card">
                <div className="table-scroll">
                    <table className="conj-table">
                        <thead>
                            <tr style={{ backgroundColor: verb.color }}>
                                <th>—</th>
                                <th>Présent</th>
                                <th>Passé composé</th>
                                <th>Imparfait</th>
                                <th>Futur simple</th>
                            </tr>
                        </thead>
                        <tbody>
                            {verb.rows.map((row, i) => (
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="scroll-hint">Scroll to see all tenses →</p>
            </div>
        </main>
    );
}
