import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useT } from '../utils/i18n';
import SpeakerButton from '../components/SpeakerButton';
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
    const { level, categoryId } = useParams<{ level: string; categoryId: string }>();
    const navigate = useNavigate();
    const t = useT();
    const [category, setCategory] = useState<PhraseCategoryData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        fetch(`${import.meta.env.VITE_API_BASE}/api/phrase-categories/${categoryId}`)
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

    if (loading) {
        return (
            <main className="page">
                <p className="phrase-detail-loading">Loading…</p>
            </main>
        );
    }

    if (error || !category) {
        return (
            <main className="page">
                <button className="back-btn" onClick={() => navigate(`/courses/${level}/lectures`)} type="button">
                    {t.phraseDetail.back}
                </button>
                <p>{t.phraseDetail.notFound}</p>
            </main>
        );
    }

    return (
        <main className="page">
            <div className="phrase-detail-nav">
                <button className="back-btn" onClick={() => navigate(`/courses/${level}/lectures`)} type="button">
                    {t.phraseDetail.back}
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/courses/${level}/lectures/phrases/${categoryId}/quiz`)}
                    type="button"
                >
                    {t.phraseDetail.startQuiz}
                </button>
            </div>

            <div className="phrase-detail-header card">
                <span
                    className="phrase-detail-icon-circle"
                    style={{ backgroundColor: `${category.color}1F` }}
                >
                    <span className="phrase-detail-icon">{category.icon}</span>
                </span>
                <div className="phrase-detail-header-text">
                    <h1 style={{ color: category.color }}>{category.title}</h1>
                    <p className="phrase-detail-description">{category.description}</p>
                </div>
            </div>

            <div className="phrase-list">
                {category.phrases.map((phrase) => (
                    <div
                        key={phrase.id}
                        className="phrase-item"
                        style={{ borderLeftColor: category.color }}
                    >
                        <div className="phrase-fr-row">
                            <p className="phrase-fr">{phrase.french}</p>
                            <SpeakerButton text={phrase.french} lang="fr-FR" />
                        </div>
                        <div className="phrase-fr-row">
                            <p className="phrase-en">{phrase.english}</p>
                            <SpeakerButton text={phrase.english} lang="en-US" />
                        </div>
                        {phrase.note && (
                            <span className="phrase-note">{phrase.note}</span>
                        )}
                    </div>
                ))}
            </div>
        </main>
    );
}
