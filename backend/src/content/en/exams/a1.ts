import type { UnitExam } from '../../../types/exams';

// Sample exams for testing the exam flow. Teachers can replace or extend these.
export const unitExams: UnitExam[] = [
    {
        "level": "A1",
        "unit": 3,
        "isDemo": true,
        "passPercent": 80,
        "questions": [
            {
                "id": "food",
                "sourceStepId": "a1en-food",
                "prompt": "Écrivez « eau » en anglais.",
                "answers": [
                    "water"
                ],
                "explanation": "Water signifie eau."
            },
            {
                "id": "transport",
                "sourceStepId": "a1en-transport",
                "prompt": "Écrivez « bus » en anglais.",
                "answers": [
                    "bus"
                ],
                "explanation": "Bus s’écrit de la même façon en anglais."
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
                "id": "reading-city",
                "sourceStepId": "a1en-reading-city",
                "context": "My name is Lucy. I live in a city called Greenford. It is not a big city, but I love it. There is a park near my house.",
                "prompt": "Dans quelle ville Lucy habite-t-elle ?",
                "answers": [
                    "Greenford"
                ],
                "explanation": "Lucy dit : I live in a city called Greenford."
            },
            {
                "id": "reading-school",
                "sourceStepId": "a1en-reading-school",
                "context": "My name is Tom. Today is my first day at school. I am seven years old. My teacher is very nice. Her name is Miss Green.",
                "prompt": "Quel est le nom de l’enseignante de Tom ?",
                "answers": [
                    "Miss Green"
                ],
                "explanation": "Tom dit : Her name is Miss Green."
            }
        ]
    }
];
