import { learningContent, type TargetLanguage } from './learningContent';

function own<T>(map: Record<string, T>, id: string): T | undefined {
    return Object.prototype.hasOwnProperty.call(map, id) ? map[id] : undefined;
}

export function progressWords(language: TargetLanguage, moduleId: string) {
    const content = learningContent[language];
    if (moduleId.startsWith('phrase-')) {
        return content.phrases.find(category => category.id === moduleId.slice(7))?.phrases;
    }
    return own(content.vocabulary, moduleId);
}

export function validProgressWord(language: TargetLanguage, moduleId: string, wordId: string): boolean {
    return progressWords(language, moduleId)?.some(word => wordId === `${moduleId}:${word.id}`) ?? false;
}

export function validProgressSession(language: TargetLanguage, moduleId: string, sessionType: string): boolean {
    if (sessionType === 'vocabulary' || sessionType === 'review') {
        return !!progressWords(language, moduleId)?.length;
    }
    if (sessionType === 'verb') {
        const content = learningContent[language];
        return !!(own(content.verbById, moduleId) || own(content.helpers, moduleId) || own(content.verbGroups, moduleId));
    }
    return false;
}
