export interface VocabularyWord {
    id: number;
    english: string;
    french: string;
}

export type VocabularyData = Record<string, VocabularyWord[]>;
