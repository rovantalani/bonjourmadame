import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './VerbLearn.css';

interface ConjugationRow {
    sujet: string;
    present: string;
    passeCompose: string;
    imparfait: string;
    futurSimple: string;
}

interface VerbData {
    infinitive: string;
    translation: string;
    type: string;
    color: string;
    groupId: string;
    rows: ConjugationRow[];
}

export default function VerbLearn() {
    const { level, verbId } = useParams<{ level: string; verbId: string }>();
    const navigate = useNavigate();

    const [verb, setVerb] = useState<VerbData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        fetch(`${import.meta.env.VITE_API_BASE}/api/conjugation/${verbId}`)
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

    const groupLabel = verb.groupId === 'regular-verbs' ? 'Regular Verbs' : 'Irregular Verbs';

    return (
        <main className="page">
            <div className="vl-nav">
                <button
                    className="back-btn"
                    onClick={() => navigate(`/courses/${level}/verbs/${verb.groupId}`)}
                >
                    ← Back to {groupLabel}
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
                <h1 style={{ color: verb.color }}>{verb.infinitive}</h1>
                <span
                    className="level-badge"
                    style={{ backgroundColor: verb.color }}
                >
                    {verb.type}
                </span>
                <span className="vl-translation">{verb.translation}</span>
            </header>

            <div className="card vl-table-card">
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
