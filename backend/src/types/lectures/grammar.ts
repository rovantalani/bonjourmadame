export interface GrammarExample {
    french: string;
    english: string;
    note?: string;
}

export interface GrammarSection {
    title: string;
    explanation: string;
    examples: GrammarExample[];
}

export interface GrammarExercise {
    sentence: string;
    answer: string;
    hint?: string;
}

export interface GrammarLesson {
    id: string;
    title: string;
    level: string;
    description: string;
    icon: string;
    color: string;
    sections: GrammarSection[];
    exercises?: GrammarExercise[];
}
