const btnSendMessage = document.querySelector(".submit");

btnSendMessage.addEventListener("click", function(event){
 event.preventDefault(); 

  const season        = document.querySelector('#season');
  const name          = document.querySelector('#name');
  const title         = document.querySelector('#title'); 
  const img           = document.querySelector('.img');
  const place         = document.querySelector('#place');
  const description   = document.querySelector('#description');
  
  let newEvent = {
    season, name, title, img, date, place, description
  }

localStorage.setItem("name", document.querySelector('#name').value);
localStorage.setItem("title", document.querySelector('#title').value);
localStorage.setItem("img", document.querySelector('.img').value);
localStorage.setItem("place", document.querySelector('#place').value);
localStorage.setItem("description", document.querySelector('#description').value);
console.log(document.querySelector('#name').value);
console.log(document.querySelector('#title').value);
console.log(document.querySelector('#img').value);
console.log(document.querySelector('#place').value);
console.log(document.querySelector('#description').value);
});

