import type { UnitExam } from '../../../types/exams';

// Sample exams for testing the exam flow. Teachers can replace or extend these.
export const unitExams: UnitExam[] = [
    {
        "level": "A1",
        "unit": 1,
        "isDemo": true,
        "passPercent": 80,
        "questions": [
            {
                "id": "greeting",
                "sourceStepId": "a1-greetings",
                "prompt": "Write “hello” in French.",
                "answers": [
                    "bonjour"
                ],
                "explanation": "Bonjour means hello."
            },
            {
                "id": "article",
                "sourceStepId": "a1-articles",
                "prompt": "Choose the article: ___ collègue (a female colleague).",
                "options": [
                    "un",
                    "une",
                    "des"
                ],
                "answers": [
                    "une"
                ],
                "explanation": "Une is the singular feminine indefinite article."
            },
            {
                "id": "intro",
                "sourceStepId": "a1-intro-yourself",
                "prompt": "Write “My name is Marie” in French.",
                "answers": [
                    "Je m’appelle Marie"
                ],
                "explanation": "Je m’appelle is used to introduce your name."
            },
            {
                "id": "nationality",
                "sourceStepId": "a1-nationalities",
                "prompt": "Choose the feminine form of “French”.",
                "options": [
                    "français",
                    "française",
                    "France"
                ],
                "answers": [
                    "française"
                ],
                "explanation": "Française is the feminine nationality adjective."
            },
            {
                "id": "reading",
                "sourceStepId": "a1-reading-bonjour-je-mappelle-marie",
                "context": "Bonjour ! Je m’appelle Marie. J’ai vingt-six ans et je suis française. J’habite à Toulouse, dans le sud de la France.",
                "prompt": "In which city does Marie live?",
                "answers": [
                    "Toulouse"
                ],
                "explanation": "Marie says: J’habite à Toulouse."
            }
        ]
    },
    {
        "level": "A1",
        "unit": 2,
        "isDemo": true,
        "passPercent": 80,
        "questions": [
            {
                "id": "number",
                "sourceStepId": "a1-numbers",
                "prompt": "Write the number seven in French.",
                "answers": [
                    "sept"
                ],
                "explanation": "Sept is seven."
            },
            {
                "id": "etre",
                "sourceStepId": "a1-etre",
                "prompt": "Complete with être: Je ___ au collège.",
                "answers": [
                    "suis"
                ],
                "explanation": "The present form of être with je is suis."
            },
            {
                "id": "avoir",
                "sourceStepId": "a1-avoir",
                "prompt": "Complete with avoir: Il ___ onze ans.",
                "answers": [
                    "a"
                ],
                "explanation": "French uses avoir for age: il a onze ans."
            },
            {
                "id": "negation",
                "sourceStepId": "a1-negation",
                "prompt": "Choose the negative sentence.",
                "options": [
                    "Je ne travaille pas.",
                    "Je pas travaille.",
                    "Je travaille ne."
                ],
                "answers": [
                    "Je ne travaille pas."
                ],
                "explanation": "Ne and pas surround the conjugated verb."
            },
            {
                "id": "reading",
                "sourceStepId": "a1-journee-typique",
                "context": "Je m’appelle Lucas. J’ai onze ans et je vais au collège. Ma journée typique commence à sept heures.",
                "prompt": "How old is Lucas? Write the number.",
                "answers": [
                    "11",
                    "onze"
                ],
                "explanation": "Lucas says: J’ai onze ans."
            }
        ]
    }
];
