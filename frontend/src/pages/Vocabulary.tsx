import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Vocabulary.css';

interface VocabularyModule {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    wordCount: number;
}

type LevelKey = 'A1' | 'A2B1' | 'B2C1';

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

export default function Vocabulary() {
    const navigate = useNavigate();
    const [modules, setModules] = useState<VocabularyModule[]>([]);

    useEffect(() => {
        axios.get<VocabularyModule[]>('http://localhost:3001/api/vocabulary-modules')
            .then(res => setModules(res.data))
            .catch(err => console.error('Failed to load vocabulary modules', err));
    }, []);

    const moduleMap = new Map(modules.map(m => [m.id, m]));

    return (
        <main className="page">
            <header className="page-header">
                <h1>Vocabulary</h1>
                <p className="subtitle">Choose a module to practise</p>
            </header>

            {LEVEL_GROUPS.map((group) => {
                const groupModules = group.ids
                    .map(id => moduleMap.get(id))
                    .filter((m): m is VocabularyModule => m !== undefined);

                if (groupModules.length === 0) return null;

                return (
                    <section key={group.key} className="vocab-group">
                        <p className="section-label">{group.label}</p>
                        <div className="vocab-grid">
                            {groupModules.map((module) => (
                                <button
                                    key={module.id}
                                    className="vocab-card"
                                    onClick={() => navigate(`/vocabulary/${module.id}`)}
                                    type="button"
                                >
                                    <span
                                        className="vocab-card-icon-circle"
                                        style={{ backgroundColor: `${module.color}1F` }}
                                    >
                                        <span className="vocab-card-icon">{module.icon}</span>
                                    </span>
                                    <span className="vocab-card-title">{module.title}</span>
                                    <span className="vocab-card-badge">{module.wordCount} words</span>
                                </button>
                            ))}
                        </div>
                    </section>
                );
            })}
        </main>
    );
}
