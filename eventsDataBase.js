const eventDataBase = JSON.parse(localStorage.getItem('events')) || [
  {
    season: 'winter',
    name: 'Fête des lumières',
    img: 'img/image6.jpg',
    date: 'début décembre',
    localisation:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5567.478026615345!2d4.8291940748305215!3d45.7563779020629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea52244ab879%3A0xb0956981fd027394!2sBellecour%20-%20H%C3%B4tel%20Dieu%2C%20Lyon!5e0!3m2!1sfr!2sfr!4v1633631785879!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    description:
      'Du 8 au 11 décembre, Lyon la ville lumière allume toutes ses lumières, et la ville est emportée dans un merveilleux spectacle au fil de ses rues et ruelles. Le spectacle est grandiose et vaut vraiment le détour. La tradition veut que chaque famille lyonnaise participe à illuminer la ville avec des petits verres garnis d’une bougie, appelés des lumignons.',
  },

  {
    season: 'winter',
    name: 'Marché de Noël',
    img: 'img/Marchénoel2.jpeg',
    date: 'Du 10 au 26 décembre',
    localisation:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.031311383808!2d4.826495214929049!3d45.75051822231473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea4cb1320b1d%3A0x7876d5c8897af4f5!2sPl.%20Carnot%2C%2069002%20Lyon!5e0!3m2!1sfr!2sfr!4v1633631865236!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    description:
      'Comme toutes les grandes villes, Lyon a également son marché de Noël. Il est installé sur la place Carnot, dès la fin novembre. Le marché rassemble un grand nombre de marchands et dartistes, ils viennent exposer des cadeaux pour les enfants, des bijoux, des décorations de sapins, des bonbons, des produits du terroir, des articles en laine, etc. ',
  },

  {
    season: 'winter',
    name: 'Fête du livre',
    img: 'img/livre.jpeg',
    date: 'Du 5 au 12 janvier',
    localisation:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.016793579966!2d4.82324341492824!3d45.73075802363921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea2b4073f885%3A0xc820a00fb26b3185!2sHalle%20Tony%20Garnier!5e0!3m2!1sfr!2sfr!4v1633631936655!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    description:
      'Chaque année à la mi-février lhippodrome de Parilly accueille la Fête du Livre de Bron, une rencontre de littérature contemporaine. Il sagit dun moment déchange entre auteurs et passionnés de littérature. La Fête du Livre Bron est animée par de nombreuses activités : débats, tables-rondes, séances de lecture pour petits et grands, dédicaces,',
  },

  {
    season: 'winter',
    name: 'Spectacle Harry Potter',
    img: 'img/hpotter.jpeg',
    date: 'Du 2 au 7 février',
    localisation:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.016793579966!2d4.82324341492824!3d45.73075802363921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea2b4073f885%3A0xc820a00fb26b3185!2sHalle%20Tony%20Garnier!5e0!3m2!1sfr!2sfr!4v1633631936655!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    description:
      'Pour la première fois en tournée en France, revivez cette extraordinaire histoire d’amitié, de magie et d’aventure lors d’un ciné-concert exceptionnel ! Avec plus de 80 musiciens sur scène, le Yellow Socks Orchestra interprétera en live l’inoubliable musique de John Williams pendant la projection du film (VOSTFR) sur écran géant, en parfaite synchronisation avec les images du premier opus.',
  },

  {
    season: 'summer',
    name: 'Biennale de la danse',
    img: 'img/image2.jpg',
    date: '1er au 16 juin',
    localisation:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5567.478026615345!2d4.8291940748305215!3d45.7563779020629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea52244ab879%3A0xb0956981fd027394!2sBellecour%20-%20H%C3%B4tel%20Dieu%2C%20Lyon!5e0!3m2!1sfr!2sfr!4v1633631785879!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',

    description:
      ' Programmation s’adapte à la situation, mais promet bien des découvertes et des émotions autour de la créativité africaine et de la jeunesse du 21e siècle et le projet immersif de l Expérience Fagor! 52 créateurs européens et africains, 22 créations, pour des retrouvailles avec le public très attendues ! Du 1er au 16 juin 2021.',
  },

  {
    season: 'summer',
    name: 'Nuits de fourvière',
    img: 'img/nuitdf.jpg',
    date: '1er juin au 30 juillet',
    localisation:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.569838692446!2d4.818379591547391!3d45.75976906747603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebaee66e16b7%3A0x74cc83cde490e075!2sLes%20Nuits%20de%20Fourvi%C3%A8re!5e0!3m2!1sfr!2sfr!4v1633632157796!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    description:
      ' Théâtre, musique, danse, opéra, cirque... Les Nuits de Fourvière sont dévolues aux arts de la scène et s attachent, depuis 1946, à faire coexister les disciplines. Chaque été, en juin et juillet, le festival présente près de 130 représentations pour plus de cent trente mille spectateurs. Si la pluridisciplinarité est un critère, elle n est en rien une règle absolue. Le festival garantit son ouverture et sa modernité en se gardant de normer ou de thématiser. Les Nuits se sont sculptées un projet artistique singulier avec pour seule boussole la qualité artistique des projets et leur inscription sur la scène internationale.',
  },

  {
    season: 'summer',
    name: 'Jazz à Vienne',
    img: 'images/jazzVienne.jpg',
    date: ' 23 juin au 10 juillet',
    localisation:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.282319165957!2d4.875809514920006!3d45.524524037438354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf2c1e503679cfc9c!2sTh%C3%A9%C3%A2tre%20Antique%20de%20Vienne!5e0!3m2!1sfr!2sfr!4v1633632246422!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    description:
      'Le Festival Jazz à Vienne 2021 vous donne rendez-vous pour une nouvelle édition à Vienne du jeudi 24 juin 2021 au samedi 10 juillet 2021. Au programme du Festival Jazz à Vienne 2021, retrouvez de nombreux artistes et groupes de musique en concert à Vienne.',
  },

  {
    season: 'summer',
    name: 'Fête de la musique',
    img: 'img/fdm.jpeg',
    date: '21 juin',
    localisation:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5567.478026615345!2d4.8291940748305215!3d45.7563779020629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea52244ab879%3A0xb0956981fd027394!2sBellecour%20-%20H%C3%B4tel%20Dieu%2C%20Lyon!5e0!3m2!1sfr!2sfr!4v1633631785879!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    description:
      'La Fête de la Musique 2021 ne ressemblera encore une fois à aucune autre. Elle aura bien lieu ce 21 juin mais exceptionnellement, elle se prolongera tout au long du mois de juillet. Retrouvez tout le programme du 21 juin au soir par arrondissements de Lyon',
  },

  {
    season: 'spring',
    name: '24h de l INSA',
    img: 'img/24hinsa.jpeg',
    date: 'Mois de mai',
    localisation:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.394282235534!2d4.8760097149303485!3d45.783328120114206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c01fae0783ab%3A0xe24e66663726d2eb!2sINSA%20Lyon!5e0!3m2!1sfr!2sfr!4v1633632329806!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    description:
      'Festival des 24 heures de l INSA à Villeurbanne chaque année au mois de mai. 2 soirées de concerts, 2 journées d animations gratuites, 24 heures de courses sportives ! Entre amis ou en famille, nous vous attendons sur le campus de la Doua pour cet évènement organisé 100% par des étudiants',
  },

  {
    season: 'spring',
    name: 'Magnifique printemps',
    img: 'ptps2.jpeg',
    date: 'Du 13 au 28 mars',
    localisation:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.6092387569292!2d4.8822863155012755!3d45.69881337910443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c24238f13c51%3A0x2d67da23a57177bd!2sEspace%20Pandora!5e0!3m2!1sfr!2sfr!4v1633632485274!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    description:
      'Organisé chaque année au mois de mars, Magnifique Printemps est le festival de la poésie et de la francophonie. Né de la volonté de rassembler sur le territoire régional le Printemps des Poètes et la Semaine de la Langue française et de la Francophonie, Magnifique Printemps est une invitation à s’émerveiller par les mots ! La 5e édition du Magnifique Printemps se tiendra du 13 au 28 mars 2021 à Lyon et dans sa région',
  },

  {
    season: 'spring',
    name: 'Villa Gillet : Littérrature live festival',
    img: 'img/villagillet1.jpeg',
    date: 'Du 25 au 30 mai',
    localisation:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.7985035316415!2d4.814460615503942!3d45.77522827910581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb11a186fe69%3A0x8e968f549f9a62e0!2sVilla%20Gillet!5e0!3m2!1sfr!2sfr!4v1633632648872!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    description:
      'La Villa vous donne rendez-vous pour découvrir les projets d’éducation artistique et culturelle de la saison. Avec les écrivains invités des festivals Mode d’emploi (novembre 2020) et Assises Internationales du Roman (mai 2021), autant d’invitations à la lecture, à la pratique de l’écriture et au débat : Graines de lecteurs, qui propose aux classes de CM/6e de travailler de près et échanger avec un auteur jeunesse ; Air Collège, exercice d’écriture et cadavre exquis numérique sur villavoice.net ; le Bureau des idées et ses dix propositions lycéennes ; Graines de critiques littéraires, à destination des lycéens de la région.',
  },

  {
    season: 'fall',
    name: 'Vogue des Marrons',
    img: 'img/image3.jpg',
    date: 'Du 2 octobre au 14 novembre',
    localisation:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2735.056027365508!2d4.826760518231703!3d45.773917377984596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb035a00781f%3A0xc239549b51301fe0!2sBd%20de%20la%20Croix-Rousse%2C%20Lyon!5e0!3m2!1sfr!2sfr!4v1633632718846!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    description:
      'La vogue des marrons est confirmée ; Cette fête foraine traditionnelle lyonnaise et grand rendez vous croix-roussien revient du 2 Octobre au 14 Novembre. Véritable institution de la vie lyonnaise depuis plus de 150 ans qui annonce les premiers marrons, c’est l’évènement qui nous fait indéniablement retomber en enfance.',
  },

  {
    season: 'fall',
    name: 'Salon des Vignerons indépendants',
    img: 'img/sdv.jpeg',
    date: 'Du 19 au 22 novembre',
    localisation:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.016793579966!2d4.82324341492824!3d45.73075802363921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea2b4073f885%3A0xc820a00fb26b3185!2sHalle%20Tony%20Garnier!5e0!3m2!1sfr!2sfr!4v1633631936655!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    description:
      'Les Vignerons Indépendants sont de retour et très heureux de pouvoir proposer leurs vins à la dégustation  après  quasi 2 ans d absence !On ne s est pas vu depuis  octobre 2019, que le temps nous  a paru long ! Au plaisir de vous revoir du 25 octobre au 1er novembre à la Halle Tony Garnier.',
  },
  {
    season: 'fall',
    name: 'Salon du chocolat',
    img: 'img/choc2.jpeg',
    date: 'Du 5 au 7 novembre',
    localisation:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.3152384916557!2d4.852309815493187!3d45.78491187910613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eac0a2068105%3A0x601302e66888357d!2sCentre%20de%20Congr%C3%A8s%20de%20Lyon!5e0!3m2!1sfr!2sfr!4v1633632763186!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    description:
      'Le plus grand événement mondial dédié au chocolat et au cacao revient enfin ! Rendez-vous du 28 octobre au 1er novembre 2021 à la Porte de Versailles pour un moment de fête et de retrouvailles. Défilé spectaculaire, démonstrations live, animations ludiques et concours prestigieux, cette 26ème édition s’annonce mémorable !',
  },
];
