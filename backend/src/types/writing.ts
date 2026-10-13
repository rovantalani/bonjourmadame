import type { CourseLevel } from './courses';
export interface WritingLesson {
    id: string; targetLanguage: 'fr' | 'en'; level: CourseLevel; unit: number;
    title: string; prompt: string; suggestedWords: { min: number; max: number }; learningObjectives: string[];
}
