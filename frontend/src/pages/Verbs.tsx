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

const VERB_GROUP_IDS_FR = ['regular-verbs', 'irregular-verbs', 'advanced-irregular-verbs'];
const VERB_GROUP_IDS_EN = ['regular-verbs', 'irregular-verbs'];

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

export default function Verbs() {
    const { level } = useParams<{ level: string }>();
    const navigate = useNavigate();
    const t = useT();
    const isEN = loadLearningMode() === 'learn-english';

    const helperVerbs = isEN ? HELPER_VERBS_EN : HELPER_VERBS_FR;
    const groupIds    = isEN ? VERB_GROUP_IDS_EN : VERB_GROUP_IDS_FR;

    const [groups, setGroups] = useState<VerbGroupData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const langParam = isEN ? '?lang=fr' : '';
        setLoading(true);
        Promise.all(
            groupIds.map(id =>
                fetch(`${import.meta.env.VITE_API_BASE}/api/verb-group/${id}${langParam}`)
                    .then(r => r.json() as Promise<VerbGroupData>)
            )
        ).then(data => {
            setGroups(data);
            setLoading(false);
        });
    }, [isEN]);

    return (
        <main className="page">
            <header className="page-header">
                <h1>{t.verbs.title}</h1>
                <p className="subtitle">{t.verbs.subtitle}</p>
            </header>

            {/* Helper Verbs */}
            <section className="verbs-section">
                <h2 className="verbs-section-title">{isEN ? 'Auxiliary Verbs' : 'Verbes essentiels'}</h2>
                <p className="verbs-section-desc">
                    {isEN
                        ? 'The 5 core English verbs — master these first'
                        : 'Les 5 verbes fondamentaux du français'}
                </p>
                <div className="verbs-helper-grid">
                    {helperVerbs.map(v => (
                        <button
                            key={v.id}
                            className="verbs-helper-card"
                            style={{ borderTopColor: v.color }}
                            onClick={() => navigate(`/courses/${level}/verbs/${v.id}/table`)}
                            type="button"
                        >
                            <span className="verbs-helper-icon" style={{ backgroundColor: `${v.color}1F` }}>
                                {v.icon}
                            </span>
                            <span className="verbs-helper-title" style={{ color: v.color }}>{v.title}</span>
                            <span className="verbs-helper-translation">{v.translation}</span>
                        </button>
                    ))}
                </div>
            </section>

            {/* Verb Groups */}
            {loading ? (
                <p className="verbs-loading">Loading…</p>
            ) : (
                groups.map(group => (
                    <section key={group.id} className="verbs-section">
                        <div className="verbs-group-header">
                            <span className="verbs-group-icon" style={{ backgroundColor: `${group.color}1F` }}>
                                {group.icon}
                            </span>
                            <div>
                                <h2 className="verbs-section-title" style={{ color: group.color }}>{group.title}</h2>
                                <p className="verbs-section-desc">{group.description}</p>
                            </div>
                        </div>
                        <div className="verb-grid">
                            {group.verbs.map(verb => (
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
