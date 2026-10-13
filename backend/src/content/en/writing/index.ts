import type { WritingLesson } from '../../../types/writing';
export const englishWritingLessons: WritingLesson[] = [{
    id: 'en-writing-preview', targetLanguage: 'en', level: 'A1', unit: 1,
    title: 'Quelques mots sur moi',
    prompt: 'Présentez-vous. Décrivez votre logement, votre travail et ce que vous aimez faire avec vos amis.',
    suggestedWords: { min: 30, max: 60 },
    learningObjectives: ['Se présenter au présent', 'Décrire ses activités quotidiennes'],
}];
