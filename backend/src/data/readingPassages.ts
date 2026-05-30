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
    // ─── B2 Reading Passages ────────────────────────────────────────────────────
    {
        moduleId: 'b2-article-education',
        title: 'L\'École de la République : Promesse ou Illusion ?',
        source: 'Texte original — niveau B2',
        paragraphs: [
            'La France se targue d\'avoir l\'un des systèmes éducatifs les plus égalitaires au monde. Gratuité de l\'enseignement public, baccalauréat national, grandes écoles ouvertes sur concours — sur le papier, tout enfant, quelle que soit sa naissance, peut aspirer aux sommets. Mais les chiffres racontent une autre histoire.',
            'Selon le rapport PISA de l\'OCDE, la France est l\'un des pays développés où l\'origine socio-économique pèse le plus lourd sur la réussite scolaire. Un enfant issu d\'une famille aisée a quatre fois plus de chances d\'intégrer une grande école qu\'un enfant de milieu ouvrier. Les classes préparatoires, censées être le sas vers l\'excellence, recrutent massivement dans quelques lycées d\'élite concentrés à Paris et dans les grandes métropoles.',
            'Les réformateurs soulignent pourtant les progrès réels accomplis. La scolarisation est quasi universelle. Des dispositifs comme les « cordées de la réussite » ou la politique d\'éducation prioritaire tentent de corriger les inégalités les plus criantes. Le débat oppose ceux qui veulent plus de mixité scolaire à ceux qui défendent l\'excellence individuelle sans quotas.',
            'La question, au fond, est philosophique : l\'école doit-elle garantir l\'égalité des chances — donner à chacun les mêmes outils — ou l\'égalité des résultats, quitte à avantager les plus défavorisés ? La réponse que donnera la société française à cette question déterminera le visage de sa démocratie pour les décennies à venir.',
        ],
    },
    {
        moduleId: 'b2-debat-ecologie',
        title: 'Nucléaire ou Renouvelable : Le Grand Débat',
        source: 'Texte original — niveau B2',
        paragraphs: [
            '— Permettez-moi d\'ouvrir ce débat sur une réalité que l\'on tend à ignorer : la France produit 70 % de son électricité grâce au nucléaire, avec un des bilans carbone par habitant les plus faibles d\'Europe. Le nucléaire, contrairement aux idées reçues, est une énergie décarbonée. En période d\'urgence climatique, peut-on se permettre de la sacrifier sur l\'autel de l\'émotion ?',
            '— Je vous arrête immédiatement. L\'énergie nucléaire n\'est pas sans risque : Tchernobyl, Fukushima sont des réalités, pas des abstractions. Et surtout, elle génère des déchets radioactifs dont nous ne savons pas quoi faire pour les dix prochains millénaires. Sans parler des délais de construction de toute nouvelle centrale — vingt ans minimum. Nous n\'avons pas vingt ans devant nous.',
            '— Les énergies renouvelables ont leurs propres limites. L\'éolien et le solaire sont intermittents : ils ne produisent pas quand il n\'y a pas de vent ou de soleil. La capacité de stockage n\'est pas encore au niveau. Si vous fermez les centrales nucléaires sans solution de remplacement, vous allez brûler du gaz — et donc émettre du CO₂. C\'est un paradoxe écologique.',
            '— Le vrai enjeu, c\'est l\'investissement dans la recherche. Les batteries de nouvelle génération, l\'hydrogène vert, les smart grids — tout cela avance vite. La question n\'est pas de choisir entre le nucléaire et les renouvelables comme si c\'était une religion, mais d\'avoir une politique énergétique cohérente sur trente ans, avec un mix équilibré et une vraie stratégie de réduction de la consommation. Voilà la réponse responsable.',
        ],
    },
    {
        moduleId: 'b2-chronique-societale',
        title: 'Réseaux Sociaux et Santé Mentale : La Génération Sous Pression',
        source: 'Texte original — niveau B2',
        paragraphs: [
            'La génération née avec le smartphone a grandi dans un monde où chaque moment de la vie peut être — doit être ? — partagé, commenté, liké. Instagram, TikTok, Snapchat : ces plateformes ont profondément reconfiguré les relations sociales des 13-25 ans. Et les études s\'accumulent pour montrer que cette reconfiguration a un coût psychologique considérable.',
            'Une méta-analyse publiée dans The Lancet Psychiatry en 2023 a établi une corrélation significative entre l\'usage intensif des réseaux sociaux et les symptômes dépressifs chez les adolescentes. La comparaison sociale permanente, l\'exposition aux corps idéalisés, la tyrannie des commentaires négatifs — autant de facteurs qui érodent l\'estime de soi. Les garçons ne sont pas épargnés, mais les effets semblent plus marqués chez les filles.',
            'Les plateformes, bien sûr, se défendent. TikTok invoque la liberté d\'expression. Instagram assure avoir renforcé ses filtres de contenu. Certains chercheurs nuancent également : les réseaux sociaux permettent aussi à des jeunes isolés de trouver des communautés bienveillantes, de partager des expériences, de se sentir moins seuls. Le problème n\'est pas la technologie en soi, mais son usage excessif et non régulé.',
            'La réponse politique commence à prendre forme. Plusieurs pays européens envisagent d\'interdire aux moins de 16 ans l\'accès aux plateformes sans accord parental. En France, une loi sur l\'espace numérique adoptée en 2023 impose aux plateformes de vérifier l\'âge des utilisateurs. Une chose est certaine : laisser des algorithmes conçus pour maximiser l\'engagement définir l\'identité de toute une génération n\'est pas une option acceptable.',
        ],
    },
    {
        moduleId: 'b2-nouvelles-francophones',
        title: 'Le Retour',
        source: 'Texte original — niveau B2 (inspiration francophone)',
        paragraphs: [
            'Le taxi s\'arrêta devant une maison que Kofi reconnut sans la reconnaître. Les bougainvilliers avaient envahi la façade — rose et violet, débordants, presque agressifs. La grille en fer forgé était toujours là, mais repeinte en noir, là où autrefois elle était verte. Dix-sept ans. Il s\'étonna de ressentir si peu.',
            'Sa mère l\'attendait sous le fromager qui ombrageait la cour depuis toujours. Elle avait vieilli, bien sûr. Les années l\'avaient courbée légèrement, comme ces arbres qui poussent contre le vent. Mais ses yeux, eux, n\'avaient pas changé — ce regard qui traversait les gens, qui voyait ce qu\'ils ne disaient pas.',
            '— Tu as l\'air d\'un étranger, dit-elle après un long silence.\n— Je suis un étranger, répondit-il sans amertume.\nElle secoua la tête, comme pour chasser cette idée. — Non. Tu es mon fils. C\'est différent.\nIl ne dit rien. Il avait appris, là-bas, dans ce pays de froid et de grisaille, que certaines vérités ne se discutent pas. On les reçoit, on les laisse s\'installer, et on attend de voir ce qu\'elles deviennent.',
            'Le soir, ils mangèrent ensemble pour la première fois depuis des années. Sa mère avait cuisiné le foutou, les arachides, tout ce que son corps avait oublié et que sa mémoire n\'avait jamais lâché. Il mangea en silence, les yeux fermés par moments, comme pour s\'assurer que c\'était réel. Et quelque chose, alors, commença à se dénouer — quelque chose qu\'il n\'avait pas su qu\'il portait.',
        ],
    },
    {
        moduleId: 'b2-lettre-ouverte',
        title: 'Lettre Ouverte au Maire de Bordeaux',
        source: 'Texte original — niveau B2',
        paragraphs: [
            'Monsieur le Maire,\n\nNous, habitants du quartier Saint-Michel, souhaitons porter à votre connaissance notre profonde inquiétude concernant le projet de rénovation urbaine prévu pour notre secteur. Si nous comprenons la nécessité de moderniser certaines infrastructures, nous estimons que le plan actuel sacrifie la cohésion sociale de notre quartier au profit d\'une rentabilité à court terme.',
            'Le cœur du problème est le suivant : sur les 340 logements sociaux concernés par la démolition, seuls 180 logements équivalents sont prévus dans le cadre du relogement. Les soixante familles restantes se verront proposer des solutions en dehors du quartier — ce qui revient, concrètement, à les expulser d\'un tissu social qu\'elles ont construit sur des décennies. La gentrification ne se décrète pas, Monsieur le Maire, mais elle se permet ou se combat.',
            'Nous ne sommes pas opposés au changement. Saint-Michel a besoin de rénovation, de nouveaux équipements, d\'espaces verts. Mais une rénovation qui déplace les populations fragiles n\'est pas du progrès : c\'est du déplacement de problème. Nous demandons instamment que le plan soit revu pour garantir le relogement de toutes les familles concernées dans le périmètre du quartier, que les associations locales soient intégrées au comité de pilotage, et qu\'un bilan social indépendant soit réalisé avant tout commencement des travaux.',
            'Dans l\'attente d\'une réponse à nos préoccupations légitimes, nous vous prions d\'agréer, Monsieur le Maire, l\'expression de notre respectueux engagement citoyen.\n\nLes habitants du collectif Saint-Michel Vivant',
        ],
    },
    {
        moduleId: 'b2-interview-intellectuel',
        title: 'Entretien avec une Philosophe',
        source: 'Texte original — niveau B2',
        paragraphs: [
            'Professeure Élise Marand, vous venez de publier « Le Temps du Doute », un essai sur l\'incertitude dans les sociétés contemporaines. D\'où vient cette idée ?\n— L\'idée est venue d\'une observation simple : nous vivons dans une époque de surinformation, et pourtant le sentiment d\'incertitude n\'a jamais été aussi répandu. Les gens savent plus, mais semblent croire moins. Il y a là une contradiction qui m\'a semblé philosophiquement féconde.',
            '— Vous dites que le doute est une vertu civique. Mais n\'est-ce pas dangereux dans un monde où les fake news prolifèrent ?\n— Il faut distinguer deux formes de doute. Le doute sceptique — celui qui refuse toute vérité, qui relativise tout — peut effectivement devenir un terreau pour la manipulation. Mais le doute critique — celui qui interroge, qui demande des preuves, qui refuse les certitudes trop confortables — c\'est le fondement même de la démocratie. Le problème, c\'est qu\'on a enseigné aux gens à douter de tout sans leur apprendre à distinguer.',
            '— Quel rôle joue la philosophie dans ce contexte ?\n— Un rôle essentiel, et pourtant menacé. La philosophie enseigne précisément cette distinction : comment argumenter rigoureusement, comment identifier un sophisme, comment résister à la démagogie. Ce n\'est pas une matière scolaire abstraite — c\'est un outil de survie démocratique. Que nous ayons progressivement marginalisé son enseignement au profit de matières plus « utiles » est, à mon sens, l\'une des erreurs stratégiques majeures des quarante dernières années.',
            '— Un dernier mot pour nos lecteurs ?\n— Doutez. Mais doutez bien. Posez des questions sur vos propres certitudes avant de remettre en cause celles des autres. Et lisez — pas pour consommer des opinions, mais pour construire les vôtres. C\'est un travail. C\'est même un travail difficile. Mais c\'est le seul qui rende vraiment libre.',
        ],
    },
    {
        moduleId: 'b2-article-scientifique-vulgarise',
        title: 'L\'Intelligence Artificielle va-t-elle Remplacer les Médecins ?',
        source: 'Texte original — niveau B2',
        paragraphs: [
            'En 2022, un algorithme développé par Google DeepMind a détecté des cancers du sein sur des mammographies avec une précision supérieure à celle de radiologues expérimentés. En 2023, un modèle de langage a réussi l\'équivalent des examens de médecine dans plusieurs pays. Ces résultats font régulièrement la une de la presse spécialisée et alimentent une question que beaucoup se posent : l\'intelligence artificielle va-t-elle remplacer les médecins ?',
            'La réponse courte est : non — du moins pas dans un avenir prévisible. La réponse longue est plus nuancée. L\'IA excelle dans les tâches de reconnaissance de patterns à grande échelle : analyser des milliers d\'images médicales, identifier des corrélations statistiques dans des bases de données gigantesques, ou proposer des diagnostics différentiels à partir de symptômes. Pour ces tâches répétitives et volumineuses, elle surpasse l\'humain.',
            'Mais la médecine ne se résume pas à la détection de patterns. Elle implique une relation humaine, une écoute, une contextualisation de la maladie dans une vie singulière. Un algorithme ne peut pas sentir l\'anxiété d\'un patient, comprendre pourquoi il n\'a pas pris ses médicaments, ou peser le bénéfice d\'un traitement agressif pour une personne de 85 ans. Ce sont des jugements éthiques et relationnels qui relèvent irréductiblement de l\'humain.',
            'L\'avenir le plus probable est donc celui d\'une collaboration : une IA qui assiste le médecin, réduit ses erreurs, et lui permet de concentrer son temps et son attention sur ce que la machine ne peut pas faire. Le vrai enjeu n\'est pas de savoir si l\'IA remplacera les médecins, mais de s\'assurer qu\'elle sera utilisée pour améliorer les soins — et non pour réduire les coûts au détriment de la qualité humaine de la médecine.',
        ],
    },
    // ─── C1 Passages ────────────────────────────────────────────────────────────
    {
        moduleId: 'c1-discours-politique',
        title: 'L\'Europe face à ses contradictions',
        source: 'Texte original — niveau C1',
        paragraphs: [
            'L\'Union européenne se trouve aujourd\'hui à la croisée des chemins. Projet né des cendres de la Seconde Guerre mondiale, elle incarne depuis sept décennies l\'ambition d\'une paix durable et d\'une prospérité partagée. Pourtant, les crises successives — financière en 2008, migratoire en 2015, sanitaire en 2020, énergétique en 2022 — ont mis à nu les tensions structurelles entre la logique supranationale des institutions bruxelloises et la logique souveraine des États membres.',
            'La montée des populismes, à l\'Est comme à l\'Ouest, traduit une défiance profonde à l\'égard d\'une construction perçue par une partie des citoyens comme technocratique, déconnectée des réalités nationales et indifférente aux perdants de la mondialisation. Cette fracture n\'est pas seulement politique ; elle est aussi géographique, générationnelle et sociale. Elle oppose, en gros, les métropoles globalisées aux territoires ruraux ou industriels en déclin.',
            'Face à ces défis, deux visions s\'affrontent. La première, fédéraliste, plaide pour un approfondissement de l\'intégration : plus de compétences européennes, un budget commun renforcé, une politique étrangère unifiée. La seconde, intergouvernementale, défend le primat des nations et la nécessité d\'une Europe « à la carte », où chaque État peut moduler son degré de participation. Entre ces deux pôles, le débat est vif, souvent virulent, et rarement tranché.',
            'Ce qui est certain, c\'est que l\'immobilisme n\'est plus une option. Dans un monde marqué par la compétition entre grandes puissances — États-Unis, Chine, Russie — l\'Europe ne peut se permettre ni la fragmentation ni la paralysie décisionnelle. La question n\'est plus de savoir si elle doit évoluer, mais comment, et à quel rythme, et au profit de qui.',
        ],
    },
    {
        moduleId: 'c1-article-philosophique',
        title: 'La Liberté est-elle une illusion ?',
        source: 'Texte original — niveau C1',
        paragraphs: [
            'La question de la liberté humaine est l\'une des plus anciennes et des plus débattues de toute la philosophie. Sommes-nous réellement libres de nos actes, ou obéissons-nous à des déterminismes — biologiques, sociaux, psychologiques — qui nous échappent en grande partie ? La réponse que l\'on donne à cette question n\'est pas sans conséquences : elle touche aux fondements de la morale, du droit et de la responsabilité individuelle.',
            'Le déterminisme radical soutient que chaque action humaine est le résultat d\'une chaîne causale ininterrompue : nos gènes, notre éducation, nos expériences passées, les structures sociales dans lesquelles nous évoluons — tout cela conditionne irrémédiablement nos choix. Dans cette perspective, la liberté n\'est qu\'une fiction consolatrice, une illusion que le cerveau se raconte pour donner un sens à des mécanismes qui lui sont, en réalité, opaques.',
            'Pourtant, la plupart d\'entre nous vivent et se comportent comme si la liberté était réelle. Nous délibérons, nous hésitons, nous regrettons. Ces expériences subjectives ont-elles une valeur philosophique, ou ne sont-elles que l\'épiphénomène d\'un déterminisme sous-jacent ? Jean-Paul Sartre, dans L\'Être et le Néant, tranchait radicalement : l\'homme est condamné à être libre. Rien — ni l\'inconscient, ni la société, ni Dieu — ne peut le dispenser du poids de son choix.',
            'Le débat contemporain tend vers une position plus nuancée, dite compatibiliste : la liberté ne consisterait pas à échapper au déterminisme, mais à agir conformément à ses propres désirs rationnels, en l\'absence de contrainte extérieure. On est libre non pas parce que l\'on échappe aux causes, mais parce que les causes qui nous font agir sont les nôtres. Cette définition, plus modeste, réconcilie liberté et science — et c\'est peut-être le meilleur que l\'on puisse espérer.',
        ],
    },
    {
        moduleId: 'c1-moliere-extract',
        title: 'Le Misanthrope — Acte I, Scène 1 (extrait adapté)',
        source: 'Molière, Le Misanthrope (1666) — texte adapté, niveau C1',
        paragraphs: [
            'Alceste, un homme profondément épris de sincérité, entre en scène avec Philinte, son ami plus accommodant. Alceste reproche à Philinte d\'avoir salué chaleureusement un homme qu\'il connaît à peine, lui prodiguant des marques d\'affection qu\'il ne ressent pas. Pour Alceste, cette hypocrisie sociale est une forme de corruption morale que la bienséance déguise en politesse.',
            'Philinte défend, lui, l\'usage social : il est impossible de traiter chaque homme selon son mérite réel, sous peine de vivre en guerre perpétuelle avec son entourage. Les formes de la politesse sont le lubrifiant de la vie sociale ; les respecter, c\'est faire preuve de sagesse, non de lâcheté. À cela, Alceste répond que la sagesse qui exige le mensonge n\'est qu\'une autre forme de compromission.',
            'Cet échange pose une question universelle : vaut-il mieux être sincère et solitaire, ou sociable et compromis ? Molière ne tranche pas clairement — Alceste a de la grandeur, mais aussi du ridicule. Sa rigueur morale le rend insupportable autant qu\'admirable. La pièce est une comédie, mais ses questions sont on ne peut plus sérieuses.',
        ],
    },
    {
        moduleId: 'c1-camus-etranger',
        title: 'L\'Étranger — Chapitre premier (extrait adapté)',
        source: 'Albert Camus, L\'Étranger (1942) — texte adapté, niveau C1',
        paragraphs: [
            'Aujourd\'hui, maman est morte. Ou peut-être hier, je ne sais pas. J\'ai reçu un télégramme de l\'asile : « Mère décédée. Enterrement demain. Sentiments distingués. » Cela ne veut rien dire. C\'était peut-être hier.',
            'L\'incipit de L\'Étranger est l\'un des plus célèbres de la littérature française. En quelques phrases, Camus installe son personnage, Meursault, dans une étrangeté radicale : l\'indifférence apparente à la mort de sa propre mère. Ce n\'est pas cruauté, mais absence — une incapacité à ressentir les émotions attendues, à jouer le rôle que la société lui assigne.',
            'Meursault est un homme du présent absolu. Il observe le monde avec une précision sensorielle intense — la chaleur du soleil, la lumière aveuglante, la fatigue physique — mais reste coupé de l\'affect et de la signification. Cette dissociation entre les sensations et le sens est le cœur du roman : un homme qui vit sans projet, sans mensonge, et qui sera condamné moins pour son crime que pour son refus d\'hypocrisie sociale.',
            'Camus appelait cette posture philosophique l\'absurde : la confrontation entre le désir humain de sens et le silence de l\'univers. Meursault ne crie pas contre ce silence — il le vit. Et c\'est cela qui, paradoxalement, le rend à la fois étranger à la société et terriblement humain.',
        ],
    },
    {
        moduleId: 'c1-voltaire-candide',
        title: 'Candide — Chapitre premier (extrait adapté)',
        source: 'Voltaire, Candide ou l\'Optimisme (1759) — texte adapté, niveau C1',
        paragraphs: [
            'Candide est un jeune homme d\'une naïveté absolue, élevé dans le château du baron Thunder-ten-Tronckh. Son précepteur, le philosophe Pangloss, lui enseigne que tout va pour le mieux dans le meilleur des mondes possibles. Cette conviction, qui est une satire directe de la philosophie optimiste de Leibniz, va être mise à l\'épreuve par une succession de catastrophes.',
            'Le roman est un conte philosophique : il utilise la légèreté du genre — les aventures rocambolesques, le rythme vif, le personnage naïf — pour délivrer une critique virulente des institutions humaines : l\'Église, la noblesse, la guerre, l\'esclavage, le colonialisme. Voltaire ne croit pas à la bonté naturelle de l\'humanité, ni à la providence divine ; il croit à la raison et à l\'action concrète.',
            'La leçon finale du roman est restée célèbre : il faut cultiver son jardin. Cette formule n\'est pas un repli résigné, mais une invitation à agir sur ce qui est à notre portée, à travailler plutôt qu\'à philosopher abstraitement. C\'est une forme de pragmatisme philosophique avant la lettre — et un antidote à toutes les idéologies qui promettent le bonheur au prix du sacrifice présent.',
        ],
    },
    {
        moduleId: 'c1-roman-contemporain',
        title: 'Les Années — Portrait d\'une génération (extrait adapté)',
        source: 'Annie Ernaux, Les Années (2008) — texte adapté, niveau C1',
        paragraphs: [
            'Annie Ernaux commence Les Années par une série de photos. Non pas des photos réelles, mais des souvenirs de photos — des images mentales qui font surgir une époque, une atmosphère, une façon d\'être au monde. À travers ce procédé, elle interroge la nature même de la mémoire : collective autant qu\'individuelle, fragmentaire plutôt que linéaire, construite par le langage autant que vécue.',
            'Le projet du roman est singulier : raconter une vie à la troisième personne, en substituant le « elle » au « je » et le « nous » au « eux ». Ce geste n\'est pas de la modestie, mais une ambition : faire de la vie d\'une femme née en 1940 le miroir d\'une génération entière. La mémoire privée devient mémoire collective ; l\'autobiographie se transforme en sociologie.',
            'Ce qui frappe dans l\'écriture d\'Ernaux, c\'est l\'attention portée aux objets, aux publicités, aux chansons, aux mots qui datent une époque. La langue sociale — les formules figées, les expressions à la mode, les tabous linguistiques — est traitée comme un document historique. Elle dit ce que les gens pensaient sans oser le dire, ce qu\'ils voulaient sans le formuler.',
            'Les Années est ainsi bien plus qu\'un roman autobiographique : c\'est une réflexion sur le temps qui passe, sur ce que la mémoire conserve et efface, sur la manière dont une époque façonne ceux qui la traversent — souvent à leur insu.',
        ],
    },
    {
        moduleId: 'c1-essai-identite',
        title: 'Identité : entre héritage et construction de soi',
        source: 'Texte original — niveau C1',
        paragraphs: [
            'L\'identité est l\'une des notions les plus discutées de la philosophie contemporaine. Qui suis-je ? Suis-je ce que mes origines font de moi — ma langue, ma culture, ma famille, mon histoire — ou suis-je ce que je choisis de devenir ? Cette tension entre identité reçue et identité construite traverse les débats politiques sur la nation, les questions philosophiques sur la liberté, et les expériences intimes de chacun.',
            'Le modèle traditionnel de l\'identité est essentialiste : il suppose qu\'il existe en chacun de nous une essence stable, définie une fois pour toutes par l\'appartenance à un groupe — nation, religion, classe sociale, ethnie. Cette vision a alimenté les grandes idéologies du XX° siècle, souvent au prix de violences considérables. Elle a aussi structuré des formes légitimes d\'appartenance et de solidarité.',
            'La pensée contemporaine privilégie une conception plus dynamique et relationnelle de l\'identité. Paul Ricœur distinguait l\'idem — ce qui reste identique dans le temps — et l\'ipse — ce à quoi on reste fidèle par engagement et promesse. L\'identité ne serait pas un donné, mais une tâche : se construire en répondant aux questions que l\'existence nous pose, en relation avec les autres.',
            'Cette conception ouverte de l\'identité n\'exclut pas l\'héritage ; elle suppose au contraire une relation active avec lui : accepter certains héritages, en discuter d\'autres, en refuser certains. Être soi, c\'est peut-être précisément cela : habiter une histoire tout en ne s\'y laisser pas enfermer.',
        ],
    },
    {
        moduleId: 'c1-reportage-social',
        title: 'Les déserts médicaux : une France qui souffre en silence',
        source: 'Texte original — niveau C1',
        paragraphs: [
            'Dans cette commune de deux mille habitants, le dernier médecin généraliste a pris sa retraite il y a trois ans. Depuis, les habitants font des heures de route pour consulter, ou renoncent purement et simplement aux soins. C\'est ce qu\'on appelle un désert médical — et ils couvrent aujourd\'hui plus de 40 % du territoire français, touchant en priorité les zones rurales et les banlieues populaires.',
            'Le phénomène n\'est pas nouveau, mais il s\'est considérablement aggravé. La génération des médecins nés dans les années cinquante et soixante part à la retraite, et les jeunes diplômés ne les remplacent pas. Non par manque de vocation, mais parce que les incitations à s\'installer en zone sous-dotée restent insuffisantes, et parce que les nouvelles générations de médecins refusent de plus en plus le modèle du généraliste isolé, disponible sept jours sur sept, qui a prévalu pendant un demi-siècle.',
            'Les conséquences sont graves : retard au diagnostic, renoncement aux soins, hospitalisations tardives et coûteuses. Le système français d\'assurance maladie, l\'un des plus généreux au monde sur le papier, se heurte dans les faits à cette fracture territoriale invisible. Avoir droit à des soins ne suffit pas si les soins sont inaccessibles.',
            'Face à cette crise, les réponses politiques sont timides. Des incitations financières existent, mais peinent à convaincre. Des expériences de télémédecine se développent, avec des résultats variables. Certains plaident pour une obligation de service, d\'autres pour un numerus clausus régionalisé. Toutes ces pistes se heurtent à des résistances corporatives et à la complexité administrative de l\'organisation des soins en France.',
        ],
    },
    {
        moduleId: 'c1-article-presse-specialisee',
        title: 'Le droit à l\'oubli numérique : entre mémoire et effacement',
        source: 'Texte original — niveau C1',
        paragraphs: [
            'En 2014, la Cour de justice de l\'Union européenne rendait un arrêt historique : un citoyen espagnol pouvait demander à Google de déréférencer des résultats de recherche le concernant, au nom du droit à l\'oubli. Cette décision a ouvert une boîte de Pandore juridique et éthique dont les implications se font encore sentir une décennie plus tard.',
            'Le droit à l\'oubli numérique repose sur une intuition simple : ce qu\'une personne a fait ou dit dans le passé ne devrait pas la définir indéfiniment. Les erreurs de jeunesse, les difficultés financières, les affaires personnelles résolues — autant de pages que l\'individu devrait avoir le droit de tourner, sans que les moteurs de recherche les maintiennent accessibles à jamais au premier venu.',
            'Mais ce droit se heurte à un autre droit fondamental : la liberté d\'information. Les journalistes, les historiens, les chercheurs voient dans le déréférencement une menace pour la mémoire collective et la transparence démocratique. Qui décide de ce qui mérite d\'être oublié ? Google ? Un juge ? L\'intéressé lui-même ? Chaque réponse soulève de nouvelles questions.',
            'Le Règlement Général sur la Protection des Données (RGPD), entré en vigueur en 2018, a formalisé ce droit tout en l\'encadrant. Il permet aux individus de demander l\'effacement de leurs données personnelles dans certaines conditions, mais prévoit des exceptions pour les intérêts publics, la recherche scientifique et historique. Un équilibre fragile, souvent contesté, qui reflète la difficulté à légiférer sur des questions aussi fondamentales que la mémoire et l\'identité à l\'ère numérique.',
        ],
    },
    // ─── C2 Passages ────────────────────────────────────────────────────────────
    {
        moduleId: 'c2-proust-extract',
        title: 'La Madeleine — Du côté de chez Swann (extrait adapté)',
        source: 'Marcel Proust, Du côté de chez Swann (1913) — extrait adapté, niveau C2',
        paragraphs: [
            'Il y avait déjà bien des années que, de Combray, tout ce qui n\'était pas le théâtre et le drame de mon coucher n\'existait plus pour moi, quand un jour d\'hiver, comme je rentrais à la maison, ma mère, voyant que j\'avais froid, me proposa de me faire prendre, contre mon habitude, un peu de thé. Je refusai d\'abord, et je ne sais pourquoi, je me ravisai. Elle envoya chercher un de ces gâteaux courts et dodus appelés Petites Madeleines qui semblent avoir été moulés dans la valve rainurée d\'une coquille de Saint-Jacques.',
            'Et bientôt, machinalement, accablé par la morne journée et la perspective d\'un triste lendemain, je portai à mes lèvres une cuillerée du thé où j\'avais laissé s\'amollir un morceau de madeleine. Mais à l\'instant même où la gorgée mêlée des miettes du gâteau toucha mon palais, je tressaillis, attentif à ce qui se passait d\'extraordinaire en moi.',
            'Un plaisir délicieux m\'avait envahi, isolé, sans la notion de sa cause. Il m\'avait aussitôt rendu les vicissitudes de la vie indifférentes, ses désastres inoffensifs, sa brièveté illusoire, de la même façon qu\'opère l\'amour, en me remplissant d\'une essence précieuse : ou plutôt cette essence n\'était pas en moi, elle était moi. J\'avais cessé de me sentir médiocre, contingent, mortel.',
            'Ce passage illustre ce que Proust appelle la « mémoire involontaire » : un souvenir surgit non par l\'effort de la volonté, mais par le hasard d\'une sensation — un goût, une odeur, un son. Contrairement à la mémoire volontaire, qui ne restitue que des images plates et froides, la mémoire involontaire redonne le passé dans sa fraîcheur et son épaisseur d\'autrefois. C\'est le fondement de toute l\'entreprise de La Recherche du temps perdu.',
        ],
    },
    {
        moduleId: 'c2-hugo-les-miserables',
        title: 'Les Chandelliers de l\'Évêque — Les Misérables (extrait adapté)',
        source: 'Victor Hugo, Les Misérables (1862) — extrait adapté, niveau C2',
        paragraphs: [
            'Jean Valjean avait passé dix-neuf ans au bagne. Il avait été condamné pour avoir volé un pain afin de nourrir les enfants de sa sœur affamée. Libéré, il errait sur les routes, partout rejeté, partout chassé, jusqu\'à ce qu\'il frappe à la porte de Monseigneur Bienvenu, évêque de Digne.',
            'L\'évêque le reçut comme un hôte. Il l\'invita à sa table, lui offrit un lit, le traita avec la même dignité qu\'il réservait à ses invités les plus distingués. Mais cette nuit-là, Valjean, incapable de dormir, cédait à une tentation : il prit les couverts en argent de l\'évêque et s\'enfuit dans la nuit.',
            'Il fut arrêté le lendemain matin par des gendarmes qui l\'amenèrent devant l\'évêque. Et là se produisit quelque chose d\'inouï. L\'évêque sourit et dit : « Ah ! vous voilà ! Je suis aise de vous voir. Eh bien, mais ! je vous avais donné les chandeliers aussi, qui sont en argent comme le reste et dont vous pourrez bien avoir deux cents francs. Pourquoi ne les avez-vous pas emportés avec vos couverts ? »',
            'Ce geste de grâce bouleversa Valjean. En refusant de le dénoncer, en lui offrant de surcroît les chandeliers, l\'évêque lui rendait sa dignité d\'homme. Hugo fait de ce moment le pivot du roman : ce n\'est pas la loi, mais la bonté, qui rachète un être humain. Les chandeliers deviendront pour Valjean le symbole de sa transformation intérieure et de sa nouvelle vie.',
        ],
    },
    {
        moduleId: 'c2-beauvoir-deuxieme-sexe',
        title: 'On ne naît pas femme — Le Deuxième Sexe (extrait adapté)',
        source: 'Simone de Beauvoir, Le Deuxième Sexe (1949) — extrait adapté, niveau C2',
        paragraphs: [
            'On ne naît pas femme : on le devient. Aucun destin biologique, psychique, économique ne définit la figure que revêt au sein de la société la femelle humaine ; c\'est l\'ensemble de la civilisation qui élabore ce produit intermédiaire entre le mâle et le castrat qu\'on qualifie de féminin. Seule la médiation d\'autrui peut constituer un individu comme un Autre.',
            'Cette phrase, l\'une des plus célèbres de la philosophie du XX° siècle, pose le fondement de l\'analyse de Beauvoir : la féminité n\'est pas une donnée naturelle, mais une construction sociale et culturelle. Ce que l\'on nomme « la femme » est le résultat d\'une longue éducation, d\'une série d\'injonctions, de représentations, de contraintes qui façonnent les comportements, les désirs et l\'image de soi.',
            'Beauvoir s\'inscrit dans la tradition existentialiste : l\'existence précède l\'essence. L\'être humain n\'a pas de nature figée ; il se définit par ses choix et ses actes. Si la femme a longtemps semblé définie par sa biologie, c\'est que les conditions sociales et historiques l\'ont enfermée dans ce rôle. La libération ne consiste pas à nier les différences, mais à refuser qu\'elles déterminent les possibilités de vie.',
            'Le Deuxième Sexe est un texte fondateur du féminisme moderne. Il a introduit des concepts — l\'altérité, la construction du genre, l\'immanence vs la transcendance — qui structurent encore aujourd\'hui les sciences humaines. Lire Beauvoir, c\'est apprendre à voir comment les évidences culturelles peuvent masquer des rapports de pouvoir profondément enracinés.',
        ],
    },
    {
        moduleId: 'c2-sartre-huis-clos',
        title: 'L\'Enfer, c\'est les autres — Huis Clos (extrait adapté)',
        source: 'Jean-Paul Sartre, Huis Clos (1944) — extrait adapté, niveau C2',
        paragraphs: [
            'Huis Clos met en scène trois personnages — Garcin, Inès, et Estelle — enfermés pour l\'éternité dans un salon Second Empire. Pas de fenêtres, pas de miroirs, pas de nuit. La lumière crue ne s\'éteint jamais. Il n\'y a pas de bourreau : les trois personnages sont leur propre torture.',
            'La pièce s\'achève sur une réplique qui est devenue l\'une des formules les plus citées de la philosophie du XX° siècle : « L\'enfer, c\'est les autres. » Mais cette formule est souvent mal comprise. Sartre ne dit pas que les autres sont mauvais. Il dit quelque chose de plus précis : c\'est par le regard d\'autrui que nous prenons conscience de nous-mêmes — et ce regard nous fige, nous transforme en objet, nous dépossède de notre liberté.',
            'Garcin ne peut pas se prouver qu\'il n\'est pas un lâche, parce qu\'il est mort avant d\'avoir pu agir autrement. Il a besoin du regard d\'Inès pour se définir, mais Inès le condamne. C\'est cette dépendance impossible — avoir besoin d\'autrui pour exister tout en étant aliéné par lui — qui constitue l\'enfer de Sartre.',
            'La pièce est aussi une réflexion sur la mauvaise foi : Estelle refuse de voir ce qu\'elle a fait, Garcin refuse d\'admettre sa lâcheté, Inès seule se juge lucidement — mais cette lucidité ne la sauve pas. La leçon existentialiste de Huis Clos est que la liberté est une responsabilité dont on ne peut se décharger, ni dans la mort, ni dans l\'illusion.',
        ],
    },
    {
        moduleId: 'c2-balzac-goriot',
        title: 'Le Père Goriot — Portrait d\'un Paris impitoyable (extrait adapté)',
        source: 'Honoré de Balzac, Le Père Goriot (1835) — extrait adapté, niveau C2',
        paragraphs: [
            'La Maison Vauquer est une pension bourgeoise dont l\'atmosphère reflète fidèlement, selon Balzac, l\'état moral de ses habitants. Tout y est à la fois mesquin et sordide : les meubles mangés par l\'usage, les odeurs de cuisine rance et de moisi, la propriétaire elle-même, dont la robe de chambre résume, dit Balzac, « tout le séjour, l\'atmosphère et la vie de la pension ».',
            'Le père Goriot est l\'un des pensionnaires. Ancien vermicellier enrichi, il a tout donné à ses deux filles pour qu\'elles épousent des hommes titrés et entrent dans le monde. Ses filles l\'ont oublié. Il vit dans une chambre de plus en plus misérable, vend ses derniers biens pour régler leurs dettes et payer leurs caprices, sans que l\'une ni l\'autre ne vienne le voir.',
            'Balzac fait du père Goriot une figure christique : comme le Christ, il souffre par amour, il se sacrifie pour des ingrats, et il meurt abandonné. Mais contrairement au Christ, il n\'y a pas de résurrection. La société parisienne que dépeint La Comédie humaine est régie par une loi unique : l\'argent. L\'amour paternel n\'est pas une valeur — c\'est une faiblesse que les filles de Goriot exploitent froidement.',
            'Rastignac, le jeune étudiant provincial qui observe cette tragédie, tire la leçon. Devant Paris illuminé depuis le cimetière du Père-Lachaise, où il vient d\'enterrer Goriot seul, il lance : « À nous deux maintenant ! » C\'est la formule de l\'ambition sans illusions, du jeune homme qui choisit de jouer le jeu de la société plutôt que d\'en être la victime.',
        ],
    },
    {
        moduleId: 'c2-flaubert-bovary',
        title: 'Emma Bovary — Style Indirect Libre (extrait adapté)',
        source: 'Gustave Flaubert, Madame Bovary (1857) — extrait adapté, niveau C2',
        paragraphs: [
            'Emma Bovary est une jeune femme élevée dans un couvent, nourrie de romans sentimentaux et de rêves romanesques. Elle épouse Charles Bovary, médecin de campagne, et découvre très vite que la vie réelle ne ressemble pas aux livres qu\'elle a lus. L\'ennui s\'installe — ce que Flaubert nomme parfois le « bovarysme » : l\'écart irréductible entre ce que l\'on rêve et ce que l\'on vit.',
            'Le génie stylistique de Flaubert réside dans l\'utilisation du style indirect libre. Contrairement au discours direct (« Je suis malheureuse », dit Emma) ou au discours indirect (Emma dit qu\'elle était malheureuse), le style indirect libre fond la voix du narrateur et celle du personnage en une seule : « Pourquoi, mon Dieu, s\'était-elle mariée ? » Le lecteur ne sait plus si c\'est le narrateur ou Emma qui pense — et c\'est voulu.',
            'Cette technique permet à Flaubert d\'être simultanément à l\'intérieur et à l\'extérieur de son personnage : il épouse le flux de conscience d\'Emma tout en maintenant une distance ironique. Quand Emma s\'emballe pour un rêve romantique, la prose de Flaubert imite cet emballement — phrases longues, images lyriques — mais la chute qui suit est toujours sobre, clinique, désenchantée.',
            'Flaubert a mis cinq ans à écrire Madame Bovary, travaillant chaque phrase jusqu\'à l\'épuisement. Il cherchait ce qu\'il appelait « le mot juste » — l\'unique mot qui convient, qui ne peut être remplacé par aucun autre. Cette exigence stylistique a transformé le roman français et influencé des générations d\'écrivains, de Maupassant à Proust, et au-delà.',
        ],
    },
    {
        moduleId: 'c2-poesie-symboliste',
        title: 'Correspondances — Baudelaire (extrait et analyse)',
        source: 'Charles Baudelaire, Les Fleurs du Mal (1857) — texte et analyse, niveau C2',
        paragraphs: [
            'La Nature est un temple où de vivants piliers / Laissent parfois sortir de confuses paroles ; / L\'Homme y passe à travers des forêts de symboles / Qui l\'observent avec des regards familiers. // Comme de longs échos qui de loin se confondent / Dans une ténébreuse et profonde unité, / Vaste comme la nuit et comme la clarté, / Les parfums, les couleurs et les sons se répondent.',
            '"Correspondances" est le poème programme du symbolisme baudelairien. L\'idée centrale est que la nature n\'est pas un simple décor, mais un langage — un système de signes que le poète doit apprendre à déchiffrer. Les sens — l\'ouïe, la vue, l\'odorat — se répondent mutuellement (c\'est ce qu\'on appelle la synesthésie) et pointent vers une unité cachée derrière le monde visible.',
            'La structure du sonnet est classique : deux quatrains, deux tercets. Mais le contenu est révolutionnaire. Baudelaire substitue à la nature romantique (refuge, consolation, harmonie) une nature ambiguë et inquiétante. Les piliers sont "vivants", les symboles "observent" l\'homme — c\'est lui qui est regardé, pas l\'inverse. La nature est active, mystérieuse, peut-être menaçante.',
            'Ce poème a eu une influence considérable sur la poésie française et mondiale. Mallarmé, Verlaine, Rimbaud s\'en sont nourris. La notion de "correspondances" — entre les arts, entre les sens, entre le visible et l\'invisible — est devenue une clef de lecture non seulement de la poésie, mais de toute l\'esthétique moderne.',
        ],
    },
    {
        moduleId: 'c2-essay-contemporary',
        title: 'L\'Ennui au XX° siècle — Essai (texte original)',
        source: 'Texte original — niveau C2',
        paragraphs: [
            'Peut-on s\'ennuyer au XXI° siècle ? La question peut sembler absurde à l\'heure des notifications permanentes, des flux d\'information ininterrompus, et des offres de divertissement illimitées. Pourtant, les études psychologiques récentes suggèrent que l\'ennui n\'a pas disparu — il s\'est transformé. Et cette transformation dit quelque chose d\'important sur notre rapport au temps et à nous-mêmes.',
            'L\'ennui classique, celui que décrivait Pascal en évoquant la condition humaine incapable de rester en repos dans une chambre, était un vide — une absence de stimulation qui forçait le sujet à se retrouver face à lui-même. C\'était inconfortable, parfois douloureux, mais potentiellement fécond : c\'est dans l\'ennui que naissent la rêverie, la méditation, et parfois la création.',
            'L\'ennui contemporain est différent. Il ne naît pas du silence, mais du bruit. C\'est un ennui de saturation : trop d\'écrans, trop d\'images, trop de sollicitations, et au bout du compte, une sensation de vide encore plus profonde. Le philosophe coréen Byung-Chul Han parle de « société de la fatigue » : une société dans laquelle l\'individu s\'épuise à produire, à consommer, à performer — sans jamais trouver le repos ni le sens.',
            'Ce que nous avons perdu, suggère-t-il, c\'est la capacité à l\'inactivité contemplative — ce que les Anciens appelaient l\'otium, par opposition au negotium (l\'affairement). L\'otium n\'est pas la paresse ; c\'est un temps de non-faire actif, de présence à soi-même, propice à la pensée profonde. Le retrouver dans un monde hyperconnecté est peut-être l\'un des défis les plus urgents de notre époque.',
        ],
    },
    {
        moduleId: 'c2-discours-academique',
        title: 'L\'Université et la Société — Leçon inaugurale (extrait adapté)',
        source: 'Texte original inspiré du Collège de France — niveau C2',
        paragraphs: [
            'Permettez-moi, en ouvrant ce cours, de vous proposer quelques réflexions sur la nature même de ce que nous allons entreprendre ensemble. Qu\'est-ce qu\'une leçon ? Qu\'est-ce qu\'un savoir transmis ? Et dans quel rapport l\'université entretient-elle avec la société dont elle est issue et qu\'elle est censée servir ?',
            'L\'université, dans sa forme médiévale originelle, était un lieu de dispute — de confrontation réglée des arguments, d\'épreuve rigoureuse des thèses. Ce qui l\'opposait au simple enseignement de la tradition, c\'était précisément cette capacité à mettre en doute, à questionner les évidences reçues, à ne pas tenir pour acquis ce que la coutume avait simplement imposé. En ce sens, l\'université était, et doit rester, une institution fondamentalement critique.',
            'Mais critique ne signifie pas destructeur. L\'esprit critique n\'est pas le scepticisme paresseux qui refuse tout engagement. C\'est au contraire une exigence : celle de ne pas accepter une affirmation sans en examiner les fondements, les présupposés, les implications. C\'est un travail lent, patient, souvent ingrat — mais sans lequel la connaissance se pétrifie en dogme.',
            'Le paradoxe de l\'université contemporaine est qu\'elle est de plus en plus pressée de produire des résultats mesurables, des compétences certifiées, des diplômés employables — pendant que la société a de plus en plus besoin, précisément, de ce que l\'université seule peut fournir : du temps long, de la profondeur, de la pensée qui résiste à l\'urgence. Ce cours sera une tentative modeste de tenir ces deux exigences ensemble.',
        ],
    },
    {
        moduleId: 'c2-news-analysis',
        title: 'Comment lire un éditorial — Analyse de presse',
        source: 'Texte original — niveau C2',
        paragraphs: [
            'Un éditorial n\'est pas un article de presse comme les autres. Là où le reportage s\'efforce de décrire les faits, l\'éditorial les interprète. Là où la chronique peut se permettre le ton personnel et familier, l\'éditorial engage la ligne éditoriale du journal — c\'est-à-dire sa position institutionnelle sur un sujet donné. Lire un éditorial, c\'est donc apprendre à lire un texte à plusieurs niveaux en même temps.',
            'Le premier niveau est thématique : quel est le sujet ? Le deuxième niveau est argumentatif : quelle est la thèse défendue ? Par quels arguments, quels exemples, quelles concessions ? Le troisième niveau est rhétorique : quels procédés stylistiques le journaliste utilise-t-il pour convaincre — l\'ironie, l\'apostrophe, la question rhétorique, l\'accumulation, le chiasme ? Le quatrième niveau, enfin, est idéologique : quelles valeurs, quels présupposés, quelle vision du monde transparaissent derrière le texte ?',
            'Ce dernier niveau est le plus difficile à saisir, précisément parce qu\'il est le moins explicite. Tout texte est ancré dans un point de vue — mais les bons journalistes savent rendre ce point de vue invisible, le naturaliser, le faire passer pour du bon sens. La lecture critique consiste à rendre visible cet ancrage : d\'où parle cet auteur ? Pour qui ? Avec quels intérêts ? En faveur de quelle vision du monde ?',
            'Ce n\'est pas là un exercice de méfiance systématique, mais de lucidité. La presse est un bien public essentiel dans une démocratie. Savoir la lire — pas seulement la consommer — est une compétence civique fondamentale. Et c\'est une compétence qui s\'apprend, qui se travaille, qui exige de la pratique. Le français de haut niveau n\'est pas seulement une langue : c\'est aussi un outil de pensée critique.',
        ],
    },
    // ─── English Learning Passages (French speakers learning English) ────────────
    {
        moduleId: 'a1en-first-day',
        title: 'First Day at School',
        source: 'Original text — Level A1',
        paragraphs: [
            'My name is Tom. Today is my first day at school. I am seven years old. I am nervous. There are many children in the classroom. My teacher is very nice. Her name is Miss Green.',
            'We sit at our desks. Miss Green says: "Hello, everyone! My name is Miss Green. Welcome to class." We learn the alphabet and some numbers. I like it very much. School is fun.',
            'At lunchtime, I eat a sandwich. I sit with a boy called Sam. Sam is friendly. He says: "Do you like football?" I say: "Yes, I do!" We are friends now.',
        ],
    },
    {
        moduleId: 'a1en-my-city',
        title: 'My City',
        source: 'Original text — Level A1',
        paragraphs: [
            'My name is Lucy. I live in a city called Greenford. It is not a big city, but I love it. There is a park near my house. The park has many trees and a small lake. People walk their dogs there every day.',
            'In the city centre, there are lots of shops, a market and a cinema. There is also a train station. Many people travel to the big city for work. The buses run every fifteen minutes.',
            'The people in Greenford are very friendly. My neighbours say hello in the street. On Saturdays, we go to the market. We buy fresh bread, fruit and vegetables. I think Greenford is a great place to live.',
        ],
    },
    {
        moduleId: 'a2en-weekend-trip',
        title: 'A Weekend in London',
        source: 'Original text — Level A2',
        paragraphs: [
            'Last weekend, my friend Clara and I travelled to London by train. It was Clara\'s first time in the city, so I wanted to show her all the famous sights. We left early on Saturday morning and arrived at St Pancras station just after nine o\'clock.',
            'Our first stop was the Tower of London. We queued for about twenty minutes, but it was worth it — the Crown Jewels were spectacular. Afterwards, we walked across Tower Bridge and took lots of photos. By lunchtime, we were hungry, so we found a little café near the South Bank and had fish and chips.',
            'In the afternoon, we visited the Tate Modern art gallery. I have always loved modern art, but Clara was not so sure at first. By the end, though, she said it was one of the most interesting places she had ever been. We ended the day with a boat trip along the Thames and watched the sun set behind the London Eye.',
            'On Sunday morning, we explored Borough Market before catching our train home. Clara bought some cheese and a jar of local honey. "I have to come back," she said on the way home. I completely agreed.',
        ],
    },
    {
        moduleId: 'a2en-job-interview',
        title: 'Sophie\'s Job Interview',
        source: 'Original text — Level A2',
        paragraphs: [
            'Sophie had been looking for a new job for two months when she finally got a call from a marketing company in Bristol. They invited her for an interview the following Thursday. She felt excited but also very nervous.',
            'The night before the interview, Sophie prepared carefully. She read everything about the company, chose her best suit and practised answering common interview questions in front of the mirror. She went to bed early so she would feel rested in the morning.',
            'On the day of the interview, Sophie arrived ten minutes early. The office was modern and bright. The manager, a friendly woman called Ms Park, asked her about her experience and her strengths. Sophie spoke clearly and gave good examples. She also asked a few questions about the team.',
            'Two days later, Ms Park called Sophie to offer her the job. Sophie said yes immediately. She started the following Monday. It was a new beginning, and she felt ready for the challenge.',
        ],
    },
    {
        moduleId: 'b1en-social-media',
        title: 'Social Media and Young People',
        source: 'Original article — Level B1',
        paragraphs: [
            'Social media platforms such as Instagram, TikTok and Snapchat are used by billions of people around the world, and young people make up a significant share of these users. For many teenagers, these apps are a normal part of daily life — a way to stay in touch with friends, discover new music and express themselves creatively.',
            'However, concerns about the effects of social media on young people\'s mental health have grown in recent years. Several studies suggest a link between heavy social media use and increased levels of anxiety and low self-esteem, particularly among teenage girls. The constant pressure to post perfect photos and gain likes can make young people feel that their real lives do not measure up.',
            'On the positive side, social media can also be a powerful tool for connection and learning. Young people who feel isolated in their local communities can find supportive groups online. Activists have used these platforms to raise awareness about important issues such as climate change and social justice. Many young content creators have even turned their online presence into a career.',
            'The key question is not whether social media is good or bad, but how it is used. Experts recommend setting time limits, following accounts that make you feel good, and taking regular breaks from screens. Parents and schools also have a role to play in helping young people develop healthy digital habits.',
        ],
    },
    {
        moduleId: 'b1en-green-city',
        title: 'Building a Greener City',
        source: 'Original article — Level B1',
        paragraphs: [
            'As cities around the world continue to grow, urban leaders are under increasing pressure to reduce carbon emissions and improve the quality of life for residents. Many are turning to green initiatives — projects designed to make cities cleaner, healthier and more sustainable for future generations.',
            'One of the most successful approaches has been investing in public transport. Cities that have expanded their metro systems or introduced electric bus networks have seen significant reductions in traffic and air pollution. Copenhagen, for example, has built an impressive cycle lane network that allows a large proportion of residents to travel by bike every day, even in winter.',
            'Green spaces are another priority. Research shows that access to parks and gardens reduces stress, encourages physical activity and supports urban biodiversity. Some cities have gone further, planting trees on rooftops and along motorways to absorb carbon dioxide and lower temperatures during heatwaves.',
            'Renewable energy is also transforming city infrastructure. Solar panels are now installed on schools, sports centres and public buildings in many European cities. Some neighbourhoods have even become energy-neutral, producing as much electricity as they consume. These examples show that sustainable urban development is not just possible — it is already happening.',
        ],
    },
    {
        moduleId: 'b2en-digital-education',
        title: 'Education in the Digital Age',
        source: 'Original article — Level B2',
        paragraphs: [
            'Technology has fundamentally altered the landscape of education over the past two decades. From interactive whiteboards in primary schools to AI-powered tutoring platforms at university level, the tools available to teachers and learners have never been more varied or more powerful. Advocates argue that this digital transformation is democratising access to knowledge; critics warn that it risks undermining the very qualities that make education meaningful.',
            'The COVID-19 pandemic served as an involuntary global experiment in remote learning. Schools and universities were forced to migrate online almost overnight, exposing both the possibilities and the limitations of digital education. On the one hand, platforms such as Zoom and Google Classroom allowed lessons to continue across borders; on the other, significant inequalities emerged between students who had reliable internet access and those who did not.',
            'Artificial intelligence is now adding another dimension to this debate. Personalised learning software can adapt to each student\'s pace and identify gaps in understanding with remarkable precision. Some institutions have begun using AI to provide round-the-clock tutoring support, raising questions about the future role of human teachers. Will the teacher of tomorrow be primarily a facilitator, guiding students through a landscape of digital resources, rather than a direct transmitter of knowledge?',
            'There are legitimate concerns on the other side of this argument. Research consistently shows that social interaction, debate and the mentorship of experienced educators play a crucial role in cognitive and emotional development. A screen, however sophisticated, cannot replicate the nuanced feedback of a skilled teacher, nor the serendipitous moment when a student\'s curiosity is ignited by an unexpected classroom discussion.',
            'The most persuasive vision of education in the digital age is not a binary choice between screens and chalkboards, but a thoughtful integration of both. Technology should enhance human teaching, not replace it. Achieving that balance will require not just investment in devices and infrastructure, but sustained reflection on what education is ultimately for.',
        ],
    },
    {
        moduleId: 'b2en-cultural-identity',
        title: 'Cultural Identity in a Globalised World',
        source: 'Original article — Level B2',
        paragraphs: [
            'Globalisation has brought undeniable benefits: greater interconnectedness, the spread of ideas, and access to cultures and products from every corner of the world. Yet it has also triggered a profound and sometimes anxious conversation about cultural identity. As the world becomes more cosmopolitan, many communities are asking: what does it mean to belong somewhere, and what happens to that sense of belonging when the boundaries between cultures begin to dissolve?',
            'The concern is not new. Throughout history, dominant cultures have absorbed or displaced smaller ones. What is distinctive about the contemporary moment is the speed and scale of this process. A teenager in Lagos, Bogotá or Warsaw can consume the same music, films and fashion as their counterpart in New York or London. This cultural convergence creates a sense of shared global experience — but it can also make local traditions, languages and customs feel endangered.',
            'Yet the picture is more complex than a simple story of cultural homogenisation. Research in anthropology and sociology suggests that people rarely abandon their cultural heritage entirely in favour of a global identity. Instead, they engage in what scholars call "hybridisation" — blending influences from multiple sources to create something new and distinctly their own. The French chef who incorporates Japanese techniques, the Brazilian musician who fuses samba with electronic beats, or the second-generation immigrant who navigates fluidly between two worlds: these are not examples of cultural loss, but of cultural creativity.',
            'The greatest risk, perhaps, is not that cultures will disappear, but that only certain voices will be amplified by globalisation while others are systematically marginalised. When the majority of global media, technology platforms and economic power is concentrated in a handful of countries, the flow of cultural influence is rarely equal. Protecting cultural diversity therefore requires deliberate policies: supporting minority languages, funding local arts and media, and ensuring that the global digital space reflects the full breadth of human experience.',
            'In the end, cultural identity has always been dynamic rather than fixed. It is shaped by history, geography and contact with others. Embracing this fluidity, while remaining attentive to the power imbalances that shape it, may be the most honest and productive response to the challenge globalisation poses.',
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
