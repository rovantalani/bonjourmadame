import type { SpeakingLesson } from '../../../types/speaking';

export const speakingLessons: SpeakingLesson[] = [
        { id: 'first-hello', title: 'A first hello', description: 'Say hello, introduce yourself, and meet someone new.', level: 'A1', unit: 1, phrases: [
            { text: 'Bonjour, je m’appelle Camille.', translation: 'Hello, my name is Camille.' },
            { text: 'J’habite à Paris.', translation: 'I live in Paris.' },
            { text: 'Je suis étudiant.', translation: 'I am a student.' },
            { text: 'Et vous, comment vous appelez-vous ?', translation: 'And you, what is your name?' },
        ] },
        { id: 'everyday-plans', title: 'An ordinary day', description: 'Give a little glimpse of your everyday life.', level: 'A1', unit: 2, phrases: [
            { text: 'Le matin, je prends un café.', translation: 'In the morning, I have a coffee.' },
            { text: 'Je travaille à neuf heures.', translation: 'I work at nine o’clock.' },
            { text: 'Je déjeune avec mes amis.', translation: 'I have lunch with my friends.' },
            { text: 'Le soir, je lis un livre.', translation: 'In the evening, I read a book.' },
        ] },
];
