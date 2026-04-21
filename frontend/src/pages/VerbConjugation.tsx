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
        fetch(`http://localhost:3001/api/helper-verbs/${verbId}`)
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
            <div className="conjugation-container">
                <p>Loading...</p>
            </div>
        );
    }

    if (error || !verb) {
        return (
            <div className="conjugation-container">
                <button className="back-button" onClick={() => navigate('/helper-verbs')}>
                    ← Back to Helper Verbs
                </button>
                <p>Verb not found.</p>
            </div>
        );
    }

    return (
        <div className="conjugation-container">
            <button className="back-button" onClick={() => navigate('/helper-verbs')}>
                ← Back to Helper Verbs
            </button>

            <header className="conjugation-header">
                <div className="conjugation-title-row">
                    <h1 style={{ color: verb.color }}>{verb.title}</h1>
                    <span className="conjugation-translation">{verb.translation}</span>
                </div>
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
