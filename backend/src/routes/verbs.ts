import { Router, type Request, type Response } from 'express';
import { verbGroups, verbsData, verbById, verbGroupMap, helperVerbsDataFR } from '../data/verbs/verbs_fr';
import { helperVerbsDataEN, verbGroupsEN, verbsDataEN, verbByIdEN, verbGroupMapEN } from '../data/verbs/verbs_en';

const router = Router();
const CEFR_ORDER = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

router.get('/helpers/:verbId', (req: Request, res: Response) => {
    const verbId = req.params['verbId'] as string;
    const langFR = req.query['lang'] === 'fr';
    const verb = langFR ? helperVerbsDataEN[verbId] : helperVerbsDataFR[verbId];
    if (!verb) {
        res.status(404).json({ error: 'Verb not found' });
        return;
    }
    res.json(verb);
});

router.get('/groups/:groupId', (req: Request, res: Response) => {
    const groupId = req.params['groupId'] as string;
    const langFR = req.query['lang'] === 'fr';
    const groups = langFR ? verbGroupsEN : verbGroups;
    const data   = langFR ? verbsDataEN  : verbsData;
    const group = groups[groupId];
    if (!group) {
        res.status(404).json({ error: 'Group not found' });
        return;
    }
    const verbs = (data[groupId] ?? []).map(({ id, infinitive, translation, type, color }) => ({
        id, infinitive, translation, type, color,
    }));
    res.json({
        ...group,
        title: langFR ? group.titleFR : group.title,
        description: langFR ? group.descriptionFR : group.description,
        verbs,
    });
});

router.get('/conjugation/:verbId', (req: Request, res: Response) => {
    const verbId = req.params['verbId'] as string;
    const langFR = req.query['lang'] === 'fr';
    const verb = langFR ? verbByIdEN[verbId] : verbById[verbId];
    const groupId = langFR ? verbGroupMapEN[verbId] : verbGroupMap[verbId];
    if (!verb) {
        res.status(404).json({ error: 'Verb not found' });
        return;
    }
    res.json({ ...verb, groupId });
});

router.get('/courses/:level', (req: Request, res: Response) => {
    const level = (req.params['level'] as string).toLowerCase();
    const langFR = req.query['lang'] === 'fr';
    const groups = langFR ? verbGroupsEN : verbGroups;
    const data   = langFR ? verbsDataEN  : verbsData;

    const levelIdx = CEFR_ORDER.indexOf(level);
    if (levelIdx === -1) {
        res.status(404).json({ error: 'Unknown level' });
        return;
    }

    const mapVerb = ({ id, infinitive, translation, type, color }: { id: string; infinitive: string; translation: string; type: string; color: string }) =>
        ({ id, infinitive, translation, type, color });

    const newVerbs = (data[level] ?? []).map(mapVerb);

    const reviewVerbs: { groupId: string; groupTitle: string; verbs: ReturnType<typeof mapVerb>[] }[] = [];
    for (let i = 0; i < levelIdx; i++) {
        const gid = CEFR_ORDER[i];
        const gVerbs = (data[gid] ?? []).map(mapVerb);
        if (gVerbs.length > 0) {
            const g = groups[gid];
            reviewVerbs.push({
                groupId: gid,
                groupTitle: g ? (langFR ? g.titleFR : g.title) : gid.toUpperCase(),
                verbs: gVerbs,
            });
        }
    }

    res.json({ level, newVerbs, reviewVerbs });
});

export default router;
