const eventDataBase = JSON.parse(localStorage.getItem('events')) || [
    {
        season: 'winter',
        name: 'Festival of Lights // Fête des lumières',
        img: "img/image6.jpg",
        date: 'from 8 to 11 December // du 8 au 11 décembre',
        localisation:
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5567.478026615345!2d4.8291940748305215!3d45.7563779020629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea52244ab879%3A0xb0956981fd027394!2sBellecour%20-%20H%C3%B4tel%20Dieu%2C%20Lyon!5e0!3m2!1sfr!2sfr!4v1633631785879!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        description: 'Lyon, the city of lights, turns on all its lights, and the city is carried away in a marvellous show along its streets and alleys. The show is grandiose and well worth the diversions. The tradition is that each family in Lyon takes part in illuminating the city with small glasses filled with a candle, called lumignons. // Lyon la ville lumière allume toutes ses lumières, et la ville est emportée dans un merveilleux spectacle au fil de ses rues et ruelles. Le spectacle est grandiose et vaut vraiment le détour. La tradition veut que chaque famille lyonnaise participe à illuminer la ville avec des petits verres garnis d’une bougie, appelés des lumignons.'
    },


    {
        season: 'winter',
        name: 'Christmas Market // Marché de Noël',
        img: "img/Marchénoel2.jpeg",
        date: 'from 10 to 26 December // du 10 au 26 décembre',
        localisation:
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.031311383808!2d4.826495214929049!3d45.75051822231473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea4cb1320b1d%3A0x7876d5c8897af4f5!2sPl.%20Carnot%2C%2069002%20Lyon!5e0!3m2!1sfr!2sfr!4v1633631865236!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        description: 'Like all big cities, Lyon also has its Christmas market. It is installed on the Place Carnot, from the end of November. The market brings together a large number of merchants and artists, who come to exhibit gifts for children, jewellery, tree decorations, sweets, local products, woollen articles, etc. // Comme toutes les grandes villes, Lyon a également son marché de Noël. Il est installé sur la place Carnot, dès la fin novembre. Le marché rassemble un grand nombre de marchands et dartistes, ils viennent exposer des cadeaux pour les enfants, des bijoux, des décorations de sapins, des bonbons, des produits du terroir, des articles en laine, etc.'
    },

    {
        season: 'winter',
        name: 'Book festival // Fête du livre',
        img: "img/livre.jpeg",
        date: 'from 5 to 12 January // du 5 au 12 janvier',
        localisation:
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.016793579966!2d4.82324341492824!3d45.73075802363921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea2b4073f885%3A0xc820a00fb26b3185!2sHalle%20Tony%20Garnier!5e0!3m2!1sfr!2sfr!4v1633631936655!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        description: 'Every year in mid-February the Parilly racecourse hosts the Bron Book Festival, a meeting of contemporary literature. It is a moment of exchange between authors and literature lovers. The Bron Book Festival is animated by numerous activities: debates, round tables, reading sessions for young and old, book signings. // Chaque année à la mi-février lhippodrome de Parilly accueille la Fête du Livre de Bron, une rencontre de littérature contemporaine. Il sagit dun moment déchange entre auteurs et passionnés de littérature. La Fête du Livre Bron est animée par de nombreuses activités : débats, tables-rondes, séances de lecture pour petits et grands, dédicaces.'
    },

    {
        season: 'winter',
        name: 'Harry Potter show // Spectacle Harry Potter',
        img: "img/hpotter.jpeg",
        date: 'from 2 to 7 February // du 2 au 7 février',
        localisation:
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.016793579966!2d4.82324341492824!3d45.73075802363921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea2b4073f885%3A0xc820a00fb26b3185!2sHalle%20Tony%20Garnier!5e0!3m2!1sfr!2sfr!4v1633631936655!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        description: 'For the first time on tour in France, relive this extraordinary story of friendship, magic and adventure during an exceptional film-concert! With more than 80 musicians on stage, the Yellow Socks Orchestra will perform John Williams unforgettable music live during the projection of the film (VOSTFR) on a giant screen, in perfect synchronisation with the images of the first opus. // Pour la première fois en tournée en France, revivez cette extraordinaire histoire d’amitié, de magie et d’aventure lors d’un ciné-concert exceptionnel ! Avec plus de 80 musiciens sur scène, le Yellow Socks Orchestra interprétera en live l’inoubliable musique de John Williams pendant la projection du film (VOSTFR) sur écran géant, en parfaite synchronisation avec les images du premier opus.'
    },

    {
        season: 'summer',
        name: 'Dance Biennial // Biennale de la danse',
        img: 'img/image2.jpg',
        date: 'from 1st to 16 June // du 1er au 16 juin',
        localisation:
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5567.478026615345!2d4.8291940748305215!3d45.7563779020629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea52244ab879%3A0xb0956981fd027394!2sBellecour%20-%20H%C3%B4tel%20Dieu%2C%20Lyon!5e0!3m2!1sfr!2sfr!4v1633631785879!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        description: 'The programme is adapted to the situation, but promises many discoveries and emotions around African creativity and the youth of the 21st century and the immersive project of the Fagor Experience! 52 European and African creators, 22 creations, for a highly anticipated reunion with the public! From 1 to 16 June 2021. // La programmation s’adapte à la situation, mais promet bien des découvertes et des émotions autour de la créativité africaine et de la jeunesse du 21e siècle et le projet immersif de l Expérience Fagor! 52 créateurs européens et africains, 22 créations, pour des retrouvailles avec le public très attendues ! Du 1er au 16 juin 2021.'
    },

    {
        season: 'summer',
        name: 'Fourvière Nights // Nuits de fourvière',
        img: 'images/fourvières.jpg',
        date: 'from 1st June to 30 July // du 1er juin au 30 juillet',
        localisation:
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.569838692446!2d4.818379591547391!3d45.75976906747603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebaee66e16b7%3A0x74cc83cde490e075!2sLes%20Nuits%20de%20Fourvi%C3%A8re!5e0!3m2!1sfr!2sfr!4v1633632157796!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        description: 'Theatre, music, dance, opera, circus... Les Nuits de Fourvière is devoted to the performing arts and has been working since 1946 to ensure that all disciplines coexist. Every summer, in June and July, the festival presents nearly 130 performances for more than 130,000 spectators. Although multidisciplinarity is a criterion, it is by no means an absolute rule. The festival guarantees its openness and its modernity by not standardizing or thematizing. The Nights have carved out a singular artistic project for themselves, with the only compass being the artistic quality of the projects and their inclusion on the international scene. // Théâtre, musique, danse, opéra, cirque... Les Nuits de Fourvière sont dévolues aux arts de la scène et s attachent, depuis 1946, à faire coexister les disciplines. Chaque été, en juin et juillet, le festival présente près de 130 représentations pour plus de cent trente mille spectateurs. Si la pluridisciplinarité est un critère, elle n est en rien une règle absolue. Le festival garantit son ouverture et sa modernité en se gardant de normer ou de thématiser. Les Nuits se sont sculptées un projet artistique singulier avec pour seule boussole la qualité artistique des projets et leur inscription sur la scène internationale.'
    },

    {
        season: 'summer',
        name: 'Jazz in Vienne // Jazz à Vienne',
        img: 'images/jazzVienne.jpg',
        date: 'from 23 June to 10 July // du 23 juin au 10 juillet',
        localisation:
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.282319165957!2d4.875809514920006!3d45.524524037438354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf2c1e503679cfc9c!2sTh%C3%A9%C3%A2tre%20Antique%20de%20Vienne!5e0!3m2!1sfr!2sfr!4v1633632246422!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        description: 'The Jazz à Vienne 2021 Festival will take place in Vienne from Thursday 24th June 2021 to Saturday 10th July 2021. On the programme of the Festival Jazz à Vienne 2021, you will find many artists and music groups in concert in Vienne. // Le Festival Jazz à Vienne 2021 vous donne rendez-vous pour une nouvelle édition à Vienne du jeudi 24 juin 2021 au samedi 10 juillet 2021. Au programme du Festival Jazz à Vienne 2021, retrouvez de nombreux artistes et groupes de musique en concert à Vienne.'
    },

    {
        season: 'summer',
        name: 'Music festival // Fête de la musique',
        img: 'img/fdlamusic.jpeg',
        date: ' 21 June // du 21 juin',
        localisation:
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5567.478026615345!2d4.8291940748305215!3d45.7563779020629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea52244ab879%3A0xb0956981fd027394!2sBellecour%20-%20H%C3%B4tel%20Dieu%2C%20Lyon!5e0!3m2!1sfr!2sfr!4v1633631785879!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        description: 'The Fête de la Musique 2021 will once again be unlike any other. It will indeed take place on 21 June, but exceptionally, it will extend throughout the month of July. Find out all the programme for the evening of 21 June by arrondissement of Lyon // La Fête de la Musique 2021 ne ressemblera encore une fois à aucune autre. Elle aura bien lieu ce 21 juin mais exceptionnellement, elle se prolongera tout au long du mois de juillet. Retrouvez tout le programme du 21 juin au soir par arrondissements de Lyon'
    },

    {
        season: 'spring',
        name: '24h of INSA // 24h de l INSA',
        img: 'img/24hinsa.jpeg',
        date: 'may // mai',
        localisation:
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.394282235534!2d4.8760097149303485!3d45.783328120114206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c01fae0783ab%3A0xe24e66663726d2eb!2sINSA%20Lyon!5e0!3m2!1sfr!2sfr!4v1633632329806!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        description: 'The INSA 24 hour festival in Villeurbanne every year in May. 2 evenings of concerts, 2 days of free entertainment, 24 hours of sports races! With friends or family, we are waiting for you on the Doua campus for this event organised 100% by students // Festival des 24 heures de l INSA à Villeurbanne chaque année au mois de mai. 2 soirées de concerts, 2 journées d animations gratuites, 24 heures de courses sportives ! Entre amis ou en famille, nous vous attendons sur le campus de la Doua pour cet évènement organisé 100% par des étudiants'
    },

    {
        season: 'spring',
        name: 'Beautiful spring // Magnifique printemps',
        img: 'ptps2.jpeg',
        date: 'from 13 to 28 March // du 13 au 28 mars',
        localisation:
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.6092387569292!2d4.8822863155012755!3d45.69881337910443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c24238f13c51%3A0x2d67da23a57177bd!2sEspace%20Pandora!5e0!3m2!1sfr!2sfr!4v1633632485274!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        description: 'Organised every year in March, Magnifique Printemps is the festival of poetry and the French language. Born from the desire to bring together the Printemps des Poètes and the Semaine de la Langue française et de la Francophonie in the region, Magnifique Printemps is an invitation to marvel at words! The 5th edition of Magnifique Printemps will be held from March 13 to 28, 2021 in Lyon and its region // Organisé chaque année au mois de mars, Magnifique Printemps est le festival de la poésie et de la francophonie. Né de la volonté de rassembler sur le territoire régional le Printemps des Poètes et la Semaine de la Langue française et de la Francophonie, Magnifique Printemps est une invitation à s’émerveiller par les mots ! La 5e édition du Magnifique Printemps se tiendra du 13 au 28 mars 2021 à Lyon et dans sa région'
    },

    {
        season: 'spring',
        name: 'Villa Gillet // Villa Gillet',
        img: '/img/villa gillet.jpeg',
        date: 'from 25 to 30 May // du 25 au 30 mai',
        localisation:
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.7985035316415!2d4.814460615503942!3d45.77522827910581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb11a186fe69%3A0x8e968f549f9a62e0!2sVilla%20Gillet!5e0!3m2!1sfr!2sfr!4v1633632648872!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        description: 'The Villa invites you to discover the artistic and cultural education projects of the season. With the guest writers of the Mode emploi (November 2020) and Assises Internationales du Roman (May 2021) festivals, so many invitations to reading, to the practice of writing and to debate: Seeds of readers, which offers CM / 6e classes to work closely and interact with a youth author; Air College, writing exercise and digital exquisite corpse at villavoice.net; the Bureau of Ideas and its ten high school proposals; Seeds of literary criticism, aimed at high school students in the region. // La Villa vous donne rendez-vous pour découvrir les projets d’éducation artistique et culturelle de la saison. Avec les écrivains invités des festivals Mode d’emploi (novembre 2020) et Assises Internationales du Roman (mai 2021), autant d’invitations à la lecture, à la pratique de l’écriture et au débat : Graines de lecteurs, qui propose aux classes de CM/6e de travailler de près et échanger avec un auteur jeunesse ; Air Collège, exercice d’écriture et cadavre exquis numérique sur villavoice.net ; le Bureau des idées et ses dix propositions lycéennes ; Graines de critiques littéraires, à destination des lycéens de la région.'
    },

    {
        season: 'fall',
        name: 'Chestnut Vogue // Vogue des Marrons',
        img: 'img/image3.jpg',
        date: 'from 2 October to 14 November // du 2 octobre au 14 novembre',
        localisation:
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2735.056027365508!2d4.826760518231703!3d45.773917377984596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb035a00781f%3A0xc239549b51301fe0!2sBd%20de%20la%20Croix-Rousse%2C%20Lyon!5e0!3m2!1sfr!2sfr!4v1633632718846!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        description: 'The chestnut festival is confirmed; this traditional Lyon funfair and great cross-Roussian event returns from October 2nd to November 14th. A true institution of Lyons life for more than 150 years, which announces the first chestnuts, it is the event which undeniably makes us fall back into childhood. // La vogue des marrons est confirmée ; Cette fête foraine traditionnelle lyonnaise et grand rendez vous croix-roussien revient du 2 Octobre au 14 Novembre. Véritable institution de la vie lyonnaise depuis plus de 150 ans qui annonce les premiers marrons, c’est l’évènement qui nous fait indéniablement retomber en enfance.'
    },

    {
        season: 'fall',
        name: 'Independent Winegrowers Exhibition // Salon des Vignerons indépendants',
        img: 'img/salonvin.jpeg',
        date: 'from 19 to 22 November // du 19 au 22 novembre',
        localisation:
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.016793579966!2d4.82324341492824!3d45.73075802363921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea2b4073f885%3A0xc820a00fb26b3185!2sHalle%20Tony%20Garnier!5e0!3m2!1sfr!2sfr!4v1633631936655!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        description: 'The Vignerons Indépendants are back and very happy to be able to offer their wines for tasting after almost 2 years of absence! We haven t seen each other since October 2019, that time seemed long! We look forward to seeing you again from 25 October to 1 November at the Halle Tony Garnier. // Les Vignerons Indépendants sont de retour et très heureux de pouvoir proposer leurs vins à la dégustation  après  quasi 2 ans d absence !On ne s est pas vu depuis  octobre 2019, que le temps nous  a paru long ! Au plaisir de vous revoir du 25 octobre au 1er novembre à la Halle Tony Garnier.'
    },
    {
        season: 'fall',
        name: 'Chocolate fair // Salon du chocolat',
        img: 'img/choc2.jpeg',
        date: 'from 5 to 7 November // du 5 au 7 novembre',
        localisation:
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.3152384916557!2d4.852309815493187!3d45.78491187910613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eac0a2068105%3A0x601302e66888357d!2sCentre%20de%20Congr%C3%A8s%20de%20Lyon!5e0!3m2!1sfr!2sfr!4v1633632763186!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        description: 'The world s largest event dedicated to chocolate and cocoa is finally back! From October 28 to November 1, 2021 at the Porte de Versailles for a moment of celebration and reunion. With a spectacular parade, live demonstrations, fun activities and prestigious competitions, this 26th edition promises to be memorable! // Le plus grand événement mondial dédié au chocolat et au cacao revient enfin ! Rendez-vous du 28 octobre au 1er novembre 2021 à la Porte de Versailles pour un moment de fête et de retrouvailles. Défilé spectaculaire, démonstrations live, animations ludiques et concours prestigieux, cette 26ème édition s’annonce mémorable !'

    },
];