import CourseLabel from '../../components/CourseLabel';
import { useLearning } from '../../context/LearningContext';
import { useLearningNavigate as useNavigate } from '../../hooks/useLearningNavigation';
import { normalizeSearch } from '../../utils/search';
import ProgressFlower from '../../components/ProgressFlower';
import { getContentStatus } from '../../utils/courseProgress';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useT } from '../../utils/i18n';
import { UserIcon, TagIcon, PenIcon, ArrowRightIcon, ArrowLeftIcon } from '../../components/icons/index';
import type { SVGProps } from 'react';
import './Verbs.css';
import '../../components/NotebookCards.css';

type IconFC = React.FC<SVGProps<SVGSVGElement> & { size?: number }>;


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
        <div className="notebook-grid verb-grid">
            {verbs.map((verb, index) => (
                <div key={verb.id} className={`notebook-card verb-card${verb.newTenses ? ' verb-card--new-tenses' : ''}`}>
                    <span className="notebook-tab" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <span className="notebook-illustration"><PenIcon size={32} aria-hidden="true" /></span>
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
                            className="notebook-action"
                            onClick={() => navigate(`/courses/${level}/verbs/${verb.id}/learn`)}
                        >
                            {learnLabel}
                        </button>
                        <button
                            className="notebook-action"
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
    const { helpers, language } = useLearning();
    const isEN = language === 'en';
    const icons = { user: UserIcon, tag: TagIcon, pen: PenIcon, right: ArrowRightIcon, left: ArrowLeftIcon };
    const helperVerbs = helpers.map(helper => ({ ...helper, Icon: icons[helper.icon] as IconFC }));

    const [data, setData] = useState<CourseVerbsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const levelId = (level ?? 'a1').toLowerCase();
        setLoading(true);
        fetch(`${import.meta.env.VITE_API_BASE}/api/learning/${language}/verbs/courses/${levelId}`)
            .then(r => r.json() as Promise<CourseVerbsData>)
            .then(d => { setData(d); setLoading(false); })
            .catch(() => setLoading(false));
    }, [language, level]);

    const q = normalizeSearch(search);

    const filterVerbs = (verbs: VerbSummary[]) =>
        q ? verbs.filter(v => normalizeSearch(v.infinitive).includes(q) || normalizeSearch(v.translation).includes(q)) : verbs;

    const filteredHelpers = q
        ? helperVerbs.filter(v => normalizeSearch(v.title).includes(q) || normalizeSearch(v.translation).includes(q))
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
        <main className="page verbs-page notebook-page">
            <header className="page-header verbs-page-header">
                <div className="verbs-page-intro">
                    <CourseLabel title={isEN ? 'Carnet de verbes' : 'Verb notebook'} />
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
                        aria-label={isEN ? 'Rechercher un verbe' : 'Search verbs'}
                        placeholder={isEN ? 'Trouver un verbe…' : 'Find a verb…'}
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    {search && (
                        <button className="verbs-search-clear" type="button" onClick={() => setSearch('')} aria-label={isEN ? 'Effacer la recherche' : 'Clear search'}>
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
                                <div className="notebook-grid verbs-helper-grid">
                                    {filteredHelpers.map((v, index) => (
                                        <button
                                            key={v.id}
                                            className="notebook-card verbs-helper-card"
                                            onClick={() => navigate(`/courses/${level}/verbs/${v.id}/table`)}
                                            type="button"
                                        >
                                            <span className="notebook-tab" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                                            <span className="notebook-illustration"><v.Icon size={32} aria-hidden="true" /></span>
                                            <span className="verb-row-body">
                                            <span className="verbs-helper-title">{v.title}</span>
                                            <span className="verbs-helper-translation">{v.translation}</span>
                                            </span>
                                            <span className="notebook-footer"><span>{isEN ? 'Tableau de conjugaison' : 'Conjugation table'}</span><ProgressFlower status={getContentStatus(`/courses/${level}/verbs/${v.id}/table`)} /><span aria-hidden="true">↗</span></span>
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
