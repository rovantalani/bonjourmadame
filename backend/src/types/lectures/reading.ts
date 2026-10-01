import type { CoursePlacement } from '../curriculum';

export interface ReadingPassage extends CoursePlacement {
    moduleId: string;
    title: string;
    source: string;
    paragraphs: string[];
}
