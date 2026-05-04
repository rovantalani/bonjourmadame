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

export default function Vocabulary() {
    const navigate = useNavigate();
    const [modules, setModules] = useState<VocabularyModule[]>([]);

    useEffect(() => {
        axios.get<VocabularyModule[]>('http://localhost:3001/api/vocabulary-modules')
            .then(res => setModules(res.data))
            .catch(err => console.error('Failed to load vocabulary modules', err));
    }, []);

    const handleModuleClick = (moduleId: string) => {
        navigate(`/vocabulary/${moduleId}`);
    };

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="vocabulary-container">
            <button className="back-button" onClick={handleBack}>
                ← Back to Home
            </button>

            <header className="vocabulary-header">
                <h1>Vocabulary</h1>
                <p className="subtitle">Choose a chapter to practice</p>
            </header>

            <div className="vocabulary-modules-grid">
                {modules.map((module) => (
                    <div
                        key={module.id}
                        className="vocabulary-module-card"
                        onClick={() => handleModuleClick(module.id)}
                        style={{ borderColor: module.color }}
                    >
                        <div className="vocabulary-module-icon" style={{ backgroundColor: module.color }}>
                            {module.icon}
                        </div>
                        <h2>{module.title}</h2>
                        <p>{module.description}</p>
                        <div className="word-count">
                            <span>{module.wordCount} words</span>
                        </div>
                        <button
                            className="vocabulary-module-button"
                            style={{ backgroundColor: module.color }}
                        >
                            Start Quiz
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}