export type ModuleType = 'vocabulary' | 'verbs' | 'lectures' | 'exams';
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
    | { module: 'exams'; type: 'exams'; available: boolean; isDemo: boolean }
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

export interface ConjugationRow {
    sujet: string;
    present: string;
    passeCompose: string;
    imparfait: string;
    futurSimple: string;
    conditionnelPresent?: string;
    subjonctifPresent?: string;
    plusQueParfait?: string;
    futurAnterieur?: string;
    conditionnelPasse?: string;
    subjonctifPasse?: string;
    passeSimple?: string;
    subjonctifImparfait?: string;
    subjonctifPlusQueParfait?: string;
    passeAnterieur?: string;
}

export interface TenseDef {
    key: keyof ConjugationRow;
    label: string;
    quizzable: boolean;
}

export interface HelperCard {
    id: string; title: string; translation: string;
    icon: 'user' | 'tag' | 'pen' | 'right' | 'left';
}
