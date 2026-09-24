import type { CourseStep, LectureType } from '../data/courses';
import { useT } from '../utils/i18n';
import { BookOpenIcon, PenIcon, MessageIcon } from './icons';
import './ModuleTags.css';

const SUBTYPE_ICONS = {
    reading: BookOpenIcon,
    grammar: PenIcon,
    phrases: MessageIcon,
} satisfies Record<LectureType, typeof BookOpenIcon>;

export default function ModuleTags({ step, showModule = true }: { step: CourseStep; showModule?: boolean }) {
    const t = useT();
    const SubtypeIcon = step.module === 'lectures' ? SUBTYPE_ICONS[step.type] : null;
    return (
        <span className="module-tags">
            {showModule && (
                <span className={`module-tag module-tag--${step.module}`}>
                    {step.module === 'lectures' ? t.roadmap.lecture : t.roadmap.types[step.module]}
                </span>
            )}
            {step.module === 'lectures' && (
                <span className="module-subtype">
                    {SubtypeIcon && <SubtypeIcon size={13} aria-hidden="true" />}
                    {t.roadmap.types[step.type]}
                </span>
            )}
        </span>
    );
}
