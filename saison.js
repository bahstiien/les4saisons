const events = [
/*hiver*/
  {tittle : 'Fête des lumières', image1 : '../img/image5.jpg' ,image2: '../img/index.jpeg' ,textEvent :'Du 8 au 11 décembre, Lyon la ville lumière allume toutes ses lumières, et la ville est emportée dans un merveilleux spectacle au fil de ses rues et ruelles. Le spectacle est grandiose et vaut vraiment le détour. La tradition veut que chaque famille lyonnaise participe à illuminer la ville avec des petits verres garnis d’une bougie, appelés des lumignons.'

  },
  {tittle : 'Marché de Noël', image1 : 'img/marchée noel1.jpeg' ,image2: 'img/Marchénoel2.jpeg' ,textEvent :'Comme toutes les grandes villes, Lyon a également son marché de Noël. Il est installé sur la place Carnot, dès la fin novembre. Le marché rassemble un grand nombre de marchands et dartistes, ils viennent exposer des cadeaux pour les enfants, des bijoux, des décorations de sapins, des bonbons, des produits du terroir, des articles en laine, etc. '

  },
  {tittle : 'Fête du livre', image1 : 'img/livre.jpeg' ,image2: 'img/livre3.jpeg' ,textEvent :'Chaque année à la mi-février lhippodrome de Parilly accueille la Fête du Livre de Bron, une rencontre de littérature contemporaine. Il sagit dun moment déchange entre auteurs et passionnés de littérature. La Fête du Livre Bron est animée par de nombreuses activités : débats, tables-rondes, séances de lecture pour petits et grands, dédicaces,' 

},
{tittle : 'Spectacle Harry Potter', image1 : 'img/hpotter.jpeg' ,image2: 'img/hpotter2.jpeg' ,textEvent :'Comme toutes les grandes villes, Lyon a également son marché de Noël. Il est installé sur la place Carnot, dès la fin novembre. Le marché rassemble un grand nombre de marchands et dartistes, ils viennent exposer des cadeaux pour les enfants, des bijoux, des décorations de sapins, des bonbons, des produits du terroir, des articles en laine, etc. '

  },
/*été*/
  {tittle : 'Biennale de la danse', image1 : 'img/image2.jpg' ,image2: 'img/image1.jpg' ,textEvent :' programmation s’adapte à la situation, mais promet bien des découvertes et des émotions autour de la créativité africaine et de la jeunesse du 21e siècle et le projet immersif de l Expérience Fagor! 52 créateurs européens et africains, 22 créations, pour des retrouvailles avec le public très attendues ! Du 1er au 16 juin 2021.'},

{tittle : 'Nuits de fourvière', image1 : 'img/ndfourviere.jpeg' ,image2: 'img/ndfourviere2.jpeg' ,textEvent :' Théâtre, musique, danse, opéra, cirque... Les Nuits de Fourvière sont dévolues aux arts de la scène et s attachent, depuis 1946, à faire coexister les disciplines. Chaque été, en juin et juillet, le festival présente près de 130 représentations pour plus de cent trente mille spectateurs. Si la pluridisciplinarité est un critère, elle n est en rien une règle absolue. Le festival garantit son ouverture et sa modernité en se gardant de normer ou de thématiser. Les Nuits se sont sculptées un projet artistique singulier avec pour seule boussole la qualité artistique des projets et leur inscription sur la scène internationale.'

},
{tittle : '', image1 : '' ,image2: '' ,textEvent :''
},
{tittle : '', image1 : '' ,image2: '' ,textEvent :''},


/*Printemps*/
{tittle : '', image1 : '' ,image2: '' ,textEvent :''},
{tittle : '', image1 : '' ,image2: '' ,textEvent :''},
{tittle : '', image1 : '' ,image2: '' ,textEvent :''},
{tittle : '', image1 : '' ,image2: '' ,textEvent :''},

/*Automne*/

/*{tittle : 'Vogue des Marrons', image1 : 'img/image3.jpg' ,image2: '' ,textEvent :'La Vogue des Marrons 2021 est confirmée !
 La Vogue des marrons, fête foraine traditionnelle lyonnaise et grand rendez-vous croix-roussien revient du 02 OCTOBRE au 14 NOVEMBRE !
Véritable institution de la vie lyonnaise depuis plus de 150 ans qui annonce les premiers marrons c’est l événement qui nous fait indéniablement retomber en enfance.
C EST PARTI POUR LA VOGUE DES MARRONS 2021🌰 🌰 🌰 !!'},*/
{tittle : '', image1 : '' ,image2: '' ,textEvent :''},
{tittle : '', image1 : '' ,image2: '' ,textEvent :''},
{tittle : '', image1 : '' ,image2: '' ,textEvent :''},









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
textDiv.style.width='100%'
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
  const festival = events [1]
  createEvent(festival.tittle, festival.image1, festival.image2, festival.textEvent)

})
const btnHarryPotter = document.querySelector ('#four')
btnHarryPotter.addEventListener ('click', ()=>{
  const harryPotter = events [3]
  createEvent(harryPotter.tittle, harryPotter.image1, harryPotter.image2, harryPotter.textEvent)
})


  




