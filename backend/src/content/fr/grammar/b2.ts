import type { GrammarLesson } from '../../../types/lectures/grammar';

export const grammarB2: GrammarLesson[] = [
    {
        level: "B2", unit: 1, id: "b2-la-mise-en-relief-cest-qui-que", title: "La mise en relief : c’est… qui / que", description: "C’est... qui highlights the subject; c’est... que highlights a complement.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "C’est... qui highlights the subject; c’est... que highlights a complement.", examples: [
                { french: "C'est Léa qui a proposé la solution.", english: "It was Léa who proposed the solution" },
                { french: "C'est ce projet que nous soutenons.", english: "It is this project that we support" },
            ] },
            { title: "Nuance and context", explanation: "What is foregrounded depends on the information treated as new or contrastive.", examples: [
                { french: "Ce sont les habitants qui ont voté.", english: "It is the residents who voted" },
                { french: "C'est demain que la réunion aura lieu.", english: "It is tomorrow that the meeting will take place" },
            ] },
        ],
        exercises: [
            { sentence: "C'est Léa ___ a proposé la solution.", answer: "qui", hint: "Expression étudiée : It was Léa who proposed the solution" },
            { sentence: "C'est ce projet ___ nous soutenons.", answer: "que", hint: "Expression étudiée : It is this project that we support" },
            { sentence: "___ les habitants qui ont voté.", answer: "Ce sont", hint: "Expression étudiée : It is the residents who voted" },
            { sentence: "C'est demain ___ la réunion aura lieu.", answer: "que", hint: "Expression étudiée : It is tomorrow that the meeting will take place" },
        ],
    },
    {
        level: "B2", unit: 1, id: "b2-les-relatifs-composes", title: "Les relatifs composés", description: "Use lequel/laquelle/lesquels/lesquelles after prepositions referring to things.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Use lequel/laquelle/lesquels/lesquelles after prepositions referring to things.", examples: [
                { french: "Le projet auquel je participe avance.", english: "The project in which I participate is progressing" },
                { french: "La question sur laquelle nous travaillons est complexe.", english: "The question on which we work is complex" },
            ] },
            { title: "Nuance and context", explanation: "With à and de, use contracted forms auquel, auxquels, duquel and related forms.", examples: [
                { french: "Voici les moyens grâce auxquels nous agissons.", english: "These are the means thanks to which we act" },
                { french: "C'est le point à partir duquel nous organisons le débat.", english: "This is the point from which we discuss" },
            ] },
        ],
        exercises: [
            { sentence: "Le projet ___ je participe avance.", answer: "auquel", hint: "Expression étudiée : The project in which I participate is progressing" },
            { sentence: "La question ___ nous travaillons est complexe.", answer: "sur laquelle", hint: "Expression étudiée : The question on which we work is complex" },
            { sentence: "Voici les moyens ___ nous agissons.", answer: "grâce auxquels", hint: "Expression étudiée : These are the means thanks to which we act" },
            { sentence: "C'est le point ___ nous organisons le débat.", answer: "à partir duquel", hint: "Expression étudiée : This is the point from which we discuss" },
        ],
    },
    {
        level: "B2", unit: 1, id: "b2-comparer-avec-precision", title: "Comparer avec précision", description: "Use bien plus, nettement moins and autant to grade comparisons.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Use bien plus, nettement moins and autant to grade comparisons.", examples: [
                { french: "Cette solution est nettement plus coûteuse.", english: "This solution is substantially more expensive" },
                { french: "Nous avons autant de demandes que l'an dernier.", english: "We have as many requests as last year" },
            ] },
            { title: "Nuance and context", explanation: "Distinguish comparable quantities from evaluations of degree to avoid overstating conclusions.", examples: [
                { french: "Il y a beaucoup moins d'attente.", english: "There is much less waiting" },
                { french: "Le résultat est à peine meilleur.", english: "The result is barely better" },
            ] },
        ],
        exercises: [
            { sentence: "Cette solution est ___ coûteuse.", answer: "nettement plus", hint: "Expression étudiée : This solution is substantially more expensive" },
            { sentence: "Nous avons ___ de demandes que l'an dernier.", answer: "autant", hint: "Expression étudiée : We have as many requests as last year" },
            { sentence: "Il y a ___ d'attente.", answer: "beaucoup moins", hint: "Expression étudiée : There is much less waiting" },
            { sentence: "Le résultat est ___ meilleur.", answer: "à peine", hint: "Expression étudiée : The result is barely better" },
        ],
    },
    {
        level: "B2", unit: 2, id: "b2-hypothese-irreelle-au-present", title: "Hypothèse irréelle au présent", description: "Si + imperfect sets a hypothetical condition; the present conditional states its result.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Si + imperfect sets a hypothetical condition; the present conditional states its result.", examples: [
                { french: "Si l'entreprise embauchait, elle réduirait la charge.", english: "If the company hired, it would reduce workload" },
                { french: "Nous pourrions agir si nous avions les moyens.", english: "We could act if we had the means" },
            ] },
            { title: "Nuance and context", explanation: "This construction may express an imagined alternative rather than a realistic prediction.", examples: [
                { french: "Si les horaires changeaient, cela faciliterait la vie.", english: "If hours changed, it would make life easier" },
                { french: "Si je dirigeais l'équipe, je consulterais les salariés.", english: "If I led the team, I would consult employees" },
            ] },
        ],
        exercises: [
            { sentence: "Si l'entreprise embauchait, elle ___ la charge.", answer: "réduirait", hint: "Expression étudiée : If the company hired, it would reduce workload" },
            { sentence: "Nous ___ agir si nous avions les moyens.", answer: "pourrions", hint: "Expression étudiée : We could act if we had the means" },
            { sentence: "Si les horaires changeaient, cela ___ la vie.", answer: "faciliterait", hint: "Expression étudiée : If hours changed, it would make life easier" },
            { sentence: "___ je dirigeais l'équipe, je consulterais les salariés.", answer: "Si", hint: "Expression étudiée : If I led the team, I would consult employees" },
        ],
    },
    {
        level: "B2", unit: 2, id: "b2-hypothese-passee-si-plus-que-parfait", title: "Hypothèse passée : si + plus-que-parfait", description: "Use si + pluperfect with the past conditional for unrealized events in the past.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Use si + pluperfect with the past conditional for unrealized events in the past.", examples: [
                { french: "Si j'avais su, je serais venu plus tôt.", english: "If I had known, I would have come earlier" },
                { french: "Elle aurait accepté si on lui avait expliqué.", english: "She would have accepted if it had been explained" },
            ] },
            { title: "Nuance and context", explanation: "Distinguish the hypothetical result from what actually happened.", examples: [
                { french: "Si vous aviez demandé, nous aurions répondu.", english: "If you had asked, we would have replied" },
                { french: "Si l'équipe avait testé le logiciel, elle aurait corrigé l'erreur.", english: "If the team had tested it, it would have fixed the error" },
            ] },
        ],
        exercises: [
            { sentence: "Si j'avais su, je ___ plus tôt.", answer: "serais venu", hint: "Expression étudiée : If I had known, I would have come earlier" },
            { sentence: "Elle ___ si on lui avait expliqué.", answer: "aurait accepté", hint: "Expression étudiée : She would have accepted if it had been explained" },
            { sentence: "Si vous aviez demandé, nous ___.", answer: "aurions répondu", hint: "Expression étudiée : If you had asked, we would have replied" },
            { sentence: "___ l'équipe avait testé le logiciel, elle aurait corrigé l'erreur.", answer: "Si", hint: "Expression étudiée : If the team had tested it, it would have fixed the error" },
        ],
    },
    {
        level: "B2", unit: 2, id: "b2-le-passif-dans-differents-temps", title: "Le passif dans différents temps", description: "Combine être with past participles in several tenses and agree the participle with the subject.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Combine être with past participles in several tenses and agree the participle with the subject.", examples: [
                { french: "Les dossiers seront examinés lundi.", english: "The files will be reviewed Monday" },
                { french: "La réunion avait été reportée.", english: "The meeting had been postponed" },
            ] },
            { title: "Nuance and context", explanation: "Passive constructions foreground the affected participant; an agent with par is optional.", examples: [
                { french: "Les conditions ont été modifiées.", english: "The conditions were changed" },
                { french: "Une procédure serait appliquée si besoin.", english: "A procedure would be applied if needed" },
            ] },
        ],
        exercises: [
            { sentence: "Les dossiers ___ lundi.", answer: "seront examinés", hint: "Expression étudiée : The files will be reviewed Monday" },
            { sentence: "La réunion ___.", answer: "avait été reportée", hint: "Expression étudiée : The meeting had been postponed" },
            { sentence: "Les conditions ___.", answer: "ont été modifiées", hint: "Expression étudiée : The conditions were changed" },
            { sentence: "Une procédure ___ si besoin.", answer: "serait appliquée", hint: "Expression étudiée : A procedure would be applied if needed" },
        ],
    },
    {
        level: "B2", unit: 3, id: "b2-discours-indirect-et-concordance", title: "Discours indirect et concordance", description: "In past reported speech, present commonly shifts to imperfect, future to conditional, and passé composé to pluperfect.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "In past reported speech, present commonly shifts to imperfect, future to conditional, and passé composé to pluperfect.", examples: [
                { french: "Elle a déclaré qu'elle était prête.", english: "She stated she was ready" },
                { french: "Il a dit qu'il viendrait ensuite.", english: "He said he would come later" },
            ] },
            { title: "Nuance and context", explanation: "Shift personal and temporal references consistently with the speaker’s viewpoint.", examples: [
                { french: "Ils affirmaient qu'ils avaient vérifié la source.", english: "They claimed they had checked the source" },
                { french: "Le témoin a expliqué qu'il ne savait pas.", english: "The witness explained that he did not know" },
            ] },
        ],
        exercises: [
            { sentence: "Elle a déclaré qu'elle ___ prête.", answer: "était", hint: "Expression étudiée : She stated she was ready" },
            { sentence: "Il a dit qu'il ___ ensuite.", answer: "viendrait", hint: "Expression étudiée : He said he would come later" },
            { sentence: "Ils affirmaient qu'ils ___ la source.", answer: "avaient vérifié", hint: "Expression étudiée : They claimed they had checked the source" },
            { sentence: "Le témoin a expliqué qu'il ___.", answer: "ne savait pas", hint: "Expression étudiée : The witness explained that he did not know" },
        ],
    },
    {
        level: "B2", unit: 3, id: "b2-le-conditionnel-journalistique", title: "Le conditionnel journalistique", description: "The conditional can report information that is not confirmed and mark journalistic distance.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "The conditional can report information that is not confirmed and mark journalistic distance.", examples: [
                { french: "Le projet serait abandonné selon plusieurs sources.", english: "The project has reportedly been abandoned" },
                { french: "Deux responsables auraient quitté leur poste.", english: "Two officials are said to have left their posts" },
            ] },
            { title: "Nuance and context", explanation: "Distinguish reported possibility from the speaker’s own certain assertion.", examples: [
                { french: "L'entreprise préparerait une annonce.", english: "The company is reportedly preparing an announcement" },
                { french: "Une réunion aurait eu lieu hier.", english: "A meeting reportedly took place yesterday" },
            ] },
        ],
        exercises: [
            { sentence: "Le projet ___ abandonné selon plusieurs sources.", answer: "serait", hint: "Expression étudiée : The project has reportedly been abandoned" },
            { sentence: "Deux responsables ___ leur poste.", answer: "auraient quitté", hint: "Expression étudiée : Two officials are said to have left their posts" },
            { sentence: "L'entreprise ___ une annonce.", answer: "préparerait", hint: "Expression étudiée : The company is reportedly preparing an announcement" },
            { sentence: "Une réunion ___ hier.", answer: "aurait eu lieu", hint: "Expression étudiée : A meeting reportedly took place yesterday" },
        ],
    },
    {
        level: "B2", unit: 3, id: "b2-nuancer-la-cause", title: "Nuancer la cause", description: "Differentiate parce que, puisque and dans la mesure où according to what is assumed or justified.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Differentiate parce que, puisque and dans la mesure où according to what is assumed or justified.", examples: [
                { french: "Puisque les chiffres sont publics, comparons-les.", english: "Since the figures are public, let us compare them" },
                { french: "La mesure est nécessaire dans la mesure où elle protège les usagers.", english: "The measure is necessary insofar as it protects users" },
            ] },
            { title: "Nuance and context", explanation: "Faute de and en raison de introduce nominal explanations with different implications.", examples: [
                { french: "Faute de preuves, l'enquête continue.", english: "For lack of evidence, the inquiry continues" },
                { french: "La séance est reportée en raison de la météo.", english: "The session is postponed because of the weather" },
            ] },
        ],
        exercises: [
            { sentence: "___ les chiffres sont publics, comparons-les.", answer: "Puisque", hint: "Expression étudiée : Since the figures are public, let us compare them" },
            { sentence: "La mesure est nécessaire ___ elle protège les usagers.", answer: "dans la mesure où", hint: "Expression étudiée : The measure is necessary insofar as it protects users" },
            { sentence: "___ preuves, l'enquête continue.", answer: "Faute de", hint: "Expression étudiée : For lack of evidence, the inquiry continues" },
            { sentence: "La séance est reportée ___ la météo.", answer: "en raison de", hint: "Expression étudiée : The session is postponed because of the weather" },
        ],
    },
    {
        level: "B2", unit: 4, id: "b2-concession-bien-que-malgre-meme-si", title: "Concession : bien que, malgré, même si", description: "Bien que requires the subjunctive; malgré is followed by a noun phrase.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Bien que requires the subjunctive; malgré is followed by a noun phrase.", examples: [
                { french: "Bien que le projet soit utile, il coûte cher.", english: "Although the project is useful, it is expensive" },
                { french: "Malgré les critiques, elle maintient sa décision.", english: "Despite criticism, she maintains her decision" },
            ] },
            { title: "Nuance and context", explanation: "Même si uses the indicative and often highlights a plausible or real obstacle.", examples: [
                { french: "Même si la situation s'améliore, le débat continue.", english: "Even if it improves, debate continues" },
                { french: "Nous agirons quoique les moyens soient limités.", english: "We will act although resources are limited" },
            ] },
        ],
        exercises: [
            { sentence: "___ le projet soit utile, il coûte cher.", answer: "Bien que", hint: "Expression étudiée : Although the project is useful, it is expensive" },
            { sentence: "___ les critiques, elle maintient sa décision.", answer: "Malgré", hint: "Expression étudiée : Despite criticism, she maintains her decision" },
            { sentence: "___ la situation s'améliore, le débat continue.", answer: "Même si", hint: "Expression étudiée : Even if it improves, debate continues" },
            { sentence: "Nous agirons ___ les moyens soient limités.", answer: "quoique", hint: "Expression étudiée : We will act although resources are limited" },
        ],
    },
    {
        level: "B2", unit: 4, id: "b2-infinitif-present-et-infinitif-passe", title: "Infinitif présent et infinitif passé", description: "Use avoir or être in the infinitive plus the past participle to mark an action completed before another.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Use avoir or être in the infinitive plus the past participle to mark an action completed before another.", examples: [
                { french: "Après avoir lu le rapport, elle a répondu.", english: "After reading the report, she responded" },
                { french: "Il regrette d'être parti trop tôt.", english: "He regrets having left too early" },
            ] },
            { title: "Nuance and context", explanation: "With verbs of reporting or judgment, this distinction can make chronology explicit.", examples: [
                { french: "Ils reconnaissent avoir sous-estimé le coût.", english: "They acknowledge having underestimated the cost" },
                { french: "Merci d'être venu si tôt.", english: "Thank you for having come so early" },
            ] },
        ],
        exercises: [
            { sentence: "Après ___ le rapport, elle a répondu.", answer: "avoir lu", hint: "Expression étudiée : After reading the report, she responded" },
            { sentence: "Il regrette d'___ trop tôt.", answer: "être parti", hint: "Expression étudiée : He regrets having left too early" },
            { sentence: "Ils reconnaissent ___ le coût.", answer: "avoir sous-estimé", hint: "Expression étudiée : They acknowledge having underestimated the cost" },
            { sentence: "Merci d'___ si tôt.", answer: "être venu", hint: "Expression étudiée : Thank you for having come so early" },
        ],
    },
    {
        level: "B2", unit: 4, id: "b2-exprimer-le-but-pour-que-et-afin-que", title: "Exprimer le but : pour que et afin que", description: "Pour que and afin que introduce a clause with a subjunctive verb.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Pour que and afin que introduce a clause with a subjunctive verb.", examples: [
                { french: "Nous adaptons le plan afin que chacun puisse venir.", english: "We adapt the plan so everyone can come" },
                { french: "Elle explique le projet pour que les voisins comprennent.", english: "She explains the project so neighbors understand" },
            ] },
            { title: "Nuance and context", explanation: "When there is only one subject, use pour/afin de followed by an infinitive.", examples: [
                { french: "Il écrit afin de clarifier sa demande.", english: "He writes in order to clarify his request" },
                { french: "Il faut agir de façon que les coûts restent maîtrisés.", english: "We must act so costs stay controlled" },
            ] },
        ],
        exercises: [
            { sentence: "Nous adaptons le plan ___ chacun puisse venir.", answer: "afin que", hint: "Expression étudiée : We adapt the plan so everyone can come" },
            { sentence: "Elle explique le projet ___ les voisins comprennent.", answer: "pour que", hint: "Expression étudiée : She explains the project so neighbors understand" },
            { sentence: "Il écrit ___ clarifier sa demande.", answer: "afin de", hint: "Expression étudiée : He writes in order to clarify his request" },
            { sentence: "Il faut agir ___ les coûts restent maîtrisés.", answer: "de façon que", hint: "Expression étudiée : We must act so costs stay controlled" },
        ],
    },
    {
        level: "B2", unit: 5, id: "b2-subjonctif-et-jugement", title: "Subjonctif et jugement", description: "Use the subjunctive after judgments of necessity, emotion or doubt.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Use the subjunctive after judgments of necessity, emotion or doubt.", examples: [
                { french: "Il est essentiel que chacun participe.", english: "It is essential that everyone take part" },
                { french: "Je suis ravi qu'elle réussisse.", english: "I am delighted she succeeds" },
            ] },
            { title: "Nuance and context", explanation: "In affirmative statements of certainty, the indicative is normally expected instead.", examples: [
                { french: "Il est certain que le programme fonctionne.", english: "It is certain the program works" },
                { french: "Je crains que la mesure ne suffise pas.", english: "I fear the measure may not be enough" },
            ] },
        ],
        exercises: [
            { sentence: "Il est essentiel que chacun ___.", answer: "participe", hint: "Expression étudiée : It is essential that everyone take part" },
            { sentence: "Je suis ravi qu'elle ___.", answer: "réussisse", hint: "Expression étudiée : I am delighted she succeeds" },
            { sentence: "Il est certain que le programme ___.", answer: "fonctionne", hint: "Expression étudiée : It is certain the program works" },
            { sentence: "Je crains que la mesure ne ___ pas.", answer: "suffise", hint: "Expression étudiée : I fear the measure may not be enough" },
        ],
    },
    {
        level: "B2", unit: 5, id: "b2-gerondif-et-participe-present", title: "Gérondif et participe présent", description: "En + present participle links simultaneous action or means to the same subject.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "En + present participle links simultaneous action or means to the same subject.", examples: [
                { french: "Elle apprend en observant les collègues.", english: "She learns by observing colleagues" },
                { french: "Les membres participant au projet sont nombreux.", english: "The members taking part are numerous" },
            ] },
            { title: "Nuance and context", explanation: "A bare present participle can modify a noun or introduce a circumstance, often in formal prose.", examples: [
                { french: "Ayant peu de temps, il a résumé son avis.", english: "Having little time, he summarized his view" },
                { french: "Nous avons avancé en comparant les données.", english: "We moved forward by comparing data" },
            ] },
        ],
        exercises: [
            { sentence: "Elle apprend ___ les collègues.", answer: "en observant", hint: "Expression étudiée : She learns by observing colleagues" },
            { sentence: "Les membres ___ au projet sont nombreux.", answer: "participant", hint: "Expression étudiée : The members taking part are numerous" },
            { sentence: "___ peu de temps, il a résumé son avis.", answer: "Ayant", hint: "Expression étudiée : Having little time, he summarized his view" },
            { sentence: "Nous avons avancé ___ les données.", answer: "en comparant", hint: "Expression étudiée : We moved forward by comparing data" },
        ],
    },
    {
        level: "B2", unit: 5, id: "b2-nominalisation-et-style-formel", title: "Nominalisation et style formel", description: "Nominalizations turn actions into nouns, enabling concise abstract argument.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Nominalizations turn actions into nouns, enabling concise abstract argument.", examples: [
                { french: "La réduction des coûts reste prioritaire.", english: "Cost reduction remains a priority" },
                { french: "L'évaluation du projet est attendue.", english: "Evaluation of the project is expected" },
            ] },
            { title: "Nuance and context", explanation: "Avoid excessive chains of nominalizations when clarity requires naming actors and actions.", examples: [
                { french: "La participation des usagers augmente.", english: "Participation by users is increasing" },
                { french: "Le renforcement des équipes prendra du temps.", english: "Strengthening teams will take time" },
            ] },
        ],
        exercises: [
            { sentence: "La ___ des coûts reste prioritaire.", answer: "réduction", hint: "Expression étudiée : Cost reduction remains a priority" },
            { sentence: "L'___ du projet est attendue.", answer: "évaluation", hint: "Expression étudiée : Evaluation of the project is expected" },
            { sentence: "La ___ des usagers augmente.", answer: "participation", hint: "Expression étudiée : Participation by users is increasing" },
            { sentence: "Le ___ des équipes prendra du temps.", answer: "renforcement", hint: "Expression étudiée : Strengthening teams will take time" },
        ],
    },
    {
        level: "B2", unit: 6, id: "b2-le-subjonctif-passe", title: "Le subjonctif passé", description: "Use the subjunctive of avoir/être plus the past participle to refer to an action completed before the main event or judgment.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Use the subjunctive of avoir/être plus the past participle to refer to an action completed before the main event or judgment.", examples: [
                { french: "Je suis content qu'elle ait réussi.", english: "I am happy she succeeded" },
                { french: "Il est regrettable qu'ils soient partis.", english: "It is regrettable that they left" },
            ] },
            { title: "Nuance and context", explanation: "Distinguish its chronology from the present subjunctive.", examples: [
                { french: "Je doute qu'il ait lu le dossier.", english: "I doubt he read the file" },
                { french: "Nous sommes ravis que vous ayez accepté.", english: "We are delighted you accepted" },
            ] },
        ],
        exercises: [
            { sentence: "Je suis content qu'elle ___.", answer: "ait réussi", hint: "Expression étudiée : I am happy she succeeded" },
            { sentence: "Il est regrettable qu'ils ___.", answer: "soient partis", hint: "Expression étudiée : It is regrettable that they left" },
            { sentence: "Je doute qu'il ___ le dossier.", answer: "ait lu", hint: "Expression étudiée : I doubt he read the file" },
            { sentence: "Nous sommes ravis que vous ___.", answer: "ayez accepté", hint: "Expression étudiée : We are delighted you accepted" },
        ],
    },
    {
        level: "B2", unit: 6, id: "b2-certitude-doute-et-probabilite", title: "Certitude, doute et probabilité", description: "Expressing certainty commonly selects the indicative; doubt and possibility commonly select the subjunctive.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Expressing certainty commonly selects the indicative; doubt and possibility commonly select the subjunctive.", examples: [
                { french: "Il est évident qu'elle a raison.", english: "It is obvious she is right" },
                { french: "Il est possible qu'il soit absent.", english: "It is possible he is absent" },
            ] },
            { title: "Nuance and context", explanation: "Negating or questioning a statement of certainty can change the mood required.", examples: [
                { french: "Je ne suis pas sûr qu'ils puissent venir.", english: "I am not sure they can come" },
                { french: "Nous pensons qu'une solution existe.", english: "We think a solution exists" },
            ] },
        ],
        exercises: [
            { sentence: "Il est évident qu'elle ___ raison.", answer: "a", hint: "Expression étudiée : It is obvious she is right" },
            { sentence: "Il est possible qu'il ___ absent.", answer: "soit", hint: "Expression étudiée : It is possible he is absent" },
            { sentence: "Je ne suis pas sûr qu'ils ___ venir.", answer: "puissent", hint: "Expression étudiée : I am not sure they can come" },
            { sentence: "Nous pensons qu'une solution ___.", answer: "existe", hint: "Expression étudiée : We think a solution exists" },
        ],
    },
    {
        level: "B2", unit: 7, id: "b2-structurer-une-argumentation", title: "Structurer une argumentation", description: "En premier lieu and par ailleurs introduce organized points; en revanche marks contrast.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "En premier lieu and par ailleurs introduce organized points; en revanche marks contrast.", examples: [
                { french: "En premier lieu, examinons les faits.", english: "First, let us examine the facts" },
                { french: "Par ailleurs, le coût doit être évalué.", english: "Furthermore, the cost must be assessed" },
            ] },
            { title: "Nuance and context", explanation: "Dès lors and par conséquent infer conclusions, which should follow evidence rather than replace it.", examples: [
                { french: "En revanche, le dispositif reste accessible.", english: "However, the system remains accessible" },
                { french: "Dès lors, une révision semble nécessaire.", english: "Therefore, a revision seems necessary" },
            ] },
        ],
        exercises: [
            { sentence: "___, examinons les faits.", answer: "En premier lieu", hint: "Expression étudiée : First, let us examine the facts" },
            { sentence: "___, le coût doit être évalué.", answer: "Par ailleurs", hint: "Expression étudiée : Furthermore, the cost must be assessed" },
            { sentence: "___, le dispositif reste accessible.", answer: "En revanche", hint: "Expression étudiée : However, the system remains accessible" },
            { sentence: "___, une révision semble nécessaire.", answer: "Dès lors", hint: "Expression étudiée : Therefore, a revision seems necessary" },
        ],
    },
    {
        level: "B2", unit: 7, id: "b2-restriction-exclusion-et-exception", title: "Restriction, exclusion et exception", description: "Ne... que restricts the scope of a claim; sauf and hormis introduce exceptions.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Ne... que restricts the scope of a claim; sauf and hormis introduce exceptions.", examples: [
                { french: "Il n'a consulté que trois sources.", english: "He consulted only three sources" },
                { french: "Tous sont venus, sauf Nora.", english: "Everyone came except Nora" },
            ] },
            { title: "Nuance and context", explanation: "Sans que + subjunctive expresses an absence of outcome or action involving another subject.", examples: [
                { french: "La règle s'applique, hormis quelques cas.", english: "The rule applies apart from a few cases" },
                { french: "Il est parti sans que personne le voie.", english: "He left without anyone seeing him" },
            ] },
        ],
        exercises: [
            { sentence: "Il n'a consulté ___ trois sources.", answer: "que", hint: "Expression étudiée : He consulted only three sources" },
            { sentence: "Tous sont venus, ___ Nora.", answer: "sauf", hint: "Expression étudiée : Everyone came except Nora" },
            { sentence: "La règle s'applique, ___ quelques cas.", answer: "hormis", hint: "Expression étudiée : The rule applies apart from a few cases" },
            { sentence: "Il est parti ___ personne le voie.", answer: "sans que", hint: "Expression étudiée : He left without anyone seeing him" },
        ],
    },
];
