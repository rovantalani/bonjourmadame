export interface SpeakingLesson {
    id: string;
    title: string;
    description: string;
    level: string;
    unit: number;
    sources?: { title: string; text: string }[];
    pronunciationPractice?: string[];
    taskRecordingSeconds?: number;
    listeningQuestions?: { prompt: string; answers: string[]; options?: string[] }[];
    phrases: { text: string; translation: string }[];
}
