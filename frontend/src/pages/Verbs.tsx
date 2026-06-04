import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useT } from '../utils/i18n';
import { loadLearningMode } from '../utils/settings';
import { UserIcon, TagIcon, PenIcon, ArrowRightIcon, ArrowLeftIcon } from '../components/icons';
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

function VerbGrid({ verbs, level, navigate, learnLabel, quizLabel }: {
    verbs: VerbSummary[];
    level: string | undefined;
    navigate: (path: string) => void;
    learnLabel: string;
    quizLabel: string;
}) {
    if (verbs.length === 0) return null;
    return (
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
                            {learnLabel}
                        </button>
                        <button
                            className="btn"
                            style={{ backgroundColor: verb.color, color: '#fff', padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}
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
        fetch(`${import.meta.env.VITE_API_BASE}/api/verbs-for-course/${levelId}${langParam}`)
            .then(r => r.json() as Promise<CourseVerbsData>)
            .then(d => {
                setData(d);
                setLoading(false);
            });
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

    const newTypeGroups = groupByType(filteredNew);
    const levelLabel = (level ?? 'A1').toUpperCase();

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
                                <span className="verbs-helper-icon" style={{ backgroundColor: v.bg, color: v.color }}><v.Icon size={20} /></span>
                                <span className="verbs-helper-title" style={{ color: v.color }}>{v.title}</span>
                                <span className="verbs-helper-translation">{v.translation}</span>
                            </button>
                        ))}
                    </div>
                </section>
            )}

            {loading ? (
                <p className="verbs-loading">Loading…</p>
            ) : (
                <>
                    {/* New verbs for this level */}
                    {filteredNew.length > 0 && (
                        <section className="verbs-section">
                            <h2 className="verbs-section-title">
                                {isEN ? `Nouveaux verbes — ${levelLabel}` : `New verbs — ${levelLabel}`}
                            </h2>
                            <p className="verbs-section-desc">
                                {isEN
                                    ? `Verbes introduits pour la première fois à ce niveau — pratiquez tous les temps`
                                    : `Verbs introduced for the first time at this level — practice all unlocked tenses`}
                            </p>
                            {newTypeGroups.map(({ type, verbs }) => (
                                <div key={type} className="verbs-type-block">
                                    <span className="level-badge" style={{ backgroundColor: verbs[0]?.color ?? 'var(--accent)', fontSize: '0.75rem' }}>
                                        {type}
                                    </span>
                                    <VerbGrid
                                        verbs={verbs}
                                        level={level}
                                        navigate={navigate}
                                        learnLabel={t.verbGroupList.learn}
                                        quizLabel={t.verbGroupList.quiz}
                                    />
                                </div>
                            ))}
                            {filteredNew.length === 0 && q && (
                                <p className="verbs-loading" style={{ color: 'var(--text-3)' }}>No new verbs match "{search}"</p>
                            )}
                        </section>
                    )}

                    {/* Review verbs from prior levels */}
                    {filteredReview.length > 0 && (
                        <section className="verbs-section">
                            <h2 className="verbs-section-title">
                                {isEN ? 'Révision — nouveaux temps uniquement' : 'Review — new tenses only'}
                            </h2>
                            <p className="verbs-section-desc">
                                {isEN
                                    ? `Ces verbes ont déjà été appris. Le quiz ne teste que les nouveaux temps de ${levelLabel}.`
                                    : `These verbs were learned earlier. The quiz only tests the new ${levelLabel} tenses.`}
                            </p>
                            {filteredReview.map(group => (
                                <div key={group.groupId} className="verbs-review-block">
                                    <h3 className="verbs-review-group-title">{group.groupTitle}</h3>
                                    <VerbGrid
                                        verbs={group.verbs}
                                        level={level}
                                        navigate={navigate}
                                        learnLabel={t.verbGroupList.learn}
                                        quizLabel={t.verbGroupList.quiz}
                                    />
                                </div>
                            ))}
                        </section>
                    )}

                    {filteredNew.length === 0 && filteredReview.length === 0 && q && (
                        <p className="verbs-loading" style={{ color: 'var(--text-3)' }}>No verbs match "{search}"</p>
                    )}
                </>
            )}
        </main>
    );
}
