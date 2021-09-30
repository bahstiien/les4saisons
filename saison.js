/*const imageEvent=document.querySelector ('.img1')
const image =document.createElement('img')
image.src = '../images/index.jpeg';

imageEvent.appendChild(image);
image.style.width= '500px';*/


/*const imageEvent2 = document.querySelector ('.img2');
const image2 = document.createElement ('img');
image2.src = 'images/images.jpeg ';

imageEvent2.appendChild (image2);*/


const biennale = {tittleEvent : 'biennale de la Danse', image : './images/index.jpeg', textEvent :'tototot'}
function createEvent ( tittleEvent, imageUrl,textEvent) {
  const imageEvent=document.querySelector ('.img1')
  const image =document.createElement('img')
  image.src = imageUrl;
  imageEvent.appendChild(image);
image.style.width= '500px';
  }
createEvent(biennale.tittleEvent, biennale.image, biennale.textEvent)


    /*const tittleEvent = document.createElement("tittle");
  
 tttleEvent.appendChild(tittle);
  
    const textEvent = document.createElement("p");
    textEvent.classList.add("p");
    textEvent.appendChild(p);}
  
  console.log (createEvent)*/