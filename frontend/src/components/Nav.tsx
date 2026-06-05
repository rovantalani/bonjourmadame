import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useT } from '../utils/i18n';
import { useCourses } from '../utils/modeHelpers';
import { getActiveCourse, setActiveCourse } from '../utils/courseProgress';
import { loadStreak, loadDailyProgress, loadDailyGoal } from '../utils/progress';
import { useAuth } from '../context/AuthContext';
import {
    BookIcon, BookOpenIcon, PenIcon, CompassIcon,
    BarChartIcon, SettingsIcon, SunIcon, MoonIcon, FlameIcon,
} from './icons';
import './Nav.css';

function useActiveItem() {
    const { pathname } = useLocation();
    return (path: string) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };
}

/** Flame + streak count. Hidden at 0 so first-time users see a clean nav. */
function StreakPill() {
    const { user } = useAuth();
    const [streak, setStreak] = useState(0);

    useEffect(() => {
        if (!user) {
            setStreak(loadStreak().currentStreak);
        }
        // For authenticated users, streak comes from API — Home.tsx already
        // owns that fetch; here we mirror the localStorage copy which is kept
        // up to date by recordStreak() after every quiz.
        else {
            setStreak(loadStreak().currentStreak);
        }
    }, [user]);

    if (streak === 0) return null;

    return (
        <div className="nav-streak" title={`${streak}-day streak`}>
            <FlameIcon size={14} />
            <span>{streak}</span>
        </div>
    );
}

/**
 * Circular progress ring showing today's words vs. daily goal.
 * r=9 → circumference≈56.5px. Percentage text sits inside the SVG.
 */
function DailyRing() {
    const [pct, setPct] = useState(0);

    useEffect(() => {
        const goal    = loadDailyGoal();
        const studied = loadDailyProgress().wordsStudied;
        setPct(Math.min(100, Math.round((studied / goal) * 100)));
    }, []);

    const r    = 9;
    const circ = 2 * Math.PI * r;
    const offset = circ * (1 - pct / 100);

    return (
        <div className="nav-ring" title={`${pct}% of daily goal`} aria-label={`Daily goal: ${pct}%`}>
            <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
                {/* Track */}
                <circle cx="15" cy="15" r={r} fill="none"
                    stroke="var(--border)" strokeWidth="2.5" />
                {/* Fill */}
                <circle cx="15" cy="15" r={r} fill="none"
                    stroke="var(--accent)" strokeWidth="2.5"
                    strokeDasharray={circ}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform="rotate(-90 15 15)"
                    style={{ transition: 'stroke-dashoffset 0.4s var(--ease)' }}
                />
                <text x="15" y="15"
                    textAnchor="middle" dominantBaseline="central"
                    fontSize="7" fontWeight="700"
                    fill="var(--text-1)"
                    fontFamily="var(--font-ui)"
                >
                    {pct}%
                </text>
            </svg>
        </div>
    );
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
                        <StreakPill />
                        <DailyRing />
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
