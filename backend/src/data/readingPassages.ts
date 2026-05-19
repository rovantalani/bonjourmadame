export interface ReadingPassage {
    moduleId: string;
    title: string;
    source: string;
    paragraphs: string[];
}

export const readingPassages: ReadingPassage[] = [
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
