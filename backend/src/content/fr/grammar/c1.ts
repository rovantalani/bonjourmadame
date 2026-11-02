import type { GrammarLesson } from '../../../types/lectures/grammar';

export const grammarC1: GrammarLesson[] = [
    {
        level: "C1", unit: 1, id: "c1-mise-en-relief-et-clivage-de-linformation", title: "Mise en relief et clivage de l’information", description: "Cleft structures foreground a constituent and reorganize the old/new information balance.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Cleft structures foreground a constituent and reorganize the old/new information balance.", examples: [
                { french: "C'est la méthode qui pose problème.", english: "It is the method that is problematic" },
                { french: "Ce que nous contestons, c'est le calendrier.", english: "What we question is the timetable" },
            ] },
            { title: "Nuance and context", explanation: "What is presented as already accepted can be as important as what is explicitly asserted.", examples: [
                { french: "C'est bien cette différence qui compte.", english: "It is precisely this difference that counts" },
                { french: "Ce dont il s'agit, c'est de confiance.", english: "What this is about is trust" },
            ] },
        ],
        exercises: [
            { sentence: "C'est la méthode ___ pose problème.", answer: "qui", hint: "Expression étudiée : It is the method that is problematic" },
            { sentence: "___ nous contestons, c'est le calendrier.", answer: "Ce que", hint: "Expression étudiée : What we question is the timetable" },
            { sentence: "___ cette différence qui compte.", answer: "C'est bien", hint: "Expression étudiée : It is precisely this difference that counts" },
            { sentence: "___ il s'agit, c'est de confiance.", answer: "Ce dont", hint: "Expression étudiée : What this is about is trust" },
        ],
    },
    {
        level: "C1", unit: 1, id: "c1-modaliser-une-affirmation", title: "Modaliser une affirmation", description: "Use il semble que, à première vue and sous réserve de to grade certainty.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Use il semble que, à première vue and sous réserve de to grade certainty.", examples: [
                { french: "Il semble que les résultats soient cohérents.", english: "The results seem consistent" },
                { french: "À première vue, la méthode paraît efficace.", english: "At first glance, the method seems effective" },
            ] },
            { title: "Nuance and context", explanation: "Nuanced modalities differentiate evidence, inference and tentative evaluation without withdrawing a claim.", examples: [
                { french: "La conclusion vaut sous réserve de vérifications.", english: "The conclusion holds subject to verification" },
                { french: "On peut raisonnablement supposer que le délai sera respecté.", english: "It is reasonable to suppose the deadline will be met" },
            ] },
        ],
        exercises: [
            { sentence: "___ les résultats soient cohérents.", answer: "Il semble que", hint: "Expression étudiée : The results seem consistent" },
            { sentence: "___, la méthode paraît efficace.", answer: "À première vue", hint: "Expression étudiée : At first glance, the method seems effective" },
            { sentence: "La conclusion vaut ___ vérifications.", answer: "sous réserve de", hint: "Expression étudiée : The conclusion holds subject to verification" },
            { sentence: "On ___ que le délai sera respecté.", answer: "peut raisonnablement supposer", hint: "Expression étudiée : It is reasonable to suppose the deadline will be met" },
        ],
    },
    {
        level: "C1", unit: 1, id: "c1-presupposition-et-implicite", title: "Présupposition et implicite", description: "Presuppositions present a proposition as already shared, even when it is debatable.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Presuppositions present a proposition as already shared, even when it is debatable.", examples: [
                { french: "Il a cessé de publier ces chiffres.", english: "He stopped publishing these figures" },
                { french: "Elle regrette que le débat soit clos.", english: "She regrets that the debate is closed" },
            ] },
            { title: "Nuance and context", explanation: "Verbs such as cesser de or regretter may carry presupposed background meaning that merits scrutiny.", examples: [
                { french: "La prétendue évidence mérite examen.", english: "The alleged obviousness deserves scrutiny" },
                { french: "Cette réforme est encore contestée.", english: "This reform is still being contested" },
            ] },
        ],
        exercises: [
            { sentence: "Il a ___ publier ces chiffres.", answer: "cessé de", hint: "Expression étudiée : He stopped publishing these figures" },
            { sentence: "Elle ___ le débat soit clos.", answer: "regrette que", hint: "Expression étudiée : She regrets that the debate is closed" },
            { sentence: "La ___ évidence mérite examen.", answer: "prétendue", hint: "Expression étudiée : The alleged obviousness deserves scrutiny" },
            { sentence: "Cette réforme est ___ contestée.", answer: "encore", hint: "Expression étudiée : This reform is still being contested" },
        ],
    },
    {
        level: "C1", unit: 2, id: "c1-concession-complexe-et-subjonctif", title: "Concession complexe et subjonctif", description: "Quoique, encore que and non que express more sophisticated concessions or corrections, with the subjunctive.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Quoique, encore que and non que express more sophisticated concessions or corrections, with the subjunctive.", examples: [
                { french: "Quoique la mesure soit utile, elle demeure contestée.", english: "Although the measure is useful, it remains contested" },
                { french: "Encore que ce point soit discutable.", english: "Although this point is debatable" },
            ] },
            { title: "Nuance and context", explanation: "Unlike même si, these constructions often evaluate a proposition rather than a mere possibility.", examples: [
                { french: "Non que la décision soit illégale, elle manque de clarté.", english: "Not that the decision is illegal, but it lacks clarity" },
                { french: "Bien que les avis divergent, un accord reste envisageable.", english: "Although views differ, agreement remains possible" },
            ] },
        ],
        exercises: [
            { sentence: "___ la mesure soit utile, elle demeure contestée.", answer: "Quoique", hint: "Expression étudiée : Although the measure is useful, it remains contested" },
            { sentence: "___ ce point soit discutable.", answer: "Encore que", hint: "Expression étudiée : Although this point is debatable" },
            { sentence: "___ la décision soit illégale, elle manque de clarté.", answer: "Non que", hint: "Expression étudiée : Not that the decision is illegal, but it lacks clarity" },
            { sentence: "___ les avis divergent, un accord reste envisageable.", answer: "Bien que", hint: "Expression étudiée : Although views differ, agreement remains possible" },
        ],
    },
    {
        level: "C1", unit: 2, id: "c1-linterrogation-indirecte-elaboree", title: "L’interrogation indirecte élaborée", description: "Indirect questions retain interrogative sense without direct question word order or punctuation.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Indirect questions retain interrogative sense without direct question word order or punctuation.", examples: [
                { french: "Nous ignorons ce qui a motivé ce choix.", english: "We do not know what motivated that choice" },
                { french: "Elle demande dans quelle mesure le projet est viable.", english: "She asks to what extent the project is viable" },
            ] },
            { title: "Nuance and context", explanation: "Use ce qui, ce que and comment to identify unknown subjects, objects or methods.", examples: [
                { french: "Il faut comprendre comment la règle s'applique.", english: "We must understand how the rule applies" },
                { french: "La question est de savoir si la procédure est légitime.", english: "The question is whether the procedure is legitimate" },
            ] },
        ],
        exercises: [
            { sentence: "Nous ignorons ___ a motivé ce choix.", answer: "ce qui", hint: "Expression étudiée : We do not know what motivated that choice" },
            { sentence: "Elle demande ___ le projet est viable.", answer: "dans quelle mesure", hint: "Expression étudiée : She asks to what extent the project is viable" },
            { sentence: "Il faut comprendre ___ la règle s'applique.", answer: "comment", hint: "Expression étudiée : We must understand how the rule applies" },
            { sentence: "La question est de savoir ___ la procédure est légitime.", answer: "si", hint: "Expression étudiée : The question is whether the procedure is legitimate" },
        ],
    },
    {
        level: "C1", unit: 2, id: "c1-exprimer-reserve-et-condition", title: "Exprimer réserve et condition", description: "À condition que and pourvu que take the subjunctive, whereas dans l’hypothèse où usually takes the conditional.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "À condition que and pourvu que take the subjunctive, whereas dans l’hypothèse où usually takes the conditional.", examples: [
                { french: "Le projet réussira à condition que chacun coopère.", english: "The project will succeed provided everyone cooperates" },
                { french: "Pourvu que la consultation reste ouverte.", english: "Provided consultation remains open" },
            ] },
            { title: "Nuance and context", explanation: "Keep conditions distinct from reservations about evidence or implementation.", examples: [
                { french: "Dans l'hypothèse où le budget diminuerait, il faudrait adapter le plan.", english: "If the budget were to shrink, the plan would need adapting" },
                { french: "Nous approuvons la proposition sous réserve que le coût soit justifié.", english: "We approve provided the cost is justified" },
            ] },
        ],
        exercises: [
            { sentence: "Le projet réussira ___ chacun coopère.", answer: "à condition que", hint: "Expression étudiée : The project will succeed provided everyone cooperates" },
            { sentence: "___ la consultation reste ouverte.", answer: "Pourvu que", hint: "Expression étudiée : Provided consultation remains open" },
            { sentence: "___ le budget diminuerait, il faudrait adapter le plan.", answer: "Dans l'hypothèse où", hint: "Expression étudiée : If the budget were to shrink, the plan would need adapting" },
            { sentence: "Nous approuvons la proposition ___ le coût soit justifié.", answer: "sous réserve que", hint: "Expression étudiée : We approve provided the cost is justified" },
        ],
    },
    {
        level: "C1", unit: 3, id: "c1-nominalisation-et-densite-argumentative", title: "Nominalisation et densité argumentative", description: "Nominalizations condense processes into abstract entities used in analysis.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Nominalizations condense processes into abstract entities used in analysis.", examples: [
                { french: "La remise en question du modèle se poursuit.", english: "Questioning of the model continues" },
                { french: "Cette mise en œuvre exige des moyens.", english: "This implementation requires resources" },
            ] },
            { title: "Nuance and context", explanation: "Balance nominal density with active clauses to identify causes, agents and responsibility.", examples: [
                { french: "L'accroissement des écarts inquiète.", english: "The widening of gaps is worrying" },
                { french: "La reconnaissance du problème reste tardive.", english: "Recognition of the problem remains late" },
            ] },
        ],
        exercises: [
            { sentence: "La ___ du modèle se poursuit.", answer: "remise en question", hint: "Expression étudiée : Questioning of the model continues" },
            { sentence: "Cette ___ exige des moyens.", answer: "mise en œuvre", hint: "Expression étudiée : This implementation requires resources" },
            { sentence: "L'___ des écarts inquiète.", answer: "accroissement", hint: "Expression étudiée : The widening of gaps is worrying" },
            { sentence: "La ___ du problème reste tardive.", answer: "reconnaissance", hint: "Expression étudiée : Recognition of the problem remains late" },
        ],
    },
    {
        level: "C1", unit: 3, id: "c1-participes-et-propositions-reduites", title: "Participes et propositions réduites", description: "Present participial and past-participle adjuncts compress causal or temporal information in formal prose.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Present participial and past-participle adjuncts compress causal or temporal information in formal prose.", examples: [
                { french: "Ayant analysé les données, l'équipe a révisé son avis.", english: "Having analyzed the data, the team revised its view" },
                { french: "Le protocole validé hier sera publié.", english: "The protocol approved yesterday will be published" },
            ] },
            { title: "Nuance and context", explanation: "Ensure the implied subject is recoverable and avoid dangling modifiers.", examples: [
                { french: "Faute de disposer des chiffres, nous différons la décision.", english: "Lacking the figures, we postpone the decision" },
                { french: "Les auteurs, conscients des limites, restent prudents.", english: "The authors, aware of the limits, remain cautious" },
            ] },
        ],
        exercises: [
            { sentence: "___ les données, l'équipe a révisé son avis.", answer: "Ayant analysé", hint: "Expression étudiée : Having analyzed the data, the team revised its view" },
            { sentence: "Le protocole ___ hier sera publié.", answer: "validé", hint: "Expression étudiée : The protocol approved yesterday will be published" },
            { sentence: "___ des chiffres, nous différons la décision.", answer: "Faute de disposer", hint: "Expression étudiée : Lacking the figures, we postpone the decision" },
            { sentence: "Les auteurs, ___ des limites, restent prudents.", answer: "conscients", hint: "Expression étudiée : The authors, aware of the limits, remain cautious" },
        ],
    },
    {
        level: "C1", unit: 3, id: "c1-valeurs-du-conditionnel-et-prudence", title: "Valeurs du conditionnel et prudence", description: "The conditional may express conjecture, reported information or hypothetical consequence.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "The conditional may express conjecture, reported information or hypothetical consequence.", examples: [
                { french: "Le résultat serait plus faible selon une source.", english: "The result is reportedly lower" },
                { french: "Cette découverte pourrait modifier la méthode.", english: "This discovery could change the method" },
            ] },
            { title: "Nuance and context", explanation: "Interpret its value in context: the same form does not always signal the same degree of evidence.", examples: [
                { french: "On aurait observé une baisse, sans confirmation.", english: "A decline was reportedly observed" },
                { french: "À sa place, je réexaminerais l'hypothèse.", english: "In their place I would re-examine the hypothesis" },
            ] },
        ],
        exercises: [
            { sentence: "Le résultat ___ plus faible selon une source.", answer: "serait", hint: "Expression étudiée : The result is reportedly lower" },
            { sentence: "Cette découverte ___ modifier la méthode.", answer: "pourrait", hint: "Expression étudiée : This discovery could change the method" },
            { sentence: "On ___ une baisse, sans confirmation.", answer: "aurait observé", hint: "Expression étudiée : A decline was reportedly observed" },
            { sentence: "À sa place, je ___ l'hypothèse.", answer: "réexaminerais", hint: "Expression étudiée : In their place I would re-examine the hypothesis" },
        ],
    },
    {
        level: "C1", unit: 4, id: "c1-relative-complexe-et-antecedent-abstrait", title: "Relative complexe et antécédent abstrait", description: "Dont and compound relatives connect abstract complements without repetition.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Dont and compound relatives connect abstract complements without repetition.", examples: [
                { french: "Voici l'œuvre dont nous parlions.", english: "This is the work we spoke of" },
                { french: "C'est le cadre dans lequel l'artiste travaille.", english: "That is the framework in which the artist works" },
            ] },
            { title: "Nuance and context", explanation: "The correct relative depends on the preposition required by the verb or noun.", examples: [
                { french: "Les critères auxquels nous nous référons sont publics.", english: "The criteria to which we refer are public" },
                { french: "L'époque à laquelle il fait allusion reste ambiguë.", english: "The period to which he alludes remains ambiguous" },
            ] },
        ],
        exercises: [
            { sentence: "Voici l'œuvre ___ nous parlions.", answer: "dont", hint: "Expression étudiée : This is the work we spoke of" },
            { sentence: "C'est le cadre ___ l'artiste travaille.", answer: "dans lequel", hint: "Expression étudiée : That is the framework in which the artist works" },
            { sentence: "Les critères ___ nous nous référons sont publics.", answer: "auxquels", hint: "Expression étudiée : The criteria to which we refer are public" },
            { sentence: "L'époque ___ il fait allusion reste ambiguë.", answer: "à laquelle", hint: "Expression étudiée : The period to which he alludes remains ambiguous" },
        ],
    },
    {
        level: "C1", unit: 4, id: "c1-les-temps-du-recit-et-le-point-de-vue", title: "Les temps du récit et le point de vue", description: "Past tenses place foreground events, habitual context and anteriority at different temporal levels.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Past tenses place foreground events, habitual context and anteriority at different temporal levels.", examples: [
                { french: "Il avait quitté la ville quand la lettre arriva.", english: "He had left the city when the letter arrived" },
                { french: "Chaque soir, elle relisait ces pages.", english: "Every evening she reread these pages" },
            ] },
            { title: "Nuance and context", explanation: "Literary accounts may employ the passé simple in place of passé composé to advance a narrative.", examples: [
                { french: "Le narrateur découvrit enfin le manuscrit.", english: "The narrator finally discovered the manuscript" },
                { french: "Ce matin-là, tout semblait immobile.", english: "That morning everything seemed motionless" },
            ] },
        ],
        exercises: [
            { sentence: "Il ___ la ville quand la lettre arriva.", answer: "avait quitté", hint: "Expression étudiée : He had left the city when the letter arrived" },
            { sentence: "Chaque soir, elle ___ ces pages.", answer: "relisait", hint: "Expression étudiée : Every evening she reread these pages" },
            { sentence: "Le narrateur ___ enfin le manuscrit.", answer: "découvrit", hint: "Expression étudiée : The narrator finally discovered the manuscript" },
            { sentence: "Ce matin-là, tout ___ immobile.", answer: "semblait", hint: "Expression étudiée : That morning everything seemed motionless" },
        ],
    },
    {
        level: "C1", unit: 4, id: "c1-jugement-critique-et-restriction", title: "Jugement critique et restriction", description: "À ceci près que, il n’en demeure pas moins que and force est de constater signal reservations.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "À ceci près que, il n’en demeure pas moins que and force est de constater signal reservations.", examples: [
                { french: "La thèse est convaincante, à ceci près que les sources manquent.", english: "The thesis is convincing, except that sources are lacking" },
                { french: "Il n'en demeure pas moins que l'œuvre est singulière.", english: "Nonetheless the work remains distinctive" },
            ] },
            { title: "Nuance and context", explanation: "These forms frame disagreement without abandoning the main line of argument.", examples: [
                { french: "Force est de constater que l'accueil fut mitigé.", english: "It must be acknowledged that reception was mixed" },
                { french: "Cette lecture est stimulante, encore faut-il en vérifier les prémisses.", english: "This reading is stimulating, but its premises must be checked" },
            ] },
        ],
        exercises: [
            { sentence: "La thèse est convaincante, ___ les sources manquent.", answer: "à ceci près que", hint: "Expression étudiée : The thesis is convincing, except that sources are lacking" },
            { sentence: "___ l'œuvre est singulière.", answer: "Il n'en demeure pas moins que", hint: "Expression étudiée : Nonetheless the work remains distinctive" },
            { sentence: "___ l'accueil fut mitigé.", answer: "Force est de constater que", hint: "Expression étudiée : It must be acknowledged that reception was mixed" },
            { sentence: "Cette lecture est stimulante, ___ en vérifier les prémisses.", answer: "encore faut-il", hint: "Expression étudiée : This reading is stimulating, but its premises must be checked" },
        ],
    },
    {
        level: "C1", unit: 5, id: "c1-enchainer-des-relations-logiques-complexes", title: "Enchaîner des relations logiques complexes", description: "Use pour autant, dès lors, en dépit de and à l’inverse to organize nuanced reasoning.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Use pour autant, dès lors, en dépit de and à l’inverse to organize nuanced reasoning.", examples: [
                { french: "Le coût baisse. Pour autant, les risques subsistent.", english: "Costs fall. Nevertheless risks remain" },
                { french: "Le contexte a changé. Dès lors, la mesure doit être revue.", english: "The context has changed. Therefore the measure must be revised" },
            ] },
            { title: "Nuance and context", explanation: "Connectors express specific logical relationships; do not treat them as interchangeable decorations.", examples: [
                { french: "En dépit de ces réserves, le projet continue.", english: "Despite these reservations, the project continues" },
                { french: "À l'inverse, certains quartiers progressent.", english: "Conversely some neighborhoods improve" },
            ] },
        ],
        exercises: [
            { sentence: "Le coût baisse. ___, les risques subsistent.", answer: "Pour autant", hint: "Expression étudiée : Costs fall. Nevertheless risks remain" },
            { sentence: "Le contexte a changé. ___, la mesure doit être revue.", answer: "Dès lors", hint: "Expression étudiée : The context has changed. Therefore the measure must be revised" },
            { sentence: "___ ces réserves, le projet continue.", answer: "En dépit de", hint: "Expression étudiée : Despite these reservations, the project continues" },
            { sentence: "___, certains quartiers progressent.", answer: "À l'inverse", hint: "Expression étudiée : Conversely some neighborhoods improve" },
        ],
    },
    {
        level: "C1", unit: 5, id: "c1-la-voix-passive-et-leffacement-de-lagent", title: "La voix passive et l’effacement de l’agent", description: "Passive constructions can appropriately foreground processes or results.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Passive constructions can appropriately foreground processes or results.", examples: [
                { french: "Les critères ont été modifiés hier.", english: "The criteria were modified yesterday" },
                { french: "Des erreurs auraient été commises.", english: "Errors are alleged to have been made" },
            ] },
            { title: "Nuance and context", explanation: "Analyze whether suppressing the agent clarifies the account or obscures responsibility.", examples: [
                { french: "La mesure sera évaluée en juin.", english: "The measure will be assessed in June" },
                { french: "La décision fut annoncée sans explication.", english: "The decision was announced without explanation" },
            ] },
        ],
        exercises: [
            { sentence: "Les critères ___ hier.", answer: "ont été modifiés", hint: "Expression étudiée : The criteria were modified yesterday" },
            { sentence: "Des erreurs ___.", answer: "auraient été commises", hint: "Expression étudiée : Errors are alleged to have been made" },
            { sentence: "La mesure ___ en juin.", answer: "sera évaluée", hint: "Expression étudiée : The measure will be assessed in June" },
            { sentence: "La décision ___ sans explication.", answer: "fut annoncée", hint: "Expression étudiée : The decision was announced without explanation" },
        ],
    },
    {
        level: "C1", unit: 5, id: "c1-exprimer-lhypothese-sous-plusieurs-formes", title: "Exprimer l’hypothèse sous plusieurs formes", description: "Au cas où takes the conditional; à supposer que and pour peu que take the subjunctive.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Au cas où takes the conditional; à supposer que and pour peu que take the subjunctive.", examples: [
                { french: "Au cas où le budget serait réduit, prévoyons un plan B.", english: "In case the budget is cut, let us plan an alternative" },
                { french: "À supposer que ce chiffre soit exact, la tendance demeure.", english: "Assuming the figure is correct, the trend remains" },
            ] },
            { title: "Nuance and context", explanation: "Choose a form that matches plausibility and rhetorical stance.", examples: [
                { french: "Pour peu que les moyens suivent, le projet aboutira.", english: "Provided resources follow, the project will succeed" },
                { french: "Si tant est que l'accord soit possible, il faudra négocier.", english: "If agreement is even possible, negotiation will be needed" },
            ] },
        ],
        exercises: [
            { sentence: "___ le budget serait réduit, prévoyons un plan B.", answer: "Au cas où", hint: "Expression étudiée : In case the budget is cut, let us plan an alternative" },
            { sentence: "___ ce chiffre soit exact, la tendance demeure.", answer: "À supposer que", hint: "Expression étudiée : Assuming the figure is correct, the trend remains" },
            { sentence: "___ les moyens suivent, le projet aboutira.", answer: "Pour peu que", hint: "Expression étudiée : Provided resources follow, the project will succeed" },
            { sentence: "___ l'accord soit possible, il faudra négocier.", answer: "Si tant est que", hint: "Expression étudiée : If agreement is even possible, negotiation will be needed" },
        ],
    },
    {
        level: "C1", unit: 6, id: "c1-discours-rapporte-et-distance-enonciative", title: "Discours rapporté et distance énonciative", description: "Attribution verbs such as soutenir, prétendre and concéder signal different degrees of commitment.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Attribution verbs such as soutenir, prétendre and concéder signal different degrees of commitment.", examples: [
                { french: "Le rapport soutient que le risque est limité.", english: "The report maintains that risk is limited" },
                { french: "L'auteur prétend que le débat est clos.", english: "The author claims the debate is closed" },
            ] },
            { title: "Nuance and context", explanation: "Keep the cited speaker’s stance separate from the reporting author’s evaluation.", examples: [
                { french: "Elle concède que des erreurs existent.", english: "She concedes that mistakes exist" },
                { french: "Ils mettent en doute la fiabilité du chiffre.", english: "They question the reliability of the figure" },
            ] },
        ],
        exercises: [
            { sentence: "Le rapport ___ le risque est limité.", answer: "soutient que", hint: "Expression étudiée : The report maintains that risk is limited" },
            { sentence: "L'auteur ___ le débat est clos.", answer: "prétend que", hint: "Expression étudiée : The author claims the debate is closed" },
            { sentence: "Elle ___ des erreurs existent.", answer: "concède que", hint: "Expression étudiée : She concedes that mistakes exist" },
            { sentence: "Ils ___ la fiabilité du chiffre.", answer: "mettent en doute", hint: "Expression étudiée : They question the reliability of the figure" },
        ],
    },
    {
        level: "C1", unit: 6, id: "c1-reformulation-et-cohesion-du-texte", title: "Reformulation et cohésion du texte", description: "Autrement dit, en d’autres termes and cela revient à recast a claim while maintaining logical links.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Autrement dit, en d’autres termes and cela revient à recast a claim while maintaining logical links.", examples: [
                { french: "Autrement dit, le financement reste incertain.", english: "In other words funding remains uncertain" },
                { french: "En d'autres termes, la règle doit être clarifiée.", english: "In other terms the rule must be clarified" },
            ] },
            { title: "Nuance and context", explanation: "Good reformulation changes expression without silently strengthening or weakening the source.", examples: [
                { french: "Cela revient à déplacer le problème.", english: "That amounts to shifting the problem" },
                { french: "Il s'agit moins de choisir que de justifier.", english: "It is less a matter of choosing than justifying" },
            ] },
        ],
        exercises: [
            { sentence: "___, le financement reste incertain.", answer: "Autrement dit", hint: "Expression étudiée : In other words funding remains uncertain" },
            { sentence: "___, la règle doit être clarifiée.", answer: "En d'autres termes", hint: "Expression étudiée : In other terms the rule must be clarified" },
            { sentence: "Cela ___ déplacer le problème.", answer: "revient à", hint: "Expression étudiée : That amounts to shifting the problem" },
            { sentence: "___ choisir que de justifier.", answer: "Il s'agit moins de", hint: "Expression étudiée : It is less a matter of choosing than justifying" },
        ],
    },
    {
        level: "C1", unit: 7, id: "c1-construire-une-synthese-nuancee", title: "Construire une synthèse nuancée", description: "Selon, tandis que and quant à separate evidence and positions rather than flattening disagreement.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Selon, tandis que and quant à separate evidence and positions rather than flattening disagreement.", examples: [
                { french: "Selon la première étude, l'effet est limité.", english: "According to the first study the effect is limited" },
                { french: "Une source soutient le projet, tandis que l'autre le critique.", english: "One source supports the project while the other criticizes it" },
            ] },
            { title: "Nuance and context", explanation: "A synthesis should attribute claims and indicate the strength of available support.", examples: [
                { french: "Quant à la troisième étude, elle reste prudente.", english: "As for the third study, it remains cautious" },
                { french: "Les documents convergent sur plusieurs constats.", english: "The documents converge on several findings" },
            ] },
        ],
        exercises: [
            { sentence: "___ la première étude, l'effet est limité.", answer: "Selon", hint: "Expression étudiée : According to the first study the effect is limited" },
            { sentence: "Une source soutient le projet, ___ l'autre le critique.", answer: "tandis que", hint: "Expression étudiée : One source supports the project while the other criticizes it" },
            { sentence: "___ la troisième étude, elle reste prudente.", answer: "Quant à", hint: "Expression étudiée : As for the third study, it remains cautious" },
            { sentence: "Les documents ___ plusieurs constats.", answer: "convergent sur", hint: "Expression étudiée : The documents converge on several findings" },
        ],
    },
    {
        level: "C1", unit: 7, id: "c1-anticiper-lobjection-et-y-repondre", title: "Anticiper l’objection et y répondre", description: "Certes... mais, on objectera que and il reste que grant or reframe objections while defending a position.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Certes... mais, on objectera que and il reste que grant or reframe objections while defending a position.", examples: [
                { french: "Certes, le dispositif coûte cher, mais il est utile.", english: "Admittedly the scheme is costly, but it is useful" },
                { french: "On objectera que les données sont partielles.", english: "One may object that the data are partial" },
            ] },
            { title: "Nuance and context", explanation: "Avoid token concessions that fail to engage with the opposing argument.", examples: [
                { french: "Il reste que la demande existe.", english: "The fact remains that demand exists" },
                { french: "Encore faut-il démontrer cet avantage.", english: "The advantage still needs to be demonstrated" },
            ] },
        ],
        exercises: [
            { sentence: "___, le dispositif coûte cher, mais il est utile.", answer: "Certes", hint: "Expression étudiée : Admittedly the scheme is costly, but it is useful" },
            { sentence: "___ les données sont partielles.", answer: "On objectera que", hint: "Expression étudiée : One may object that the data are partial" },
            { sentence: "___ la demande existe.", answer: "Il reste que", hint: "Expression étudiée : The fact remains that demand exists" },
            { sentence: "___ démontrer cet avantage.", answer: "Encore faut-il", hint: "Expression étudiée : The advantage still needs to be demonstrated" },
        ],
    },
];
