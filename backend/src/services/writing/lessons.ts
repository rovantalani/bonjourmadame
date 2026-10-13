import type { WritingLesson } from '../../types/writing';
import { frenchWritingLessons } from '../../content/fr/writing';
import { englishWritingLessons } from '../../content/en/writing';
export const writingLessons: Record<'fr' | 'en', WritingLesson[]> = { fr: frenchWritingLessons, en: englishWritingLessons };
