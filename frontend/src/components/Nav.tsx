import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useT } from '../utils/i18n';
import { useCourses } from '../utils/modeHelpers';
import { getActiveCourse, setActiveCourse } from '../utils/courseProgress';
import './Nav.css';

/* ── Inline SVG icons (1.7px stroke, currentColor) ── */
const IconOverview = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>
    </svg>
);
const IconVocab = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
);
const IconVerbs = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
);
const IconReading = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
);
const IconStats = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
);
const IconSettings = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
);
const IconSun = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
);
const IconMoon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
);

function useActiveItem() {
    const { pathname } = useLocation();
    return (path: string) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };
}

function LevelIndicator({ activeLevel }: { activeLevel: string }) {
    const courses = useCourses();
    const navigate = useNavigate();
    const t = useT();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [open]);

    const activeCourse = courses.find(c => c.level === activeLevel);
    const color = activeCourse?.color ?? 'var(--accent)';

    return (
        <div className="level-indicator" ref={ref}>
            <button
                className="level-indicator-btn"
                style={{
                    backgroundColor: `${color}1A`,
                    color: color,
                    borderColor: `${color}40`,
                }}
                onClick={() => setOpen(o => !o)}
                aria-label="Change course level"
            >
                <span className="level-indicator-badge">{activeLevel}</span>
                <span className="level-indicator-chevron">{open ? '▴' : '▾'}</span>
            </button>

            {open && (
                <div className="level-dropdown">
                    <p className="level-dropdown-heading">{t.nav.courses}</p>
                    <ul className="level-dropdown-list">
                        {courses.map(c => (
                            <li key={c.level}>
                                <button
                                    className={`level-dropdown-item${c.level === activeLevel ? ' level-dropdown-item--active' : ''}`}
                                    onClick={() => {
                                        setActiveCourse(c.level);
                                        navigate(`/courses/${c.level.toLowerCase()}`);
                                        setOpen(false);
                                    }}
                                >
                                    <span
                                        className="level-dropdown-badge"
                                        style={{ backgroundColor: c.color }}
                                    >
                                        {c.level}
                                    </span>
                                    <span className="level-dropdown-title">{c.title}</span>
                                    {c.level === activeLevel && (
                                        <span className="level-dropdown-check" style={{ color: c.color }}>✓</span>
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="level-dropdown-footer">
                        <button
                            className="level-dropdown-browse"
                            onClick={() => { navigate('/courses'); setOpen(false); }}
                        >
                            Browse all courses →
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function Nav() {
    const navigate   = useNavigate();
    const { pathname } = useLocation();
    const isActive   = useActiveItem();
    const { dark, toggle } = useTheme();
    const t = useT();
    const [activeLevel, setActiveLevel] = useState(() => getActiveCourse() ?? 'A1');

    useEffect(() => {
        const handler = (e: Event) => setActiveLevel((e as CustomEvent<string>).detail);
        window.addEventListener('activeCourseChanged', handler);
        return () => window.removeEventListener('activeCourseChanged', handler);
    }, []);

    const level = activeLevel.toLowerCase();
    const roadmapPath = `/courses/${level}`;

    const NAV_ITEMS = [
        { path: `/courses/${level}/vocabulary`, segment: 'vocabulary', label: t.nav.vocabulary, icon: <IconVocab /> },
        { path: `/courses/${level}/verbs`,      segment: 'verbs',      label: t.nav.verbs,      icon: <IconVerbs /> },
        { path: `/courses/${level}/lectures`,   segment: 'lectures',   label: t.nav.lectures,   icon: <IconReading /> },
    ];

    return (
        <>
            {/* ── Desktop top nav ── */}
            <nav className="top-nav">
                <div className="top-nav-inner">
                    <button className="nav-brand" onClick={() => navigate('/')}>
                        <img src="/logo_no_text.png" alt="Bonjour Madame" className="nav-logo" />
                        <span className="nav-brand-name">Bonjour&nbsp;Madame</span>
                    </button>

                    <div className="top-nav-links">
                        <button
                            className={`top-nav-link ${pathname === roadmapPath ? 'active' : ''}`}
                            onClick={() => navigate(roadmapPath)}
                        >
                            {t.nav.overview}
                        </button>
                        {NAV_ITEMS.map(item => (
                            <button
                                key={item.segment}
                                className={`top-nav-link ${pathname.includes('/' + item.segment) ? 'active' : ''}`}
                                onClick={() => navigate(item.path)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <div className="top-nav-right">
                        <LevelIndicator activeLevel={activeLevel} />
                        <button
                            className={`top-nav-icon-btn ${isActive('/stats') ? 'active' : ''}`}
                            onClick={() => navigate('/stats')}
                            aria-label={t.nav.stats}
                            title={t.nav.stats}
                        >
                            <IconStats />
                        </button>
                        <button
                            className={`top-nav-icon-btn ${isActive('/settings') ? 'active' : ''}`}
                            onClick={() => navigate('/settings')}
                            aria-label="Settings"
                            title="Settings"
                        >
                            <IconSettings />
                        </button>
                        <button className="theme-toggle" onClick={toggle} aria-label="Toggle dark mode">
                            {dark ? <IconSun /> : <IconMoon />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* ── Mobile bottom tab bar ── */}
            <nav className="bottom-nav">
                <button
                    className={`bottom-nav-item ${pathname === roadmapPath ? 'active' : ''}`}
                    onClick={() => navigate(roadmapPath)}
                >
                    <span className="bottom-nav-icon"><IconOverview /></span>
                    <span className="bottom-nav-label">{t.nav.overview}</span>
                </button>
                {NAV_ITEMS.map(item => (
                    <button
                        key={item.segment}
                        className={`bottom-nav-item ${pathname.includes('/' + item.segment) ? 'active' : ''}`}
                        onClick={() => navigate(item.path)}
                    >
                        <span className="bottom-nav-icon">{item.icon}</span>
                        <span className="bottom-nav-label">{item.label}</span>
                    </button>
                ))}
                <button
                    className={`bottom-nav-item ${isActive('/stats') ? 'active' : ''}`}
                    onClick={() => navigate('/stats')}
                >
                    <span className="bottom-nav-icon"><IconStats /></span>
                    <span className="bottom-nav-label">{t.nav.stats}</span>
                </button>
                <button
                    className={`bottom-nav-item ${isActive('/settings') ? 'active' : ''}`}
                    onClick={() => navigate('/settings')}
                >
                    <span className="bottom-nav-icon"><IconSettings /></span>
                    <span className="bottom-nav-label">{t.settings.title}</span>
                </button>
            </nav>
        </>
    );
}
