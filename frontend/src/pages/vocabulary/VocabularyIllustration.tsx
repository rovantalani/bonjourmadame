import { LessonIcon } from '../../components/icons';

export default function VocabularyIllustration({ icon }: { icon: string }) {
    let drawing;
    if (['🌍', '🌐', '🗼'].includes(icon)) {
        drawing = <><circle cx="16" cy="16" r="12"/><ellipse cx="16" cy="16" rx="5" ry="12"/><path d="M4 16h24M7 9h18M7 23h18"/></>;
    } else if (['🏠', '🏘️', '🏙️', '🌆'].includes(icon)) {
        drawing = <><path d="M4 15 16 5l12 10M7 13v15h18V13M13 28v-9h6v9"/><path d="M12 12h.01M22 7V4"/></>;
    } else if (['🍷', '🥗', '🥐'].includes(icon)) {
        drawing = <><path d="M6 13h17v8a7 7 0 0 1-7 7h-3a7 7 0 0 1-7-7ZM23 14h2a4 4 0 0 1 0 8h-2M11 8c-3-3 3-3 0-6M18 8c-3-3 3-3 0-6"/></>;
    } else if (['✈️', '🚌', '💼', '🛍️'].includes(icon)) {
        drawing = <><rect x="5" y="10" width="22" height="18" rx="4"/><path d="M12 10V7a4 4 0 0 1 8 0v3M11 11v16M21 11v16M13 30h6"/></>;
    } else if (['🌿', '🍂', '🐾', '🏥', '🩺'].includes(icon)) {
        drawing = <><path d="M16 28V16M16 20C6 20 4 14 5 8c8 0 11 4 11 12ZM16 16c0-8 4-12 11-12 1 7-2 12-11 12M10 28h12"/></>;
    } else if (['👋', '🗣️', '👨‍👩‍👧‍👦', '🤝'].includes(icon)) {
        drawing = <><path d="M7 5h18a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H13l-7 5v-6a4 4 0 0 1-3-4V9a4 4 0 0 1 4-4Z"/><path d="M10 13h.01M22 13h.01M12 17q4 3 8 0"/></>;
    }
    return drawing ? <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{drawing}</svg> : <LessonIcon emoji={icon} size={34} aria-hidden="true" />;
}
