import type { GrammarLesson } from '../../../types/lectures/grammar';

export const grammarB1: GrammarLesson[] = [
    {
        level: "B1", unit: 1, id: "b1-passe-compose-et-imparfait-raconter", title: "Passé composé et imparfait : raconter", description: "Use passé composé for bounded foreground events; use imparfait for ongoing situations or habitual background.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Use passé composé for bounded foreground events; use imparfait for ongoing situations or habitual background.", examples: [
                { french: "Hier, il pleuvait quand je suis sorti.", english: "It was raining when I went out" },
                { french: "Elle a déménagé en septembre.", english: "She moved in September" },
            ] },
            { title: "Nuance and context", explanation: "In narrative, the contrast signals which events advance the story and which describe its circumstances.", examples: [
                { french: "Nous habitions près du lycée.", english: "We used to live near the school" },
                { french: "Tout à coup, le téléphone a sonné.", english: "Suddenly the telephone rang" },
            ] },
        ],
        exercises: [
            { sentence: "Hier, il ___ quand je suis sorti.", answer: "pleuvait", hint: "Expression étudiée : It was raining when I went out" },
            { sentence: "Elle ___ en septembre.", answer: "a déménagé", hint: "Expression étudiée : She moved in September" },
            { sentence: "Nous ___ près du lycée.", answer: "habitions", hint: "Expression étudiée : We used to live near the school" },
            { sentence: "Tout à coup, le téléphone ___.", answer: "a sonné", hint: "Expression étudiée : Suddenly the telephone rang" },
        ],
    },
    {
        level: "B1", unit: 1, id: "b1-le-plus-que-parfait", title: "Le plus-que-parfait", description: "Form the pluperfect with imperfect avoir or être and a past participle.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Form the pluperfect with imperfect avoir or être and a past participle.", examples: [
                { french: "J'avais oublié mon billet.", english: "I had forgotten my ticket" },
                { french: "Elle était partie avant midi.", english: "She had left before noon" },
            ] },
            { title: "Nuance and context", explanation: "It describes an event completed before another past reference point.", examples: [
                { french: "Nous avions réservé la salle.", english: "We had booked the room" },
                { french: "Quand il est arrivé, le film avait commencé.", english: "When he arrived, the film had started" },
            ] },
        ],
        exercises: [
            { sentence: "J'___ mon billet.", answer: "avais oublié", hint: "Expression étudiée : I had forgotten my ticket" },
            { sentence: "Elle ___ avant midi.", answer: "était partie", hint: "Expression étudiée : She had left before noon" },
            { sentence: "Nous ___ la salle.", answer: "avions réservé", hint: "Expression étudiée : We had booked the room" },
            { sentence: "Quand il est arrivé, le film ___.", answer: "avait commencé", hint: "Expression étudiée : When he arrived, the film had started" },
        ],
    },
    {
        level: "B1", unit: 1, id: "b1-exprimer-cause-et-consequence", title: "Exprimer cause et conséquence", description: "Use parce que, comme, puisque to state reasons with differing emphasis.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Use parce que, comme, puisque to state reasons with differing emphasis.", examples: [
                { french: "Comme il était tard, nous sommes partis.", english: "As it was late, we left" },
                { french: "Je suis resté parce que j'attendais un ami.", english: "I stayed because I was waiting for a friend" },
            ] },
            { title: "Nuance and context", explanation: "Donc, c’est pourquoi and si bien que express consequences, not their causes.", examples: [
                { french: "Il a travaillé dur, donc il a réussi.", english: "He worked hard, so he succeeded" },
                { french: "Le bus était annulé, c'est pourquoi nous avons marché.", english: "The bus was cancelled, which is why we walked" },
            ] },
        ],
        exercises: [
            { sentence: "___ il était tard, nous sommes partis.", answer: "Comme", hint: "Expression étudiée : As it was late, we left" },
            { sentence: "Je suis resté ___ j'attendais un ami.", answer: "parce que", hint: "Expression étudiée : I stayed because I was waiting for a friend" },
            { sentence: "Il a travaillé dur, ___ il a réussi.", answer: "donc", hint: "Expression étudiée : He worked hard, so he succeeded" },
            { sentence: "Le bus était annulé, ___ nous avons marché.", answer: "c'est pourquoi", hint: "Expression étudiée : The bus was cancelled, which is why we walked" },
        ],
    },
    {
        level: "B1", unit: 2, id: "b1-les-relatifs-qui-que-et-ou", title: "Les relatifs qui, que et où", description: "Qui replaces the subject of the relative clause; que replaces the direct object.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Qui replaces the subject of the relative clause; que replaces the direct object.", examples: [
                { french: "C'est une personne qui aide les autres.", english: "She is a person who helps others" },
                { french: "Voici le livre que tu m'as prêté.", english: "Here is the book that you lent me" },
            ] },
            { title: "Nuance and context", explanation: "Où refers to places or times and connects clauses without repeating the noun.", examples: [
                { french: "C'est la ville où j'ai grandi.", english: "This is the city where I grew up" },
                { french: "Le jour où nous nous sommes rencontrés était pluvieux.", english: "The day when we met was rainy" },
            ] },
        ],
        exercises: [
            { sentence: "C'est une personne ___ aide les autres.", answer: "qui", hint: "Expression étudiée : She is a person who helps others" },
            { sentence: "Voici le livre ___ tu m'as prêté.", answer: "que", hint: "Expression étudiée : Here is the book that you lent me" },
            { sentence: "C'est la ville ___ j'ai grandi.", answer: "où", hint: "Expression étudiée : This is the city where I grew up" },
            { sentence: "Le jour ___ nous nous sommes rencontrés était pluvieux.", answer: "où", hint: "Expression étudiée : The day when we met was rainy" },
        ],
    },
    {
        level: "B1", unit: 2, id: "b1-les-pronoms-complements-cod-et-coi", title: "Les pronoms compléments : COD et COI", description: "Use le/la/les for direct objects and lui/leur for indirect objects introduced by à.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Use le/la/les for direct objects and lui/leur for indirect objects introduced by à.", examples: [
                { french: "Je lui téléphone demain.", english: "I am calling her tomorrow" },
                { french: "Tu les connais bien.", english: "You know them well" },
            ] },
            { title: "Nuance and context", explanation: "Place these pronouns before the conjugated verb; in an infinitive construction, place them before the infinitive they complement.", examples: [
                { french: "Elle veut leur parler.", english: "She wants to speak to them" },
                { french: "Nous le voyons souvent.", english: "We see him often" },
            ] },
        ],
        exercises: [
            { sentence: "Je ___ téléphone demain.", answer: "lui", hint: "Expression étudiée : I am calling her tomorrow" },
            { sentence: "Tu ___ connais bien.", answer: "les", hint: "Expression étudiée : You know them well" },
            { sentence: "Elle veut ___ parler.", answer: "leur", hint: "Expression étudiée : She wants to speak to them" },
            { sentence: "Nous ___ voyons souvent.", answer: "le", hint: "Expression étudiée : We see him often" },
        ],
    },
    {
        level: "B1", unit: 2, id: "b1-exprimer-le-but-et-lobligation", title: "Exprimer le but et l’obligation", description: "Pour + infinitive expresses a goal when the subject stays the same.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Pour + infinitive expresses a goal when the subject stays the same.", examples: [
                { french: "Je m'entraîne pour progresser.", english: "I practise in order to improve" },
                { french: "Je ferme la porte pour que tu puisses dormir.", english: "I close the door so you can sleep" },
            ] },
            { title: "Nuance and context", explanation: "Pour que + subjunctive introduces a purpose with a new subject; il faut and devoir express obligations.", examples: [
                { french: "Il faut apporter son badge.", english: "You must bring your badge" },
                { french: "Nous devons répondre avant vendredi.", english: "We must reply before Friday" },
            ] },
        ],
        exercises: [
            { sentence: "Je m'entraîne ___ progresser.", answer: "pour", hint: "Expression étudiée : I practise in order to improve" },
            { sentence: "Je ferme la porte ___ tu puisses dormir.", answer: "pour que", hint: "Expression étudiée : I close the door so you can sleep" },
            { sentence: "Il ___ apporter son badge.", answer: "faut", hint: "Expression étudiée : You must bring your badge" },
            { sentence: "Nous ___ répondre avant vendredi.", answer: "devons", hint: "Expression étudiée : We must reply before Friday" },
        ],
    },
    {
        level: "B1", unit: 3, id: "b1-le-discours-rapporte-au-present", title: "Le discours rapporté au présent", description: "Use dire que for statements and demander si for yes/no questions.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Use dire que for statements and demander si for yes/no questions.", examples: [
                { french: "Il dit qu'il sera absent.", english: "He says he will be absent" },
                { french: "Elle demande si nous sommes prêts.", english: "She asks whether we are ready" },
            ] },
            { title: "Nuance and context", explanation: "Pronouns and time references must be adjusted when reporting another person’s words.", examples: [
                { french: "Ils expliquent que la réunion commence à huit heures.", english: "They explain that the meeting begins at eight" },
                { french: "Tu me demandes où je travaille.", english: "You ask me where I work" },
            ] },
        ],
        exercises: [
            { sentence: "Il dit ___ sera absent.", answer: "qu'il", hint: "Expression étudiée : He says he will be absent" },
            { sentence: "Elle demande ___ nous sommes prêts.", answer: "si", hint: "Expression étudiée : She asks whether we are ready" },
            { sentence: "Ils expliquent ___ la réunion commence à huit heures.", answer: "que", hint: "Expression étudiée : They explain that the meeting begins at eight" },
            { sentence: "Tu me demandes ___ je travaille.", answer: "où", hint: "Expression étudiée : You ask me where I work" },
        ],
    },
    {
        level: "B1", unit: 3, id: "b1-le-gerondif-en-participe-present", title: "Le gérondif : en + participe présent", description: "Form the gerund with en plus the -ant form, normally based on the nous present stem.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Form the gerund with en plus the -ant form, normally based on the nous present stem.", examples: [
                { french: "Il apprend en lisant la presse.", english: "He learns by reading the press" },
                { french: "Elle téléphone en marchant.", english: "She makes calls while walking" },
            ] },
            { title: "Nuance and context", explanation: "It expresses simultaneous action, manner, or means, typically with the same subject.", examples: [
                { french: "On progresse en pratiquant régulièrement.", english: "You improve by practising regularly" },
                { french: "Nous préparons le dîner en discutant.", english: "We prepare dinner while talking" },
            ] },
        ],
        exercises: [
            { sentence: "Il apprend ___ la presse.", answer: "en lisant", hint: "Expression étudiée : He learns by reading the press" },
            { sentence: "Elle téléphone ___.", answer: "en marchant", hint: "Expression étudiée : She makes calls while walking" },
            { sentence: "On progresse ___ régulièrement.", answer: "en pratiquant", hint: "Expression étudiée : You improve by practising regularly" },
            { sentence: "Nous préparons le dîner ___.", answer: "en discutant", hint: "Expression étudiée : We prepare dinner while talking" },
        ],
    },
    {
        level: "B1", unit: 3, id: "b1-le-conditionnel-pour-proposer-et-demander", title: "Le conditionnel pour proposer et demander", description: "Use the present conditional to soften requests, offer suggestions, and express wishes.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Use the present conditional to soften requests, offer suggestions, and express wishes.", examples: [
                { french: "Je voudrais poser une question.", english: "I would like to ask a question" },
                { french: "Vous pourriez essayer un autre horaire.", english: "You could try another time" },
            ] },
            { title: "Nuance and context", explanation: "Its forms use the future stem with imperfect endings, including irregular stems such as voudr- and pourr-.", examples: [
                { french: "Nous aimerions participer.", english: "We would like to take part" },
                { french: "Tu devrais vérifier les dates.", english: "You should check the dates" },
            ] },
        ],
        exercises: [
            { sentence: "Je ___ poser une question.", answer: "voudrais", hint: "Expression étudiée : I would like to ask a question" },
            { sentence: "Vous ___ essayer un autre horaire.", answer: "pourriez", hint: "Expression étudiée : You could try another time" },
            { sentence: "Nous ___ participer.", answer: "aimerions", hint: "Expression étudiée : We would like to take part" },
            { sentence: "Tu ___ vérifier les dates.", answer: "devrais", hint: "Expression étudiée : You should check the dates" },
        ],
    },
    {
        level: "B1", unit: 4, id: "b1-si-present-et-futur", title: "Si + présent et futur", description: "Use si + present for a realistic future condition; put the future or imperative in the main clause.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Use si + present for a realistic future condition; put the future or imperative in the main clause.", examples: [
                { french: "Si tu viens, nous visiterons le musée.", english: "If you come, we will visit the museum" },
                { french: "Si le train est en retard, appelle-moi.", english: "If the train is late, call me" },
            ] },
            { title: "Nuance and context", explanation: "Do not use the future tense immediately after conditional si in this structure.", examples: [
                { french: "Nous partirons si la météo le permet.", english: "We will leave if the weather allows it" },
                { french: "S'il pleut, nous resterons ici.", english: "If it rains, we will stay here" },
            ] },
        ],
        exercises: [
            { sentence: "Si tu viens, nous ___ le musée.", answer: "visiterons", hint: "Expression étudiée : If you come, we will visit the museum" },
            { sentence: "___ le train est en retard, appelle-moi.", answer: "Si", hint: "Expression étudiée : If the train is late, call me" },
            { sentence: "Nous partirons ___ la météo le permet.", answer: "si", hint: "Expression étudiée : We will leave if the weather allows it" },
            { sentence: "S'il pleut, nous ___ ici.", answer: "resterons", hint: "Expression étudiée : If it rains, we will stay here" },
        ],
    },
    {
        level: "B1", unit: 4, id: "b1-le-subjonctif-apres-la-necessite", title: "Le subjonctif après la nécessité", description: "After il faut que and il est nécessaire que, use the present subjunctive.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "After il faut que and il est nécessaire que, use the present subjunctive.", examples: [
                { french: "Il faut que tu sois à l'heure.", english: "You must be on time" },
                { french: "Il est nécessaire qu'elles puissent entrer.", english: "They need to be able to enter" },
            ] },
            { title: "Nuance and context", explanation: "Contrast this with il faut + infinitive when the action has no separate stated subject.", examples: [
                { french: "Il faut que nous fassions une réservation.", english: "We need to make a reservation" },
                { french: "Il faut présenter son billet.", english: "You must show your ticket" },
            ] },
        ],
        exercises: [
            { sentence: "Il faut que tu ___ à l'heure.", answer: "sois", hint: "Expression étudiée : You must be on time" },
            { sentence: "Il est nécessaire qu'elles ___ entrer.", answer: "puissent", hint: "Expression étudiée : They need to be able to enter" },
            { sentence: "Il faut que nous ___ une réservation.", answer: "fassions", hint: "Expression étudiée : We need to make a reservation" },
            { sentence: "Il faut ___ son billet.", answer: "présenter", hint: "Expression étudiée : You must show your ticket" },
        ],
    },
    {
        level: "B1", unit: 4, id: "b1-les-temps-dans-le-discours-rapporte-au-passe", title: "Les temps dans le discours rapporté au passé", description: "With a past reporting verb, a present statement often shifts to the imperfect and a future to the present conditional.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "With a past reporting verb, a present statement often shifts to the imperfect and a future to the present conditional.", examples: [
                { french: "Elle a dit qu'elle était fatiguée.", english: "She said she was tired" },
                { french: "Il a annoncé qu'il viendrait lundi.", english: "He announced that he would come Monday" },
            ] },
            { title: "Nuance and context", explanation: "Past references and temporal markers also depend on the reporting viewpoint.", examples: [
                { french: "Ils ont expliqué qu'ils avaient perdu le document.", english: "They explained that they had lost the document" },
                { french: "Tu m'as dit que tu voulais partir.", english: "You told me you wanted to leave" },
            ] },
        ],
        exercises: [
            { sentence: "Elle a dit qu'elle ___ fatiguée.", answer: "était", hint: "Expression étudiée : She said she was tired" },
            { sentence: "Il a annoncé qu'il ___ lundi.", answer: "viendrait", hint: "Expression étudiée : He announced that he would come Monday" },
            { sentence: "Ils ont expliqué qu'ils ___ le document.", answer: "avaient perdu", hint: "Expression étudiée : They explained that they had lost the document" },
            { sentence: "Tu m'as dit que tu ___ partir.", answer: "voulais", hint: "Expression étudiée : You told me you wanted to leave" },
        ],
    },
    {
        level: "B1", unit: 5, id: "b1-opposition-et-concession", title: "Opposition et concession", description: "Use mais, pourtant, cependant, en revanche to contrast claims.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Use mais, pourtant, cependant, en revanche to contrast claims.", examples: [
                { french: "Elle travaille, pourtant elle étudie le soir.", english: "She works, yet she studies in the evening" },
                { french: "Je préfère le train ; en revanche, il coûte plus cher.", english: "I prefer the train, but it costs more" },
            ] },
            { title: "Nuance and context", explanation: "Même si + indicative expresses a concession about a real or possible situation.", examples: [
                { french: "Même si je suis fatigué, je participerai.", english: "Even if I am tired, I will take part" },
                { french: "Il était disponible, cependant il n'a pas répondu.", english: "He was available, however he did not reply" },
            ] },
        ],
        exercises: [
            { sentence: "Elle travaille, ___ elle étudie le soir.", answer: "pourtant", hint: "Expression étudiée : She works, yet she studies in the evening" },
            { sentence: "Je préfère le train ; ___, il coûte plus cher.", answer: "en revanche", hint: "Expression étudiée : I prefer the train, but it costs more" },
            { sentence: "___ je suis fatigué, je participerai.", answer: "Même si", hint: "Expression étudiée : Even if I am tired, I will take part" },
            { sentence: "Il était disponible, ___ il n'a pas répondu.", answer: "cependant", hint: "Expression étudiée : He was available, however he did not reply" },
        ],
    },
    {
        level: "B1", unit: 5, id: "b1-la-voix-passive-introduction", title: "La voix passive : introduction", description: "Form the passive with être and the past participle; the participle agrees with the passive subject.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Form the passive with être and the past participle; the participle agrees with the passive subject.", examples: [
                { french: "Le message est envoyé aujourd'hui.", english: "The message is sent today" },
                { french: "La décision a été prise hier.", english: "The decision was made yesterday" },
            ] },
            { title: "Nuance and context", explanation: "Use par for an expressed agent, but omit the agent when it is unknown or irrelevant.", examples: [
                { french: "Les billets sont vendus en ligne.", english: "Tickets are sold online" },
                { french: "Le texte est écrit par une journaliste.", english: "The text is written by a journalist" },
            ] },
        ],
        exercises: [
            { sentence: "Le message ___ aujourd'hui.", answer: "est envoyé", hint: "Expression étudiée : The message is sent today" },
            { sentence: "La décision ___ hier.", answer: "a été prise", hint: "Expression étudiée : The decision was made yesterday" },
            { sentence: "Les billets ___ en ligne.", answer: "sont vendus", hint: "Expression étudiée : Tickets are sold online" },
            { sentence: "Le texte ___ par une journaliste.", answer: "est écrit", hint: "Expression étudiée : The text is written by a journalist" },
        ],
    },
    {
        level: "B1", unit: 5, id: "b1-negation-et-restriction", title: "Négation et restriction", description: "Ne... que means only, not an ordinary negative; ne... plus means no longer.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Ne... que means only, not an ordinary negative; ne... plus means no longer.", examples: [
                { french: "Je n'ai que dix minutes.", english: "I only have ten minutes" },
                { french: "Elle ne travaille plus le dimanche.", english: "She no longer works Sundays" },
            ] },
            { title: "Nuance and context", explanation: "Ne... jamais, ne... rien, ne... personne narrow or deny different elements of a statement.", examples: [
                { french: "Nous n'avons rien reçu.", english: "We have received nothing" },
                { french: "Il ne voit personne ce soir.", english: "He is seeing nobody tonight" },
            ] },
        ],
        exercises: [
            { sentence: "Je n'ai ___ dix minutes.", answer: "que", hint: "Expression étudiée : I only have ten minutes" },
            { sentence: "Elle ne travaille ___ le dimanche.", answer: "plus", hint: "Expression étudiée : She no longer works Sundays" },
            { sentence: "Nous n'avons ___ reçu.", answer: "rien", hint: "Expression étudiée : We have received nothing" },
            { sentence: "Il ne voit ___ ce soir.", answer: "personne", hint: "Expression étudiée : He is seeing nobody tonight" },
        ],
    },
    {
        level: "B1", unit: 6, id: "b1-reprendre-avec-y-et-en", title: "Reprendre avec y et en", description: "Use y for locations and certain complements introduced by à.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Use y for locations and certain complements introduced by à.", examples: [
                { french: "Tu vas au marché ? Oui, j'y vais.", english: "Are you going to the market? Yes, I am" },
                { french: "Il parle de son projet : il en parle souvent.", english: "He talks about his project often" },
            ] },
            { title: "Nuance and context", explanation: "Use en for quantities and complements introduced by de; preserve the quantity expression where needed.", examples: [
                { french: "Vous avez des livres ? J'en ai trois.", english: "Do you have books? I have three" },
                { french: "Elle pense à ses vacances : elle y pense.", english: "She is thinking about her holidays" },
            ] },
        ],
        exercises: [
            { sentence: "Tu vas au marché ? Oui, j'___ vais.", answer: "y", hint: "Expression étudiée : Are you going to the market? Yes, I am" },
            { sentence: "Il parle de son projet : il ___ parle souvent.", answer: "en", hint: "Expression étudiée : He talks about his project often" },
            { sentence: "Vous avez des livres ? J'___ ai trois.", answer: "en", hint: "Expression étudiée : Do you have books? I have three" },
            { sentence: "Elle pense à ses vacances : elle ___ pense.", answer: "y", hint: "Expression étudiée : She is thinking about her holidays" },
        ],
    },
    {
        level: "B1", unit: 6, id: "b1-si-imparfait-et-conditionnel", title: "Si + imparfait et conditionnel", description: "Use si + imperfect with the present conditional to imagine a situation contrary to the present or unlikely.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Use si + imperfect with the present conditional to imagine a situation contrary to the present or unlikely.", examples: [
                { french: "Si j'avais le temps, je ferais du bénévolat.", english: "If I had time, I would volunteer" },
                { french: "Nous voyagerions plus si les billets coûtaient moins cher.", english: "We would travel more if tickets were cheaper" },
            ] },
            { title: "Nuance and context", explanation: "Keep the imperfect in the si clause, not the conditional.", examples: [
                { french: "Si tu habitais ici, tu prendrais le vélo.", english: "If you lived here, you would cycle" },
                { french: "Si elle pouvait, elle réparerait son appareil.", english: "If she could, she would repair her device" },
            ] },
        ],
        exercises: [
            { sentence: "Si j'avais le temps, je ___ du bénévolat.", answer: "ferais", hint: "Expression étudiée : If I had time, I would volunteer" },
            { sentence: "Nous ___ plus si les billets coûtaient moins cher.", answer: "voyagerions", hint: "Expression étudiée : We would travel more if tickets were cheaper" },
            { sentence: "___ tu habitais ici, tu prendrais le vélo.", answer: "Si", hint: "Expression étudiée : If you lived here, you would cycle" },
            { sentence: "Si elle pouvait, elle ___ son appareil.", answer: "réparerait", hint: "Expression étudiée : If she could, she would repair her device" },
        ],
    },
    {
        level: "B1", unit: 7, id: "b1-exprimer-lopinion-et-le-doute", title: "Exprimer l’opinion et le doute", description: "Je pense que commonly takes the indicative in affirmative contexts.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Je pense que commonly takes the indicative in affirmative contexts.", examples: [
                { french: "Je pense que le film est intéressant.", english: "I think the film is interesting" },
                { french: "Je ne pense pas qu'il soit prêt.", english: "I do not think he is ready" },
            ] },
            { title: "Nuance and context", explanation: "Je ne pense pas que, je doute que and expressions of uncertainty commonly trigger the subjunctive.", examples: [
                { french: "Je doute que cela suffise.", english: "I doubt that will be enough" },
                { french: "Il est possible qu'elle vienne.", english: "It is possible she will come" },
            ] },
        ],
        exercises: [
            { sentence: "Je pense que le film ___ intéressant.", answer: "est", hint: "Expression étudiée : I think the film is interesting" },
            { sentence: "Je ne pense pas qu'il ___ prêt.", answer: "soit", hint: "Expression étudiée : I do not think he is ready" },
            { sentence: "Je doute que cela ___.", answer: "suffise", hint: "Expression étudiée : I doubt that will be enough" },
            { sentence: "Il est possible qu'elle ___.", answer: "vienne", hint: "Expression étudiée : It is possible she will come" },
        ],
    },
    {
        level: "B1", unit: 7, id: "b1-organiser-un-argument-simple", title: "Organiser un argument simple", description: "Use d’abord, ensuite and enfin to sequence points.", icon: "📖", color: "#2563EB",
        sections: [
            { title: "Form and meaning", explanation: "Use d’abord, ensuite and enfin to sequence points.", examples: [
                { french: "D'abord, il faut étudier les besoins.", english: "First, we must study the needs" },
                { french: "Le projet coûte cher. En effet, plusieurs postes sont nécessaires.", english: "The project is expensive. Indeed, several posts are needed" },
            ] },
            { title: "Nuance and context", explanation: "En effet supports an assertion; toutefois introduces a qualification; c’est pourquoi signals a conclusion.", examples: [
                { french: "La proposition est utile. Toutefois, elle reste coûteuse.", english: "The proposal is useful. However, it remains costly" },
                { french: "Le service est fermé, c'est pourquoi nous reviendrons.", english: "The service is closed, which is why we will return" },
            ] },
        ],
        exercises: [
            { sentence: "___, il faut étudier les besoins.", answer: "D'abord", hint: "Expression étudiée : First, we must study the needs" },
            { sentence: "Le projet coûte cher. ___, plusieurs postes sont nécessaires.", answer: "En effet", hint: "Expression étudiée : The project is expensive. Indeed, several posts are needed" },
            { sentence: "La proposition est utile. ___, elle reste coûteuse.", answer: "Toutefois", hint: "Expression étudiée : The proposal is useful. However, it remains costly" },
            { sentence: "Le service est fermé, ___ nous reviendrons.", answer: "c'est pourquoi", hint: "Expression étudiée : The service is closed, which is why we will return" },
        ],
    },
];
