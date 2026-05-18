import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './VerbGroupList.css';

interface VerbSummary {
    id: string;
    infinitive: string;
    translation: string;
    type: string;
    color: string;
}

interface VerbGroupData {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    verbs: VerbSummary[];
}

export default function VerbGroupList() {
    const { moduleId } = useParams<{ moduleId: string }>();
    const navigate = useNavigate();

    const [group, setGroup] = useState<VerbGroupData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (moduleId === 'helper-verbs') {
            navigate('/helper-verbs', { replace: true });
            return;
        }
        setLoading(true);
        setError(false);
        fetch(`http://localhost:3001/api/verb-group/${moduleId}`)
            .then(res => {
                if (!res.ok) throw new Error('Not found');
                return res.json();
            })
            .then((data: VerbGroupData) => {
                setGroup(data);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, [moduleId, navigate]);

    if (loading) {
        return (
            <main className="page">
                <p className="vgl-loading">Loading…</p>
            </main>
        );
    }

    if (error || !group) {
        return (
            <main className="page">
                <button className="back-btn" onClick={() => navigate('/grammar')}>
                    ← Back to Grammar
                </button>
                <p>Module not found.</p>
            </main>
        );
    }

    return (
        <main className="page">
            <button className="back-btn" onClick={() => navigate('/grammar')}>
                ← Back to Grammar
            </button>

            <header className="vgl-header">
                <div
                    className="vgl-icon"
                    style={{ backgroundColor: `${group.color}1F` }}
                >
                    {group.icon}
                </div>
                <h1 style={{ color: group.color }}>{group.title}</h1>
                <p className="vgl-subtitle">{group.description}</p>
            </header>

            <div className="verb-grid">
                {group.verbs.map((verb) => (
                    <div key={verb.id} className="verb-card">
                        <span
                            className="level-badge"
                            style={{ backgroundColor: verb.color }}
                        >
                            {verb.type}
                        </span>
                        <h2 className="verb-infinitive">{verb.infinitive}</h2>
                        <p className="verb-translation">{verb.translation}</p>
                        <div className="verb-actions">
                            <button
                                className="btn"
                                style={{
                                    border: `1.5px solid ${verb.color}`,
                                    color: verb.color,
                                    background: 'var(--surface)',
                                    padding: '0.45rem 0.9rem',
                                    fontSize: '0.82rem',
                                }}
                                onClick={() => navigate(`/grammar/verbs/${verb.id}/learn`)}
                            >
                                Learn
                            </button>
                            <button
                                className="btn"
                                style={{
                                    backgroundColor: verb.color,
                                    color: '#fff',
                                    padding: '0.45rem 0.9rem',
                                    fontSize: '0.82rem',
                                }}
                                onClick={() => navigate(`/grammar/verbs/${verb.id}/quiz`)}
                            >
                                Quiz
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
