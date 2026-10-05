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
                "id": "greeting",
                "sourceStepId": "a1en-greetings",
                "prompt": "Écrivez « bonjour » en anglais.",
                "answers": [
                    "hello"
                ],
                "explanation": "Hello signifie bonjour."
            },
            {
                "id": "article",
                "sourceStepId": "a1en-articles",
                "prompt": "Choisissez le bon article : ___ apple.",
                "options": [
                    "a",
                    "an",
                    "the a"
                ],
                "answers": [
                    "an"
                ],
                "explanation": "On utilise an devant un son voyelle : an apple."
            },
            {
                "id": "verb",
                "sourceStepId": "a1en-tobe",
                "prompt": "Complétez avec to be : She ___ a teacher.",
                "answers": [
                    "is"
                ],
                "explanation": "Au présent, to be devient is avec she."
            },
            {
                "id": "cafe",
                "sourceStepId": "a1en-phrases-cafe",
                "prompt": "Choisissez la demande polie au café.",
                "options": [
                    "A coffee, please.",
                    "A coffee, yesterday.",
                    "A coffee, never."
                ],
                "answers": [
                    "A coffee, please."
                ],
                "explanation": "Please signifie s’il vous plaît."
            },
            {
                "id": "reading",
                "sourceStepId": "a1en-reading-city",
                "context": "My name is Lucy. I live in a city called Greenford. It is not a big city, but I love it. There is a park near my house.",
                "prompt": "Dans quelle ville Lucy habite-t-elle ?",
                "answers": [
                    "Greenford"
                ],
                "explanation": "Lucy dit : I live in a city called Greenford."
            }
        ]
    }
];
