import { useNavigate, useLocation } from 'react-router-dom';
import { useT } from '../utils/i18n';
import { loadLearningMode } from '../utils/settings';
import { UserIcon, TagIcon, PenIcon, ArrowRightIcon, ArrowLeftIcon } from '../components/icons';
import type { SVGProps } from 'react';
import './HelperVerbs.css';

type IconFC = React.FC<SVGProps<SVGSVGElement> & { size?: number }>;

const VERB_COLOR = 'var(--verb)';

const HELPER_VERB_IDS_FR = [
    { id: 'etre',  title: 'Être',  translation: 'to be',        Icon: UserIcon as IconFC,       color: VERB_COLOR, key: 'etre'  as const },
    { id: 'avoir', title: 'Avoir', translation: 'to have',      Icon: TagIcon as IconFC,        color: VERB_COLOR, key: 'avoir' as const },
    { id: 'faire', title: 'Faire', translation: 'to do / make', Icon: PenIcon as IconFC,        color: VERB_COLOR, key: 'faire' as const },
    { id: 'aller', title: 'Aller', translation: 'to go',        Icon: ArrowRightIcon as IconFC, color: VERB_COLOR, key: 'aller' as const },
    { id: 'venir', title: 'Venir', translation: 'to come',      Icon: ArrowLeftIcon as IconFC,  color: VERB_COLOR, key: 'venir' as const },
];

const HELPER_VERB_IDS_EN = [
    { id: 'to-be',   title: 'To Be',   translation: 'être',  Icon: UserIcon as IconFC,       color: VERB_COLOR, key: 'etre'  as const },
    { id: 'to-have', title: 'To Have', translation: 'avoir', Icon: TagIcon as IconFC,        color: VERB_COLOR, key: 'avoir' as const },
    { id: 'to-do',   title: 'To Do',   translation: 'faire', Icon: PenIcon as IconFC,        color: VERB_COLOR, key: 'faire' as const },
    { id: 'to-go',   title: 'To Go',   translation: 'aller', Icon: ArrowRightIcon as IconFC, color: VERB_COLOR, key: 'aller' as const },
    { id: 'to-come', title: 'To Come', translation: 'venir', Icon: ArrowLeftIcon as IconFC,  color: VERB_COLOR, key: 'venir' as const },
];


export default function HelperVerbs() {
    const navigate = useNavigate();
    const location = useLocation();
    const t = useT();
    const isEN = loadLearningMode() === 'learn-english';
    const helperVerbIds = isEN ? HELPER_VERB_IDS_EN : HELPER_VERB_IDS_FR;
    const canGoBack = location.key !== 'default';

    return (
        <main className="page">
            {canGoBack && (
                <button className="back-btn" onClick={() => navigate(-1)}>
                    ← Back
                </button>
            )}
            <header className="page-header">
                <h1>{t.verbs.title}</h1>
                <p className="subtitle">{t.helperVerbs.pageSubtitle}</p>
            </header>

            <section className="hv-section">
                <p className="section-label">{t.helperVerbs.helperSection}</p>
                <p className="hv-section-note">{t.helperVerbs.helperNote}</p>
                <div className="helper-verbs-grid">
                    {helperVerbIds.map((v) => (
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
                                <div className="hv-icon" style={{ backgroundColor: `${v.color}1F`, color: v.color }}>
                                    <v.Icon size={24} />
                                </div>
                                <h2 className="hv-title" style={{ color: v.color }}>{v.title}</h2>
                                <span className="hv-translation">{v.translation}</span>
                                <p className="hv-description">{t.helperVerbs[v.key].description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}
