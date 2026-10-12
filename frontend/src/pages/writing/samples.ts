import type { WritingCorrection, WritingLesson, WritingReview } from '../../types/writing';

function sample(language: 'fr' | 'en'): { lesson: WritingLesson; review: WritingReview } {
    const french = language === 'fr';
    const originalText = french
        ? 'Bonjour ! Je suis 25 ans. Je habite à Lyon. Je travaille dans café. Je aime le café et la musique. Le dimanche, je marche avec avec mes amis. Mon quartier est bon.'
        : 'Hello! I has a small apartment in London. I work in café. On Sundays, I walk with with my friends. We cook dinner and listen to music. My neighbourhood is good.';
    const corrections: WritingCorrection[] = [];
    // Explicit fixture anchors only; this is not a production matching algorithm.
    const add = (kind: WritingCorrection['kind'], original: string, replacement: string, category: string, explanation: string, anchor = original) => {
        const start = originalText.indexOf(anchor);
        if (start < 0) throw new Error(`Missing fixture anchor: ${anchor}`);
        corrections.push({ id: `sample-${corrections.length + 1}`, kind, start, end: start + original.length, original, replacement, category, explanation });
    };
    if (french) {
        add('replacement', 'suis', 'ai', 'Verb', 'French uses avoir to express age: « J’ai 25 ans ».');
        add('replacement', 'Je habite', 'J’habite', 'Elision', 'Je becomes j’ before a vowel sound or a silent h.');
        add('insertion', '', 'un ', 'Article', 'Add un before café, a singular countable noun.', 'café');
        add('replacement', 'Je aime', 'J’aime', 'Elision', 'Use j’ before aime, which begins with a vowel sound.');
        add('deletion', 'avec ', '', 'Repeated word', 'Avec appears twice. Keep it only once.');
        add('suggestion', 'bon', 'agréable', 'Vocabulary · optional', 'Agréable is a more specific way to describe a pleasant neighbourhood. This is an optional vocabulary improvement.');
    } else {
        add('replacement', 'has', 'have', 'Verbe', 'Avec I, utilisez have. Has s’emploie avec he, she ou it.');
        add('insertion', '', 'a ', 'Article', 'Ajoutez a devant café, un nom dénombrable singulier.', 'café');
        add('deletion', 'with ', '', 'Répétition', 'With est répété. Gardez-le une seule fois.');
        add('suggestion', 'good', 'pleasant', 'Vocabulaire · facultatif', 'Pleasant précise que le quartier est agréable. Good reste possible.');
    }
    const lesson: WritingLesson = {
        id: `${language}-writing-preview`, targetLanguage: language, level: 'A1', unit: 1,
        title: french ? 'A little about me' : 'Quelques mots sur moi',
        prompt: french ? 'Introduce yourself. Describe where you live, your work, and what you enjoy doing with friends.' : 'Présentez-vous. Décrivez votre logement, votre travail et ce que vous aimez faire avec vos amis.',
        suggestedWords: { min: 30, max: 60 },
        learningObjectives: french ? ['Introduce yourself in the present tense', 'Describe everyday activities'] : ['Se présenter au présent', 'Décrire ses activités quotidiennes'],
    };
    return { lesson, review: { lessonId: lesson.id, originalText, feedbackLanguage: french ? 'en' : 'fr', corrections,
        rating: 4,
        unplacedCorrections: [],
        overallNotes: french ? [
            'Avoir expresses age, and je becomes j’ before a vowel sound or silent h.',
            'Un was added before café; the repeated avec was removed.',
            'Agréable describes the neighbourhood more precisely. This change is optional.',
        ] : [
            'Avec I, le verbe prend la forme have, et non has.',
            'L’article a a été ajouté devant café ; le deuxième with était inutile.',
            'Pleasant décrit le quartier plus précisément. Cette suggestion reste facultative.',
        ],
    } };
}
export const writingSamples = { fr: sample('fr'), en: sample('en') };

/** The overview and detail route resolve the same language-owned exercise catalog. */
export const writingExercises = { fr: [writingSamples.fr], en: [writingSamples.en] };
