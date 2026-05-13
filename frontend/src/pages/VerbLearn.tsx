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
    const { verbId } = useParams<{ verbId: string }>();
    const navigate = useNavigate();

    const [verb, setVerb] = useState<VerbData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        fetch(`http://localhost:3001/api/conjugation/${verbId}`)
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
        return <div className="verb-learn-container"><p>Loading...</p></div>;
    }

    if (error || !verb) {
        return (
            <div className="verb-learn-container">
                <button className="back-button" onClick={() => navigate('/grammar')}>
                    ← Back to Grammar
                </button>
                <p>Verb not found.</p>
            </div>
        );
    }

    const groupLabel = verb.groupId === 'regular-verbs' ? 'Regular Verbs' : 'Irregular Verbs';

    return (
        <div className="verb-learn-container">
            <div className="verb-learn-nav">
                <button className="back-button" onClick={() => navigate(`/grammar/${verb.groupId}`)}>
                    ← Back to {groupLabel}
                </button>
                <button
                    className="take-quiz-button"
                    style={{ backgroundColor: verb.color }}
                    onClick={() => navigate(`/grammar/verbs/${verbId}/quiz`)}
                >
                    Take Quiz →
                </button>
            </div>

            <header className="verb-learn-header">
                <div className="verb-learn-title-row">
                    <h1 style={{ color: verb.color }}>{verb.infinitive}</h1>
                    <span className="verb-type-badge" style={{ backgroundColor: verb.color }}>
                        {verb.type}
                    </span>
                </div>
                <span className="verb-learn-translation">{verb.translation}</span>
                <p className="subtitle">Conjugation table</p>
            </header>

            <div className="conjugation-table-wrapper">
                <table className="conjugation-table">
                    <thead>
                        <tr style={{ backgroundColor: verb.color }}>
                            <th>Sujet</th>
                            <th>Présent</th>
                            <th>Passé composé</th>
                            <th>Imparfait</th>
                            <th>Futur simple</th>
                        </tr>
                    </thead>
                    <tbody>
                        {verb.rows.map((row, i) => (
                            <tr key={row.sujet} className={i % 2 === 0 ? 'row-even' : 'row-odd'}>
                                <td className="sujet-cell" style={{ color: verb.color }}>{row.sujet}</td>
                                <td>{row.present}</td>
                                <td>{row.passeCompose}</td>
                                <td>{row.imparfait}</td>
                                <td>{row.futurSimple}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
