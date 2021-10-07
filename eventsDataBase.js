const eventDataBase = JSON.parse(localStorage.getItem("events"))||[ 

    {season : 'winter', 
    name : 'Fête des lumières', 
    img : "img/image6.jpg", 
    date : 'début décembre',
    localisation : 'centre ville de Lyon',
    description : 'Du 8 au 11 décembre, Lyon la ville lumière allume toutes ses lumières, et la ville est emportée dans un merveilleux spectacle au fil de ses rues et ruelles. Le spectacle est grandiose et vaut vraiment le détour. La tradition veut que chaque famille lyonnaise participe à illuminer la ville avec des petits verres garnis d’une bougie, appelés des lumignons.'
    },
    
    {season : 'winter', 
    name :'Marché de Noël', 
    img : "img/Marchénoel2.jpeg", 
    date : 'du 10 au 26 décembre',
    localisation : 'Place Carnot',
    description :'Comme toutes les grandes villes, Lyon a également son marché de Noël. Il est installé sur la place Carnot, dès la fin novembre. Le marché rassemble un grand nombre de marchands et dartistes, ils viennent exposer des cadeaux pour les enfants, des bijoux, des décorations de sapins, des bonbons, des produits du terroir, des articles en laine, etc. '
    },
    
    {season : 'winter', 
    name : 'Fête du livre', 
    img : "img/livre.jpeg", 
    date : 'du 5 au 12 janvier',
    localisation : 'Halles Tony Garnier',
    description :'Chaque année à la mi-février lhippodrome de Parilly accueille la Fête du Livre de Bron, une rencontre de littérature contemporaine. Il sagit dun moment déchange entre auteurs et passionnés de littérature. La Fête du Livre Bron est animée par de nombreuses activités : débats, tables-rondes, séances de lecture pour petits et grands, dédicaces,'
    },
    
    {season : 'winter', 
    name : 'Spectacle Harry Potter', 
    img : "img/hpotter.jpeg", 
    date : 'du 2 au 7 février',
    localisation : 'Croix rousse',
    description : 'Pour la première fois en tournée en France, revivez cette extraordinaire histoire d’amitié, de magie et d’aventure lors d’un ciné-concert exceptionnel ! Avec plus de 80 musiciens sur scène, le Yellow Socks Orchestra interprétera en live l’inoubliable musique de John Williams pendant la projection du film (VOSTFR) sur écran géant, en parfaite synchronisation avec les images du premier opus.'
    }, 
    
    {season :'summer', 
    name : 'Biennale de la danse', 
    img :'img/image2.jpg', 
    date :'1er au 16 juin',
    localisation:'Maison de la danse',
    description :' programmation s’adapte à la situation, mais promet bien des découvertes et des émotions autour de la créativité africaine et de la jeunesse du 21e siècle et le projet immersif de l Expérience Fagor! 52 créateurs européens et africains, 22 créations, pour des retrouvailles avec le public très attendues ! Du 1er au 16 juin 2021.'
    },
    
    {season : 'summer', 
    name : 'Nuits de fourvière', 
    img : 'images/fourvières.jpg', 
    date : '1er juin au 30 juillet' ,
    localisation: 'Amphithéatre de Fourvière',
    description :' Théâtre, musique, danse, opéra, cirque... Les Nuits de Fourvière sont dévolues aux arts de la scène et s attachent, depuis 1946, à faire coexister les disciplines. Chaque été, en juin et juillet, le festival présente près de 130 représentations pour plus de cent trente mille spectateurs. Si la pluridisciplinarité est un critère, elle n est en rien une règle absolue. Le festival garantit son ouverture et sa modernité en se gardant de normer ou de thématiser. Les Nuits se sont sculptées un projet artistique singulier avec pour seule boussole la qualité artistique des projets et leur inscription sur la scène internationale.'
    }, 
    
    {season : 'summer',
    name :'Jazz à Vienne', 
    img :'images/jazzVienne.jpg', 
    date : ' 23 juin au 10 juillet', 
    localisation: 'Théatre anytique de Vienne',
    description : 'Le Festival Jazz à Vienne 2021 vous donne rendez-vous pour une nouvelle édition à Vienne du jeudi 24 juin 2021 au samedi 10 juillet 2021. Au programme du Festival Jazz à Vienne 2021, retrouvez de nombreux artistes et groupes de musique en concert à Vienne.'
    },
    
    {season : 'summer',
    name :'Fête de la musique', 
    img :'img/fdlamusic.jpeg', 
    date : '21 juin', 
    localisation: 'centre ville de Lyon',
    description:'La Fête de la Musique 2021 ne ressemblera encore une fois à aucune autre. Elle aura bien lieu ce 21 juin mais exceptionnellement, elle se prolongera tout au long du mois de juillet. Retrouvez tout le programme du 21 juin au soir par arrondissements de Lyon'
    }, 
    
    {season : 'spring', 
    name :'24h de l INSA', 
    img :'img/24hinsa.jpeg', 
    date : 'mois de mai' ,
    localisation:'Campus de la Doua, Villeurbanne',
    description :'Festival des 24 heures de l INSA à Villeurbanne chaque année au mois de mai. 2 soirées de concerts, 2 journées d animations gratuites, 24 heures de courses sportives ! Entre amis ou en famille, nous vous attendons sur le campus de la Doua pour cet évènement organisé 100% par des étudiants'
    }, 
    
    {season : 'spring',
    name : 'Magnifique printemps',
    img : 'ptps2.jpeg' ,
    date :'13 au 28 mars' ,
    localisation:'Association Espace Pandora, Vénissieux',
    description :'Organisé chaque année au mois de mars, Magnifique Printemps est le festival de la poésie et de la francophonie. Né de la volonté de rassembler sur le territoire régional le Printemps des Poètes et la Semaine de la Langue française et de la Francophonie, Magnifique Printemps est une invitation à s’émerveiller par les mots ! La 5e édition du Magnifique Printemps se tiendra du 13 au 28 mars 2021 à Lyon et dans sa région'
    }, 
    
    {season : 'spring', 
    name :'Villa Gillet : Littérrature live festival', 
    img : 'img/villa gillet.jpeg',
    date : '25 au 30 mai' ,
    localisation: 'Lyon 4e' ,
    description :'La Villa vous donne rendez-vous pour découvrir les projets d’éducation artistique et culturelle de la saison. Avec les écrivains invités des festivals Mode d’emploi (novembre 2020) et Assises Internationales du Roman (mai 2021), autant d’invitations à la lecture, à la pratique de l’écriture et au débat : Graines de lecteurs, qui propose aux classes de CM/6e de travailler de près et échanger avec un auteur jeunesse ; Air Collège, exercice d’écriture et cadavre exquis numérique sur villavoice.net ; le Bureau des idées et ses dix propositions lycéennes ; Graines de critiques littéraires, à destination des lycéens de la région.'
    },
    
    {season :'fall',
    name : 'Vogue des Marrons', 
    img :'img/image3.jpg' ,
    date : '2 octobre au 14 novembre',
    localisation: 'Quartier de la Croix Rousse',
    description : 'La vogue des marrons est confirmée ; Cette fête foraine traditionnelle lyonnaise et grand rendez vous croix-roussien revient du 2 Octobre au 14 Novembre. Véritable institution de la vie lyonnaise depuis plus de 150 ans qui annonce les premiers marrons, c’est l’évènement qui nous fait indéniablement retomber en enfance.'
    }, 
    
    {season : 'fall', 
    name :'Salon des Vignerons indépendants', 
    img :'img/salonvin.jpeg' ,
    date : 'du 19 au 22 novembre',
    localisation:'Halle Tony Garnier',
    description :'Les Vignerons Indépendants sont de retour et très heureux de pouvoir proposer leurs vins à la dégustation  après  quasi 2 ans d absence !On ne s est pas vu depuis  octobre 2019, que le temps nous  a paru long ! Au plaisir de vous revoir du 25 octobre au 1er novembre à la Halle Tony Garnier.'
    }, 
    { season : 'fall', 
    name :'Salon du chocolat',
    img : 'img/choc2.jpeg' ,
    date :'du 5 au 7 novembre',
    localisation:'Centre des congrès',
    description :'Le plus grand événement mondial dédié au chocolat et au cacao revient enfin ! Rendez-vous du 28 octobre au 1er novembre 2021 à la Porte de Versailles pour un moment de fête et de retrouvailles. Défilé spectaculaire, démonstrations live, animations ludiques et concours prestigieux, cette 26ème édition s’annonce mémorable !'
    }
    
]