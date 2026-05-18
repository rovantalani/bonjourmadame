import { useNavigate } from 'react-router-dom';
import './HelperVerbs.css';

interface VerbModule {
    id: string;
    title: string;
    translation: string;
    description: string;
    icon: string;
    color: string;
}

export default function HelperVerbs() {
    const navigate = useNavigate();

    const modules: VerbModule[] = [
        {
            id: 'etre',
            title: 'Être',
            translation: 'to be',
            description: 'Master the most essential French verb used in everyday speech and compound tenses',
            icon: '👤',
            color: '#2563EB'
        },
        {
            id: 'avoir',
            title: 'Avoir',
            translation: 'to have',
            description: 'Learn the primary auxiliary verb used to form past tenses in French',
            icon: '🤲',
            color: '#16A34A'
        },
        {
            id: 'faire',
            title: 'Faire',
            translation: 'to do / make',
            description: 'Explore one of the most versatile French verbs used in countless expressions',
            icon: '🔨',
            color: '#EA580C'
        },
        {
            id: 'aller',
            title: 'Aller',
            translation: 'to go',
            description: 'Practice the verb used for movement and forming the near future tense',
            icon: '🚶',
            color: '#7C3AED'
        },
        {
            id: 'venir',
            title: 'Venir',
            translation: 'to come',
            description: 'Study the verb used for arrival and forming the recent past tense',
            icon: '🏠',
            color: '#DC2626'
        }
    ];

    const handleModuleClick = (moduleId: string) => {
        navigate(`/helper-verbs/${moduleId}`);
    };

    return (
        <main className="page">
            <div className="page-header">
                <h1>Helper Verbs</h1>
                <p className="subtitle">The 5 essential verbs every learner must master</p>
            </div>

            <div className="helper-verbs-grid">
                {modules.map((module) => (
                    <div
                        key={module.id}
                        className="hv-card"
                        onClick={() => handleModuleClick(module.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && handleModuleClick(module.id)}
                    >
                        <div
                            className="hv-card-bar"
                            style={{ backgroundColor: module.color }}
                        />
                        <div className="hv-card-body">
                            <div
                                className="hv-icon"
                                style={{ backgroundColor: `${module.color}1F` }}
                            >
                                {module.icon}
                            </div>
                            <h2
                                className="hv-title"
                                style={{ color: module.color }}
                            >
                                {module.title}
                            </h2>
                            <span className="hv-translation">{module.translation}</span>
                            <p className="hv-description">{module.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
