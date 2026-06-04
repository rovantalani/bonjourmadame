import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useT } from '../utils/i18n';
import { useCourses } from '../utils/modeHelpers';
import { getActiveCourse, setActiveCourse } from '../utils/courseProgress';
import {
    BookIcon, BookOpenIcon, PenIcon, CompassIcon,
    BarChartIcon, SettingsIcon, SunIcon, MoonIcon,
} from './icons';
import './Nav.css';

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
        { path: `/courses/${level}/vocabulary`, segment: 'vocabulary', label: t.nav.vocabulary, Icon: BookIcon },
        { path: `/courses/${level}/verbs`,      segment: 'verbs',      label: t.nav.verbs,      Icon: PenIcon },
        { path: `/courses/${level}/lectures`,   segment: 'lectures',   label: t.nav.lectures,   Icon: BookOpenIcon },
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
                            className={`top-nav-link ${isActive('/stats') ? 'active' : ''}`}
                            onClick={() => navigate('/stats')}
                        >
                            {t.nav.stats}
                        </button>
                        <button
                            className={`top-nav-link top-nav-icon-btn ${isActive('/settings') ? 'active' : ''}`}
                            onClick={() => navigate('/settings')}
                            aria-label="Settings"
                        >
                            <SettingsIcon size={18} />
                        </button>
                        <button className="theme-toggle" onClick={toggle} aria-label="Toggle dark mode">
                            {dark ? <SunIcon size={17} /> : <MoonIcon size={17} />}
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
                    <span className="bottom-nav-icon"><CompassIcon size={22} /></span>
                    <span className="bottom-nav-label">{t.nav.overview}</span>
                </button>
                {NAV_ITEMS.map(item => (
                    <button
                        key={item.segment}
                        className={`bottom-nav-item ${pathname.includes('/' + item.segment) ? 'active' : ''}`}
                        onClick={() => navigate(item.path)}
                    >
                        <span className="bottom-nav-icon"><item.Icon size={22} /></span>
                        <span className="bottom-nav-label">{item.label}</span>
                    </button>
                ))}
                <button
                    className={`bottom-nav-item ${isActive('/stats') ? 'active' : ''}`}
                    onClick={() => navigate('/stats')}
                >
                    <span className="bottom-nav-icon"><BarChartIcon size={22} /></span>
                    <span className="bottom-nav-label">{t.nav.stats}</span>
                </button>
                <button
                    className={`bottom-nav-item ${isActive('/settings') ? 'active' : ''}`}
                    onClick={() => navigate('/settings')}
                >
                    <span className="bottom-nav-icon"><SettingsIcon size={22} /></span>
                    <span className="bottom-nav-label">{t.settings.title}</span>
                </button>
            </nav>
        </>
    );
}
