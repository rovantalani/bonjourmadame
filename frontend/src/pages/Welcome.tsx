import { useNavigate } from 'react-router-dom';
import { saveLearningMode } from '../utils/settings';
import './Welcome.css';

export default function Welcome() {
    const navigate = useNavigate();

    function pick(mode: 'learn-french' | 'learn-english') {
        saveLearningMode(mode);
        navigate('/login');
    }

    return (
        <main className="welcome-page">
            <div className="welcome-logo">
                <img src="/logo_no_text.png" alt="Bonjour Madame" className="welcome-logo-img" />
                <span className="welcome-brand">Bonjour Madame</span>
            </div>

            <div className="welcome-heading">
                <h1 className="welcome-title">What would you like to learn?</h1>
                <p className="welcome-subtitle">Que voulez-vous apprendre ?</p>
            </div>

            <div className="welcome-cards">
                <button className="welcome-card" onClick={() => pick('learn-french')}>
                    <span className="welcome-flag">🇫🇷</span>
                    <span className="welcome-card-primary">Learn French</span>
                    <span className="welcome-card-secondary">Je veux apprendre le français</span>
                </button>

                <button className="welcome-card" onClick={() => pick('learn-english')}>
                    <span className="welcome-flag">🇬🇧</span>
                    <span className="welcome-card-primary">Learn English</span>
                    <span className="welcome-card-secondary">Apprendre l'anglais depuis le français</span>
                </button>
            </div>
        </main>
    );
}
