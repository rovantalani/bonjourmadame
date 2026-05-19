import { useNavigate } from 'react-router-dom';
import './HelperVerbs.css';

interface HelperVerbModule {
    id: string;
    title: string;
    translation: string;
    description: string;
    icon: string;
    color: string;
}

interface VerbGroupCard {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    count: number;
}

const HELPER_VERBS: HelperVerbModule[] = [
    { id: 'etre',  title: 'Être',  translation: 'to be',       description: 'The most essential French verb — used in everyday speech and as an auxiliary for compound tenses', icon: '👤', color: '#2563EB' },
    { id: 'avoir', title: 'Avoir', translation: 'to have',     description: 'The primary auxiliary verb used to form the passé composé and other compound tenses',              icon: '🤲', color: '#16A34A' },
    { id: 'faire', title: 'Faire', translation: 'to do / make', description: 'One of the most versatile French verbs — used in weather, idioms, and countless expressions',     icon: '🔨', color: '#EA580C' },
    { id: 'aller', title: 'Aller', translation: 'to go',       description: 'Used for movement and to form the futur proche (near future) with aller + infinitive',            icon: '🚶', color: '#7C3AED' },
    { id: 'venir', title: 'Venir', translation: 'to come',     description: 'Used for arrival and to form the passé récent (just happened) with venir de + infinitive',        icon: '🏠', color: '#DC2626' },
];

const VERB_GROUPS: VerbGroupCard[] = [
    { id: 'regular-verbs',           title: 'Regular Verbs',           description: 'Conjugation patterns for -ER, -IR, and -RE verbs',          icon: '📝', color: '#059669', count: 34 },
    { id: 'irregular-verbs',         title: 'Irregular Verbs',         description: 'The most common irregular verbs every learner needs',         icon: '⚡', color: '#DC2626', count: 18 },
    { id: 'advanced-irregular-verbs', title: 'Advanced Irregular Verbs', description: 'Complex patterns for fluent-level mastery',                icon: '🔥', color: '#BE185D', count: 12 },
];

export default function HelperVerbs() {
    const navigate = useNavigate();

    return (
        <main className="page">
            <header className="page-header">
                <h1>Verbs</h1>
                <p className="subtitle">Conjugation tables, quizzes and practice</p>
            </header>

            <section className="hv-section">
                <p className="section-label">Helper Verbs</p>
                <p className="hv-section-note">The 5 essential verbs that power every French sentence</p>
                <div className="helper-verbs-grid">
                    {HELPER_VERBS.map((module) => (
                        <div
                            key={module.id}
                            className="hv-card"
                            onClick={() => navigate(`/helper-verbs/${module.id}`)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && navigate(`/helper-verbs/${module.id}`)}
                        >
                            <div className="hv-card-bar" style={{ backgroundColor: module.color }} />
                            <div className="hv-card-body">
                                <div className="hv-icon" style={{ backgroundColor: `${module.color}1F` }}>
                                    {module.icon}
                                </div>
                                <h2 className="hv-title" style={{ color: module.color }}>{module.title}</h2>
                                <span className="hv-translation">{module.translation}</span>
                                <p className="hv-description">{module.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="hv-section">
                <p className="section-label">Conjugation Practice</p>
                <p className="hv-section-note">Learn and quiz yourself on all verb tenses</p>
                <div className="hv-group-grid">
                    {VERB_GROUPS.map((group) => (
                        <div
                            key={group.id}
                            className="hv-group-card"
                            onClick={() => navigate(`/grammar/${group.id}`)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && navigate(`/grammar/${group.id}`)}
                        >
                            <span className="hv-group-icon-circle" style={{ backgroundColor: `${group.color}1F` }}>
                                <span className="hv-group-icon">{group.icon}</span>
                            </span>
                            <div className="hv-group-info">
                                <h2 className="hv-group-title">{group.title}</h2>
                                <p className="hv-group-desc">{group.description}</p>
                            </div>
                            <span className="hv-group-count" style={{ color: group.color }}>{group.count} verbs</span>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
