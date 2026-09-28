# Bonjour Madame website review — 28 September 2026

The website looks good and has a clear structure. The biggest problem is that some learning features do not work reliably yet.

**We should first stop progress from getting lost, fix lessons people cannot finish, and fix English verb quizzes.** We can improve the current website without rebuilding everything.

## What I checked

I read the code for lessons, quizzes, scoring, accounts, saved progress, pronunciation, and the server. I also looked at the home page and verb page in Chrome on a computer, and opened one of the broken lesson links to confirm the problem.

- The website and server both build successfully. This means the code can be prepared to run.
- All 16 existing automatic tests pass. These tests check some features, but they do not check every learning journey.
- A separate code-quality check reports 9 errors and 1 warning. These need attention, but they do not mean that 9 pages are broken.
- I checked 443 course steps: 234 for learning French and 209 for learning English.
- Five verb-group links point to missing content. The other lesson links point to content that exists. I have not checked every translation or teaching example for correctness.
- The review includes our recent punctuation fix and the verb search fix that ignores accents.

**What still needs testing:** real accounts with the database, the live website, phones, screen readers, and all teaching content. I looked at the desktop design in light mode. Comments about other screen sizes and dark mode come from reading the code.

The account-protection findings below are weaknesses in the code. I did not find or demonstrate a break-in.

## What is already good

- **Clear sections.** Vocabulary, verbs, and lectures are easy to understand. Grammar, phrases, and reading fit well inside lectures.
- **A consistent look.** The pink and plum colors, teal verb cards, rounded corners, and spacing work well together.
- **Readable verb cards.** The word, translation, and Learn/Quiz buttons are easy to find.
- **Useful home-page actions.** The website already helps people continue a course or review mistakes.
- **Helpful retry rounds.** Learners can focus on wrong answers instead of repeating everything.
- **Fairer grading.** Giving credit for punctuation mistakes is a good direction.
- **Useful progress signs.** The flowers distinguish started and completed lessons. Some rules behind them need fixing, but the idea is worth keeping.
- **A reasonable code structure.** Related files are grouped together, and some buttons, colors, icons, and rules are already shared. We can improve this step by step.
- **Some good account protection.** Passwords are stored as protected hashes rather than readable text. Several other basic protections are already present.
- **Shared pronunciation support.** The site chooses voices based on language and what is available on the device.

## Priority 1 — fix these first

### 1. Stop saved progress from disappearing during import

**Update: the fix is now implemented locally.** Import keeps the browser copy, waits for confirmation, and can safely retry after a failure or refresh. It shows clear success and error messages. Tests also check that new work stays safe while an import is running. It still needs to be released to the live website. The description below records the original problem.

**The problem:** someone practices without an account, then chooses to move that progress into their account. The website can delete the copy saved in their browser even if sending it to the server fails.

This can happen if the internet stops working, the login expires, or the server has a problem. The failure is hidden from the user.

Even when the import works, it does not preserve the full answer history. Trying an import again can also send some results twice.

**What we should do:** keep the browser copy until the server confirms it has saved the progress. Show any problem and let the user try again. Make sure retrying does not count the same work twice.

**We know it is fixed when:** a failed import loses nothing, and importing twice does not double the results.

### 2. Keep each person's progress separate and restore it on other devices

**The problem:** much of the progress is saved for the browser, rather than for a particular person. If two people use the same browser, the second person can inherit the first person's progress.

French and English vocabulary progress can also overlap. Knowing a word in one direction does not necessarily mean the learner knows it in the other direction.

Signing in on another device does not currently restore everything. Lesson completion is saved only in the browser, and some quiz results are not sent to the account at all.

**What we should do:** keep separate progress for each account, for guests, and for each language being learned. Restore the account's progress when the person signs in. Save completed lessons as well as quiz results.

**We know it is fixed when:** two accounts stay separate, the two learning languages stay separate, and the same account shows the same progress on another device.

### 3. Fix broken lesson links and lessons that cannot be completed

**The problem:** these five links point to missing verb groups:

| Language being learned | Level | Broken lesson |
|---|---|---|
| French | A2 | Regular verbs |
| French | B1 | Irregular verbs |
| French | B2 | Advanced irregular verbs |
| English | B1 | Irregular verbs |
| English | B2 | Regular verbs |

I opened the French A2 link in Chrome and confirmed that it says “Module not found.” The course list and the available verb groups no longer agree.

There is another problem with special verb tables, such as **être**. They require a passed quiz before the lesson can be marked complete, but there is no working quiz path from those pages.

**What we should do:** fix the links. Give every lesson a clear way to finish: either a working quiz or a “Mark as read” action when a quiz is not needed.

**We know it is fixed when:** every course step opens the right content and can be completed through the normal buttons on the page.

### 4. Fix English verb quizzes and blank quiz pages

**The problem:** English verb practice reuses rules written for French verbs. This causes English answers to appear under French tense names.

At higher levels, some quizzes ask for answers that are missing from the English content. A missing answer can become an empty answer, so leaving the question blank can count as correct.

Some C2 review quizzes have no questions and show a blank page. New English verb content for B2, C1, and C2 is also unfinished. The English verb “lose” is entered twice, which can confuse which level it belongs to.

**What we should do:** give French and English their own correct tense names and question lists. Only offer questions that have real answers. Clearly say when practice is not available yet. Remove conflicting duplicate entries.

**We know it is fixed when:** quiz pages are never blank, missing answers never count as correct, and English practice uses the correct English tenses.

### 5. Make the review list work correctly

**The problem:** phrase quizzes add items to the review list, but the review page tries to load them as vocabulary words. Those phrases are then skipped without an explanation.

The home page can say there are more items to review than the review page can actually show. Review loading also does not always request the correct learning language.

If loading fails, the website can incorrectly say that nothing is due for review.

**What we should do:** load words and phrases from the right places, in the right language. Make the home-page count match the available review. Show a loading error separately from “Nothing to review.”

### 6. Tell the user when something goes wrong

**The problem:** a failed verb quiz can keep saying “Loading…” forever. Some pages do not clearly handle missing content or server errors. There is no general page explaining that an unknown address does not exist.

Moving quickly between lessons can also allow an old lesson request to interfere with the new one. Some quiz state is not reset when the lesson changes.

**What we should do:** use clear messages such as “We couldn't load this lesson. Try again.” Add a retry button and a useful missing-page screen. Make sure each lesson starts with the right content and quiz state. Make local setup work without a fragile extra setting for the server address.

### 7. Strengthen account protection before more people use the site

**The problem:** the code does not limit repeated login attempts. It also does not check all incoming information carefully enough, such as whether a quiz score is a valid number.

Some connection settings are too broad. The server allows requests from any website address, and the database connection skips a check that helps confirm it is connecting to the right server. Existing logins can remain active after a password change.

**What we should do:** limit repeated login attempts, check incoming information, tighten connection settings, and decide how password changes should end old logins. Check that all required account settings exist before the server starts.

These are code findings. We still need to check the protections used on the live website.

## Priority 2 — come back to these after the main problems are fixed

### 1. Make all quizzes follow the same rules

Vocabulary, phrases, grammar, and review repeat similar code but behave differently.

For example, the review page accepts punctuation mistakes without showing the new warning. Grammar uses different answer-checking rules. Accent mistakes currently count as fully correct rather than partially correct.

**Improve it:** share the common rules and feedback. Decide how accents, punctuation, spelling mistakes, and alternative answers should work everywhere. Searching for a word can be more forgiving than grading an answer; those do not need identical rules.

### 2. Make scores easier to understand

A learner can make many mistakes, correct them during retries, and finish with “100% accuracy.” That shows they eventually finished, but it does not show how they did on the first try.

**Improve it:** show first-try results, number of retries, and final completion separately. Explain that a word marked “known” currently means the most recent answer was correct, not that the learner will remember it long term.

### 3. Keep course and tense information in one place

The same course details and tense rules are written in several files. Some copies no longer agree, which caused several of the bugs above. A few content files are also very long and hard to edit.

**Improve it:** keep one shared definition of each course and tense. Split large content files into smaller groups. Automatically check that lesson links and questions match the available content. Keep existing saved progress working when reorganizing the files.

We do not need to replace the whole website or change its main technology.

### 4. Organize how the website loads and saves information

Many pages repeat their own code for loading lessons, choosing a language, saving progress, and handling errors. This makes the site harder to maintain and easier to break.

**Improve it:** create shared helpers for these jobs. Read saved progress once when needed instead of repeatedly throughout the page. Handle damaged saved data or a full browser storage area gracefully.

### 5. Add automatic checks that follow real learning journeys

The 16 current tests are useful, but they mostly check small pieces. Some replace the real account and database behavior with pretend versions. Passing them does not prove that a person can finish a course or restore progress on another device.

**Improve it:** test full journeys, including mistakes, partial credit, retries, language changes, account changes, failed imports, and lesson completion. Check every course link automatically. Run these checks before changes are accepted, and fix the existing code-quality errors.

### 6. Finish translating the interface

Some pages mix English and French instructions. For example, the English-interface verb page shows a French search prompt. Other loading messages, account messages, and buttons are not fully translated.

The code also mixes up two different ideas: **the language of the instructions** and **the language the person is learning**.

**Improve it:** name those two things clearly in the code and translate all instructions consistently. Show the language being learned first where appropriate. Tell screen readers which language the page and lesson text use.

### 7. Make the site easier to use with a keyboard or screen reader

Some answer and password fields only have text inside the box explaining what to enter. That text disappears when someone types. Many buttons are simply called “Learn” or “Quiz,” without saying which verb they belong to.

Menus, filters, and answer feedback could give clearer information to people who cannot rely on looking at the screen.

**Improve it:** add clear labels, better button names, sensible keyboard controls, and spoken feedback for answer results. Check that warning text is readable in both light and dark mode. Test on phones and with a screen reader.

### 8. Make the next learning action more obvious

The home page uses a lot of space for the logo and title before reaching the learning actions. The flower symbols and the rules for finishing a lesson could be clearer.

After passing a quiz, users can miss the extra action needed to mark the lesson complete.

**Improve it:** put “Continue learning” and “Review mistakes” near the top for returning users. Explain progress symbols and completion clearly. Keep searches when someone returns from a lesson. Keep the current colors and overall style.

### 9. Check the quality and completeness of the lessons

A working lesson link does not prove that its teaching content is correct. Some English verb examples, such as continuous forms of “believe” and “understand,” need an explanation of when they make sense. Higher-level English verb content is unfinished.

**Improve it:** have a language reviewer check translations, tense names, examples, acceptable answers, and difficulty levels. Clearly mark unfinished content. Give learners a simple way to report a questionable answer.

### 10. Make the server easier to run and support

Some settings can be loaded too late when the server starts. Changes to the database are not tracked clearly. Two answers saved at nearly the same time can interfere with the timing of the next review.

The setup guide also lists an older minimum Node version than the current website tools support. Node is the software used to run the development tools and server.

**Improve it:** load and check settings first, track database changes, and save review updates safely. Make failures easier to diagnose. Update the setup guide. Add password recovery and review how the website confirms that an email address belongs to the account owner.

## Priority 3 — nice to have

These are useful extras after the main learning features work reliably.

1. **Short daily practice.** Offer a small session with an estimated time to finish.
2. **Resume a quiz.** Let learners continue after closing or refreshing the page.
3. **An improvement page.** Show first-try results, difficult topics, and review history.
4. **More practice types.** Add listening, dictation, sentence building, practice in both language directions, and a choice of tenses.
5. **Pronunciation controls.** Let users slow down audio or choose a voice. Explain when audio is unavailable.
6. **Help choosing what to study.** Add a starting-level test, bookmarks, search across all lessons, and suggested next steps.
7. **Easier lesson editing.** Let content editors preview lessons and check for mistakes before publishing.
8. **Offline practice.** Let people study without an internet connection, once saving and syncing progress are dependable.
9. **Small design details.** Replace the default browser-tab icon, improve page titles, and remove unused starter files.
10. **Speed improvements if needed.** Measure how quickly the website loads before spending time reorganizing downloads. The current file size alone does not prove that the website feels slow.

## The order I recommend

1. Stop progress from getting lost and keep each person's progress separate.
2. Fix broken lessons, missing completion paths, and English verb quizzes.
3. Fix the review list and show useful error messages.
4. Strengthen account protection and add automatic checks for these fixes.
5. Reduce repeated code so future changes are easier and safer.
6. Improve translations, keyboard use, score explanations, and navigation.
7. Add new learning features.

This document is a list of findings and suggested work. Items with an update above have since been worked on. The other problems are still planned work.
