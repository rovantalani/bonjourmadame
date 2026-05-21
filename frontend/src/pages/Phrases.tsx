import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useT } from '../utils/i18n';
import './Phrases.css';

interface PhraseCategory {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    phraseCount: number;
}

export default function Phrases() {
    const navigate = useNavigate();
    const t = useT();
    const [categories, setCategories] = useState<PhraseCategory[]>([]);

    useEffect(() => {
        axios.get<PhraseCategory[]>(`${import.meta.env.VITE_API_BASE}/api/phrase-categories`)
            .then(res => setCategories(res.data))
            .catch(err => console.error('Failed to load phrase categories', err));
    }, []);

    return (
        <main className="page">
            <header className="page-header">
                <h1>{t.phrases.title}</h1>
                <p className="subtitle">{t.phrases.subtitle}</p>
            </header>

            <div className="phrases-grid">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="phrase-card"
                        onClick={() => navigate(`/phrases/${cat.id}`)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && navigate(`/phrases/${cat.id}`)}
                        style={{ borderLeft: `3px solid ${cat.color}` }}
                    >
                        <span
                            className="phrase-card-icon-circle"
                            style={{ backgroundColor: `${cat.color}1F` }}
                        >
                            <span className="phrase-card-icon">{cat.icon}</span>
                        </span>
                        <h2 className="phrase-card-title">{cat.title}</h2>
                        <p className="phrase-card-desc">{cat.description}</p>
                        <span className="phrase-card-count">{t.phrases.phraseCount(cat.phraseCount)}</span>
                    </div>
                ))}
            </div>
        </main>
    );
}
