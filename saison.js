const events = [

  {tittle : 'Biennale de la danse', image1 : './images/index.jpeg' ,image2: './images/images.jpeg' ,textEvent :'tototot'

  },
  {tittle : 'Festival', image1 : './images/index.jpeg' ,image2: './images/images.jpeg' ,textEvent :'tititi'

  }
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

  




