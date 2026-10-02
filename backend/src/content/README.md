# Course content files

French and English content live in `fr/` and `en/`. Within each language, `courses/`, `grammar/`, `phrases/`, `reading/`, `verbs/`, and `vocabulary/` have one file per CEFR level (`a1.ts` through `c2.ts`). Teachers normally edit only the level file for their content type. The `index.ts` files combine those files for the API.

Every module still has its own `level` and `unit`. The file location and the module's level must agree. Course files hold the ordered steps for each level; a unit change should be reflected there too.

Vocabulary modules keep their label, placement, and words in the same object. Some reading passages also have word lists that are not standalone vocabulary modules. Those lists are in `readingWordsA1`, `readingWordsA2`, and so on, in the matching vocabulary level file.
