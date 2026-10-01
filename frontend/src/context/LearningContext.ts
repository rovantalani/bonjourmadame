import { createContext, useContext } from 'react';
import type { Course, TenseDef, HelperCard } from '../data/courseTypes';
import type { TargetLanguage } from '../utils/settings';

export interface Curriculum {
    courses: Course[];
    tenses: Record<string, TenseDef[]>;
    helpers: HelperCard[];
}
export const LearningContext = createContext<(Curriculum & { language: TargetLanguage }) | null>(null);
export function useLearning() {
    const value = useContext(LearningContext);
    if (!value) throw new Error('Learning content requires a selected curriculum');
    return value;
}
