import type { SpeakingLesson } from '../../../types/speaking';

export const speakingLessons: SpeakingLesson[] = [
        { id: 'first-hello', title: 'Une première rencontre', description: 'Saluez quelqu’un et présentez-vous en quelques mots.', level: 'A1', unit: 1, phrases: [
            { text: 'Hello, my name is Alex.', translation: 'Bonjour, je m’appelle Alex.' },
            { text: 'I live in London.', translation: 'J’habite à Londres.' },
            { text: 'I am a student.', translation: 'Je suis étudiant.' },
            { text: 'Nice to meet you.', translation: 'Enchanté de faire votre connaissance.' },
        ] },
        { id: 'everyday-plans', title: 'Une journée ordinaire', description: 'Parlez des petits moments de votre quotidien.', level: 'A1', unit: 3, phrases: [
            { text: 'I have coffee in the morning.', translation: 'Je prends un café le matin.' },
            { text: 'I start work at nine.', translation: 'Je commence le travail à neuf heures.' },
            { text: 'I have lunch with my friends.', translation: 'Je déjeune avec mes amis.' },
            { text: 'I read a book in the evening.', translation: 'Je lis un livre le soir.' },
        ] },
];
