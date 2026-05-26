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
    // ─── A2 Reading Passages ────────────────────────────────────────────────────
    {
        moduleId: 'a2-une-journee-typique',
        title: 'La Journée de Clara',
        source: 'Texte original — niveau A2',
        paragraphs: [
            'Clara est étudiante à Bordeaux. Hier, comme d\'habitude, elle s\'est levée à sept heures. Elle s\'est douchée, s\'est habillée rapidement et a préparé son café. Pendant qu\'elle buvait son café, elle regardait les nouvelles sur son téléphone.',
            'Elle a pris le tram pour aller à la faculté. Dans le tram, elle lisait ses notes pour le cours du matin. Le cours de sociologie durait deux heures. Le professeur expliquait des concepts intéressants, mais la salle était trop chaude et Clara avait du mal à se concentrer.',
            'À midi, elle a retrouvé ses amies à la cafétéria. Elles ont mangé ensemble et ont parlé du week-end. Sa amie Léa voulait organiser une soirée. — Je peux inviter tout le monde chez moi samedi, a dit Léa. — Super idée ! a répondu Clara. On pourrait cuisiner quelque chose de spécial.',
            'L\'après-midi, Clara a travaillé à la bibliothèque pendant trois heures. Elle préparait un exposé sur les réseaux sociaux. À dix-huit heures, elle est rentrée chez elle. Elle s\'est préparé une omelette et a regardé une série. Elle s\'est couchée à vingt-trois heures, fatiguée mais contente de sa journée.',
        ],
    },
    {
        moduleId: 'a2-vacances-en-bretagne',
        title: 'Vacances en Bretagne',
        source: 'Texte original — niveau A2',
        paragraphs: [
            'L\'été dernier, ma famille et moi avons passé deux semaines en Bretagne. Nous avons réservé un gîte près de la mer, à Quiberon. Le trajet depuis Paris a duré environ quatre heures en voiture. Quand nous sommes arrivés, il faisait beau et le soleil brillait sur la mer.',
            'Chaque matin, nous allions à la plage. L\'eau était froide, mais mes enfants adoraient se baigner. Mon mari et moi préférions faire des promenades le long des falaises. La côte bretonne est vraiment magnifique — on voyait des rochers orangés, des mouettes et, au loin, des bateaux de pêche.',
            'Un jour, nous avons pris le bateau pour visiter Belle-Île. La traversée a duré quarante-cinq minutes. Sur l\'île, nous avons loué des vélos et avons découvert des criques cachées. Nous avons déjeuné dans un petit restaurant du port. J\'ai commandé des moules-frites et mon mari a pris un plateau de fruits de mer.',
            'Le dernier soir, nous avons dîné dans une crêperie traditionnelle. J\'ai pris une galette complète — jambon, œuf et fromage — et une crêpe au caramel beurre salé pour le dessert. C\'était délicieux ! Nous sommes rentrés à Paris le dimanche matin, la voiture pleine de souvenirs et de boîtes de biscuits bretons.',
        ],
    },
    {
        moduleId: 'a2-le-marche',
        title: 'Le Marché du Dimanche',
        source: 'Texte original — niveau A2',
        paragraphs: [
            'Chaque dimanche matin, Antoine se rend au marché de son quartier. Il aime acheter des produits frais directement chez les producteurs locaux. Ce matin-là, il avait prévu de préparer une ratatouille pour le déjeuner et cherchait des légumes de saison.',
            'Chez le maraîcher, Antoine a choisi des courgettes, des aubergines et des poivrons rouges. — Ces tomates viennent d\'où ? a-t-il demandé. — Elles sont de ma ferme, à vingt kilomètres d\'ici, a répondu le producteur en souriant. — Elles sont bio ? — Oui, monsieur, sans pesticides. Elles ont été cueillies ce matin. — Parfait ! J\'en prends un kilo, s\'il vous plaît.',
            'Antoine a ensuite acheté de l\'huile d\'olive chez un artisan provençal, des herbes fraîches — thym, laurier et basilic — et une belle bouteille de vin rosé. Au stand de fromages, il a goûté plusieurs variétés et a finalement choisi un chèvre frais et un morceau de comté affiné.',
            'Sur le chemin du retour, il s\'est arrêté à la boulangerie pour prendre une baguette et des croissants. Sa voisine Martine l\'a croisé sur le pas de sa porte. — Vous rentrez du marché ? Ça sent bon chez vous déjà ! — Je prépare une ratatouille, voulez-vous nous rejoindre pour déjeuner ? a proposé Antoine. — Avec grand plaisir ! a répondu Martine.',
        ],
    },
    {
        moduleId: 'a2-une-lettre-damitie',
        title: 'Une Lettre d\'Amitié',
        source: 'Texte original — niveau A2',
        paragraphs: [
            'Lyon, le 14 mars\n\nChère Sofía,\n\nComment vas-tu ? Ça fait déjà trois mois que tu es repartie au Mexique et tu me manques beaucoup ! Je t\'écris depuis ma chambre où il fait encore froid — ici, le printemps arrive toujours trop tard.',
            'Depuis ton départ, les choses ont bien changé. J\'ai commencé un nouveau travail dans une agence de communication. C\'est très différent de mon ancien poste, mais j\'apprends beaucoup. Mes collègues sont sympas et l\'ambiance est agréable. Le bureau est en plein centre-ville, alors je mange souvent dans le quartier — il y a d\'excellents restaurants !',
            'Le week-end dernier, je suis allée voir une exposition de photographie au musée. Les photos venaient d\'Amérique latine et certaines m\'ont rappelé ton pays. J\'ai pensé à toi en les regardant. Ensuite, j\'ai retrouvé nos amies Inès et Camille pour prendre un verre. On a parlé de toi et on espère que tu pourras revenir en été.',
            'J\'ai aussi une grande nouvelle : je vais venir au Mexique en septembre ! Je vais d\'abord passer une semaine à Mexico puis rejoindre des amis à Oaxaca. Est-ce qu\'on pourrait se voir pendant ce voyage ? Ce serait fantastique de te rendre visite chez toi ! Réponds-moi vite pour qu\'on organise ça.\n\nGrosses bises,\nÉmilie',
        ],
    },
    {
        moduleId: 'a2-recette-francaise',
        title: 'La Tarte aux Pommes de Grand-Mère',
        source: 'Texte original — niveau A2',
        paragraphs: [
            'La tarte aux pommes est l\'un des desserts les plus appréciés en France. Cette recette est celle de ma grand-mère, qui la préparait chaque dimanche pour toute la famille. Elle est simple, rapide et toujours délicieuse.',
            'Pour réaliser cette tarte, vous aurez besoin de : une pâte brisée (achetée ou faite maison), six pommes (de préférence des Golden ou des Reinettes), deux cuillères à soupe de sucre, une cuillère à café de cannelle, une noisette de beurre et deux cuillères à soupe de confiture d\'abricot pour le glaçage.',
            'Préchauffez le four à 180°C. Épluchez les pommes et coupez-les en fines lamelles. Étalez la pâte dans un moule beurré. Disposez les lamelles de pommes en rosace sur la pâte. Saupoudrez de sucre et de cannelle. Ajoutez quelques petits morceaux de beurre sur les pommes. Faites cuire pendant trente-cinq minutes jusqu\'à ce que la pâte soit dorée.',
            'Pendant que la tarte refroidit, faites chauffer la confiture d\'abricot dans une petite casserole avec une cuillère d\'eau. Badigeonnez les pommes avec ce mélange pour les rendre brillantes et appétissantes. Servez tiède avec une boule de glace à la vanille ou une cuillerée de crème fraîche. Bon appétit !',
        ],
    },
    // ─── B1 Reading Passages ────────────────────────────────────────────────────
    {
        moduleId: 'b1-une-histoire-de-famille',
        title: 'Une Histoire de Famille',
        source: 'Texte original — niveau B1',
        paragraphs: [
            'Ma grand-mère, Hélène, était née en 1932 dans un petit village de Normandie. Elle m\'avait souvent raconté que son enfance avait été simple mais heureuse, malgré les difficultés de l\'époque. Son père était agriculteur et travaillait la terre du matin au soir. Sa mère, elle, s\'occupait de la maison et des cinq enfants.',
            'Quand la guerre avait éclaté, Hélène n\'avait que sept ans. Elle se souvenait des soldats qui traversaient le village, de l\'absence de son père parti au front, et des longues nuits où sa mère la serrait dans ses bras pour la rassurer. Après la guerre, la famille avait déménagé à Rouen pour que les enfants puissent aller au lycée.',
            'C\'est là qu\'Hélène avait rencontré mon grand-père, Pierre. Ils s\'étaient croisés dans une librairie — lui cherchait un roman de Zola, elle feuilletait un recueil de poèmes de Prévert. Ils s\'étaient mariés en 1955 et avaient eu trois enfants, dont mon père.',
            'Hélène est décédée il y a cinq ans, à l\'âge de quatre-vingt-huit ans. Jusqu\'à la fin, elle racontait ces histoires avec les yeux brillants. « Ce qui compte, disait-elle, ce n\'est pas ce que tu as possédé, c\'est ce que tu as vécu avec les gens que tu aimes. » Cette phrase, je la porte avec moi chaque jour.',
        ],
    },
    {
        moduleId: 'b1-le-travail-a-distance',
        title: 'Le Travail à Distance : Révolution ou Illusion ?',
        source: 'Texte original — niveau B1',
        paragraphs: [
            'Depuis la pandémie de 2020, le télétravail s\'est imposé dans de nombreuses entreprises françaises. Ce qui n\'était qu\'une exception est devenu, pour des millions de salariés, une nouvelle normalité. Mais plusieurs années après cette transformation, la question se pose : le travail à distance est-il vraiment une révolution ou n\'est-il qu\'une illusion de liberté ?',
            'Les partisans du télétravail mettent en avant les avantages évidents : suppression des transports en commun souvent épuisants, meilleure organisation personnelle, et gains de productivité mesurés dans plusieurs études. Pour beaucoup de parents, c\'est aussi la possibilité d\'être plus présents pour leurs enfants sans sacrifier leur carrière.',
            'Pourtant, les critiques ne manquent pas. Certains employés se plaignent d\'un isolement croissant et d\'un effacement des frontières entre vie professionnelle et vie personnelle. « Je n\'arrête jamais vraiment de travailler », confie Nathalie, comptable dans une PME parisienne. « Mon bureau est dans mon salon et je consulte mes mails le week-end. »',
            'Les entreprises, de leur côté, cherchent un équilibre. Le modèle hybride — deux ou trois jours au bureau, le reste à domicile — semble s\'imposer comme solution de compromis. Il reste cependant une inégalité fondamentale : le télétravail est réservé aux métiers intellectuels. Caissières, livreurs, infirmières — eux ne peuvent pas travailler depuis chez eux. Cette fracture entre télétravailleurs et non-télétravailleurs est peut-être le véritable enjeu de cette révolution.',
        ],
    },
    {
        moduleId: 'b1-voyage-en-provence',
        title: 'Carnet de Voyage : La Provence en Juillet',
        source: 'Texte original — niveau B1',
        paragraphs: [
            'Je n\'avais jamais vu autant de lavande de ma vie. En descendant de la voiture à Valensole, le plateau s\'étendait devant nous comme une mer violette à perte de vue. L\'odeur était enivrante — douce, légèrement camphrée, mêlée à la chaleur sèche du mistral. Ma compagne a sorti son appareil photo et n\'a plus dit un mot pendant vingt minutes.',
            'Nous avions loué une vieille bergerie rénovée à quelques kilomètres du village. La propriétaire, Mme Bouchard, nous avait préparé un panier de bienvenue : fromage de chèvre local, tapenade, lavande séchée et une bouteille de rosé du domaine voisin. « Vous avez de la chance, nous a-t-elle dit. La lavande est à son pic cette semaine. Dans dix jours, ce sera fini. »',
            'Le lendemain, nous avons visité le marché d\'Apt. C\'est l\'un des plus beaux marchés de Provence — une centaine d\'exposants qui vendent des fruits confits, des épices, des herbes aromatiques et des tissus aux couleurs vives. J\'ai acheté un mélange de herbes de Provence et une confiture de figues qui sentait le soleil.',
            'Le soir, nous avons dîné en terrasse dans un petit restaurant du village. J\'ai commandé une daube provençale — un bœuf mijoté au vin rouge avec des olives et des carottes. C\'était lent, fondant, parfumé. Le patron nous a offert une carafe de vin maison en guise de bienvenue. En rentrant à la bergerie sous le ciel étoilé, j\'ai pensé : voilà ce que c\'est, voyager lentement.',
        ],
    },
    {
        moduleId: 'b1-interview-artiste',
        title: 'Rencontre avec une Artiste',
        source: 'Texte original — niveau B1',
        paragraphs: [
            'Camille Arnaud, vingt-neuf ans, expose ses tableaux pour la première fois dans une galerie parisienne du Marais. Ses toiles mêlent photographie et peinture à l\'huile pour créer des portraits d\'une étrange familiarité. Nous l\'avons rencontrée dans son atelier de Belleville, parmi les tubes de peinture et les châssis en bois.',
            '— Comment avez-vous commencé à peindre ?\n— J\'ai grandi dans une famille sans artistes. Mes parents sont ingénieurs tous les deux. Mais à quinze ans, j\'ai trouvé une vieille boîte de peinture dans le grenier de ma grand-mère et je n\'ai plus jamais arrêté. J\'ai fait les Beaux-Arts à Lyon, puis je suis montée à Paris il y a quatre ans.',
            '— Qu\'est-ce qui vous inspire ?\n— Les gens ordinaires dans des moments ordinaires. Une femme qui attend le bus. Un homme qui lit son journal dans le métro. Je cherche à capter cette espèce d\'attention flottante qu\'on a quand on n\'est pas vraiment là. C\'est ce que j\'appelle « l\'absent présent ».',
            '— Quel conseil donneriez-vous à de jeunes artistes ?\n— Ne cherchez pas à plaire. Cherchez à être honnête. L\'art qui me touche le plus, c\'est celui qui dit quelque chose de vrai, même si c\'est dérangeant. Et puis, travailler. Travailler tous les jours. L\'inspiration, ça vient en faisant, pas en attendant.',
        ],
    },
    {
        moduleId: 'b1-une-lettre-a-ami',
        title: 'Lettre à un Ami',
        source: 'Texte original — niveau B1',
        paragraphs: [
            'Paris, le 3 octobre\n\nCher Julien,\n\nCela fait maintenant deux mois que tu es parti t\'installer à Berlin et je dois l\'avouer : Paris me semble un peu moins vivant sans toi. J\'aurais dû t\'écrire plus tôt, mais tu me connais — entre le boulot et les soirées improvisées, le temps file.',
            'Ici, les choses ont changé. La librairie du bas de la rue a fermé, remplacée par une boutique de smoothies que personne ne fréquente vraiment. Mathieu a enfin trouvé un appartement en colocation à République — après six mois de galère. Et moi, j\'ai commencé une formation en photographie le samedi matin. C\'est épuisant mais j\'adore ça.',
            'Je voulais surtout te dire que j\'ai l\'intention de venir te rendre visite en décembre. Ça te conviendrait ? Je rêve de voir Berlin sous la neige, de manger des bratwurst et de boire de la bière brune dans un Kneipe. Et surtout, de te retrouver, évidemment.',
            'En attendant, donne-moi de tes nouvelles. Tu t\'es fait des amis ? Tu parles allemand couramment, toi qui maîtrisais l\'espagnol et l\'anglais en quelques mois ? J\'imagine que oui. Prends soin de toi, et à très bientôt j\'espère.\n\nAvec toute mon amitié,\nAntoine',
        ],
    },
    {
        moduleId: 'b1-article-jeunesse',
        title: 'La Jeunesse Française Aujourd\'hui',
        source: 'Texte original — niveau B1',
        paragraphs: [
            'Qui sont les jeunes Français d\'aujourd\'hui ? Selon le dernier rapport de l\'Institut national de la jeunesse et de l\'éducation populaire (INJEP), les 15-30 ans en France représentent environ 11 millions de personnes. Leurs valeurs, leurs préoccupations et leurs modes de vie ont profondément changé par rapport aux générations précédentes.',
            'L\'une des grandes évolutions concerne le rapport au travail. Si leurs aînés valorisaient la stabilité et la carrière à long terme dans une même entreprise, les jeunes d\'aujourd\'hui privilégient davantage l\'épanouissement personnel, la flexibilité et le sens de leur mission. Le nombre de créateurs d\'entreprise de moins de trente ans n\'a jamais été aussi élevé.',
            'Sur le plan environnemental, la jeunesse française est parmi les plus sensibilisées d\'Europe. Sept jeunes sur dix déclarent que le changement climatique est leur principale inquiétude. Cette préoccupation se traduit dans leurs choix de consommation : moins de viande, plus de vélo, achats en seconde main, refus de l\'avion pour les courts trajets.',
            'Mais la jeunesse française est aussi une jeunesse fragilisée. Le coût du logement dans les grandes villes, la précarité de l\'emploi et la pression des réseaux sociaux pèsent lourdement sur leur moral. « On nous dit que tout est possible, mais le marché du travail nous dit le contraire », confie Léa, vingt-trois ans, diplômée en sciences sociales et toujours sans emploi fixe six mois après son master.',
        ],
    },
    {
        moduleId: 'b1-temoignage-expatrie',
        title: 'Témoignage d\'un Expatrié',
        source: 'Texte original — niveau B1',
        paragraphs: [
            'Ça fait trois ans que je vis à Montréal. Quand on m\'a proposé un poste dans une startup québécoise spécialisée en intelligence artificielle, j\'ai accepté sans vraiment réfléchir. J\'avais vingt-huit ans, aucune attache, et l\'envie d\'ailleurs. Je ne savais pas que « l\'ailleurs » allait devenir « chez moi ».',
            'Le premier hiver a failli me briser. Moins trente degrés en février. Le vent qui coupe le visage comme un couteau. Les journées qui se finissent à seize heures dans un noir complet. Je me souviens d\'avoir appelé ma mère en pleurant un soir de janvier en lui disant que je voulais rentrer. Elle m\'a dit : « Tiens encore jusqu\'au printemps. » J\'ai tenu.',
            'Ce qui m\'a sauvé, c\'est la communauté. Les Québécois ont une chaleur humaine extraordinaire — plus directe que les Parisiens, moins formelle. Mon voisin, Denis, m\'a invité à son chalet pour la cabane à sucre en mars. C\'était ma première fois. On a mangé des oreilles de crisse et de la tire sur la neige. J\'ai pleuré de rire, cette fois.',
            'Aujourd\'hui, je me sens ni tout à fait français ni tout à fait québécois. Je dis « char » pour voiture et « magasiner » pour faire du shopping, mais je commande encore mon café « serré » au lieu de « fort ». Cette identité flottante, au début elle m\'inquiétait. Maintenant, je la considère comme une richesse. Vivre entre deux cultures, c\'est avoir deux façons de voir le monde.',
        ],
    },
    // ─── Sherlock Holmes ────────────────────────────────────────────────────────
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
