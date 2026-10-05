import type { UnitExam } from '../../../types/exams';

// Sample level exam. Teachers can replace it with a complete assessment.
export const finalExamsA1: UnitExam[] = [
    {
        "level": "A1",
        "unit": "final",
        "isDemo": true,
        "passPercent": 80,
        "questions": [
            {
                "id": "reading",
                "sourceStepId": "a1-reading-bonjour-je-mappelle-marie",
                "context": "Bonjour ! Je m’appelle Marie. J’ai vingt-six ans et je suis française. J’habite à Toulouse, dans le sud de la France.",
                "prompt": "In which city does Marie live?",
                "answers": [
                    "Toulouse"
                ],
                "explanation": "Marie says: J’habite à Toulouse."
            },
            {
                "id": "etre",
                "sourceStepId": "a1-etre",
                "prompt": "Complete with être: Nous ___ français.",
                "answers": [
                    "sommes"
                ],
                "explanation": "The present form of être with nous is sommes."
            },
            {
                "id": "place",
                "sourceStepId": "a1-prepositions",
                "prompt": "Choose the word for “on”: Le livre est ___ la table.",
                "options": [
                    "sur",
                    "sous",
                    "dans"
                ],
                "answers": [
                    "sur"
                ],
                "explanation": "Sur means on; sous means under; dans means in."
            },
            {
                "id": "cafe",
                "sourceStepId": "a1-cafe-phrases",
                "prompt": "Choose the polite request at a café.",
                "options": [
                    "Un café, s’il vous plaît.",
                    "Un café, hier.",
                    "Un café, jamais."
                ],
                "answers": [
                    "Un café, s’il vous plaît."
                ],
                "explanation": "S’il vous plaît means please."
            },
            {
                "id": "future",
                "sourceStepId": "a1-futur-proche",
                "prompt": "Complete the near future: Je ___ regarder un film ce soir.",
                "answers": [
                    "vais"
                ],
                "explanation": "The near future uses aller in the present plus an infinitive: je vais regarder."
            },
            {
                "id": "transport",
                "sourceStepId": "a1-transport",
                "prompt": "Write “train station” in French, including the definite article.",
                "answers": [
                    "la gare"
                ],
                "explanation": "La gare is the train station."
            },
            {
                "id": "season",
                "sourceStepId": "a1-seasons",
                "prompt": "Write “summer” in French.",
                "answers": [
                    "été",
                    "l’été"
                ],
                "explanation": "Été means summer."
            }
        ]
    }
];
