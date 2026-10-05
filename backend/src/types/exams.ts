import type { CourseLevel } from './courses';

export interface ExamQuestion {
    id: string;
    sourceStepId: string;
    prompt: string;
    context?: string;
    options?: string[];
    answers: string[];
    explanation: string;
}

export interface UnitExam {
    level: CourseLevel;
    unit: number;
    isDemo: boolean;
    passPercent: number;
    questions: ExamQuestion[];
}
