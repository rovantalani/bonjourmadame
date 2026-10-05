import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLearningNavigate, useLearningLocation } from '../hooks/useLearningNavigation';
import { useLearning } from '../context/LearningContext';
import { useTheme } from '../hooks/useTheme';
import { useT } from '../utils/i18n';
import { getActiveCourse, setActiveCourse } from '../utils/courseProgress';
import { learningPath } from '../utils/learningRoutes';
import { BookIcon, BookOpenIcon, PenIcon, CompassIcon, SettingsIcon, SunIcon, MoonIcon, MessageIcon } from './icons';
import './Nav.css';

export default function Nav() {
    const navigate = useLearningNavigate();
    const { pathname, search } = useLearningLocation();
    const { language, courses } = useLearning();
    const { dark, toggle } = useTheme();
    const t = useT();
    const drawer = useRef<HTMLDialogElement>(null);
    const menuButton = useRef<HTMLButtonElement>(null);
    const fr = language === 'en';
    const routeLevel = pathname.match(/^\/courses\/([^/]+)/)?.[1];
    const course = courses.find(item => item.level.toLowerCase() === routeLevel)
        ?? courses.find(item => item.level === getActiveCourse()) ?? courses[0];
    const base = `/courses/${course?.level.toLowerCase() ?? 'a1'}`;
    const filter = new URLSearchParams(search).get('type');
    const showUnits = new URLSearchParams(search).get('units') === 'all';
    useEffect(() => { drawer.current?.close(); }, [pathname, search]);

    const entry = (path: string, label: string, Icon: typeof BookIcon, active: boolean, nested = false) => (
        <Link to={learningPath(language, path)} className={`sidebar-link${active ? ' is-active' : ''}${nested ? ' sidebar-link--nested' : ''}`}
            aria-current={active ? 'page' : undefined} onClick={() => drawer.current?.close()}>
            <Icon size={18} aria-hidden="true" /><span>{label}</span>
        </Link>
    );
    const contents = () => <>
        <Link to={learningPath(language, base)} className="sidebar-brand" onClick={() => drawer.current?.close()}>
            <img src="/logo_no_text.png" alt="" /><span>Bonjour<br /><strong>Madame</strong><span className="sidebar-brand-dot">.</span></span>
        </Link>
        <nav className="sidebar-navigation" aria-label={fr ? 'Navigation du cours' : 'Course navigation'}>
            <p className="sidebar-section-label">{fr ? 'VOTRE PARCOURS' : 'YOUR LEARNING PATH'}</p>
            {entry(base, t.nav.overview, CompassIcon, pathname === base && !showUnits)}
            {entry(`${base}?units=all`, fr ? 'Unités' : 'Units', BookOpenIcon, pathname === base && showUnits)}
            <div className="sidebar-divider" />
            <div className="sidebar-lessons">
                {entry(`${base}/lectures`, fr ? 'Leçons' : 'Lessons', BookOpenIcon,
                    pathname === `${base}/lectures` && !['grammar', 'phrases', 'reading'].includes(filter ?? ''))}
                <ul className="sidebar-submenu" aria-label={fr ? 'Catégories de leçons' : 'Lesson categories'}>
                    <li>{entry(`${base}/lectures?type=grammar`, t.roadmap.types.grammar, PenIcon,
                        pathname.includes('/lectures/grammar') || pathname === `${base}/lectures` && filter === 'grammar', true)}</li>
                    <li>{entry(`${base}/lectures?type=phrases`, t.roadmap.types.phrases, MessageIcon,
                        pathname.includes('/lectures/phrases') || pathname === `${base}/lectures` && filter === 'phrases', true)}</li>
                    <li>{entry(`${base}/lectures?type=reading`, t.roadmap.types.reading, BookOpenIcon,
                        pathname.includes('/lectures/reading') || pathname === `${base}/lectures` && filter === 'reading', true)}</li>
                </ul>
            </div>
            {entry(`${base}/vocabulary`, t.nav.vocabulary, BookIcon, pathname.includes('/vocabulary'))}
            {entry(`${base}/verbs`, t.nav.verbs, PenIcon, pathname.includes('/verbs'))}
            {entry(`${base}/exams`, fr ? 'Examens' : 'Exams', BookOpenIcon, pathname.includes('/exams'))}
        </nav>
        <footer className="sidebar-footer">
            <div className="sidebar-course">
                <label>{fr ? 'VOTRE COURS D’ANGLAIS' : 'YOUR FRENCH COURSE'}
                    <select aria-label={fr ? 'Changer de niveau' : 'Change course level'} value={course?.level ?? 'A1'} onChange={event => {
                        setActiveCourse(event.target.value);
                        navigate(`/courses/${event.target.value.toLowerCase()}`);
                        drawer.current?.close();
                    }}>{courses.map(item => <option key={item.level} value={item.level}>{item.level} — {item.title}</option>)}</select>
                </label>
            </div>
            {entry('/settings', t.settings.title, SettingsIcon, pathname === '/settings')}
            <button type="button" className="sidebar-link" onClick={toggle}>
                {dark ? <SunIcon size={18} /> : <MoonIcon size={18} />}<span>{dark ? (fr ? 'Mode clair' : 'Light mode') : (fr ? 'Mode sombre' : 'Dark mode')}</span>
            </button>
            <span className="sidebar-signoff">Bonjour Madame <span>·</span> {fr ? 'À votre rythme.' : 'At your own pace.'}</span>
        </footer>
    </>;

    return <>
        <a className="sidebar-skip" href="#learning-content">{fr ? 'Aller au contenu' : 'Skip to content'}</a>
        <aside className="course-sidebar">{contents()}</aside>
        <header className="sidebar-mobile-header"><Link to={learningPath(language, base)}>Bonjour Madame<span>.</span></Link>
            <button ref={menuButton} type="button" aria-haspopup="dialog" onClick={() => drawer.current?.showModal()}>{fr ? 'Menu du cours' : 'Course menu'} <span aria-hidden="true">☰</span></button>
        </header>
        <dialog ref={drawer} className="sidebar-drawer" aria-label={fr ? 'Menu du cours' : 'Course menu'} onClose={() => menuButton.current?.focus()} onClick={event => { if (event.target === event.currentTarget) drawer.current?.close(); }}>
            <div className="sidebar-drawer-content"><button type="button" className="sidebar-close" onClick={() => drawer.current?.close()} aria-label={fr ? 'Fermer le menu' : 'Close menu'}>×</button>{contents()}</div>
        </dialog>
    </>;
}
