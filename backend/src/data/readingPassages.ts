export interface ReadingPassage {
    moduleId: string;
    title: string;
    source: string;
    paragraphs: string[];
}

export const readingPassages: ReadingPassage[] = [
    {
        moduleId: 'a1-au-cafe',
        title: 'Au Café de la Paix',
        source: 'Texte original — niveau A1',
        paragraphs: [
            'Marie et Thomas entrent dans un café. Il y a une table libre près de la fenêtre. Le serveur arrive. « Bonjour ! Vous désirez ? » demande-t-il. Marie répond : « Je voudrais un café au lait, s\'il vous plaît. » Thomas dit : « Et moi, je prends un chocolat chaud. »',
            'Le serveur apporte les boissons. Thomas goûte son chocolat chaud. « C\'est délicieux ! » dit-il. Marie regarde la carte. « Vous avez des croissants ? » demande-t-elle. « Oui, bien sûr, » répond le serveur. « Alors un croissant pour moi, s\'il vous plaît. »',
            'Ils parlent pendant une heure. Dehors, il pleut. À l\'intérieur, il fait chaud et c\'est très agréable. Marie aime beaucoup ce café. Elle habite dans le quartier et elle vient ici chaque semaine.',
            'À la fin, Thomas appelle le serveur. « L\'addition, s\'il vous plaît. » Le serveur apporte l\'addition. « C\'est douze euros, monsieur. » « Service compris ? » demande Thomas. « Oui, monsieur. » Ils paient et quittent le café. « À bientôt ! » dit le serveur.',
        ],
    },
    {
        moduleId: 'sherlock-holmes-ch1',
        title: 'L\'Arrivée à Baker Street',
        source: 'Une étude en rouge, A. Conan Doyle (adapté)',
        paragraphs: [
            'Le matin où tout commença, la bonne frappa à ma porte avec une enveloppe dans la main. Elle me la tendit sans un mot, puis attendit sur le seuil. Je pris ceci avec une certaine curiosité — l\'écriture sur l\'enveloppe était fine et précise, celle d\'un homme habitué à observer les détails.',
            'Je viens de lire votre annonce dans le journal, disait la lettre. Un appartement à partager au 221B, Baker Street. Je propose que nous nous rencontrions sur-le-champ, car je dois quitter mon hôtel dès demain. — Signé : S. Holmes.',
            'Je regardai par-dessus mon épaule vers la rue en contrebas. Un homme grand et mince se tenait immobile sur le trottoir d\'en face, les yeux levés vers ma fenêtre. Dès qu\'il vit que je l\'observais, il ôta son chapeau avec un sourire bref.',
            'Je pensai d\'abord que c\'était un ingrat que de juger un homme sur sa seule apparence. Mais quelque chose dans son regard — cette intensité calme, ce mouvement économe — me dit que cette rencontre allait changer bien des choses. Je descendis l\'escalier pour lui ouvrir la porte.',
        ],
    },
    {
        moduleId: 'a1-la-famille-martin',
        title: 'La Famille Martin',
        source: 'Texte original',
        paragraphs: [
            'Je m\'appelle Marie Martin. J\'ai trente-cinq ans et j\'habite à Lyon avec ma famille. Mon mari s\'appelle Thomas. Il a trente-huit ans. Il est médecin. Il travaille à l\'hôpital tous les jours. C\'est un homme très gentil.',
            'Nous avons deux enfants. Notre fils s\'appelle Léo. Il a huit ans. Il aime le football et les jeux vidéo. Notre fille s\'appelle Emma. Elle a cinq ans. Elle aime dessiner et chanter. Les enfants vont à l\'école près de chez nous.',
            'Notre appartement est grand et confortable. Il y a quatre chambres, un salon, une cuisine et une salle de bain. Nous avons aussi un petit jardin. Le week-end, nous aimons manger ensemble et faire des promenades dans le parc. Ma famille est ma grande joie !',
        ],
    },
    {
        moduleId: 'a1-une-journee-typique',
        title: 'Une Journée Typique',
        source: 'Texte original',
        paragraphs: [
            'Je m\'appelle Lucas. J\'ai onze ans et je vais au collège. Ma journée typique commence à sept heures. Je me lève, je prends une douche et je m\'habille. Ensuite, je mange mon petit-déjeuner : du pain avec du beurre et un verre de jus d\'orange.',
            'À huit heures, je prends le bus pour aller à l\'école. Les cours commencent à huit heures et demie. J\'ai cours de français, de maths et d\'anglais le matin. À midi, je mange à la cantine avec mes amis. L\'après-midi, j\'ai cours de sport et de sciences.',
            'À cinq heures, je rentre à la maison. Je fais mes devoirs pendant une heure. Après, je joue avec mon chien ou je regarde la télévision. À sept heures et demie, nous dînons en famille. Je me couche à neuf heures et demie. C\'est ma journée normale !',
        ],
    },
    {
        moduleId: 'a1-au-marche',
        title: 'Au Marché',
        source: 'Texte original',
        paragraphs: [
            'Le samedi matin, Sophie va au marché. Il y a beaucoup de légumes, de fruits et de fromages. Sophie parle avec le marchand de légumes.',
            '— Bonjour ! Je voudrais des tomates, s\'il vous plaît. C\'est combien ?\n— Bonjour madame ! Les tomates, c\'est deux euros le kilo. Vous en voulez combien ?\n— Un kilo, s\'il vous plaît. Et les carottes ?\n— Un euro cinquante le kilo, madame.\n— Très bien. Je prends aussi un kilo de carottes. Ça fait combien en tout ?\n— Ça fait trois euros cinquante, s\'il vous plaît.',
            'Sophie donne quatre euros au marchand. Il lui rend cinquante centimes de monnaie. — Merci, au revoir ! dit Sophie. — Bonne journée, madame ! répond le marchand. Sophie continue sa promenade au marché. Elle achète aussi du pain et des pommes. Elle adore le marché du samedi !',
        ],
    },
    {
        moduleId: 'sherlock-holmes-ch2',
        title: 'L\'Enquête Commence',
        source: 'Une étude en rouge, A. Conan Doyle (adapté)',
        paragraphs: [
            'Holmes commença à enquêter dès le lendemain matin. Il se pencha sur l\'unique indice laissé sur les lieux : une empreinte de botte dans la boue séchée près de la fenêtre. Il resta silencieux un long moment, puis se releva. « Il faut déduire avant d\'accuser, Watson. Un homme rusé ne laisse jamais de preuves par négligence. »',
            'Je soupçonnais le voisin depuis le début, mais Holmes me fit signe de me taire. « Regardez plutôt ce témoin, dit-il en désignant une vieille femme à l\'autre bout de la rue. Elle dissimule quelque chose sous son châle. » Effectivement, la vieille dame était déguisée — sa démarche trahissait un homme d\'une cinquantaine d\'années.',
            'Le stratagème était astucieux. Un complice attendait dans la ruelle pour recevoir le paquet volé. Holmes avait décidé de tendre un piège : il envoya une fausse lettre pour confronter les deux hommes en même temps. La situation était déconcertante pour nos adversaires, qui ne s\'attendaient pas à être pris dans leurs propres mensonges.',
            'Face à Holmes, implacable et méfiant de chaque parole, le premier homme finit par avouer. Son complice tenta de menacer Holmes, mais la percée était faite : en quelques questions précises, Holmes réussit à démêler toute l\'affaire. « Il ne faut jamais dissimuler la vérité bien longtemps, » dit-il en refermant son carnet.',
        ],
    },
];
