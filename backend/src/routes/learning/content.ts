import { Router } from 'express';
import type { LearningContent } from '../../services/learningContent';
import type { VerbEntry } from '../../types/verbs';

const CEFR_ORDER = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

// Content IDs are arbitrary strings, not Object prototype properties.
function lookup<T>(data: Record<string, T>, id: string): T | undefined {
    return Object.prototype.hasOwnProperty.call(data, id) ? data[id] : undefined;
}
const summarizeVerb = ({ id, infinitive, translation, type, color }: VerbEntry) =>
    ({ id, infinitive, translation, type, color });

export function createContentRouter(content: LearningContent): Router {
    const router = Router();

    router.get('/vocabulary/modules', (_req, res) => {
        res.json(content.modules.map(({ id, title, description, icon, color }) => ({
            id, title, description, icon, color,
            wordCount: (lookup(content.vocabulary, id) ?? []).length,
        })));
    });
    router.get('/vocabulary/:moduleId', (req, res) => {
        const words = lookup(content.vocabulary, req.params.moduleId);
        if (!words) { res.status(404).json({ error: 'Module not found' }); return; }
        res.json(words);
    });
    router.get('/lectures/grammar/:lessonId', (req, res) => {
        const lesson = content.grammar.find(item => item.id === req.params.lessonId);
        if (!lesson) { res.status(404).json({ error: 'Lesson not found' }); return; }
        res.json(lesson);
    });
    router.get('/lectures/phrases/:categoryId', (req, res) => {
        const category = content.phrases.find(item => item.id === req.params.categoryId);
        if (!category) { res.status(404).json({ error: 'Category not found' }); return; }
        res.json(category);
    });
    router.get('/lectures/reading/:moduleId', (req, res) => {
        const passage = content.reading.find(item => item.moduleId === req.params.moduleId);
        if (!passage) { res.status(404).json({ error: 'Reading passage not found' }); return; }
        res.json({ ...passage, vocabulary: lookup(content.vocabulary, passage.moduleId) ?? [] });
    });
    router.get('/verbs/helpers/:verbId', (req, res) => {
        const verb = lookup(content.helpers, req.params.verbId);
        if (!verb) { res.status(404).json({ error: 'Verb not found' }); return; }
        res.json(verb);
    });
    router.get('/verbs/groups/:groupId', (req, res) => {
        const group = lookup(content.verbGroups, req.params.groupId);
        if (!group) { res.status(404).json({ error: 'Group not found' }); return; }
        res.json({ ...group, verbs: (lookup(content.verbs, req.params.groupId) ?? []).map(summarizeVerb) });
    });
    router.get('/verbs/conjugation/:verbId', (req, res) => {
        const verb = lookup(content.verbById, req.params.verbId);
        if (!verb) { res.status(404).json({ error: 'Verb not found' }); return; }
        res.json({ ...verb, groupId: lookup(content.verbGroupMap, req.params.verbId) });
    });
    router.get('/verbs/courses/:level', (req, res) => {
        const level = req.params.level.toLowerCase();
        const index = CEFR_ORDER.indexOf(level);
        if (index === -1) { res.status(404).json({ error: 'Unknown level' }); return; }
        const reviewVerbs = CEFR_ORDER.slice(0, index).flatMap(groupId => {
            const verbs = (lookup(content.verbs, groupId) ?? []).map(summarizeVerb);
            return verbs.length ? [{
                groupId,
                groupTitle: lookup(content.verbGroups, groupId)?.title ?? groupId.toUpperCase(),
                verbs,
            }] : [];
        });
        res.json({ level, newVerbs: (lookup(content.verbs, level) ?? []).map(summarizeVerb), reviewVerbs });
    });

    // Keep unknown scoped API requests out of the production SPA fallback.
    router.use((_req, res) => { res.status(404).json({ error: 'Learning route not found' }); });
    return router;
}
