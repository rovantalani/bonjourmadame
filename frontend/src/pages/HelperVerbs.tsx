import { useNavigate } from 'react-router-dom';
import { useT } from '../utils/i18n';
import './HelperVerbs.css';

const HELPER_VERB_IDS = [
    { id: 'etre',  title: 'Être',  translation: 'to be',        icon: '👤', color: '#2563EB', key: 'etre'  as const },
    { id: 'avoir', title: 'Avoir', translation: 'to have',      icon: '🤲', color: '#16A34A', key: 'avoir' as const },
    { id: 'faire', title: 'Faire', translation: 'to do / make', icon: '🔨', color: '#EA580C', key: 'faire' as const },
    { id: 'aller', title: 'Aller', translation: 'to go',        icon: '🚶', color: '#7C3AED', key: 'aller' as const },
    { id: 'venir', title: 'Venir', translation: 'to come',      icon: '🏠', color: '#DC2626', key: 'venir' as const },
];

const VERB_GROUP_IDS = [
    { id: 'regular-verbs',            key: 'regularVerbs'           as const, icon: '📝', color: '#059669', count: 34 },
    { id: 'irregular-verbs',          key: 'irregularVerbs'         as const, icon: '⚡', color: '#DC2626', count: 18 },
    { id: 'advanced-irregular-verbs', key: 'advancedIrregularVerbs' as const, icon: '🔥', color: '#BE185D', count: 12 },
];

export default function HelperVerbs() {
    const navigate = useNavigate();
    const t = useT();

    return (
        <main className="page">
            <header className="page-header">
                <h1>{t.verbs.title}</h1>
                <p className="subtitle">{t.helperVerbs.pageSubtitle}</p>
            </header>

            <section className="hv-section">
                <p className="section-label">{t.helperVerbs.helperSection}</p>
                <p className="hv-section-note">{t.helperVerbs.helperNote}</p>
                <div className="helper-verbs-grid">
                    {HELPER_VERB_IDS.map((v) => (
                        <div
                            key={v.id}
                            className="hv-card"
                            onClick={() => navigate(`/helper-verbs/${v.id}`)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && navigate(`/helper-verbs/${v.id}`)}
                        >
                            <div className="hv-card-bar" style={{ backgroundColor: v.color }} />
                            <div className="hv-card-body">
                                <div className="hv-icon" style={{ backgroundColor: `${v.color}1F` }}>
                                    {v.icon}
                                </div>
                                <h2 className="hv-title" style={{ color: v.color }}>{v.title}</h2>
                                <span className="hv-translation">{v.translation}</span>
                                <p className="hv-description">{t.helperVerbs[v.key].description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="hv-section">
                <p className="section-label">{t.helperVerbs.conjugationSection}</p>
                <p className="hv-section-note">{t.helperVerbs.conjugationNote}</p>
                <div className="hv-group-grid">
                    {VERB_GROUP_IDS.map((g) => (
                        <div
                            key={g.id}
                            className="hv-group-card"
                            onClick={() => navigate(`/grammar/${g.id}`)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && navigate(`/grammar/${g.id}`)}
                        >
                            <span className="hv-group-icon-circle" style={{ backgroundColor: `${g.color}1F` }}>
                                <span className="hv-group-icon">{g.icon}</span>
                            </span>
                            <div className="hv-group-info">
                                <h2 className="hv-group-title">{t.helperVerbs[g.key].title}</h2>
                                <p className="hv-group-desc">{t.helperVerbs[g.key].description}</p>
                            </div>
                            <span className="hv-group-count" style={{ color: g.color }}>{t.helperVerbs.verbCount(g.count)}</span>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
