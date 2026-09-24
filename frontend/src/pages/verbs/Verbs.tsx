import ProgressFlower from '../../components/ProgressFlower';
import { getContentStatus } from '../../utils/courseProgress';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useT } from '../../utils/i18n';
import { loadLearningMode } from '../../utils/settings';
import { UserIcon, TagIcon, PenIcon, ArrowRightIcon, ArrowLeftIcon } from '../../components/icons/index';
import type { SVGProps } from 'react';
import './Verbs.css';

type IconFC = React.FC<SVGProps<SVGSVGElement> & { size?: number }>;

const VERB_COLOR    = 'var(--verb)';
const VERB_COLOR_BG = 'var(--verb-soft)';

const HELPER_VERBS_FR = [
    { id: 'etre',  title: 'Être',     translation: 'to be',        Icon: UserIcon as IconFC,       color: VERB_COLOR, bg: VERB_COLOR_BG },
    { id: 'avoir', title: 'Avoir',    translation: 'to have',      Icon: TagIcon as IconFC,        color: VERB_COLOR, bg: VERB_COLOR_BG },
    { id: 'faire', title: 'Faire',    translation: 'to do / make', Icon: PenIcon as IconFC,        color: VERB_COLOR, bg: VERB_COLOR_BG },
    { id: 'aller', title: 'Aller',    translation: 'to go',        Icon: ArrowRightIcon as IconFC, color: VERB_COLOR, bg: VERB_COLOR_BG },
    { id: 'venir', title: 'Venir',    translation: 'to come',      Icon: ArrowLeftIcon as IconFC,  color: VERB_COLOR, bg: VERB_COLOR_BG },
];

const HELPER_VERBS_EN = [
    { id: 'to-be',   title: 'To Be',   translation: 'être',  Icon: UserIcon as IconFC,       color: VERB_COLOR, bg: VERB_COLOR_BG },
    { id: 'to-have', title: 'To Have', translation: 'avoir', Icon: TagIcon as IconFC,        color: VERB_COLOR, bg: VERB_COLOR_BG },
    { id: 'to-do',   title: 'To Do',   translation: 'faire', Icon: PenIcon as IconFC,        color: VERB_COLOR, bg: VERB_COLOR_BG },
    { id: 'to-go',   title: 'To Go',   translation: 'aller', Icon: ArrowRightIcon as IconFC, color: VERB_COLOR, bg: VERB_COLOR_BG },
    { id: 'to-come', title: 'To Come', translation: 'venir', Icon: ArrowLeftIcon as IconFC,  color: VERB_COLOR, bg: VERB_COLOR_BG },
];

const TYPE_ORDER = ['-ER', '-IR', '-RE', 'Regular', 'Irregular'];

interface VerbSummary {
    id: string;
    infinitive: string;
    translation: string;
    type: string;
    color: string;
    newTenses?: boolean;
}

interface ReviewGroup {
    groupId: string;
    groupTitle: string;
    verbs: VerbSummary[];
}

interface CourseVerbsData {
    level: string;
    newVerbs: VerbSummary[];
    reviewVerbs: ReviewGroup[];
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

function VerbGrid({ verbs, level, navigate, learnLabel, quizLabel, newTensesLabel }: {
    verbs: VerbSummary[];
    level: string | undefined;
    navigate: (path: string) => void;
    learnLabel: string;
    quizLabel: string;
    newTensesLabel: string;
}) {
    if (verbs.length === 0) return null;
    return (
        <div className="verb-grid">
            {verbs.map(verb => (
                <div key={verb.id} className={`verb-card${verb.newTenses ? ' verb-card--new-tenses' : ''}`}>
                    {verb.newTenses && (
                        <span className="verb-new-tenses"><span aria-hidden="true">✦</span> {newTensesLabel}</span>
                    )}
                    <div className="verb-row-body">
                        <h3 className="verb-infinitive">{verb.infinitive}</h3>
                        <p className="verb-translation">{verb.translation}</p>
                    </div>
                    <ProgressFlower status={getContentStatus(`/courses/${level}/verbs/${verb.id}/learn`)} />
                    <div className="verb-actions">
                        <button
                            className="btn"
                            style={{ border: '1.5px solid var(--tag-verbs-text)', color: 'var(--tag-verbs-text)', background: 'var(--surface)', padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}
                            onClick={() => navigate(`/courses/${level}/verbs/${verb.id}/learn`)}
                        >
                            {learnLabel}
                        </button>
                        <button
                            className="btn"
                            style={{ backgroundColor: 'var(--tag-verbs-bg)', color: 'var(--tag-verbs-text)', padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}
                            onClick={() => navigate(`/courses/${level}/verbs/${verb.id}/quiz`)}
                        >
                            {quizLabel}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function Verbs() {
    const { level } = useParams<{ level: string }>();
    const navigate = useNavigate();
    const t = useT();
    const isEN = loadLearningMode() === 'learn-english';

    const helperVerbs = isEN ? HELPER_VERBS_EN : HELPER_VERBS_FR;

    const [data, setData] = useState<CourseVerbsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const langParam = isEN ? '?lang=fr' : '';
        const levelId = (level ?? 'a1').toLowerCase();
        setLoading(true);
        fetch(`${import.meta.env.VITE_API_BASE}/api/verbs/courses/${levelId}${langParam}`)
            .then(r => r.json() as Promise<CourseVerbsData>)
            .then(d => { setData(d); setLoading(false); })
            .catch(() => setLoading(false));
    }, [isEN, level]);

    const q = search.toLowerCase();

    const filterVerbs = (verbs: VerbSummary[]) =>
        q ? verbs.filter(v => v.infinitive.toLowerCase().includes(q) || v.translation.toLowerCase().includes(q)) : verbs;

    const filteredHelpers = q
        ? helperVerbs.filter(v => v.title.toLowerCase().includes(q) || v.translation.toLowerCase().includes(q))
        : helperVerbs;
    const filteredNew = data ? filterVerbs(data.newVerbs) : [];
    const filteredReview = data
        ? data.reviewVerbs
            .map(g => ({ ...g, verbs: filterVerbs(g.verbs) }))
            .filter(g => g.verbs.length > 0)
        : [];

    // New verbs come first; previously introduced verbs stay at the end of their type.
    const typeGroups = groupByType([
        ...filteredNew,
        ...filteredReview.flatMap(group => group.verbs.map(verb => ({ ...verb, newTenses: true }))),
    ]);
    if (filteredHelpers.length > 0 && !typeGroups.some(group => group.type === 'Irregular')) {
        typeGroups.push({ type: 'Irregular', verbs: [] });
    }

    return (
        <main className="page verbs-page">
            <header className="page-header verbs-page-header">
                <div className="verbs-page-intro">
                    <h1>{t.verbs.title}</h1>
                    <p className="subtitle">{t.verbs.subtitle}</p>
                </div>
                <div className="verbs-search-row">
                    <svg className="verbs-search-icon" viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="10.8" cy="10.8" r="6.3" />
                        <path d="m15.5 15.5 4.2 4.2" />
                    </svg>
                    <input
                        type="search"
                        className="verbs-search"
                        aria-label={isEN ? 'Search verbs' : 'Rechercher un verbe'}
                        placeholder={isEN ? 'Find a verb…' : 'Trouver un verbe…'}
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    {search && (
                        <button className="verbs-search-clear" type="button" onClick={() => setSearch('')} aria-label={isEN ? 'Clear search' : 'Effacer la recherche'}>
                            ×
                        </button>
                    )}
                </div>
            </header>

            {loading ? (
                <p className="verbs-loading">Loading…</p>
            ) : (
                <>
                    {typeGroups.map(({ type, verbs }) => (
                        <section key={type} className="verbs-section">
                            <h2 className="verbs-section-title">{type}</h2>
                            {type === 'Irregular' && filteredHelpers.length > 0 && (
                                <div className="verbs-helper-grid">
                                    {filteredHelpers.map(v => (
                                        <button
                                            key={v.id}
                                            className="verbs-helper-card"
                                            style={{ borderTopColor: v.color }}
                                            onClick={() => navigate(`/courses/${level}/verbs/${v.id}/table`)}
                                            type="button"
                                        >
                                            <span className="verbs-helper-icon" style={{ backgroundColor: v.bg, color: v.color }}><v.Icon size={20} /></span>
                                            <span className="verb-row-body">
                                            <span className="verbs-helper-title" style={{ color: v.color }}>{v.title}</span>
                                            <span className="verbs-helper-translation">{v.translation}</span>
                                            </span>
                                            <ProgressFlower status={getContentStatus(`/courses/${level}/verbs/${v.id}/table`)} />
                                        </button>
                                    ))}
                                </div>
                            )}
                            <VerbGrid
                                verbs={verbs}
                                level={level}
                                navigate={navigate}
                                learnLabel={t.verbGroupList.learn}
                                quizLabel={t.verbGroupList.quiz}
                                newTensesLabel={isEN ? 'Nouveaux temps' : 'New tenses'}
                            />
                        </section>
                    ))}
                    {typeGroups.length === 0 && q && (
                        <p className="verbs-loading">No verbs match "{search}"</p>
                    )}
                </>
            )}
        </main>
    );
}
