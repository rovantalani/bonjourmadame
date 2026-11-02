import type { CourseLevel } from './courses';
export interface WritingLesson {
    sources?: { title: string; text: string }[];
    id: string; targetLanguage: 'fr' | 'en'; level: CourseLevel; unit: number;
    title: string; prompt: string; suggestedWords: { min: number; max: number }; learningObjectives: string[];
}
