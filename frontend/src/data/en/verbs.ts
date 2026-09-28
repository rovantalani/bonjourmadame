import type { TenseDef, HelperCard } from '../courseTypes';

const basic: TenseDef[] = [
    { key: 'present', label: 'Present Simple', quizzable: true },
    { key: 'passeCompose', label: 'Past Simple', quizzable: true },
];
const extended: TenseDef[] = [...basic,
    { key: 'imparfait', label: 'Present Continuous', quizzable: true },
    { key: 'futurSimple', label: 'Future (will)', quizzable: true },
];
export const TENSES_BY_LEVEL: Record<string, TenseDef[]> = {
    a1: basic, a2: extended, b1: extended, b2: extended, c1: extended, c2: extended,
};

export const HELPERS: HelperCard[] = [
    { id: 'to-be',   title: 'To Be',   translation: 'être',  icon: 'user' },
    { id: 'to-have', title: 'To Have', translation: 'avoir', icon: 'tag' },
    { id: 'to-do',   title: 'To Do',   translation: 'faire', icon: 'pen' },
    { id: 'to-go',   title: 'To Go',   translation: 'aller', icon: 'right' },
    { id: 'to-come', title: 'To Come', translation: 'venir', icon: 'left' },
];
