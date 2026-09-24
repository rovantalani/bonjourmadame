export interface Phrase {
    id: number;
    french: string;
    english: string;
    note?: string;
}

export interface PhraseCategory {
    id: string;
    title: string;
    titleFR: string;
    description: string;
    descriptionFR: string;
    icon: string;
    color: string;
    phrases: Phrase[];
}
