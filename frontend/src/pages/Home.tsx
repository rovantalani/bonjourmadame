// import { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';


interface Module {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
}

export default function Home() {

    const navigate = useNavigate();

    const modules: Module[] = [
        {
            id: 'vocabulary',
            title: 'Vocabulary',
            description: 'Learn and practice new words with flashcards and exercises',
            icon: '📚',
            color: '#4F46E5'
        },
        {
            id: 'grammar',
            title: 'Grammar',
            description: 'Master grammar rules through interactive lessons and quizzes',
            icon: '✏️',
            color: '#059669'
        }
    ];

    const handleModuleClick = (moduleId: string) => {
        navigate(`/${moduleId}`);
    };

    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Language Learning</h1>
                <p className="subtitle">Choose a module to start your learning journey</p>
            </header>

            <div className="modules-grid">
                {modules.map((module) => (
                    <div
                        key={module.id}
                        className="module-card"
                        onClick={() => handleModuleClick(module.id)}
                        style={{ borderColor: module.color }}
                    >
                        <div className="module-icon" style={{ backgroundColor: module.color }}>
                            {module.icon}
                        </div>
                        <h2>{module.title}</h2>
                        <p>{module.description}</p>
                        <button
                            className="module-button"
                            style={{ backgroundColor: module.color }}
                        >
                            Start Learning
                        </button>
                    </div>
                ))}
            </div>

            <div className="stats-section">
                <div className="stat-card">
                    <h3>0</h3>
                    <p>Words Learned</p>
                </div>
                <div className="stat-card">
                    <h3>0</h3>
                    <p>Lessons Completed</p>
                </div>
                <div className="stat-card">
                    <h3>0</h3>
                    <p>Day Streak</p>
                </div>
            </div>
        </div>
    );
}