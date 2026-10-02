import type { HelperVerbFR, VerbEntry, VerbGroup } from '../../../types/verbs';
import { verbGroupA1, verbsA1, helpersA1 } from './a1';
import { verbGroupA2, verbsA2, helpersA2 } from './a2';
import { verbGroupB1, verbsB1, helpersB1 } from './b1';
import { verbGroupB2, verbsB2, helpersB2 } from './b2';
import { verbGroupC1, verbsC1, helpersC1 } from './c1';
import { verbGroupC2, verbsC2, helpersC2 } from './c2';

export const verbGroups: Record<string, VerbGroup> = { 'a1': verbGroupA1, 'a2': verbGroupA2, 'b1': verbGroupB1, 'b2': verbGroupB2, 'c1': verbGroupC1, 'c2': verbGroupC2 };
export const verbsData: Record<string, VerbEntry[]> = { 'a1': verbsA1, 'a2': verbsA2, 'b1': verbsB1, 'b2': verbsB2, 'c1': verbsC1, 'c2': verbsC2 };
export const helperVerbsDataFR: Record<string, HelperVerbFR> = { ...helpersA1, ...helpersA2, ...helpersB1, ...helpersB2, ...helpersC1, ...helpersC2 };
export const verbById: Record<string, VerbEntry> = Object.fromEntries(Object.values(verbsData).flat().map(verb => [verb.id, verb]));
export const verbGroupMap: Record<string, string> = Object.fromEntries(Object.entries(verbsData).flatMap(([groupId, verbs]) => verbs.map(verb => [verb.id, groupId])));
