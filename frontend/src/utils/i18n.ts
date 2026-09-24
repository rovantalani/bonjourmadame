import { useState, useEffect } from 'react';
import { loadLearningMode, type LearningMode } from './settings';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Translations {
    progressFlower: {
        'not-started': string; visited: string; complete: string;
        markComplete: string; undo: string;
    };
    nav: {
        home: string; courses: string; vocabulary: string;
        verbs: string; lectures: string; overview: string;
    };
    verbs: {
        title: string; subtitle: string; empty: string;
    };
    lectures: {
        title: string; subtitle: string; empty: string; all: string;
    };
    home: {
        subtitle: string;
        reviewQueue: string;
        wordsDue: (n: number) => string;
        wordsReady: (n: number) => string;
        courseComplete: string;
        sections: {
            vocabulary: { title: string; description: string; meta: string };
            verbs:      { title: string; description: string; meta: string };
            lectures:   { title: string; description: string; meta: string };
        };
    };
    vocabulary: {
        title: string; subtitle: string;
        searchPlaceholder: string;
        words: (n: number) => string;
        levelGroups: { A1: string; A2B1: string; B2C1: string; C1C2: string };
        quiz: string; read: string; loading: string;
    };
    courses: {
        title: string; subtitle: string;
        active: string;
        steps: (done: number, total: number) => string;
        continue: string; resume: string; start: string;
    };
    roadmap: {
        back: string; setActive: string;
        steps: (done: number, total: number) => string;
        notFound: string;
        continueLabel: string;
        resumeBtn: string;
        allDone: string;
        types: { vocabulary: string; grammar: string; verbs: string; phrases: string; reading: string };
    };
    quiz: {
        loadError: string;
        loading: string;
        backToVocabulary: string;
        complete: string; score: string; total: string;
        accuracy: string; tryAgain: string;
        exit: string;
        wordCounter: (i: number, n: number) => string;
        phraseCounter: (i: number, n: number) => string;
        reviewCounter: (i: number, n: number) => string;
        shuffled: string; inOrder: string;
        shuffledTitle: string; inOrderTitle: string;
        reviewPrefix: string;
        translateToFrench: string; translateToEnglish: string;
        placeholder: string; skip: string; submit: string;
        nextWord: string; next: string;
        correct: string; toReview: string; wrong: string;
        backToPhrases: string;
    };
    reviewQueue: {
        title: string; loading: string;
        noDue: string; noQueue: string;
        waiting: (n: number) => string;
        startReview: (n: number) => string;
        goToVocabulary: string;
        complete: string; reviewRemaining: string; home: string;
    };
    settings: {
        title: string;
        preferences: string;
        learningLanguage: string; learningLanguageHint: string;
        learnFrench: string; learnEnglish: string;
        account: string; email: string;
        password: string; changePassword: string;
        passwordUpdated: string; cancelBtn: string; updateBtn: string;
        currentPw: string; newPw: string; confirmPw: string;
        session: string; logOut: string;
        deleteAccount: string; deleteAccountHint: string;
        confirmDeleteMsg: string; yesDelete: string;
        saving: string; deleting: string;
        logIn: string;
    };
    guest: { banner: string; dismiss: string };
    helperVerbs: {
        pageSubtitle: string;
        helperSection: string;
        helperNote: string;
        conjugationSection: string;
        conjugationNote: string;
        verbCount: (n: number) => string;
        etre:  { description: string };
        avoir: { description: string };
        faire: { description: string };
        aller: { description: string };
        venir: { description: string };
        regularVerbs:           { title: string; description: string };
        irregularVerbs:         { title: string; description: string };
        advancedIrregularVerbs: { title: string; description: string };
    };
    grammarLesson: {
        back: string;
        exercises: string;
        checkAnswers: string;
        tryAgain: string;
        hint: string;
        notFound: string;
    };
    verbConjugation: {
        back: string;
        notFound: string;
        columns: readonly [string, string, string, string];
    };
    verbGroupList: {
        back: string;
        learn: string;
        quiz: string;
        notFound: string;
    };
    phraseDetail: {
        back: string;
        startQuiz: string;
        notFound: string;
    };
}

// ─── English ──────────────────────────────────────────────────────────────────

const EN: Translations = {
    progressFlower: { 'not-started': 'Not started', visited: 'In progress', complete: 'Completed', markComplete: 'Mark complete', undo: 'Mark as in progress' },
    nav: {
        home: 'Home', courses: 'Courses', vocabulary: 'Vocabulary',
        verbs: 'Verbs', lectures: 'Lectures', overview: 'Overview',
    },
    verbs: {
        title: 'Verbs',
        subtitle: 'Conjugation tables and verb practice',
        empty: 'No verb exercises in this course.',
    },
    lectures: {
        title: 'Lectures',
        subtitle: 'Grammar lessons, phrases & reading',
        empty: 'No lessons in this course.',
        all: 'All',
    },
    home: {
        subtitle: 'Your personal French course',
        reviewQueue: 'Review Queue',
        wordsDue:   (n) => `${n} word${n !== 1 ? 's' : ''} due for review`,
        wordsReady: (n) => `${n} word${n !== 1 ? 's' : ''} ready for review`,
        courseComplete: 'Course complete!',
        sections: {
            vocabulary: { title: 'Vocabulary', description: 'Build your vocabulary with word practice and quizzes', meta: 'Words · Flashcards · Quizzes' },
            verbs: { title: 'Verbs', description: 'Learn conjugations and practise verbs across tenses', meta: 'Learn · Practise · Conjugate' },
            lectures: { title: 'Lectures', description: 'Explore grammar, useful phrases and reading passages', meta: 'Grammar · Phrases · Reading' },
        },
    },
    vocabulary: {
        title: 'Vocabulary', subtitle: 'Choose a module to practise',
        searchPlaceholder: 'Search modules…',
        words:   (n) => `${n} word${n !== 1 ? 's' : ''}`,
        levelGroups: { A1: 'A1 — Foundations', A2B1: 'A2 / B1', B2C1: 'B2 / C1', C1C2: 'C1 / C2 — Advanced' },
        quiz: 'Quiz', read: 'Read', loading: 'Loading modules…',
    },
    courses: {
        title: 'Courses', subtitle: 'Choose your level and follow a structured path from A1 to C2.',
        active: 'Active',
        steps: (done, total) => `${done} / ${total} steps`,
        continue: 'Continue', resume: 'Resume', start: 'Start',
    },
    roadmap: {
        back: '← All Courses', setActive: 'Set as Active Course',
        steps: (done, total) => `${done} / ${total} steps`,
        notFound: 'Course not found.',
        continueLabel: 'Continue learning',
        resumeBtn: 'Continue →',
        allDone: 'Course complete — great work!',
        types: { vocabulary: 'Vocabulary', grammar: 'Grammar', verbs: 'Verbs', phrases: 'Phrases', reading: 'Reading' },
    },
    quiz: {
        loadError: 'Could not load this quiz. Please try again.',
        loading: 'Loading…',
        backToVocabulary: 'Back to Vocabulary',
        complete: 'Quiz Complete!', score: 'Score', total: 'Total',
        accuracy: 'Accuracy', tryAgain: 'Try Again',
        exit: '✕ Exit',
        wordCounter:   (i, n) => `Word ${i} of ${n}`,
        phraseCounter: (i, n) => `Phrase ${i} of ${n}`,
        reviewCounter: (i, n) => `Word ${i} of ${n}`,
        shuffled: '⇄ Shuffled', inOrder: '↕ In Order',
        shuffledTitle: 'Shuffled — click for In Order',
        inOrderTitle:  'In Order — click to Shuffle',
        reviewPrefix: '🔄 Review',
        translateToFrench: 'Translate to French', translateToEnglish: 'Translate to English',
        placeholder: 'Type your answer…', skip: 'Skip', submit: 'Submit',
        nextWord: 'Next Word →', next: 'Next →',
        correct: 'Correct', toReview: 'To Review', wrong: 'Wrong',
        backToPhrases: 'Back to Phrases',
    },
    reviewQueue: {
        title: 'Review Queue', loading: 'Loading due words…',
        noDue:  'No words due for review — keep practising to build your schedule.',
        noQueue:'No words queued — complete a vocabulary quiz to add words here.',
        waiting:     (n) => `${n} word${n !== 1 ? 's' : ''} waiting for review`,
        startReview: (n) => `Start Review (${n} word${n !== 1 ? 's' : ''})`,
        goToVocabulary: 'Go to Vocabulary',
        complete: 'Review Complete!', reviewRemaining: 'Review Remaining', home: 'Home',
    },
    settings: {
        title: 'Settings',
        preferences: 'Preferences',
        learningLanguage: 'Learning language', learningLanguageHint: 'Takes effect at the start of your next quiz',
        learnFrench: '🇫🇷 Learn French', learnEnglish: '🇬🇧 Learn English',
        account: 'Account', email: 'Email',
        password: 'Password', changePassword: 'Change password',
        passwordUpdated: 'Password updated.', cancelBtn: 'Cancel', updateBtn: 'Update password',
        currentPw: 'Current password', newPw: 'New password (min 8 chars)', confirmPw: 'Confirm new password',
        session: 'Session', logOut: 'Log out',
        deleteAccount: 'Delete account', deleteAccountHint: 'Permanently removes all your data',
        confirmDeleteMsg: 'Are you sure? This cannot be undone.',
        yesDelete: 'Yes, delete', saving: 'Saving…', deleting: 'Deleting…',
        logIn: 'Log in',
    },
    guest: { banner: 'Guest mode', dismiss: 'Dismiss guest note' },
    helperVerbs: {
        pageSubtitle: 'Conjugation tables, quizzes and practice',
        helperSection: 'Helper Verbs',
        helperNote: 'The 5 essential verbs that power every French sentence',
        conjugationSection: 'Conjugation Practice',
        conjugationNote: 'Learn and quiz yourself on all verb tenses',
        verbCount: (n) => `${n} verbs`,
        etre:  { description: 'The most essential French verb — used in everyday speech and as an auxiliary for compound tenses' },
        avoir: { description: 'The primary auxiliary verb used to form the passé composé and other compound tenses' },
        faire: { description: 'One of the most versatile French verbs — used in weather, idioms, and countless expressions' },
        aller: { description: 'Used for movement and to form the futur proche (near future) with aller + infinitive' },
        venir: { description: 'Used for arrival and to form the passé récent (just happened) with venir de + infinitive' },
        regularVerbs:           { title: 'Regular Verbs',            description: 'Conjugation patterns for -ER, -IR, and -RE verbs' },
        irregularVerbs:         { title: 'Irregular Verbs',          description: 'The most common irregular verbs every learner needs' },
        advancedIrregularVerbs: { title: 'Advanced Irregular Verbs', description: 'Complex patterns for fluent-level mastery' },
    },
    grammarLesson: {
        back: '← Back',
        exercises: 'Exercises',
        checkAnswers: 'Check Answers',
        tryAgain: 'Try Again',
        hint: 'Hint',
        notFound: 'Lesson not found.',
    },
    verbConjugation: {
        back: '← Back',
        notFound: 'Verb not found.',
        columns: ['Présent', 'Passé composé', 'Imparfait', 'Futur simple'] as const,
    },
    verbGroupList: {
        back: '← Back',
        learn: 'Learn',
        quiz: 'Quiz',
        notFound: 'Module not found.',
    },
    phraseDetail: {
        back: '← Lectures',
        startQuiz: 'Start Quiz',
        notFound: 'Category not found.',
    },
};

// ─── French ───────────────────────────────────────────────────────────────────

const FR: Translations = {
    progressFlower: { 'not-started': 'Pas encore commencé', visited: 'En cours', complete: 'Terminé', markComplete: 'Marquer comme terminé', undo: 'Marquer comme en cours' },
    nav: {
        home: 'Accueil', courses: 'Cours', vocabulary: 'Vocabulaire',
        verbs: 'Verbes', lectures: 'Leçons', overview: 'Aperçu',
    },
    verbs: {
        title: 'Verbes',
        subtitle: 'Tables de conjugaison et pratique',
        empty: 'Aucun exercice de verbes dans ce cours.',
    },
    lectures: {
        title: 'Leçons',
        subtitle: 'Grammaire, expressions et lecture',
        empty: 'Aucune leçon dans ce cours.',
        all: 'Tout',
    },
    home: {
        subtitle: 'Votre cours d\'anglais personnel',
        reviewQueue: 'File de révision',
        wordsDue:   (n) => `${n} mot${n > 1 ? 's' : ''} à réviser`,
        wordsReady: (n) => `${n} mot${n > 1 ? 's' : ''} prêt${n > 1 ? 's' : ''} à réviser`,
        courseComplete: 'Cours terminé !',
        sections: {
            vocabulary: { title: 'Vocabulaire', description: 'Enrichissez votre vocabulaire avec des exercices et des quiz', meta: 'Mots · Fiches · Quiz' },
            verbs: { title: 'Verbes', description: 'Apprenez les conjugaisons et pratiquez les différents temps', meta: 'Apprendre · Pratiquer · Conjuguer' },
            lectures: { title: 'Leçons', description: 'Explorez la grammaire, les expressions et les textes', meta: 'Grammaire · Expressions · Lecture' },
        },
    },
    vocabulary: {
        title: 'Vocabulaire', subtitle: 'Choisissez un module à pratiquer',
        searchPlaceholder: 'Rechercher un module…',
        words:   (n) => `${n} mot${n > 1 ? 's' : ''}`,
        levelGroups: { A1: 'A1 — Bases', A2B1: 'A2 / B1', B2C1: 'B2 / C1', C1C2: 'C1 / C2 — Avancé' },
        quiz: 'Quiz', read: 'Lire', loading: 'Chargement des modules…',
    },
    courses: {
        title: 'Cours', subtitle: 'Choisissez votre niveau et suivez un parcours structuré du A1 au C2.',
        active: 'Actif',
        steps: (done, total) => `${done} / ${total} étapes`,
        continue: 'Continuer', resume: 'Reprendre', start: 'Commencer',
    },
    roadmap: {
        back: '← Tous les cours', setActive: 'Définir comme cours actif',
        steps: (done, total) => `${done} / ${total} étapes`,
        notFound: 'Cours introuvable.',
        continueLabel: 'Poursuivre votre apprentissage',
        resumeBtn: 'Continuer →',
        allDone: 'Cours terminé — félicitations !',
        types: { vocabulary: 'Vocabulaire', grammar: 'Grammaire', verbs: 'Verbes', phrases: 'Expressions', reading: 'Lecture' },
    },
    quiz: {
        loadError: 'Impossible de charger ce quiz. Veuillez réessayer.',
        loading: 'Chargement…',
        backToVocabulary: 'Retour au vocabulaire',
        complete: 'Quiz terminé !', score: 'Score', total: 'Total',
        accuracy: 'Précision', tryAgain: 'Réessayer',
        exit: '✕ Quitter',
        wordCounter:   (i, n) => `Mot ${i} sur ${n}`,
        phraseCounter: (i, n) => `Expression ${i} sur ${n}`,
        reviewCounter: (i, n) => `Mot ${i} sur ${n}`,
        shuffled: '⇄ Aléatoire', inOrder: '↕ En ordre',
        shuffledTitle: 'Aléatoire — cliquer pour ordonner',
        inOrderTitle:  'En ordre — cliquer pour mélanger',
        reviewPrefix: '🔄 Révision',
        translateToFrench: 'Traduire en français', translateToEnglish: 'Traduire en anglais',
        placeholder: 'Tapez votre réponse…', skip: 'Passer', submit: 'Valider',
        nextWord: 'Mot suivant →', next: 'Suivant →',
        correct: 'Correct', toReview: 'À revoir', wrong: 'Incorrect',
        backToPhrases: 'Retour aux expressions',
    },
    reviewQueue: {
        title: 'File de révision', loading: 'Chargement des mots dus…',
        noDue:  'Aucun mot à réviser — continuez à pratiquer pour construire votre programme.',
        noQueue:'Aucun mot en attente — complétez un quiz de vocabulaire pour en ajouter.',
        waiting:     (n) => `${n} mot${n > 1 ? 's' : ''} en attente de révision`,
        startReview: (n) => `Commencer la révision (${n} mot${n > 1 ? 's' : ''})`,
        goToVocabulary: 'Aller au vocabulaire',
        complete: 'Révision terminée !', reviewRemaining: 'Réviser le reste', home: 'Accueil',
    },
    settings: {
        title: 'Paramètres',
        preferences: 'Préférences',
        learningLanguage: 'Langue apprise', learningLanguageHint: 'Prend effet au prochain quiz',
        learnFrench: '🇫🇷 Apprendre le français', learnEnglish: '🇬🇧 Apprendre l\'anglais',
        account: 'Compte', email: 'E-mail',
        password: 'Mot de passe', changePassword: 'Changer le mot de passe',
        passwordUpdated: 'Mot de passe mis à jour.', cancelBtn: 'Annuler', updateBtn: 'Mettre à jour',
        currentPw: 'Mot de passe actuel', newPw: 'Nouveau mot de passe (8 car. min.)', confirmPw: 'Confirmer le nouveau mot de passe',
        session: 'Session', logOut: 'Se déconnecter',
        deleteAccount: 'Supprimer le compte', deleteAccountHint: 'Supprime définitivement toutes vos données',
        confirmDeleteMsg: 'Êtes-vous sûr(e) ? Cette action est irréversible.',
        yesDelete: 'Oui, supprimer', saving: 'Enregistrement…', deleting: 'Suppression…',
        logIn: 'Se connecter',
    },
    guest: { banner: 'Mode invité', dismiss: 'Masquer la note' },
    helperVerbs: {
        pageSubtitle: 'Tables de conjugaison, quiz et pratique',
        helperSection: 'Verbes essentiels',
        helperNote: 'Les 5 verbes qui structurent toutes les phrases françaises',
        conjugationSection: 'Pratique de la conjugaison',
        conjugationNote: 'Apprenez et testez-vous sur tous les temps',
        verbCount: (n) => `${n} verbe${n > 1 ? 's' : ''}`,
        etre:  { description: "Le verbe français le plus essentiel — utilisé dans le discours quotidien et comme auxiliaire pour les temps composés" },
        avoir: { description: "Le principal verbe auxiliaire utilisé pour former le passé composé et d'autres temps composés" },
        faire: { description: "L'un des verbes français les plus polyvalents — utilisé pour la météo, les idiomes et d'innombrables expressions" },
        aller: { description: "Utilisé pour le mouvement et pour former le futur proche (aller + infinitif)" },
        venir: { description: "Utilisé pour l'arrivée et pour former le passé récent (venir de + infinitif)" },
        regularVerbs:           { title: 'Verbes réguliers',          description: 'Modèles de conjugaison pour les verbes en -ER, -IR et -RE' },
        irregularVerbs:         { title: 'Verbes irréguliers',        description: 'Les verbes irréguliers les plus courants dont tout apprenant a besoin' },
        advancedIrregularVerbs: { title: 'Verbes irréguliers avancés',description: 'Structures complexes pour une maîtrise avancée' },
    },
    grammarLesson: {
        back: '← Retour',
        exercises: 'Exercices',
        checkAnswers: 'Vérifier les réponses',
        tryAgain: 'Réessayer',
        hint: 'Indice',
        notFound: 'Leçon introuvable.',
    },
    verbConjugation: {
        back: '← Retour',
        notFound: 'Verbe introuvable.',
        columns: ['Présent', 'Passé composé', 'Imparfait', 'Futur simple'] as const,
    },
    verbGroupList: {
        back: '← Retour',
        learn: 'Apprendre',
        quiz: 'Quiz',
        notFound: 'Module introuvable.',
    },
    phraseDetail: {
        back: '← Leçons',
        startQuiz: 'Commencer le quiz',
        notFound: 'Catégorie introuvable.',
    },
};

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useT(): Translations {
    const [mode, setMode] = useState<LearningMode | null>(loadLearningMode);

    useEffect(() => {
        const handler = () => setMode(loadLearningMode());
        window.addEventListener('learningModeChanged', handler);
        return () => window.removeEventListener('learningModeChanged', handler);
    }, []);

    return mode === 'learn-english' ? FR : EN;
}
