export type ModuleType = 'vocabulary' | 'verbs' | 'lectures';
export type LectureType = 'grammar' | 'phrases' | 'reading';
export type StepType = Exclude<ModuleType, 'lectures'> | LectureType;

export interface CourseUnit {
    number: number;
    title: string;
}

interface CourseStepBase {
    id: string;
    title: string;
    contentId: string;
    path: string;
    unit?: number;
}

export type CourseStep = CourseStepBase & (
    | { module: 'vocabulary'; type: 'vocabulary' }
    | { module: 'verbs'; type: 'verbs' }
    | { module: 'lectures'; type: LectureType }
);

export type LectureStep = Extract<CourseStep, { module: 'lectures' }>;

export function isLectureStep(step: CourseStep): step is LectureStep {
    return step.module === 'lectures';
}

export interface Course {
    level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
    title: string;
    description: string;
    color: string;
    textColor: string;
    units?: CourseUnit[];
    steps: CourseStep[];
}
