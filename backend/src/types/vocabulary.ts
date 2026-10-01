import type { CoursePlacement } from './curriculum';

export interface VocabularyWord {
    id: number;
    english: string;
    french: string;
}

export type VocabularyData = Record<string, VocabularyWord[]>;

export interface VocabularyModule extends CoursePlacement {
    id: string;
    title: string;
    titleFR: string;
    description: string;
    descriptionFR: string;
    icon: string;
    color: string;
    wordCount: number;
}
