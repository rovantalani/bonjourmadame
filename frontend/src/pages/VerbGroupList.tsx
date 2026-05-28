import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useT } from '../utils/i18n';
import { loadLearningMode } from '../utils/settings';
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

const TYPE_ORDER = ['-ER', '-IR', '-RE'];

function groupByType(verbs: VerbSummary[]): { type: string; verbs: VerbSummary[] }[] {
    const map = new Map<string, VerbSummary[]>();
    for (const v of verbs) {
        const bucket = map.get(v.type) ?? [];
        bucket.push(v);
        map.set(v.type, bucket);
    }
    return [...map.entries()]
        .sort(([a], [b]) => {
            const ai = TYPE_ORDER.indexOf(a);
            const bi = TYPE_ORDER.indexOf(b);
            if (ai === -1 && bi === -1) return a.localeCompare(b);
            if (ai === -1) return 1;
            if (bi === -1) return -1;
            return ai - bi;
        })
        .map(([type, verbs]) => ({ type, verbs }));
}

export default function VerbGroupList() {
    const { level, moduleId } = useParams<{ level: string; moduleId: string }>();
    const navigate = useNavigate();
    const t = useT();

    const [group, setGroup] = useState<VerbGroupData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [search, setSearch] = useState('');

    useEffect(() => {
        setLoading(true);
        setError(false);
        const langParam = loadLearningMode() === 'learn-english' ? '?lang=fr' : '';
        fetch(`${import.meta.env.VITE_API_BASE}/api/verb-group/${moduleId}${langParam}`)
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
                <button className="back-btn" onClick={() => navigate(-1)}>
                    {t.verbGroupList.back}
                </button>
                <p>{t.verbGroupList.notFound}</p>
            </main>
        );
    }

    const q = search.toLowerCase();
    const filtered = q
        ? group.verbs.filter(
            v => v.infinitive.toLowerCase().includes(q) || v.translation.toLowerCase().includes(q)
        )
        : group.verbs;

    const typeGroups = groupByType(filtered);
    const multipleTypes = typeGroups.length > 1;

    return (
        <main className="page">
            <button className="back-btn" onClick={() => navigate(-1)}>
                {t.verbGroupList.back}
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

            <div className="vgl-search-row">
                <input
                    type="search"
                    className="field-input vgl-search"
                    placeholder="Search verbs…"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            {filtered.length === 0 ? (
                <p className="vgl-no-results">No verbs match "{search}"</p>
            ) : (
                typeGroups.map(({ type, verbs }) => (
                    <section key={type} className="vgl-type-section">
                        {multipleTypes && (
                            <div className="vgl-type-header">
                                <span
                                    className="vgl-type-badge level-badge"
                                    style={{ backgroundColor: group.color }}
                                >
                                    {type}
                                </span>
                                <span className="vgl-type-count">{verbs.length} verbs</span>
                            </div>
                        )}
                        <div className="verb-grid">
                            {verbs.map(verb => (
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
                                            onClick={() => navigate(`/courses/${level}/verbs/${verb.id}/learn`)}
                                        >
                                            {t.verbGroupList.learn}
                                        </button>
                                        <button
                                            className="btn"
                                            style={{
                                                backgroundColor: verb.color,
                                                color: '#fff',
                                                padding: '0.45rem 0.9rem',
                                                fontSize: '0.82rem',
                                            }}
                                            onClick={() => navigate(`/courses/${level}/verbs/${verb.id}/quiz`)}
                                        >
                                            {t.verbGroupList.quiz}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))
            )}
        </main>
    );
}
