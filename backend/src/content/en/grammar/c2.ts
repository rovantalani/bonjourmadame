import type { GrammarLesson } from '../../../types/lectures/grammar';

export const grammarC2: GrammarLesson[] = [
    {
        unit: 1,
        id: 'en-style-register-mastery',
        title: 'Maîtrise du style et du registre',
        level: 'C2',
        description: "The pen is mightier than the sword. Contrôle total du ton, du rythme et du style — de la prose littéraire au document officiel, en passant par le journalisme.",
        icon: '✒️',
        color: '#DC2626',
        sections: [
            {
                title: 'Variation syntaxique et rythme',
                explanation: "Un style maîtrisé alterne les longueurs et structures de phrases. Les phrases courtes créent de l'impact. Les phrases longues, avec des propositions subordonnées et des appositions bien construites, montrent la complexité d'une pensée. Le parallélisme syntaxique — répéter la même structure grammaticale — crée du rythme et de la cohérence. L'anaphore (répétition d'un mot en début de proposition) est un outil rhétorique puissant.",
                examples: [
                    { french: 'We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields. (Churchill — anaphore + parallélisme)', english: 'Nous nous battrons sur les plages, nous nous battrons sur les terrains d\'atterrissage, nous nous battrons dans les champs.' },
                    { french: 'Short sentences punch. Long sentences, building rhythm through accumulation and subordination, can sustain a complex argument.', english: 'Les phrases courtes frappent. Les phrases longues, créant du rythme par accumulation et subordination, peuvent soutenir un argument complexe.' },
                    { french: 'To read is to think. To think is to grow. (parallélisme et répétition)', english: 'Lire, c\'est penser. Penser, c\'est grandir.' },
                    { french: 'It was the best of times, it was the worst of times. (Dickens — antithèse + parallélisme)', english: 'C\'était le meilleur des temps, c\'était le pire des temps.' },
                ],
            },
            {
                title: 'Tonalité : objectif, ironique, persuasif',
                explanation: "La maîtrise du registre implique de contrôler la tonalité. Le ton objectif s'appuie sur la voix passive, les nominalisations et les marqueurs d'incertitude (may, might, it appears that). Le ton ironique joue sur l'écart entre ce qu'on dit et ce qu'on veut dire. Le ton persuasif utilise la rhétorique (triades, questions rhétoriques, appel aux émotions). Chaque choix lexical contribue à la tonalité globale.",
                examples: [
                    { french: 'It would appear that the situation has deteriorated. (ton objectif, mesuré)', english: 'Il semblerait que la situation se soit détériorée.' },
                    { french: 'Oh, of course — that was a truly brilliant strategy. (ironie)', english: 'Oh, bien sûr — c\'était là une stratégie vraiment brillante.' },
                    { french: 'We owe it to our children. We owe it to our planet. We owe it to ourselves. (persuasif, tricolon)', english: 'Nous le devons à nos enfants. Nous le devons à notre planète. Nous nous le devons à nous-mêmes.' },
                    { french: 'Is this truly the legacy we wish to leave? (question rhétorique)', english: 'Est-ce là vraiment l\'héritage que nous souhaitons laisser ?' },
                ],
            },
            {
                title: 'Précision lexicale et connotation',
                explanation: "Au niveau C2, le choix du mot exact est primordial. Des synonymes apparents peuvent avoir des connotations très différentes : slim vs thin vs skinny ; determined vs stubborn vs pig-headed. Le registre formel et littéraire exige souvent des mots d'origine latine ou française (commence, endeavour, perspicacious) là où l'anglais courant préfère des mots germaniques (start, try, sharp). Maîtriser ces nuances, c'est maîtriser la langue.",
                examples: [
                    { french: 'slim (neutre, positif) / thin (neutre) / skinny (négatif, péjoratif)', english: 'mince (connotations différentes selon le mot)' },
                    { french: 'determined (positif) / stubborn (négatif) / pig-headed (très négatif)', english: 'déterminé / têtu / entêté (mêmes nuances en français)' },
                    { french: 'Formel : endeavour, peruse, ameliorate / Courant : try, read, improve', english: 'Formel : s\'efforcer, parcourir, améliorer / Courant : essayer, lire, améliorer' },
                    { french: 'The policy was ill-conceived. (critique mesurée) / The policy was a disaster. (jugement direct)', english: 'La politique était mal conçue (nuancé) / La politique était un désastre (direct).' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Formel de "try": to ___', answer: 'endeavour', hint: 'Endeavour (formel, littéraire) = try' },
            { sentence: 'More formal synonym of "improve": to ___', answer: 'ameliorate', hint: 'Ameliorate (littéraire, formel) = rendre meilleur' },
            { sentence: 'Rhetorical device in "We shall fight, we shall never surrender, we shall prevail": ___', answer: 'anaphora', hint: 'Répétition du même mot en début de proposition = anaphore (anaphora)' },
            { sentence: 'Objective tone: "The results ___ ___ ___ inconclusive." (semblent être)', answer: 'would appear to be', hint: 'Would appear to be — formule objective distanciée' },
            { sentence: 'Connotation: "stubborn" is ___ than "determined". (négatif/positif)', answer: 'more negative', hint: 'Stubborn = têtu (négatif) ; determined = déterminé (positif)' },
        ],
    },
    {
        unit: 1,
        id: 'en-classical-forms',
        title: 'Formes classiques et archaïques de l\'anglais',
        level: 'C2',
        description: "Thou art… / Wherefore art thou? Découvrez l'anglais shakespearien, les formes verbales archaïques et leur usage dans la littérature et la culture.",
        icon: '📜',
        color: '#92400E',
        sections: [
            {
                title: 'Thou, thee, thy — le « tu » de l\'anglais',
                explanation: "Avant le XVIIe siècle, l'anglais distinguait tu (thou) et vous (you). Thou (sujet), thee (complément), thy/thine (possessif) étaient le singulier intime. Avec thou, les verbes prenaient la terminaison -(e)st : thou art, thou dost, thou hast. Cette forme a disparu de la langue courante mais survit dans la Bible (King James Version), Shakespeare, la poésie romantique et les formules liturgiques. On la retrouve aussi dans les dialectes du nord de l'Angleterre.",
                examples: [
                    { french: 'Thou art the most beautiful creature. (Shakespeare)', english: 'Tu es la plus belle créature.' },
                    { french: 'Wherefore art thou Romeo? (= Why are you Romeo?)', english: 'Pourquoi es-tu Roméo ?' },
                    { french: 'Our Father, which art in heaven, hallowed be thy name. (Bible KJV)', english: 'Notre Père qui es aux cieux, que ton nom soit sanctifié.' },
                    { french: 'Hast thou no mercy? (= Have you no mercy?)', english: 'N\'as-tu aucune pitié ?' },
                ],
            },
            {
                title: 'Formes verbales archaïques',
                explanation: "Plusieurs formes verbales anciennes subsistent dans les textes classiques et liturgiques. Le subjonctif archaïque : be it known, come what may. La terminaison -eth à la 3e personne : he saith, she doth, it cometh. L'auxiliaire doth/dost (archaïque de does/do). L'imparfait en -est pour thou : thou wert, thou couldst. Ces formes se reconnaissent à la lecture mais ne s'utilisent que dans des contextes volontairement archaïsants (humour, pastiche, registre liturgique).",
                examples: [
                    { french: 'Methinks it doth protest too much. (= I think it protests too much)', english: 'Il me semble que cela proteste trop.' },
                    { french: 'He that is without sin among you… (= Whoever is without sin)', english: 'Que celui d\'entre vous qui est sans péché…' },
                    { french: 'The truth will out. (vieux proverbe — out = come out)', english: 'La vérité finira par éclater.' },
                    { french: 'Go thee hence! (= Go away from here!)', english: 'Va-t\'en d\'ici !' },
                ],
            },
            {
                title: 'Shakespeare et la langue anglaise',
                explanation: "Shakespeare a contribué plus de 1 700 mots au lexique anglais. De nombreuses expressions idiomatiques contemporaines viennent directement de ses œuvres : all that glitters is not gold, break the ice, in a pickle, to be or not to be. Sa grammaire diffère de l'anglais moderne par l'usage de thou/thee, des inversions (What light through yonder window breaks?), des ellipses et des iambiques. Lire Shakespeare enrichit considérablement la compréhension de l'anglais contemporain.",
                examples: [
                    { french: 'All the world\'s a stage. (As You Like It)', english: 'Le monde entier est une scène de théâtre.' },
                    { french: 'To thine own self be true. (Hamlet)', english: 'Sois fidèle à toi-même.' },
                    { french: 'What\'s in a name? That which we call a rose / By any other name would smell as sweet. (Roméo et Juliette)', english: 'Qu\'y a-t-il dans un nom ? Ce que nous appelons une rose / Sous un autre nom sentirait aussi bon.' },
                    { french: 'We know what we are, but know not what we may be. (Hamlet)', english: 'Nous savons ce que nous sommes, mais pas ce que nous pourrions être.' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Translate from archaïc: "Thou art mistaken." → You ___ mistaken.', answer: 'are', hint: 'Thou art = you are' },
            { sentence: 'Archaïc of "does": he ___', answer: 'doth', hint: 'Doth = does (forme archaïque à la 3e personne)' },
            { sentence: 'Archaïc possessive of thou: "This is ___ book."', answer: 'thy', hint: 'Thy = your (possessif de thou)' },
            { sentence: '"Wherefore" in classical English means: ___ (in modern English)', answer: 'why', hint: 'Wherefore = why (pourquoi), pas where (où)' },
            { sentence: 'Shakespeare invented: "break the ___" (idiom)', answer: 'ice', hint: 'Break the ice — expression inventée par Shakespeare' },
        ],
    },
    {
        unit: 2,
        id: 'en-oral-vs-written',
        title: 'Anglais oral vs. anglais écrit',
        level: 'C2',
        description: "Yeah, kinda… / The aforementioned proposal. Comprendre les divergences entre la langue parlée quotidienne et la prose écrite soutenue.",
        icon: '🎤',
        color: '#0369A1',
        sections: [
            {
                title: 'Caractéristiques de l\'oral',
                explanation: "L'anglais oral se caractérise par : les contractions (I'm, don't, gonna, wanna), les interjections et marqueurs de discours (well, you know, like, I mean, right?), les phrases inachevées ou reconstruites, l'ellipse fréquente, l'utilisation de so et and pour enchaîner les idées. Le discours oral est aussi marqué par la redondance, l'emphase par la tonalité et le recours aux phrasal verbs plutôt qu'aux verbes formels.",
                examples: [
                    { french: 'Oral : "I\'m gonna be honest with you, like, it\'s kinda complicated."', english: 'Je vais être honnête avec toi, genre, c\'est un peu compliqué.' },
                    { french: 'Écrit équivalent : "To be candid, the situation is rather complex."', english: 'Pour être honnête, la situation est plutôt complexe.' },
                    { french: 'Oral : "So, you know, we decided to, like, give it a go."', english: 'Donc, tu vois, on a décidé d\'essayer le coup.' },
                    { french: 'Oral : "She was like, \'No way!\'" (like = direct speech marker)', english: 'Elle a fait genre « Pas question ! »' },
                ],
            },
            {
                title: 'Caractéristiques de l\'écrit soutenu',
                explanation: "L'anglais écrit soutenu utilise : les nominalisations (the deterioration of → the fact that it deteriorates), les propositions relatives et participiales, le passif pour l'objectivité, les connecteurs logiques explicites (however, therefore, moreover), l'absence de contractions et de marqueurs oraux. Les phrases sont plus longues, plus denses et plus explicitement structurées. Le vocabulaire préfère les mots d'origine latine et française.",
                examples: [
                    { french: 'Oral : "Things got worse." / Écrit : "A deterioration was observed."', english: 'Les choses ont empiré / On a observé une détérioration.' },
                    { french: 'Oral : "It\'s obvious we need to act." / Écrit : "It is evident that action is required."', english: 'C\'est évident qu\'il faut agir. / Il est évident que des mesures s\'imposent.' },
                    { french: 'Nominalisation : decide → the decision to ; conclude → the conclusion that', english: 'Nominalisation : décider → la décision de ; conclure → la conclusion que' },
                    { french: 'Écrit : "The aforementioned proposal has been rejected." (the proposal mentioned above)', english: 'La proposition susmentionnée a été rejetée.' },
                ],
            },
            {
                title: 'Zones de contact : anglais semi-formel',
                explanation: "Entre l'oral et l'écrit formel existe un registre intermédiaire : l'email professionnel, l'article de presse grand public, le billet de blog. Ce registre semi-formel utilise quelques contractions, évite le jargon trop soutenu, mais maintient une structure claire. Le journalisme anglosaxon valorise en particulier la clarté et la concision : des phrases courtes, du vocabulaire accessible, des exemples concrets. C'est souvent ce registre qu'on utilise le plus souvent en contexte professionnel.",
                examples: [
                    { french: 'We\'re excited to announce the launch of our new product.', english: 'Nous sommes ravis d\'annoncer le lancement de notre nouveau produit. (semi-formel : we\'re mais vocabulaire soigné)' },
                    { french: 'The committee didn\'t reach a consensus on this issue.', english: 'Le comité n\'est pas parvenu à un consensus sur cette question. (semi-formel)' },
                    { french: 'Journalists aim for the "inverted pyramid": most important info first.', english: 'Les journalistes visent la « pyramide inversée » : l\'info la plus importante d\'abord.' },
                    { french: 'Plain English movement: prefer "use" to "utilise"; "find out" to "ascertain".', english: 'Mouvement Plain English : préférer « use » à « utilise » ; « find out » à « ascertain ».' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Formal written equivalent of "find out": to ___', answer: 'ascertain', hint: 'Ascertain (formel) = find out (courant/oral)' },
            { sentence: 'Nominalise: "The government decided to act." → The government\'s ___ to act.', answer: 'decision', hint: 'Nominalisation : decided → decision' },
            { sentence: 'Which is more formal? (a) "Things got worse" or (b) "A deterioration occurred"', answer: 'b', hint: 'Nominalisation et passif → registre plus formel et objectif' },
            { sentence: 'Oral marker to avoid in formal writing: "I mean, ___ …" (marqueur de reformulation)', answer: 'you know', hint: 'You know, like, I mean = marqueurs oraux à éviter à l\'écrit formel' },
            { sentence: 'Formal synonym of "said before": the ___ proposal', answer: 'aforementioned', hint: 'Aforementioned = mentionné précédemment (très formel/juridique)' },
        ],
    },
    {
        unit: 2,
        id: 'en-advanced-discourse-markers',
        title: 'Marqueurs de discours avancés',
        level: 'C2',
        description: "All the same… / For all that… / Notwithstanding… Les marqueurs de discours rares et élégants pour un anglais de niveau international.",
        icon: '🗺️',
        color: '#0F766E',
        sections: [
            {
                title: 'Marqueurs de concession avancés',
                explanation: "Au-delà de however et although, l'anglais avancé dispose de marqueurs de concession sophistiqués. Notwithstanding (= malgré) s'utilise comme préposition ou conjonction dans un registre très formel (droit, diplomatie). All the same et for all that expriment une concession malgré une résistance. Even so, granting that, be that as it may, admittedly indiquent une concession tout en maintenant la thèse principale.",
                examples: [
                    { french: 'Notwithstanding the risks, the project went ahead. (malgré, très formel)', english: 'Nonobstant les risques, le projet a été mené à bien.' },
                    { french: 'The evidence is inconclusive. All the same, we must act.', english: 'Les preuves sont peu concluantes. Malgré tout, nous devons agir.' },
                    { french: 'Be that as it may, the decision has been taken.', english: 'Quoi qu\'il en soit, la décision a été prise.' },
                    { french: 'Admittedly, there are flaws in the plan, but it is our best option.', english: 'Certes, le plan présente des défauts, mais c\'est notre meilleure option.' },
                ],
            },
            {
                title: 'Marqueurs d\'exemplification et de précision',
                explanation: "Pour illustrer ou préciser une idée, l'anglais avancé dispose de nombreux marqueurs. Namely introduit une liste précise. To wit (très formel) = namely. In particular et more specifically restreignent la portée. As evidenced by et as illustrated by introduisent une preuve ou un exemple. Case in point = par exemple (preuve à l'appui). To put it another way et in other words reformulent.",
                examples: [
                    { french: 'Three areas need improvement, namely funding, staffing, and infrastructure.', english: 'Trois domaines nécessitent des améliorations, à savoir le financement, le personnel et les infrastructures.' },
                    { french: 'Case in point: the collapse of Lehman Brothers in 2008.', english: 'En voici un exemple parlant : l\'effondrement de Lehman Brothers en 2008.' },
                    { french: 'As evidenced by recent data, inequality continues to rise.', english: 'Comme en témoignent les données récentes, les inégalités continuent d\'augmenter.' },
                    { french: 'To put it another way, the policy has been a failure.', english: 'Autrement dit, la politique a été un échec.' },
                ],
            },
            {
                title: 'Marqueurs de reformulation et de clôture',
                explanation: "Pour reformuler élégamment : in essence, at its core, stripped to its essentials, put simply, to distil this to its core argument. Pour conclure : ultimately, in the final analysis, to sum up, to conclude, on balance, all things considered, taken together. En anglais académique, la conclusion ne se contente pas de résumer — elle synthétise et projette. On the whole et broadly speaking sont des généralisateurs soignés.",
                examples: [
                    { french: 'Ultimately, the decision rests with the individual.', english: 'En fin de compte, la décision appartient à l\'individu.' },
                    { french: 'In the final analysis, no easy solutions exist.', english: 'En dernière analyse, il n\'existe pas de solutions faciles.' },
                    { french: 'All things considered, the conference was a success.', english: 'Tout bien considéré, la conférence a été un succès.' },
                    { french: 'Broadly speaking, the results confirm the hypothesis.', english: 'D\'une manière générale, les résultats confirment l\'hypothèse.' },
                ],
            },
        ],
        exercises: [
            { sentence: '___ the objections raised, the proposal was approved. (malgré, très formel)', answer: 'Notwithstanding', hint: 'Notwithstanding = malgré (registre juridique/diplomatique)' },
            { sentence: 'Case ___ ___: the 2008 financial crisis. (par exemple, preuve à l\'appui)', answer: 'in point', hint: 'Case in point — exemple probant' },
            { sentence: 'Three issues were identified, ___: cost, timing, and scope.', answer: 'namely', hint: 'Namely introduit une liste précise des éléments mentionnés' },
            { sentence: '___ ___ ___, the project was a success despite its flaws. (tout bien considéré)', answer: 'All things considered', hint: 'All things considered = tout bien considéré, bilan général' },
            { sentence: '___, the argument is simple: invest now or pay more later. (en essence)', answer: 'In essence', hint: 'In essence = en essence/au fond, résumé de l\'essentiel' },
        ],
    },
    {
        unit: 4,
        id: 'en-translation-strategies',
        title: 'Stratégies de traduction et équivalence',
        level: 'C2',
        description: "La traduction n'est pas un dictionnaire bilingue. Comprenez les stratégies professionnelles pour rendre le sens, le ton et la culture d'un texte d'une langue à l'autre.",
        icon: '🔄',
        color: '#4338CA',
        sections: [
            {
                title: 'Traduction littérale vs. traduction dynamique',
                explanation: "La traduction littérale (mot à mot) produit souvent des résultats maladroits ou incompréhensibles. La traduction dynamique (ou fonctionnelle) cherche à rendre l'effet équivalent dans la langue cible. Par exemple, It\'s raining cats and dogs ne se traduit pas littéralement — on dit Il pleut des cordes. Le traducteur doit choisir selon le contexte entre fidélité formelle et fidélité au sens.",
                examples: [
                    { french: 'Littéral : "It\'s raining cats and dogs." → *Il pleut des chats et des chiens. / Dynamique : Il pleut des cordes.', english: 'Traduction littérale vs. traduction dynamique pour une expression idiomatique' },
                    { french: 'Littéral : "She has butterflies in her stomach." → *Elle a des papillons dans l\'estomac. / Dynamique : Elle a le trac.', english: 'Avoir le trac (to have butterflies) — l\'image change entre les langues' },
                    { french: 'Une traduction littérale d\'une métaphore peut trahir le registre ou sembler ridicule.', english: 'A literal translation of a metaphor can betray the register or seem absurd.' },
                    { french: '"Lost in translation" : certains sens ou nuances sont impossibles à rendre parfaitement.', english: '« Lost in translation » : certains sens ou nuances sont intraduisibles.' },
                ],
            },
            {
                title: 'Faux amis et pièges lexicaux',
                explanation: "Les faux amis sont des mots qui se ressemblent entre l'anglais et le français mais ont des sens différents. Exemple : eventually ne signifie pas « éventuellement » (= possibly) mais « finalement » (= in the end). Sympathetic ne signifie pas « sympathique » (= nice) mais « compatissant » (= showing sympathy). Ces pièges sont fréquents dans les textes bilingues et les traductions rapides.",
                examples: [
                    { french: '"Eventually, they found a solution." = Finalement, ils ont trouvé une solution. (PAS éventuellement)', english: 'Faux ami : eventually = finalement, pas éventuellement' },
                    { french: '"He was very sympathetic." = Il était très compatissant. (PAS sympathique)', english: 'Faux ami : sympathetic = compatissant, pas sympathique' },
                    { french: '"She is actually quite talented." = En fait, elle est assez talentueuse. (actually ≠ actuellement)', english: 'Faux ami : actually = en fait, pas actuellement' },
                    { french: '"This is a sensible decision." = C\'est une décision raisonnable/judicieuse. (sensible ≠ sensible)', english: 'Faux ami : sensible = raisonnable/judicieux, pas sensible' },
                ],
            },
            {
                title: 'Référents culturels et intraduisibles',
                explanation: "Certains mots ou expressions résistent à la traduction directe car ils renvoient à des réalités culturelles spécifiques. L'anglais a emprunté des mots français intraduisibles : joie de vivre, déjà vu, raison d'être, esprit de corps. De même, le français a emprunté des anglicismes : fair play, casting, brainstorming. Quand aucun équivalent n'existe, le traducteur peut emprunter le mot, ajouter une note ou trouver une périphrase.",
                examples: [
                    { french: 'Heimweh (allemand) = homesickness mais moins fort : un mal du pays profond', english: 'Pas de traduction exacte en anglais ; homesickness ou nostalgia sont approchants' },
                    { french: 'L\'anglais emprunte : joie de vivre, déjà vu, raison d\'être, bon vivant', english: 'Ces mots français sont utilisés tels quels en anglais car intraduisibles' },
                    { french: '"Schadenfreude" = pleasure at others\' misfortune (mot allemand, sans équivalent direct en anglais)', english: 'Schadenfreude — plaisir tiré du malheur d\'autrui : concept sans mot équivalent en anglais' },
                    { french: 'Stratégies : emprunt direct, note de bas de page, traduction descriptive, adaptation culturelle', english: 'Strategies: direct borrowing, footnote, descriptive translation, cultural adaptation' },
                ],
            },
        ],
        exercises: [
            { sentence: '"Eventually" in French = ___', answer: 'finalement', hint: 'Faux ami : eventually = finalement (NOT éventuellement = possibly)' },
            { sentence: '"Sympathetic" in French = ___', answer: 'compatissant', hint: 'Faux ami : sympathetic = compatissant (not sympathique = nice/friendly)' },
            { sentence: 'Translate idiomatically: "Il pleut des cordes." → It\'s raining ___ and ___.', answer: 'cats / dogs', hint: 'Traduction dynamique de l\'expression française par l\'idiome anglais équivalent' },
            { sentence: '"Actually" in French = ___ ___ ___ (2 mots)', answer: 'en fait', hint: 'Faux ami : actually = en fait (not actuellement = currently)' },
            { sentence: 'A "sensible" decision in French = une décision ___', answer: 'raisonnable', hint: 'Faux ami : sensible (EN) = raisonnable/judicieux, pas sensible (FR) = sensitive' },
        ],
    },
];
