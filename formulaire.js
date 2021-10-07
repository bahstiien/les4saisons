// const { doc } = require('prettier');

const btnSendMessage = document.querySelector('.submit');

btnSendMessage.addEventListener('click', function (event) {
  event.preventDefault();

  const season = document.querySelector('#season');
  const name = document.querySelector('#name');
  const title = document.querySelector('#title');
  const img = document.querySelector('#img');
  const date = document.querySelector('#date');
  const place = document.querySelector('#place');
  const description = document.querySelector('#description');

  let newEvent = {
    season,
    name,
    title,
    img,
    date,
    place,
    description,
  };

  localStorage.setItem('saison', document.querySelector('#season').value);
  localStorage.setItem('nom', document.querySelector('#name').value);
  localStorage.setItem('titre', document.querySelector('#title').value);
  localStorage.setItem('img', document.querySelector('#img').value);
  localStorage.setItem('date', document.querySelector('#date').value);
  localStorage.setItem('place', document.querySelector('#place').value);
  localStorage.setItem('message', document.querySelector('#description').value);

  // console.log(document.querySelector('#season').value);
  // console.log(document.querySelector('#name').value);
  // console.log(document.querySelector('#title').value);
  // console.log(document.querySelector('#img').value);
  // console.log(document.querySelector('#place').value);
  // console.log(document.querySelector('#date').value);
  // console.log(document.querySelector('#description').value);
});
