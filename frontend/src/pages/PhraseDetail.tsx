import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './PhraseDetail.css';

interface Phrase {
    id: number;
    french: string;
    english: string;
    note?: string;
}

interface PhraseCategoryData {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    phrases: Phrase[];
}

export default function PhraseDetail() {
    const { categoryId } = useParams<{ categoryId: string }>();
    const navigate = useNavigate();
    const [category, setCategory] = useState<PhraseCategoryData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        fetch(`http://localhost:3001/api/phrase-categories/${categoryId}`)
            .then(res => {
                if (!res.ok) throw new Error('Not found');
                return res.json();
            })
            .then((data: PhraseCategoryData) => {
                setCategory(data);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) return <div className="phrase-detail-loading">Loading...</div>;

    if (error || !category) {
        return (
            <div className="phrase-detail-container">
                <button className="back-button" onClick={() => navigate('/phrases')}>← Back to Phrases</button>
                <p>Category not found.</p>
            </div>
        );
    }

    return (
        <div className="phrase-detail-container">
            <button className="back-button" onClick={() => navigate('/phrases')}>← Back to Phrases</button>

            <header className="phrase-detail-header">
                <div className="phrase-detail-icon" style={{ backgroundColor: category.color }}>
                    {category.icon}
                </div>
                <div className="phrase-detail-header-text">
                    <h1 style={{ color: category.color }}>{category.title}</h1>
                    <p className="phrase-detail-description">{category.description}</p>
                </div>
            </header>

            <div className="phrase-list">
                {category.phrases.map((phrase) => (
                    <div key={phrase.id} className="phrase-item" style={{ borderLeftColor: category.color }}>
                        <p className="phrase-french">{phrase.french}</p>
                        <p className="phrase-english">{phrase.english}</p>
                        {phrase.note && <p className="phrase-note">{phrase.note}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}
