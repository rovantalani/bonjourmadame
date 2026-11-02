import type { GrammarLesson } from '../../../types/lectures/grammar';

export const grammarA2: GrammarLesson[] = [
    {
        level: 'A2', unit: 1, id: "pronominal-verbs-present", title: "Pronominal Verbs in the Present", description: "Use reflexive verbs for routines and personal habits", icon: '📖', color: '#2563EB',
        sections: [
            { title: "Form and agreement", explanation: "Place me, te, se, nous, vous, se before the conjugated verb. The verb agrees with the subject.", examples: [
                { french: "Je me lève à sept heures.", english: "I get up at seven." },
                { french: "Nous nous préparons rapidement.", english: "We get ready quickly." },
                { french: "Ils se couchent tard.", english: "They go to bed late." },
            ] },
            { title: "Negation and two verbs", explanation: "In simple tenses, ne comes before the reflexive pronoun and pas follows the conjugated verb; before an infinitive, the reflexive pronoun agrees with its logical subject.", examples: [
                { french: "Elle ne se repose pas assez.", english: "She does not rest enough." },
                { french: "Je vais me coucher.", english: "I am going to bed." },
                { french: "Tu veux te détendre ?", english: "Do you want to relax?" },
            ] },
        ],
        exercises: [
            { sentence: "Nous ___ levons tôt.", answer: "nous", hint: "use the nous reflexive pronoun" },
            { sentence: "Je ___ prépare avant de sortir.", answer: "me", hint: "use the je reflexive pronoun" },
            { sentence: "Ils ne ___ couchent pas tard.", answer: "se", hint: "reflexive with ils" },
            { sentence: "Vous allez ___ reposer ?", answer: "vous", hint: "reflexive infinitive with vous" },
        ],
    },
    {
        level: 'A2', unit: 1, id: "depuis-il-y-a-ca-fait", title: "Since, Ago & Duration", description: "Distinguish ongoing duration from a completed past event", icon: '📖', color: '#2563EB',
        sections: [
            { title: "Depuis and ça fait… que", explanation: "Use depuis + time expression or ça fait + duration + que with the present for a situation that began in the past and continues.", examples: [
                { french: "Je travaille ici depuis trois mois.", english: "I have been working here for three months." },
                { french: "Ça fait deux ans que nous habitons à Lyon.", english: "We have lived in Lyon for two years." },
                { french: "Depuis quand apprends-tu le français ?", english: "Since when have you been learning French?" },
            ] },
            { title: "Il y a and pendant", explanation: "Use il y a with a completed event to say how long ago; use pendant to indicate the duration of a completed activity.", examples: [
                { french: "J’ai déménagé il y a six mois.", english: "I moved six months ago." },
                { french: "Nous avons voyagé pendant deux semaines.", english: "We traveled for two weeks." },
                { french: "Il est arrivé il y a une heure.", english: "He arrived an hour ago." },
            ] },
        ],
        exercises: [
            { sentence: "Je vis ici ___ 2024.", answer: "depuis", hint: "ongoing period" },
            { sentence: "J’ai commencé le cours il ___ deux semaines.", answer: "y a", hint: "ago" },
            { sentence: "Nous sommes restés ___ cinq jours.", answer: "pendant", hint: "finished duration" },
            { sentence: "Ça ___ un an que je travaille ici.", answer: "fait", hint: "duration construction" },
        ],
    },
    {
        level: 'A2', unit: 2, id: "passe-compose-avoir", title: "Passé composé with Avoir", description: "Describe completed past actions using avoir and a past participle", icon: '📖', color: '#2563EB',
        sections: [
            { title: "Formation", explanation: "Conjugate avoir in the present and add a past participle: -er → -é, regular -ir → -i, regular -re → -u.", examples: [
                { french: "J’ai organisé une fête.", english: "I organized a party." },
                { french: "Nous avons choisi un film.", english: "We chose a film." },
                { french: "Elle a vendu son vélo.", english: "She sold her bicycle." },
            ] },
            { title: "Negation and time markers", explanation: "Place ne and pas around the auxiliary; use hierarchical markers to recount events.", examples: [
                { french: "Je n’ai pas oublié le cadeau.", english: "I did not forget the gift." },
                { french: "Hier, ils ont travaillé tard.", english: "Yesterday, they worked late." },
                { french: "D’abord, nous avons dîné, puis nous avons dansé.", english: "First we dined, then we danced." },
            ] },
        ],
        exercises: [
            { sentence: "Hier, j’___ préparé un repas.", answer: "ai", hint: "avoir with je" },
            { sentence: "Nous avons ___ un dessert. (choisir)", answer: "choisi", hint: "past participle of choisir" },
            { sentence: "Il ___ pas appelé.", answer: "n’a", hint: "negative before the auxiliary" },
            { sentence: "Vous avez ___ un vélo. (vendre)", answer: "vendu", hint: "past participle of vendre" },
        ],
    },
    {
        level: 'A2', unit: 2, id: "participes-passes-irreguliers", title: "Common Irregular Past Participles", description: "Recognize and use frequent irregular past participles", icon: '📖', color: '#2563EB',
        sections: [
            { title: "High-frequency forms", explanation: "Many common verbs have irregular participles that must be learned as vocabulary.", examples: [
                { french: "Elle a fait un gâteau.", english: "She made a cake." },
                { french: "Nous avons pris le train.", english: "We took the train." },
                { french: "J’ai vu mes amis.", english: "I saw my friends." },
                { french: "Il a dit bonjour.", english: "He said hello." },
            ] },
            { title: "Other essential forms", explanation: "The auxiliary remains in the present tense even when the participle is irregular.", examples: [
                { french: "Tu as écrit à ta sœur.", english: "You wrote to your sister." },
                { french: "Ils ont reçu une invitation.", english: "They received an invitation." },
                { french: "J’ai eu une surprise.", english: "I had a surprise." },
            ] },
        ],
        exercises: [
            { sentence: "J’ai ___ un billet. (prendre)", answer: "pris", hint: "prendre → pris" },
            { sentence: "Tu as ___ un courriel. (écrire)", answer: "écrit", hint: "écrire → écrit" },
            { sentence: "Elle a ___ une surprise. (avoir)", answer: "eu", hint: "avoir → eu" },
            { sentence: "Nous avons ___ un film. (voir)", answer: "vu", hint: "voir → vu" },
        ],
    },
    {
        level: 'A2', unit: 2, id: "passe-compose-etre", title: "Passé composé with Être", description: "Use être with motion verbs and basic reflexive verbs", icon: '📖', color: '#2563EB',
        sections: [
            { title: "Movement and change-of-state verbs", explanation: "Certain intransitive verbs form the passé composé with être, including aller, venir, partir and arriver; the participle agrees with the subject.", examples: [
                { french: "Elle est partie hier.", english: "She left yesterday." },
                { french: "Ils sont arrivés à midi.", english: "They arrived at noon." },
                { french: "Nous sommes revenus dimanche.", english: "We returned on Sunday." },
            ] },
            { title: "Reflexive verbs", explanation: "Pronominal verbs normally take être. Subject agreement is common at this level, but some reflexive constructions require special agreement rules.", examples: [
                { french: "Je me suis levé tôt.", english: "I got up early (male speaker)." },
                { french: "Elle s’est préparée rapidement.", english: "She got ready quickly." },
                { french: "Ils se sont rencontrés à Nantes.", english: "They met in Nantes." },
            ] },
        ],
        exercises: [
            { sentence: "Marie ___ arrivée à dix heures.", answer: "est", hint: "être with arriver" },
            { sentence: "Ils sont ___ tôt. (partir)", answer: "partis", hint: "masculine plural agreement" },
            { sentence: "Nous ___ revenus hier.", answer: "sommes", hint: "être with revenir" },
            { sentence: "Elle s’___ levée à sept heures.", answer: "est", hint: "reflexive passé composé" },
        ],
    },
    {
        level: 'A2', unit: 3, id: "a2-imparfait", title: "The Imperfect Tense", description: "Describe repeated past habits, situations and background conditions", icon: '📖', color: '#2563EB',
        sections: [
            { title: "Formation", explanation: "Use the nous-present stem without -ons and add -ais, -ais, -ait, -ions, -iez, -aient. Être is irregular: ét-.", examples: [
                { french: "Quand j’étais enfant, je jouais dehors.", english: "When I was a child, I played outside." },
                { french: "Nous habitions près de la mer.", english: "We used to live near the sea." },
                { french: "Il faisait froid.", english: "It was cold." },
            ] },
            { title: "Uses", explanation: "Use imparfait for descriptions, ongoing situations and repeated actions in the past.", examples: [
                { french: "Chaque été, ils voyageaient en train.", english: "Every summer, they traveled by train." },
                { french: "La maison était tranquille.", english: "The house was quiet." },
                { french: "Elle lisait quand je suis arrivé.", english: "She was reading when I arrived." },
            ] },
        ],
        exercises: [
            { sentence: "Quand j’étais petit, je ___ au parc. (jouer)", answer: "jouais", hint: "imparfait with je" },
            { sentence: "Il ___ froid ce matin-là. (faire)", answer: "faisait", hint: "imparfait of faire" },
            { sentence: "Nous ___ à Nantes. (habiter)", answer: "habitions", hint: "nous stem + ions" },
            { sentence: "Ils ___ souvent à vélo. (aller)", answer: "allaient", hint: "imparfait of aller" },
        ],
    },
    {
        level: 'A2', unit: 3, id: "a2-passe-compose-vs-imparfait", title: "Passé Composé vs Imparfait", description: "Distinguish completed events from background descriptions", icon: '📖', color: '#2563EB',
        sections: [
            { title: "Event versus background", explanation: "Passé composé moves a story forward; imparfait sets a scene or gives habitual/background information.", examples: [
                { french: "Il pleuvait quand nous sommes sortis.", english: "It was raining when we went out." },
                { french: "La chambre était petite, mais nous avons bien dormi.", english: "The room was small, but we slept well." },
                { french: "Je lisais quand le téléphone a sonné.", english: "I was reading when the telephone rang." },
            ] },
            { title: "Repeated versus single events", explanation: "Use imparfait for recurring routines in the past and passé composé for one finished occurrence.", examples: [
                { french: "Avant, je prenais toujours le bus.", english: "I used to take the bus." },
                { french: "Hier, j’ai pris le train.", english: "Yesterday, I took the train." },
                { french: "Tous les étés, elle allait en Bretagne.", english: "Every summer she went to Brittany." },
            ] },
        ],
        exercises: [
            { sentence: "Il ___ quand le train est arrivé. (pleuvoir)", answer: "pleuvait", hint: "background situation" },
            { sentence: "Soudain, le téléphone a ___. (sonner)", answer: "sonné", hint: "completed event" },
            { sentence: "Chaque dimanche, nous ___ au marché. (aller)", answer: "allions", hint: "habitual past" },
            { sentence: "Hier, nous ___ le musée. (visiter)", answer: "avons visité", hint: "completed one-time action" },
        ],
    },
    {
        level: 'A2', unit: 3, id: "pronom-y-lieu", title: "The Pronoun Y for Places", description: "Replace a previously mentioned place with y", icon: '📖', color: '#2563EB',
        sections: [
            { title: "Place replacement", explanation: "Y generally replaces à + place or another locative phrase; it precedes the conjugated verb.", examples: [
                { french: "Je vais à Lyon. J’y vais demain.", english: "I am going to Lyon. I am going there tomorrow." },
                { french: "Elle habite à Paris et elle y travaille.", english: "She lives in Paris and works there." },
                { french: "Vous allez au guichet ? Oui, j’y vais.", english: "Are you going to the counter? Yes, I am." },
            ] },
            { title: "Tenses and negation", explanation: "Place y before the auxiliary in the passé composé, or before the infinitive in a two-verb construction.", examples: [
                { french: "Nous y sommes allés hier.", english: "We went there yesterday." },
                { french: "Je ne veux pas y retourner.", english: "I do not want to go back there." },
                { french: "Il n’y est pas resté longtemps.", english: "He did not stay there long." },
            ] },
        ],
        exercises: [
            { sentence: "Tu vas à l’hôtel ? Oui, j’___ vais.", answer: "y", hint: "replace à l’hôtel" },
            { sentence: "Nous ___ sommes allés dimanche.", answer: "y", hint: "before the auxiliary" },
            { sentence: "Elle veut ___ retourner.", answer: "y", hint: "before infinitive" },
            { sentence: "Ils n’___ habitent plus.", answer: "y", hint: "place pronoun" },
        ],
    },
    {
        level: 'A2', unit: 4, id: "comparatif-superlatif", title: "Comparatives & Superlatives", description: "Compare objects, places and prices using French comparison structures", icon: '📖', color: '#2563EB',
        sections: [
            { title: "Comparative", explanation: "Use plus/moins/aussi + adjective + que, with agreement. More with nouns is plus de + noun.", examples: [
                { french: "Ce logement est plus calme que l’autre.", english: "This home is quieter than the other." },
                { french: "Elle est aussi grande que sa sœur.", english: "She is as tall as her sister." },
                { french: "Cet appartement coûte moins cher.", english: "This apartment costs less." },
            ] },
            { title: "Superlative and irregular forms", explanation: "Use le/la/les plus or moins; bon → meilleur in comparisons.", examples: [
                { french: "C’est le quartier le plus calme.", english: "It is the quietest neighborhood." },
                { french: "Elle a la meilleure offre.", english: "She has the best offer." },
                { french: "C’est l’appartement le moins cher.", english: "This is the least expensive apartment." },
            ] },
        ],
        exercises: [
            { sentence: "Ce quartier est ___ calme que l’autre. (more)", answer: "plus", hint: "comparative superiority" },
            { sentence: "Cet hôtel est le ___ cher. (least)", answer: "moins", hint: "superlative inferiority" },
            { sentence: "Ce gâteau est ___ que l’autre. (better)", answer: "meilleur", hint: "bon → meilleur" },
            { sentence: "Julie est aussi grande ___ Marie.", answer: "que", hint: "comparison with aussi" },
        ],
    },
    {
        level: 'A2', unit: 4, id: "pronoms-cod", title: "Direct Object Pronouns", description: "Replace direct objects with le, la, l’ and les", icon: '📖', color: '#2563EB',
        sections: [
            { title: "Position", explanation: "Place a direct object pronoun before the conjugated verb; le and la become l’ before vowels.", examples: [
                { french: "Tu connais ce magasin ? Je le connais.", english: "Do you know this shop? I know it." },
                { french: "Elle a la veste ? Elle l’a.", english: "Does she have the jacket? She has it." },
                { french: "Ces articles ? Je les préfère.", english: "These items? I prefer them." },
            ] },
            { title: "With compound tense and infinitives", explanation: "In passé composé, the pronoun goes before the auxiliary; with a modal it usually goes before the infinitive. A preceding COD can trigger participle agreement.", examples: [
                { french: "Je l’ai achetée hier.", english: "I bought it yesterday (feminine item)." },
                { french: "Je vais le prendre.", english: "I am going to take it." },
                { french: "Tu peux les essayer.", english: "You can try them on." },
            ] },
        ],
        exercises: [
            { sentence: "Ce livre ? Je ___ lis souvent.", answer: "le", hint: "masculine singular" },
            { sentence: "Cette veste ? Je ___ porte demain.", answer: "la", hint: "feminine singular" },
            { sentence: "Ces billets ? Nous ___ avons achetés.", answer: "les", hint: "plural direct object" },
            { sentence: "Je vais ___ acheter. (the bag, masculine)", answer: "l’", hint: "before vowel" },
        ],
    },
    {
        level: 'A2', unit: 4, id: "pronom-en-quantites", title: "The Pronoun En and Quantities", description: "Replace de + noun and quantities using en", icon: '📖', color: '#2563EB',
        sections: [
            { title: "Quantities", explanation: "En replaces noun phrases introduced by de or an indefinite/partitive article; quantity markers remain.", examples: [
                { french: "Vous avez des pommes ? Oui, j’en ai.", english: "Do you have apples? Yes, I do." },
                { french: "Tu veux du thé ? J’en voudrais.", english: "Do you want tea? I would like some." },
                { french: "Elle a trois stylos ? Elle en a trois.", english: "Does she have three pens? She has three." },
            ] },
            { title: "With negation and compound tenses", explanation: "En precedes the conjugated verb or auxiliary, and follows ne in negation.", examples: [
                { french: "Je n’en ai plus.", english: "I do not have any left." },
                { french: "Nous en avons acheté deux.", english: "We bought two of them." },
                { french: "Je vais en commander.", english: "I am going to order some." },
            ] },
        ],
        exercises: [
            { sentence: "Tu veux du pain ? Oui, j’___ veux.", answer: "en", hint: "partitive replacement" },
            { sentence: "Il a acheté quatre pommes : il ___ a acheté quatre.", answer: "en", hint: "quantity replacement" },
            { sentence: "Nous n’___ avons plus.", answer: "en", hint: "negative" },
            { sentence: "Je vais ___ prendre deux.", answer: "en", hint: "before infinitive" },
        ],
    },
    {
        level: 'A2', unit: 4, id: "conditionnel-poli", title: "Polite Conditional Requests", description: "Make polite requests using common conditional forms", icon: '📖', color: '#2563EB',
        sections: [
            { title: "Useful forms", explanation: "Je voudrais, j’aimerais and pourriez-vous are courteous forms to request information and services.", examples: [
                { french: "Je voudrais un rendez-vous.", english: "I would like an appointment." },
                { french: "Pourriez-vous vérifier mon dossier ?", english: "Could you check my file?" },
                { french: "J’aimerais échanger cette veste.", english: "I would like to exchange this jacket." },
            ] },
            { title: "Politeness in context", explanation: "Conditional expressions soften requests; pair them with s’il vous plaît and a clear explanation.", examples: [
                { french: "Est-ce que ce serait possible demain ?", english: "Would tomorrow be possible?" },
                { french: "Je souhaiterais une confirmation par courriel.", english: "I would like an email confirmation." },
                { french: "Vous pourriez m’aider, s’il vous plaît ?", english: "Could you help me, please?" },
            ] },
        ],
        exercises: [
            { sentence: "Je ___ un renseignement, s’il vous plaît. (want, polite)", answer: "voudrais", hint: "conditional of vouloir" },
            { sentence: "___-vous m’aider ? (could)", answer: "Pourriez", hint: "conditional of pouvoir" },
            { sentence: "J’___ prendre rendez-vous. (would like)", answer: "aimerais", hint: "conditional of aimer" },
            { sentence: "Est-ce que ce ___ possible ?", answer: "serait", hint: "conditional of être" },
        ],
    },
    {
        level: 'A2', unit: 5, id: "pronoms-coi", title: "Indirect Object Pronouns", description: "Use lui and leur with verbs constructed with à + person", icon: '📖', color: '#2563EB',
        sections: [
            { title: "Replacing a person", explanation: "Lui replaces à lui/elle; leur replaces à eux/elles. They precede the conjugated verb.", examples: [
                { french: "Je téléphone à Julie. Je lui téléphone.", english: "I call Julie. I call her." },
                { french: "Elle parle aux voisins. Elle leur parle.", english: "She speaks to the neighbors. She speaks to them." },
                { french: "Nous lui offrons un cadeau.", english: "We give him/her a gift." },
            ] },
            { title: "At other positions", explanation: "In passé composé place the pronoun before the auxiliary; with an infinitive it normally precedes the infinitive.", examples: [
                { french: "Je lui ai envoyé un message.", english: "I sent him/her a message." },
                { french: "Elle va leur répondre.", english: "She is going to reply to them." },
                { french: "Tu ne lui téléphones pas ?", english: "Are you not calling him/her?" },
            ] },
        ],
        exercises: [
            { sentence: "Je parle à Léa : je ___ parle.", answer: "lui", hint: "one indirect object" },
            { sentence: "Nous écrivons à nos amis : nous ___ écrivons.", answer: "leur", hint: "plural indirect object" },
            { sentence: "Elle ___ a offert un livre. (to him)", answer: "lui", hint: "before auxiliary" },
            { sentence: "Je vais ___ répondre. (to them)", answer: "leur", hint: "before infinitive" },
        ],
    },
    {
        level: 'A2', unit: 5, id: "imperatif-positif-negatif", title: "The Affirmative & Negative Imperative", description: "Give simple instructions, suggestions and advice", icon: '📖', color: '#2563EB',
        sections: [
            { title: "Affirmative forms", explanation: "Use tu, nous or vous present forms without subject; regular -er verbs lose final -s in tu affirmative.", examples: [
                { french: "Prends ce médicament.", english: "Take this medicine." },
                { french: "Repose-toi !", english: "Rest!" },
                { french: "Allons au parc.", english: "Let’s go to the park." },
            ] },
            { title: "Negative forms", explanation: "Surround the verb or reflexive pronoun with ne… pas. A reflexive pronoun moves before the verb in negative commands.", examples: [
                { french: "Ne t’inquiète pas.", english: "Do not worry." },
                { french: "Ne sortez pas ce soir.", english: "Do not go out tonight." },
                { french: "Ne te couche pas trop tard.", english: "Do not go to bed too late." },
            ] },
        ],
        exercises: [
            { sentence: "___ ce médicament après le repas. (prendre, tu)", answer: "Prends", hint: "irregular imperative" },
            { sentence: "Ne ___ pas en retard ! (être, tu)", answer: "sois", hint: "être imperative" },
            { sentence: "___-toi bien ! (reposer, tu)", answer: "Repose", hint: "-er imperative" },
            { sentence: "Ne ___ inquiète pas. (tu)", answer: "t’", hint: "negative reflexive imperative" },
        ],
    },
    {
        level: 'A2', unit: 6, id: "pronoms-relatifs-qui-que-ou", title: "Relative Pronouns: Qui, Que & Où", description: "Join simple sentences to describe people, things and places", icon: '📖', color: '#2563EB',
        sections: [
            { title: "Qui and que", explanation: "Qui is the subject of the relative clause; que is the direct object and becomes qu’ before vowels.", examples: [
                { french: "Voici le professeur qui dirige le cours.", english: "Here is the teacher who leads the class." },
                { french: "C’est le stage que je cherche.", english: "It is the internship I am looking for." },
                { french: "Le livre qu’elle recommande est intéressant.", english: "The book she recommends is interesting." },
            ] },
            { title: "Où", explanation: "Où links a place or time expression with a description.", examples: [
                { french: "Voici la ville où j’ai étudié.", english: "Here is the town where I studied." },
                { french: "C’est le jour où nous avons commencé.", english: "It is the day when we started." },
                { french: "J’aime le bureau où je travaille.", english: "I like the office where I work." },
            ] },
        ],
        exercises: [
            { sentence: "Voici la personne ___ travaille avec moi.", answer: "qui", hint: "subject of relative" },
            { sentence: "C’est le cours ___ j’ai choisi.", answer: "que", hint: "direct object" },
            { sentence: "La ville ___ j’habite est jolie.", answer: "où", hint: "place" },
            { sentence: "Le livre ___ elle lit est nouveau.", answer: "qu’", hint: "que before vowel" },
        ],
    },
    {
        level: 'A2', unit: 6, id: "negation-extended", title: "Extended Negation", description: "Use ne… plus, ne… jamais, ne… rien and ne… personne", icon: '📖', color: '#2563EB',
        sections: [
            { title: "Common patterns", explanation: "Choose the negative word that matches the meaning. Ne and the second negative element normally surround a conjugated simple verb.", examples: [
                { french: "Je ne travaille plus ici.", english: "I no longer work here." },
                { french: "Il ne voyage jamais en avion.", english: "He never travels by plane." },
                { french: "Nous ne comprenons rien.", english: "We understand nothing." },
            ] },
            { title: "Compound tenses and personne", explanation: "In compound tenses, plus, jamais and rien typically go after the auxiliary; personne often follows the past participle.", examples: [
                { french: "Je n’ai jamais fait ce stage.", english: "I have never done this internship." },
                { french: "Elle n’a rien trouvé.", english: "She did not find anything." },
                { french: "Je n’ai rencontré personne.", english: "I did not meet anyone." },
            ] },
        ],
        exercises: [
            { sentence: "Je ne travaille ___ le dimanche. (no longer)", answer: "plus", hint: "ne… plus" },
            { sentence: "Il n’a ___ voyagé en Italie. (never)", answer: "jamais", hint: "ne… jamais" },
            { sentence: "Nous n’avons ___ compris. (nothing)", answer: "rien", hint: "ne… rien" },
            { sentence: "Elle n’a rencontré ___. (nobody)", answer: "personne", hint: "ne… personne" },
        ],
    },
    {
        level: 'A2', unit: 7, id: "futur-simple", title: "The Simple Future", description: "Make predictions, promises and statements about future actions", icon: '📖', color: '#2563EB',
        sections: [
            { title: "Formation", explanation: "Add -ai, -as, -a, -ons, -ez, -ont to the infinitive for -er/-ir verbs, or to a -re infinitive without final e.", examples: [
                { french: "Demain, je travaillerai.", english: "Tomorrow I will work." },
                { french: "Nous choisirons un film.", english: "We will choose a film." },
                { french: "Ils attendront le bus.", english: "They will wait for the bus." },
            ] },
            { title: "Irregular stems", explanation: "Common verbs have irregular stems, but the endings stay the same.", examples: [
                { french: "Je serai libre samedi.", english: "I will be free on Saturday." },
                { french: "Nous aurons plus de temps.", english: "We will have more time." },
                { french: "Elle ira au festival.", english: "She will go to the festival." },
            ] },
        ],
        exercises: [
            { sentence: "Demain, je ___ au musée. (aller)", answer: "irai", hint: "future of aller" },
            { sentence: "Nous ___ des billets. (acheter)", answer: "achèterons", hint: "spelling change in future" },
            { sentence: "Vous ___ bientôt. (venir)", answer: "viendrez", hint: "future of venir" },
            { sentence: "Ils ___ un concert. (organiser)", answer: "organiseront", hint: "future ending with ils" },
        ],
    },
    {
        level: 'A2', unit: 7, id: "futur-proche-vs-simple", title: "Futur Proche vs Futur Simple", description: "Choose between immediate arrangements and future statements", icon: '📖', color: '#2563EB',
        sections: [
            { title: "Two valid perspectives", explanation: "Futur proche often signals an intention or near plan; futur simple expresses later events, forecasts and promises. Context matters more than a fixed time boundary.", examples: [
                { french: "Je vais réserver les billets ce soir.", english: "I am going to book the tickets tonight." },
                { french: "Le festival commencera à dix-neuf heures.", english: "The festival will start at seven." },
                { french: "Je pense qu’il fera beau.", english: "I think the weather will be good." },
            ] },
            { title: "Plans and schedules", explanation: "Both forms can refer to planned future actions. Choose based on how you present the action.", examples: [
                { french: "Nous allons partir samedi.", english: "We are going to leave Saturday." },
                { french: "Nous partirons samedi matin.", english: "We will leave Saturday morning." },
                { french: "Je te téléphonerai demain.", english: "I will call you tomorrow." },
            ] },
        ],
        exercises: [
            { sentence: "Ce soir, je ___ regarder un film. (near future)", answer: "vais", hint: "aller + infinitive" },
            { sentence: "Demain, elle ___ à Lille. (aller, simple future)", answer: "ira", hint: "simple future" },
            { sentence: "Nous allons ___ nos places. (réserver)", answer: "réserver", hint: "infinitive after aller" },
            { sentence: "Je te ___ plus tard. (appeler, future)", answer: "appellerai", hint: "future of appeler" },
        ],
    },
    {
        level: 'A2', unit: 7, id: "si-present-futur", title: "If + Present → Future", description: "Express realistic future possibilities and their outcomes", icon: '📖', color: '#2563EB',
        sections: [
            { title: "Structure", explanation: "Use si + present for a real future condition, and simple future or imperative in the result. Do not put future tense directly after si in this pattern.", examples: [
                { french: "S’il fait beau, nous sortirons.", english: "If the weather is nice, we will go out." },
                { french: "Si tu viens, apporte ton billet.", english: "If you come, bring your ticket." },
                { french: "Si j’ai le temps, je passerai.", english: "If I have time, I will stop by." },
            ] },
            { title: "Useful links", explanation: "Put the si-clause first or second; the meaning does not change.", examples: [
                { french: "Nous resterons chez nous s’il pleut.", english: "We will stay home if it rains." },
                { french: "Si le projet réussit, le quartier sera plus calme.", english: "If the project succeeds, the area will be quieter." },
                { french: "J’irai au festival si je suis libre.", english: "I will go to the festival if I am free." },
            ] },
        ],
        exercises: [
            { sentence: "Si tu ___ libre, viens avec nous. (être)", answer: "es", hint: "present after si" },
            { sentence: "S’il fait beau, nous ___. (sortir, future)", answer: "sortirons", hint: "future in main clause" },
            { sentence: "Si nous ___ le temps, nous irons au parc. (avoir)", answer: "avons", hint: "present after si" },
            { sentence: "Elle viendra si elle ___ terminer tôt. (pouvoir)", answer: "peut", hint: "present of pouvoir" },
        ],
    },
];
