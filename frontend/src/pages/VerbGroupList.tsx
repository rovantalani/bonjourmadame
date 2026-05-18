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
        return <div className="verb-group-loading">Loading...</div>;
    }

    if (error || !group) {
        return (
            <div className="verb-group-container">
                <button className="back-button" onClick={() => navigate('/grammar')}>
                    ← Back to Grammar
                </button>
                <p>Module not found.</p>
            </div>
        );
    }

    return (
        <div className="verb-group-container">
            <button className="back-button" onClick={() => navigate('/grammar')}>
                ← Back to Grammar
            </button>

            <header className="verb-group-header">
                <div className="verb-group-icon" style={{ backgroundColor: group.color }}>
                    {group.icon}
                </div>
                <h1 style={{ color: group.color }}>{group.title}</h1>
                <p className="subtitle">{group.description}</p>
            </header>

            <div className="verb-group-grid">
                {group.verbs.map((verb) => (
                    <div key={verb.id} className="verb-card" style={{ borderColor: verb.color }}>
                        <span className="verb-type-badge" style={{ backgroundColor: verb.color }}>
                            {verb.type}
                        </span>
                        <h2 className="verb-infinitive">{verb.infinitive}</h2>
                        <p className="verb-translation">{verb.translation}</p>
                        <div className="verb-actions">
                            <button
                                className="verb-learn-button"
                                style={{ borderColor: verb.color, color: verb.color }}
                                onClick={() => navigate(`/grammar/verbs/${verb.id}/learn`)}
                            >
                                Learn
                            </button>
                            <button
                                className="verb-quiz-button"
                                style={{ backgroundColor: verb.color }}
                                onClick={() => navigate(`/grammar/verbs/${verb.id}/quiz`)}
                            >
                                Quiz
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
