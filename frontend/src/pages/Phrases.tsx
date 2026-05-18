import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
    const [categories, setCategories] = useState<PhraseCategory[]>([]);

    useEffect(() => {
        axios.get<PhraseCategory[]>('http://localhost:3001/api/phrase-categories')
            .then(res => setCategories(res.data))
            .catch(err => console.error('Failed to load phrase categories', err));
    }, []);

    return (
        <div className="phrases-container">
            <button className="back-button" onClick={() => navigate('/')}>← Back to Home</button>

            <header className="phrases-header">
                <h1>Phrases</h1>
                <p className="subtitle">Real French expressions for real situations</p>
            </header>

            <div className="phrases-grid">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="phrase-category-card"
                        onClick={() => navigate(`/phrases/${cat.id}`)}
                        style={{ borderColor: cat.color }}
                    >
                        <div className="phrase-category-icon" style={{ backgroundColor: cat.color }}>
                            {cat.icon}
                        </div>
                        <h2>{cat.title}</h2>
                        <p>{cat.description}</p>
                        <div className="phrase-count">
                            <span>{cat.phraseCount} phrases</span>
                        </div>
                        <button
                            className="phrase-category-button"
                            style={{ backgroundColor: cat.color }}
                        >
                            Study
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
