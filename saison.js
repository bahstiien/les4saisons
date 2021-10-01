/*const imageEvent=document.querySelector ('.img1')
const image =document.createElement('img')
image.src = '../images/index.jpeg';

imageEvent.appendChild(image);
image.style.width= '500px';*/


/*const imageEvent2 = document.querySelector ('.img2');
const image2 = document.createElement ('img');
image2.src = 'images/images.jpeg ';

imageEvent2.appendChild (image2);*/


const biennale = {tittle : 'biennale de la Danse', image1 : './images/index.jpeg' ,image2: './images/images.jpeg' ,textEvent :'tototot'}
function createEvent ( tittle, imageUrl,imageUrl2, textEvent) {
  const imageEvent=document.querySelector ('.img1');
  const image1 =document.createElement('img');
  image1.src = imageUrl;
  image1.style.width='100%';
  image1.style.height = 'auto';
  imageEvent.appendChild(image1);
  
  const imageEvent2=document.querySelector ('.img2');
  const image2 =document.createElement('img');
  image2.src = imageUrl2;
  image2.style.width='100%';
  image2.style.height = 'auto';;
  imageEvent2.appendChild(image2); 
  
  
  /*const tittleEvent = document.createElement(".tittle");
  const tittle = document.createElement("h2");
  tittle.style.color='red';
    
 tittleEvent.appendChild(tittle);*/
  
    
  

}
createEvent(biennale.tittle, biennale.image1, biennale.image2, biennale.textEvent)


  



  




