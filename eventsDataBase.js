const eventDataBase = [
    {
        season: 'winter',
        name: 'Festival of Lights // Fête des lumières',
        img: "img/image6.jpg",
        date: 'from 8 to 11 December // du 8 au 11 décembre',
        localisation: 'Lyon city center // Centre ville de Lyon',
        description: 'Lyon, the city of lights, turns on all its lights, and the city is carried away in a marvellous show along its streets and alleys. The show is grandiose and well worth the diversions. The tradition is that each family in Lyon takes part in illuminating the city with small glasses filled with a candle, called lumignons. // Lyon la ville lumière allume toutes ses lumières, et la ville est emportée dans un merveilleux spectacle au fil de ses rues et ruelles. Le spectacle est grandiose et vaut vraiment le détour. La tradition veut que chaque famille lyonnaise participe à illuminer la ville avec des petits verres garnis d’une bougie, appelés des lumignons.'
    },


    {
        season: 'winter',
        name: 'Christmas Market // Marché de Noël',
        img: "img/Marchénoel2.jpeg",
        date: 'from 10 to 26 December // du 10 au 26 décembre',
        localisation: 'Place Carnot // Place Carnot',
        description: 'Like all big cities, Lyon also has its Christmas market. It is installed on the Place Carnot, from the end of November. The market brings together a large number of merchants and artists, who come to exhibit gifts for children, jewellery, tree decorations, sweets, local products, woollen articles, etc. // Comme toutes les grandes villes, Lyon a également son marché de Noël. Il est installé sur la place Carnot, dès la fin novembre. Le marché rassemble un grand nombre de marchands et dartistes, ils viennent exposer des cadeaux pour les enfants, des bijoux, des décorations de sapins, des bonbons, des produits du terroir, des articles en laine, etc.'
    },

    {
        season: 'winter',
        name: 'Book festival // Fête du livre',
        img: "img/livre.jpeg",
        date: 'from 5 to 12 January // du 5 au 12 janvier',
        localisation: 'Halles Tony Garnier // Halles Tony Garnier',
        description: 'Every year in mid-February the Parilly racecourse hosts the Bron Book Festival, a meeting of contemporary literature. It is a moment of exchange between authors and literature lovers. The Bron Book Festival is animated by numerous activities: debates, round tables, reading sessions for young and old, book signings. // Chaque année à la mi-février lhippodrome de Parilly accueille la Fête du Livre de Bron, une rencontre de littérature contemporaine. Il sagit dun moment déchange entre auteurs et passionnés de littérature. La Fête du Livre Bron est animée par de nombreuses activités : débats, tables-rondes, séances de lecture pour petits et grands, dédicaces.'
    },

    {
        season: 'winter',
        name: 'Harry Potter show // Spectacle Harry Potter',
        img: "img/hpotter.jpeg",
        date: 'from 2 to 7 February // du 2 au 7 février',
        localisation: 'Croix-Rousse // Croix-Rousse',
        description: 'For the first time on tour in France, relive this extraordinary story of friendship, magic and adventure during an exceptional film-concert! With more than 80 musicians on stage, the Yellow Socks Orchestra will perform John Williams unforgettable music live during the projection of the film (VOSTFR) on a giant screen, in perfect synchronisation with the images of the first opus. // Pour la première fois en tournée en France, revivez cette extraordinaire histoire d’amitié, de magie et d’aventure lors d’un ciné-concert exceptionnel ! Avec plus de 80 musiciens sur scène, le Yellow Socks Orchestra interprétera en live l’inoubliable musique de John Williams pendant la projection du film (VOSTFR) sur écran géant, en parfaite synchronisation avec les images du premier opus.'
    },

    {
        season: 'summer',
        name: 'Dance Biennial // Biennale de la danse',
        img: 'img/image2.jpg',
        date: 'from 1st to 16 June // du 1er au 16 juin',
        localisation: 'Maison de la danse // Maison de la danse',
        description: 'The programme is adapted to the situation, but promises many discoveries and emotions around African creativity and the youth of the 21st century and the immersive project of the Fagor Experience! 52 European and African creators, 22 creations, for a highly anticipated reunion with the public! From 1 to 16 June 2021. // La programmation s’adapte à la situation, mais promet bien des découvertes et des émotions autour de la créativité africaine et de la jeunesse du 21e siècle et le projet immersif de l Expérience Fagor! 52 créateurs européens et africains, 22 créations, pour des retrouvailles avec le public très attendues ! Du 1er au 16 juin 2021.'
    },

    {
        season: 'summer',
        name: 'Fourvière Nights // Nuits de fourvière',
        img: 'images/fourvières.jpg',
        date: 'from 1st June to 30 July // du 1er juin au 30 juillet',
        localisation: 'Antique theatre // Théatre antique',
        description: 'Theatre, music, dance, opera, circus... Les Nuits de Fourvière is devoted to the performing arts and has been working since 1946 to ensure that all disciplines coexist. Every summer, in June and July, the festival presents nearly 130 performances for more than 130,000 spectators. Although multidisciplinarity is a criterion, it is by no means an absolute rule. The festival guarantees its openness and its modernity by not standardizing or thematizing. The Nights have carved out a singular artistic project for themselves, with the only compass being the artistic quality of the projects and their inclusion on the international scene. // Théâtre, musique, danse, opéra, cirque... Les Nuits de Fourvière sont dévolues aux arts de la scène et s attachent, depuis 1946, à faire coexister les disciplines. Chaque été, en juin et juillet, le festival présente près de 130 représentations pour plus de cent trente mille spectateurs. Si la pluridisciplinarité est un critère, elle n est en rien une règle absolue. Le festival garantit son ouverture et sa modernité en se gardant de normer ou de thématiser. Les Nuits se sont sculptées un projet artistique singulier avec pour seule boussole la qualité artistique des projets et leur inscription sur la scène internationale.'
    },

    {
        season: 'summer',
        name: 'Jazz in Vienne // Jazz à Vienne',
        img: 'images/jazzVienne.jpg',
        date: 'from 23 June to 10 July // du 23 juin au 10 juillet',
        localisation: 'Antique theatre of Vienne // Théatre antique de Vienne',
        description: 'The Jazz à Vienne 2021 Festival will take place in Vienne from Thursday 24th June 2021 to Saturday 10th July 2021. On the programme of the Festival Jazz à Vienne 2021, you will find many artists and music groups in concert in Vienne. // Le Festival Jazz à Vienne 2021 vous donne rendez-vous pour une nouvelle édition à Vienne du jeudi 24 juin 2021 au samedi 10 juillet 2021. Au programme du Festival Jazz à Vienne 2021, retrouvez de nombreux artistes et groupes de musique en concert à Vienne.'
    },

    {
        season: 'summer',
        name: 'Music festival // Fête de la musique',
        img: 'img/fdlamusic.jpeg',
        date: ' 21 June // du 21 juin',
        localisation: 'City center // Centre ville',
        description: 'The Fête de la Musique 2021 will once again be unlike any other. It will indeed take place on 21 June, but exceptionally, it will extend throughout the month of July. Find out all the programme for the evening of 21 June by arrondissement of Lyon // La Fête de la Musique 2021 ne ressemblera encore une fois à aucune autre. Elle aura bien lieu ce 21 juin mais exceptionnellement, elle se prolongera tout au long du mois de juillet. Retrouvez tout le programme du 21 juin au soir par arrondissements de Lyon'
    },

    {
        season: 'spring',
        name: '24h of INSA // 24h de l INSA',
        img: 'img/24hinsa.jpeg',
        date: 'may // mai',
        localisation: 'La Doua Campus, Villeurbanne // Campus de la Doua, Villeurbanne',
        description: 'The INSA 24 hour festival in Villeurbanne every year in May. 2 evenings of concerts, 2 days of free entertainment, 24 hours of sports races! With friends or family, we are waiting for you on the Doua campus for this event organised 100% by students // Festival des 24 heures de l INSA à Villeurbanne chaque année au mois de mai. 2 soirées de concerts, 2 journées d animations gratuites, 24 heures de courses sportives ! Entre amis ou en famille, nous vous attendons sur le campus de la Doua pour cet évènement organisé 100% par des étudiants'
    },

    {
        season: 'spring',
        name: 'Beautiful spring // Magnifique printemps',
        img: 'ptps2.jpeg',
        date: 'from 13 to 28 March // du 13 au 28 mars',
        localisation: 'Association Espace Pandora, Vénissieux // Association Espace Pandora, Vénissieux',
        description: 'Organised every year in March, Magnifique Printemps is the festival of poetry and the French language. Born from the desire to bring together the Printemps des Poètes and the Semaine de la Langue française et de la Francophonie in the region, Magnifique Printemps is an invitation to marvel at words! The 5th edition of Magnifique Printemps will be held from March 13 to 28, 2021 in Lyon and its region // Organisé chaque année au mois de mars, Magnifique Printemps est le festival de la poésie et de la francophonie. Né de la volonté de rassembler sur le territoire régional le Printemps des Poètes et la Semaine de la Langue française et de la Francophonie, Magnifique Printemps est une invitation à s’émerveiller par les mots ! La 5e édition du Magnifique Printemps se tiendra du 13 au 28 mars 2021 à Lyon et dans sa région'
    },

    {
        season: 'spring',
        name: 'Villa Gillet // Villa Gillet',
        img: '/img/villa gillet.jpeg',
        date: 'from 25 to 30 May // du 25 au 30 mai',
        localisation: 'Lyon 4e',
        description: 'The Villa invites you to discover the artistic and cultural education projects of the season. With the guest writers of the Mode emploi (November 2020) and Assises Internationales du Roman (May 2021) festivals, so many invitations to reading, to the practice of writing and to debate: Seeds of readers, which offers CM / 6e classes to work closely and interact with a youth author; Air College, writing exercise and digital exquisite corpse at villavoice.net; the Bureau of Ideas and its ten high school proposals; Seeds of literary criticism, aimed at high school students in the region. // La Villa vous donne rendez-vous pour découvrir les projets d’éducation artistique et culturelle de la saison. Avec les écrivains invités des festivals Mode d’emploi (novembre 2020) et Assises Internationales du Roman (mai 2021), autant d’invitations à la lecture, à la pratique de l’écriture et au débat : Graines de lecteurs, qui propose aux classes de CM/6e de travailler de près et échanger avec un auteur jeunesse ; Air Collège, exercice d’écriture et cadavre exquis numérique sur villavoice.net ; le Bureau des idées et ses dix propositions lycéennes ; Graines de critiques littéraires, à destination des lycéens de la région.'
    },

    {
        season: 'fall',
        name: 'Chestnut Vogue // Vogue des Marrons',
        img: 'img/image3.jpg',
        date: 'from 2 October to 14 November // du 2 octobre au 14 novembre',
        localisation: 'Neighborhood of Croix-Rousse // Quartier de la Croix Rousse',
        description: 'The chestnut festival is confirmed; this traditional Lyon funfair and great cross-Roussian event returns from October 2nd to November 14th. A true institution of Lyons life for more than 150 years, which announces the first chestnuts, it is the event which undeniably makes us fall back into childhood. // La vogue des marrons est confirmée ; Cette fête foraine traditionnelle lyonnaise et grand rendez vous croix-roussien revient du 2 Octobre au 14 Novembre. Véritable institution de la vie lyonnaise depuis plus de 150 ans qui annonce les premiers marrons, c’est l’évènement qui nous fait indéniablement retomber en enfance.'
    },

    {
        season: 'fall',
        name: 'Independent Winegrowers Exhibition // Salon des Vignerons indépendants',
        img: 'img/salonvin.jpeg',
        date: 'from 19 to 22 November // du 19 au 22 novembre',
        localisation: 'Halle Tony Garnier // Halle Tony Garnier',
        description: 'The Vignerons Indépendants are back and very happy to be able to offer their wines for tasting after almost 2 years of absence! We haven t seen each other since October 2019, that time seemed long! We look forward to seeing you again from 25 October to 1 November at the Halle Tony Garnier. // Les Vignerons Indépendants sont de retour et très heureux de pouvoir proposer leurs vins à la dégustation  après  quasi 2 ans d absence !On ne s est pas vu depuis  octobre 2019, que le temps nous  a paru long ! Au plaisir de vous revoir du 25 octobre au 1er novembre à la Halle Tony Garnier.'
    },
    {
        season: 'fall',
        name: 'Chocolate fair // Salon du chocolat',
        img: 'img/choc2.jpeg',
        date: 'from 5 to 7 November // du 5 au 7 novembre',
        localisation: 'Centre des congrès // Centre des congrès',
        description: 'The world s largest event dedicated to chocolate and cocoa is finally back! From October 28 to November 1, 2021 at the Porte de Versailles for a moment of celebration and reunion. With a spectacular parade, live demonstrations, fun activities and prestigious competitions, this 26th edition promises to be memorable! // Le plus grand événement mondial dédié au chocolat et au cacao revient enfin ! Rendez-vous du 28 octobre au 1er novembre 2021 à la Porte de Versailles pour un moment de fête et de retrouvailles. Défilé spectaculaire, démonstrations live, animations ludiques et concours prestigieux, cette 26ème édition s’annonce mémorable !'
    }
]