// const { doc } = require('prettier');

const btnSendMessage = document.querySelector('.submit');

btnSendMessage.addEventListener('click', function (event) {
  event.preventDefault();

  const season = document.querySelector('#season').value;
  const name = document.querySelector('#name').value;
  const title = document.querySelector('#title').value;
  const img = document.querySelector('#img').value;
  const date = document.querySelector('#date').value;
  const localisation = document.querySelector('#localisation').value;
  const description = document.querySelector('#description').value;

  let newEvent = {
    season,
    name,
    title,
    img,
    date,
    localisation,
    description,
  };
  eventDataBase.push(newEvent);
  console.log(newEvent);
  localStorage.setItem('events', JSON.stringify(eventDataBase));
});
