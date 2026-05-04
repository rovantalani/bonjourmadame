export interface CurriculumTopic {
    topicRef: string;
    title: string;
    type: 'vocabulary' | 'grammar' | 'reading';
}

export interface CurriculumChapter {
    chapter: number;
    title: string;
    topics: CurriculumTopic[];
}

export const curriculum: CurriculumChapter[] = [
    {
        chapter: 1,
        title: 'Foundations',
        topics: [
            { topicRef: 'helper-verbs-etre', title: 'Être', type: 'grammar' },
            { topicRef: 'helper-verbs-avoir', title: 'Avoir', type: 'grammar' },
        ],
    },
    {
        chapter: 2,
        title: 'Core Verbs',
        topics: [
            { topicRef: 'helper-verbs-faire', title: 'Faire', type: 'grammar' },
            { topicRef: 'helper-verbs-aller', title: 'Aller', type: 'grammar' },
            { topicRef: 'helper-verbs-venir', title: 'Venir', type: 'grammar' },
        ],
    },
    {
        chapter: 3,
        title: 'Advanced Daily Life',
        topics: [
            { topicRef: 'daily-life-advanced', title: 'Advanced Daily Life Vocabulary', type: 'vocabulary' },
        ],
    },
    {
        chapter: 4,
        title: 'Sherlock Holmes — Chapter 1',
        topics: [
            { topicRef: 'sherlock-holmes-ch1', title: 'Sherlock Holmes Ch. 1 Vocabulary', type: 'vocabulary' },
        ],
    },
    {
        chapter: 5,
        title: 'Emotions & Psychology',
        topics: [
            { topicRef: 'emotions-psychology', title: 'Emotions & Psychology Vocabulary', type: 'vocabulary' },
        ],
    },
    {
        chapter: 6,
        title: 'Travel & Culture',
        topics: [
            { topicRef: 'travel-culture', title: 'Travel & Culture Vocabulary', type: 'vocabulary' },
        ],
    },
    {
        chapter: 9,
        title: 'Sherlock Holmes — Chapter 2',
        topics: [
            { topicRef: 'sherlock-holmes-ch2', title: 'Sherlock Holmes Ch. 2 Vocabulary', type: 'vocabulary' },
        ],
    },
];
