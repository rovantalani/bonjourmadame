export interface SpeakingLesson {
    id: string;
    title: string;
    description: string;
    level: string;
    unit: number;
    phrases: { text: string; translation: string }[];
}
