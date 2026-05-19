import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import './Nav.css';

const NAV_ITEMS = [
    { path: '/',             label: 'Home',       icon: '⌂'  },
    { path: '/vocabulary',   label: 'Vocabulary', icon: '📖' },
    { path: '/grammar',      label: 'Grammar',    icon: '✏️'  },
    { path: '/phrases',      label: 'Phrases',    icon: '💬' },
    { path: '/helper-verbs', label: 'Verbs',      icon: '⚡' },
];

function useActiveItem() {
    const { pathname } = useLocation();
    return (path: string) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };
}

export default function Nav() {
    const navigate   = useNavigate();
    const isActive   = useActiveItem();
    const { dark, toggle } = useTheme();

    return (
        <>
            {/* ── Desktop top nav ── */}
            <nav className="top-nav">
                <div className="top-nav-inner">
                    <button className="nav-brand" onClick={() => navigate('/')}>
                        <img src="/logo_no_text.png" alt="Bonjour Madame" className="nav-logo" />
                        <span className="nav-brand-name">Bonjour Madame</span>
                    </button>

                    <div className="top-nav-links">
                        {NAV_ITEMS.slice(1).map(item => (
                            <button
                                key={item.path}
                                className={`top-nav-link ${isActive(item.path) ? 'active' : ''}`}
                                onClick={() => navigate(item.path)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                    <button className="theme-toggle" onClick={toggle} aria-label="Toggle dark mode">
                        {dark ? '☀' : '☽'}
                    </button>
                </div>
            </nav>

            {/* ── Mobile bottom tab bar ── */}
            <nav className="bottom-nav">
                {NAV_ITEMS.map(item => (
                    <button
                        key={item.path}
                        className={`bottom-nav-item ${isActive(item.path) ? 'active' : ''}`}
                        onClick={() => navigate(item.path)}
                    >
                        <span className="bottom-nav-icon">{item.icon}</span>
                        <span className="bottom-nav-label">{item.label}</span>
                    </button>
                ))}
            </nav>
        </>
    );
}
