import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useT } from '../utils/i18n';
import './Nav.css';

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
    const t = useT();

    const NAV_ITEMS = [
        { path: '/',             label: t.nav.home,       icon: '⌂'  },
        { path: '/courses',      label: t.nav.courses,    icon: '🎓' },
        { path: '/vocabulary',   label: t.nav.vocabulary, icon: '📖' },
        { path: '/grammar',      label: t.nav.grammar,    icon: '✏️'  },
        { path: '/phrases',      label: t.nav.phrases,    icon: '💬' },
    ];

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
                    <button
                        className={`top-nav-link ${isActive('/stats') ? 'active' : ''}`}
                        onClick={() => navigate('/stats')}
                    >
                        {t.nav.stats}
                    </button>
                    <button
                        className={`top-nav-link ${isActive('/settings') ? 'active' : ''}`}
                        onClick={() => navigate('/settings')}
                        aria-label="Settings"
                    >
                        ⚙
                    </button>
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
