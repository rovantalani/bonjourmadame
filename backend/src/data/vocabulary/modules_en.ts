import { vocabularyModules } from './modules_fr';

// English learners see French module labels; IDs and bilingual word pairs stay shared.
export const vocabularyModulesEN = vocabularyModules.map(module => ({
    ...module, title: module.titleFR, description: module.descriptionFR,
}));
