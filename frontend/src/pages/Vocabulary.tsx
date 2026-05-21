import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getModuleMastery } from '../utils/progress';
import { useT } from '../utils/i18n';
import './Vocabulary.css';

interface VocabularyModule {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    wordCount: number;
}

type LevelKey = 'A1' | 'A2B1' | 'B2C1' | 'C1C2';

interface LevelGroup {
    key: LevelKey;
    label: string;
    ids: string[];
}

const LEVEL_GROUPS: LevelGroup[] = [
    {
        key: 'A1',
        label: 'A1 — Foundations',
        ids: [
            'greetings-basics',
            'numbers-time',
            'colors-descriptions',
            'family-relationships',
            'food-drinks',
            'body-health',
            'home-living',
        ],
    },
    {
        key: 'A2B1',
        label: 'A2 / B1',
        ids: [
            'work-professions',
            'weather-nature',
            'sports-hobbies',
            'school-education',
            'shopping-money',
            'technology-media',
        ],
    },
    {
        key: 'B2C1',
        label: 'B2 / C1',
        ids: [
            'politics-society',
            'business-economy',
            'daily-life-advanced',
            'emotions-psychology',
            'travel-culture',
            'sherlock-holmes-ch1',
            'sherlock-holmes-ch2',
        ],
    },
    {
        key: 'C1C2',
        label: 'C1 / C2 — Advanced',
        ids: [
            'idioms-expressions',
            'faux-amis',
            'literary-abstract',
            'nuanced-adjectives',
            'law-administration',
            'human-condition',
        ],
    },
];

const READING_IDS = new Set(['sherlock-holmes-ch1', 'sherlock-holmes-ch2']);

export default function Vocabulary() {
    const navigate = useNavigate();
    const t = useT();
    const [modules, setModules] = useState<VocabularyModule[]>([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get<VocabularyModule[]>(`${import.meta.env.VITE_API_BASE}/api/vocabulary-modules`)
            .then(res => setModules(res.data))
            .catch(err => console.error('Failed to load vocabulary modules', err));
    }, []);

    const moduleMap = new Map(modules.map(m => [m.id, m]));
    const term = search.trim().toLowerCase();

    return (
        <main className="page">
            <header className="page-header">
                <h1>{t.vocabulary.title}</h1>
                <p className="subtitle">{t.vocabulary.subtitle}</p>
            </header>

            <div className="vocab-search-wrapper">
                <span className="vocab-search-icon" aria-hidden="true">🔍</span>
                <input
                    className="field-input vocab-search-input"
                    type="search"
                    placeholder={t.vocabulary.searchPlaceholder}
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    aria-label="Search vocabulary modules"
                />
                {search && (
                    <button
                        className="vocab-search-clear"
                        type="button"
                        onClick={() => setSearch('')}
                        aria-label="Clear search"
                    >
                        ×
                    </button>
                )}
            </div>

            {LEVEL_GROUPS.map((group) => {
                const groupModules = group.ids
                    .map(id => moduleMap.get(id))
                    .filter((m): m is VocabularyModule => m !== undefined)
                    .filter((m) =>
                        !term ||
                        m.title.toLowerCase().includes(term) ||
                        m.description.toLowerCase().includes(term)
                    );

                if (groupModules.length === 0) return null;

                return (
                    <section key={group.key} className="vocab-group">
                        <p className="section-label">{t.vocabulary.levelGroups[group.key]}</p>
                        <div className="vocab-grid">
                            {groupModules.map((module) => {
                                const hasReading = READING_IDS.has(module.id);
                                const { mastered, practiced } = getModuleMastery(module.id);
                                const masteryPct = module.wordCount > 0
                                    ? Math.round((mastered / module.wordCount) * 100)
                                    : 0;

                                const cardInner = (
                                    <>
                                        <span
                                            className="vocab-card-icon-circle"
                                            style={{ backgroundColor: `${module.color}1F` }}
                                        >
                                            <span className="vocab-card-icon">{module.icon}</span>
                                        </span>
                                        <span className="vocab-card-title">{module.title}</span>
                                        <div className="vocab-card-footer">
                                            <span className="vocab-card-badge">{t.vocabulary.words(module.wordCount)}</span>
                                            {practiced > 0 && (
                                                <span className="vocab-card-mastery" style={{ color: module.color }}>
                                                    {t.vocabulary.mastered(mastered, module.wordCount)}
                                                </span>
                                            )}
                                        </div>
                                        {practiced > 0 && (
                                            <div className="progress-track vocab-card-progress">
                                                <div
                                                    className="progress-fill"
                                                    style={{ width: `${masteryPct}%`, backgroundColor: module.color }}
                                                />
                                            </div>
                                        )}
                                    </>
                                );

                                if (hasReading) {
                                    return (
                                        <div key={module.id} className="vocab-card vocab-card--reading">
                                            {cardInner}
                                            <div className="vocab-card-actions">
                                                <button
                                                    className="vocab-card-action-btn"
                                                    onClick={() => navigate(`/vocabulary/${module.id}`)}
                                                    type="button"
                                                >
                                                    {t.vocabulary.quiz}
                                                </button>
                                                <button
                                                    className="vocab-card-action-btn vocab-card-action-btn--read"
                                                    onClick={() => navigate(`/reading/${module.id}`)}
                                                    type="button"
                                                    style={{ borderColor: module.color, color: module.color }}
                                                >
                                                    {t.vocabulary.read}
                                                </button>
                                            </div>
                                        </div>
                                    );
                                }
                                return (
                                    <button
                                        key={module.id}
                                        className="vocab-card"
                                        onClick={() => navigate(`/vocabulary/${module.id}`)}
                                        type="button"
                                    >
                                        {cardInner}
                                    </button>
                                );
                            })}
                        </div>
                    </section>
                );
            })}
        </main>
    );
}
