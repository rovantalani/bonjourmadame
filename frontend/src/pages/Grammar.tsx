import { useNavigate } from 'react-router-dom';
import './Grammar.css';

interface GrammarModule {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
}

export default function Grammar() {
    const navigate = useNavigate();

    const modules: GrammarModule[] = [
        {
            id: 'helper-verbs',
            title: 'Helper Verbs',
            description: 'Master the 5 essential helper verbs in French',
            icon: '👤',
            color: '#7C3AED'
        },
        {
            id: 'regular-verbs',
            title: 'Regular Verbs',
            description: 'Learn conjugation patterns for regular verbs',
            icon: '📝',
            color: '#059669'
        },
        {
            id: 'irregular-verbs',
            title: 'Irregular Verbs',
            description: 'Master the most common irregular verb forms',
            icon: '⚡',
            color: '#DC2626'
        }
    ];

    const handleModuleClick = (moduleId: string) => {
        console.log(`Navigating to ${moduleId}`);
        // We'll add specific module pages later
        navigate(`/grammar/${moduleId}`);
    };

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="grammar-container">
            <button className="back-button" onClick={handleBack}>
                ← Back to Home
            </button>

            <header className="grammar-header">
                <h1>Grammar</h1>
                <p className="subtitle">Choose a topic to practice</p>
            </header>

            <div className="grammar-modules-grid">
                {modules.map((module) => (
                    <div
                        key={module.id}
                        className="grammar-module-card"
                        onClick={() => handleModuleClick(module.id)}
                        style={{ borderColor: module.color }}
                    >
                        <div className="grammar-module-icon" style={{ backgroundColor: module.color }}>
                            {module.icon}
                        </div>
                        <h2>{module.title}</h2>
                        <p>{module.description}</p>
                        <button
                            className="grammar-module-button"
                            style={{ backgroundColor: module.color }}
                        >
                            Start Learning
                        </button>
                    </div>
                ))}
            </div>

            <div className="grammar-progress">
                <h3>Your Progress</h3>
                <div className="progress-items">
                    <div className="progress-item">
                        <span>Regular Verbs</span>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: '0%', backgroundColor: '#059669' }}></div>
                        </div>
                        <span className="progress-text">0%</span>
                    </div>
                    <div className="progress-item">
                        <span>Irregular Verbs</span>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: '0%', backgroundColor: '#DC2626' }}></div>
                        </div>
                        <span className="progress-text">0%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}