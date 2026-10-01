export type CourseLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface CourseUnit {
    number: number;
    title: string;
}

type CourseStepBase = {
    id: string;
    title: string;
    contentId: string;
    path: string;
    unit?: number;
};

export type CourseStep = CourseStepBase & (
    | { module: 'vocabulary'; type: 'vocabulary' }
    | { module: 'verbs'; type: 'verbs' }
    | { module: 'lectures'; type: 'grammar' | 'phrases' | 'reading' }
);

export interface Course {
    level: CourseLevel;
    title: string;
    description: string;
    color: string;
    textColor: string;
    units?: CourseUnit[];
    steps: CourseStep[];
}
