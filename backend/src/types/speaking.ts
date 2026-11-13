export interface SpeakingLesson {
    id: string;
    title: string;
    description: string;
    level: string;
    unit: number;
    taskRecordingSeconds?: number;
    listeningQuestions?: { prompt: string; answers: string[] }[];
    phrases: { text: string; translation: string }[];
}
