import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useT } from '../utils/i18n';
import { loadLearningMode } from '../utils/settings';
import './Verbs.css';

const HELPER_VERBS_FR = [
    { id: 'etre',  title: 'Être',     translation: 'to be',        icon: '👤', color: '#2563EB' },
    { id: 'avoir', title: 'Avoir',    translation: 'to have',      icon: '🤲', color: '#16A34A' },
    { id: 'faire', title: 'Faire',    translation: 'to do / make', icon: '🔨', color: '#EA580C' },
    { id: 'aller', title: 'Aller',    translation: 'to go',        icon: '🚶', color: '#7C3AED' },
    { id: 'venir', title: 'Venir',    translation: 'to come',      icon: '🏠', color: '#DC2626' },
];

const HELPER_VERBS_EN = [
    { id: 'to-be',   title: 'To Be',   translation: 'être',  icon: '👤', color: '#2563EB' },
    { id: 'to-have', title: 'To Have', translation: 'avoir', icon: '🤲', color: '#16A34A' },
    { id: 'to-do',   title: 'To Do',   translation: 'faire', icon: '🔨', color: '#EA580C' },
    { id: 'to-go',   title: 'To Go',   translation: 'aller', icon: '🚶', color: '#7C3AED' },
    { id: 'to-come', title: 'To Come', translation: 'venir', icon: '🏠', color: '#DC2626' },
];

const TYPE_ORDER = ['-ER', '-IR', '-RE', 'Regular', 'Irregular'];

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

export default function Verbs() {
    const { level } = useParams<{ level: string }>();
    const navigate = useNavigate();
    const t = useT();
    const isEN = loadLearningMode() === 'learn-english';

    const helperVerbs = isEN ? HELPER_VERBS_EN : HELPER_VERBS_FR;

    const [group, setGroup] = useState<VerbGroupData | null>(null);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const langParam = isEN ? '?lang=fr' : '';
        const levelId = (level ?? 'a1').toLowerCase();
        setLoading(true);
        fetch(`${import.meta.env.VITE_API_BASE}/api/verb-group/${levelId}${langParam}`)
            .then(r => r.json() as Promise<VerbGroupData>)
            .then(data => {
                setGroup(data);
                setLoading(false);
            });
    }, [isEN, level]);

    const q = search.toLowerCase();
    const filteredHelpers = q
        ? helperVerbs.filter(v => v.title.toLowerCase().includes(q) || v.translation.toLowerCase().includes(q))
        : helperVerbs;

    const filteredVerbs = group
        ? (q ? group.verbs.filter(v => v.infinitive.toLowerCase().includes(q) || v.translation.toLowerCase().includes(q)) : group.verbs)
        : [];

    const typeGroups = groupByType(filteredVerbs);

    return (
        <main className="page">
            <header className="page-header">
                <h1>{t.verbs.title}</h1>
                <p className="subtitle">{t.verbs.subtitle}</p>
            </header>

            <div className="verbs-search-row">
                <input
                    type="search"
                    className="field-input verbs-search"
                    placeholder={isEN ? 'Search verbs…' : 'Rechercher un verbe…'}
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            {/* Helper Verbs */}
            {filteredHelpers.length > 0 && (
                <section className="verbs-section">
                    <h2 className="verbs-section-title">{isEN ? 'Auxiliary Verbs' : 'Verbes essentiels'}</h2>
                    <p className="verbs-section-desc">
                        {isEN ? 'The 5 core English verbs — master these first' : 'Les 5 verbes fondamentaux du français'}
                    </p>
                    <div className="verbs-helper-grid">
                        {filteredHelpers.map(v => (
                            <button
                                key={v.id}
                                className="verbs-helper-card"
                                style={{ borderTopColor: v.color }}
                                onClick={() => navigate(`/courses/${level}/verbs/${v.id}/table`)}
                                type="button"
                            >
                                <span className="verbs-helper-icon" style={{ backgroundColor: `${v.color}1F` }}>{v.icon}</span>
                                <span className="verbs-helper-title" style={{ color: v.color }}>{v.title}</span>
                                <span className="verbs-helper-translation">{v.translation}</span>
                            </button>
                        ))}
                    </div>
                </section>
            )}

            {/* Level Verbs */}
            {loading ? (
                <p className="verbs-loading">Loading…</p>
            ) : filteredVerbs.length === 0 && q ? (
                <p className="verbs-loading" style={{ color: 'var(--text-3)' }}>No verbs match "{search}"</p>
            ) : (
                typeGroups.map(({ type, verbs }) => (
                    <section key={type} className="verbs-section">
                        <h2 className="verbs-section-title">
                            <span className="level-badge" style={{ backgroundColor: verbs[0]?.color ?? 'var(--accent)', fontSize: '0.75rem' }}>
                                {type}
                            </span>
                        </h2>
                        <div className="verb-grid">
                            {verbs.map(verb => (
                                <div key={verb.id} className="verb-card">
                                    <h2 className="verb-infinitive">{verb.infinitive}</h2>
                                    <p className="verb-translation">{verb.translation}</p>
                                    <div className="verb-actions">
                                        <button
                                            className="btn"
                                            style={{ border: `1.5px solid ${verb.color}`, color: verb.color, background: 'var(--surface)', padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}
                                            onClick={() => navigate(`/courses/${level}/verbs/${verb.id}/learn`)}
                                        >
                                            {t.verbGroupList.learn}
                                        </button>
                                        <button
                                            className="btn"
                                            style={{ backgroundColor: verb.color, color: '#fff', padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}
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
