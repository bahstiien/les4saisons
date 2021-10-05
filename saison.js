const events = [
/*hiver*/
 /*0*/ {tittle : 'Fête des lumières', image1 : '../img/image5.jpg' ,image2: '../img/index.jpeg' ,textEvent :'Du 8 au 11 décembre, Lyon la ville lumière allume toutes ses lumières, et la ville est emportée dans un merveilleux spectacle au fil de ses rues et ruelles. Le spectacle est grandiose et vaut vraiment le détour. La tradition veut que chaque famille lyonnaise participe à illuminer la ville avec des petits verres garnis d’une bougie, appelés des lumignons.'

  },
 /*1*/ {tittle : 'Marché de Noël', image1 : 'img/marchée noel1.jpeg' ,image2: 'img/Marchénoel2.jpeg' ,textEvent :'Comme toutes les grandes villes, Lyon a également son marché de Noël. Il est installé sur la place Carnot, dès la fin novembre. Le marché rassemble un grand nombre de marchands et dartistes, ils viennent exposer des cadeaux pour les enfants, des bijoux, des décorations de sapins, des bonbons, des produits du terroir, des articles en laine, etc. '

  },
/*2*/  {tittle : 'Fête du livre', image1 : 'img/livre.jpeg' ,image2: 'img/livre3.jpeg' ,textEvent :'Chaque année à la mi-février lhippodrome de Parilly accueille la Fête du Livre de Bron, une rencontre de littérature contemporaine. Il sagit dun moment déchange entre auteurs et passionnés de littérature. La Fête du Livre Bron est animée par de nombreuses activités : débats, tables-rondes, séances de lecture pour petits et grands, dédicaces,' 

},
/*3*/{tittle : 'Spectacle Harry Potter', image1 : 'img/hpotter.jpeg' ,image2: 'img/hpotter2.jpeg' ,textEvent :' Pour la première fois en tournée en France, revivez cette extraordinaire histoire d’amitié, de magie et d’aventure lors d’un ciné-concert exceptionnel ! Avec plus de 80 musiciens sur scène, le Yellow Socks Orchestra interprétera en live l’inoubliable musique de John Williams pendant la projection du film (VOSTFR) sur écran géant, en parfaite synchronisation avec les images du premier opus.'

  },
/*été*/
/*4*/  {tittle : 'Biennale de la danse', image1 : 'img/image2.jpg' ,image2: 'img/image1.jpg' ,textEvent :' programmation s’adapte à la situation, mais promet bien des découvertes et des émotions autour de la créativité africaine et de la jeunesse du 21e siècle et le projet immersif de l Expérience Fagor! 52 créateurs européens et africains, 22 créations, pour des retrouvailles avec le public très attendues ! Du 1er au 16 juin 2021.'},

/*5*/{tittle : 'Nuits de fourvière', image1 : 'images/fourvières.jpg' ,image2: 'img/ndfourviere2.jpeg' ,textEvent :' Théâtre, musique, danse, opéra, cirque... Les Nuits de Fourvière sont dévolues aux arts de la scène et s attachent, depuis 1946, à faire coexister les disciplines. Chaque été, en juin et juillet, le festival présente près de 130 représentations pour plus de cent trente mille spectateurs. Si la pluridisciplinarité est un critère, elle n est en rien une règle absolue. Le festival garantit son ouverture et sa modernité en se gardant de normer ou de thématiser. Les Nuits se sont sculptées un projet artistique singulier avec pour seule boussole la qualité artistique des projets et leur inscription sur la scène internationale.'

},
/*6*/{tittle : 'Jazz à Vienne', image1 : 'images/jazzVienne.jpg' ,image2: 'img/javienne2.jpg' ,textEvent :'Le Festival Jazz à Vienne 2021 vous donne rendez-vous pour une nouvelle édition à Vienne du jeudi 24 juin 2021 au samedi 10 juillet 2021. Au programme du Festival Jazz à Vienne 2021, retrouvez de nombreux artistes et groupes de musique en concert à Vienne.'
},
/*7*/{tittle : 'Fête de la musique', image1 : 'img/fdlamusic.jpeg' ,image2: 'img/fdlmuisc2.jpeg' ,textEvent :'La Fête de la Musique 2021 ne ressemblera encore une fois à aucune autre. Elle aura bien lieu ce 21 juin mais exceptionnellement, elle se prolongera tout au long du mois de juillet. Retrouvez tout le programme du 21 juin au soir par arrondissements de Lyon'},


/*Printemps*/
/*8*/{tittle : '24h de l INSA', image1 : 'img/24hinsa.jpeg' ,image2: 'img/24insa2.jpeg' ,textEvent :'Festival des 24 heures de l INSA à Villeurbanne chaque année au mois de mai. 2 soirées de concerts, 2 journées d animations gratuites, 24 heures de courses sportives ! Entre amis ou en famille, nous vous attendons sur le campus de la Doua pour cet évènement organisé 100% par des étudiants'},
/*9*/{tittle : '', image1 : '' ,image2: '' ,textEvent :''},
/*10*/{tittle : 'Magnifique printemps', image1 : 'ptps2.jpeg' ,image2: 'ptmps.png' ,textEvent :'Organisé chaque année au mois de mars, Magnifique Printemps est le festival de la poésie et de la francophonie. Né de la volonté de rassembler sur le territoire régional le Printemps des Poètes et la Semaine de la Langue française et de la Francophonie, Magnifique Printemps est une invitation à s’émerveiller par les mots ! La 5e édition du Magnifique Printemps se tiendra du 13 au 28 mars 2021 à Lyon et dans sa région'},
/*11*/{tittle : 'Villa Gillet', image1 : '' ,image2: '' ,textEvent :'La Villa vous donne rendez-vous pour découvrir les projets d’éducation artistique et culturelle de la saison. Avec les écrivains invités des festivals Mode d’emploi (novembre 2020) et Assises Internationales du Roman (mai 2021), autant d’invitations à la lecture, à la pratique de l’écriture et au débat : Graines de lecteurs, qui propose aux classes de CM/6e de travailler de près et échanger avec un auteur jeunesse ; Air Collège, exercice d’écriture et cadavre exquis numérique sur villavoice.net ; le Bureau des idées et ses dix propositions lycéennes ; Graines de critiques littéraires, à destination des lycéens de la région.'},

/*Automne*/

/*12*/{tittle : 'Vogue des Marrons', image1 : 'img/image3.jpg' ,image2: 'img/vdesmarrons.jpeg ' ,textEvent : 'La vogue des marrons est confirmée ; Cette fête foraine traditionnelle lyonnaise et grand rendez vous croix-roussien revient du 2 Octobre au 14 Novembre. Véritable institution de la vie lyonnaise depuis plus de 150 ans qui annonce les premiers marrons, c’est l’évènement qui nous fait indéniablement retomber en enfance.'

},

/*13*/{tittle : 'Salon des Vignerons indépendants', image1 : 'img/salon vin.jpeg' ,image2: 'img/slonvin 2.jpeg' ,textEvent :'Les Vignerons Indépendants sont de retour et très heureux de pouvoir proposer leurs vins à la dégustation  après  quasi 2 ans d absence !On ne s est pas vu depuis  octobre 2019, que le temps nous  a paru long ! Au plaisir de vous revoir du 25 octobre au 1er novembre à la Halle Tony Garnier.' },

/*14*/{tittle : 'Salon du chocolat', image1 : 'img/choc.jpeg' ,image2: 'img/choc2.jpeg' ,textEvent :'Le plus grand événement mondial dédié au chocolat et au cacao revient enfin ! Rendez-vous du 28 octobre au 1er novembre 2021 à la Porte de Versailles pour un moment de fête et de retrouvailles. Défilé spectaculaire, démonstrations live, animations ludiques et concours prestigieux, cette 26ème édition s’annonce mémorable !'},
/*15*/{tittle : '', image1 : '' ,image2: '' ,textEvent :''},









]

function createEvent ( tittle, imageUrl,imageUrl2, textEvent) {
  const image1=document.querySelector ('.image1');
  image1.src = imageUrl;
  image1.style.width='100%';
  image1.style.height='auto';

  
  
  const imageEvent2=document.querySelector ('.image2');

  imageEvent2.src = imageUrl2;
  imageEvent2.style.width='100%';
  imageEvent2.style.height = 'auto';
 

const textDiv=document.querySelector ('.presentation');
textDiv.style.width='80%';

textDiv.style.padding= '50px', '100px', '20px', '50px';
 textDiv.innerHTML = textEvent; 
  
  
  

 const tittleH2 = document.querySelector(".tittle");

tittleH2.innerHTML = tittle;

  

}



const btnBiennale = document.querySelector ('#first')
btnBiennale.addEventListener ('click', ()=>{
  const biennale = events [0]
  createEvent(biennale.tittle, biennale.image1, biennale.image2, biennale.textEvent)

})
const btnFestival = document.querySelector ('#second')
btnFestival.addEventListener ('click', ()=>{
  const festival = events [14]
  createEvent(festival.tittle, festival.image1, festival.image2, festival.textEvent)

})
const btnHarryPotter = document.querySelector ('#four')
btnHarryPotter.addEventListener ('click', ()=>{
  const harryPotter = events []
  createEvent(harryPotter.tittle, harryPotter.image1, harryPotter.image2, harryPotter.textEvent)
})




 









