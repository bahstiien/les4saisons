const locatBtn = document.querySelector('#geoloc-button');
const geolocStatus = document.querySelector('#geoloc-status');
let eventListInLocalStorage = JSON.parse(localStorage.getItem('eventList'));

if (eventListInLocalStorage === null) {
  eventListInLocalStorage = [
    {
      name: 'concert - hall tony garnier',
      coords: { lat: 45.731904, lng: 4.825906 },
    },
    {
      name: 'vogue des Marrons - Bvd Croix-rousse',
      coords: { lat: 45.773642, lng: 4.823392 },
    },
    {
      name: 'Place Bellecour',
      coords: { lat: 45.757456, lng: 4.832211 },
    },
  ];
}

let map = L.map('mapid').setView([45.74563313490728, 2.827675010610884], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

for (let i = 0; i < eventListInLocalStorage.length; i++) {
  const currentEvent = eventListInLocalStorage[i];
  console.log(currentEvent);
  L.marker([currentEvent.coords.lat, currentEvent.coords.lng])
    .addTo(map)
    .bindPopup(currentEvent.name);
}

function onGeolocationSuccess(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  map.setView([lat, lng], 15);

  L.marker([lat, lng]).addTo(map).bindPopup('Vous êtes ici!').openPopup();
}

function onGeolocationError(error) {
  console.error(error);
}

locatBtn.addEventListener('click', function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      onGeolocationSuccess,
      onGeolocationError,
      { enableHighAccuracy: true }
    );
  } else {
    geolocStatus.innerText =
      ' Votre navigateur ne supporte pas la géolocalisation';
  }
});

//* fonction transformation d'adresse en lat/long//*

const API_KEY = '2f9c8efda6a24f89b0dab37cf6865bb8';

function getCoords(addr) {
  const formattedURI = encodeURI(
    `https://api.opencagedata.com/geocode/v1/json?q=${addr}&key=${API_KEY}&language=fr&pretty=1`
  );
  return fetch(formattedURI)
    .then((res) => res.json())
    .then((response) => response?.results[0]?.geometry || null)
    .catch((error) => {
      console.error(error);
      return null;
    });
}

const eventNameInput = document.querySelector('#name');
const eventAddrInput = document.querySelector('#addr');
const formEvent = document.querySelector('#formGeoloc');

formEvent.addEventListener('submit', function (event) {
  event.preventDefault();
  const newEvent = { name: eventNameInput.value, addr: eventAddrInput.value };

  getCoords(newEvent.addr).then((coords) => {
    if (coords) {
      newEvent.coords = coords;
      console.log(newEvent);
      eventListInLocalStorage.push(newEvent);

      localStorage.setItem(
        'eventList',
        JSON.stringify(eventListInLocalStorage)
      );
    } else {
      console.log('no result found, try another search');
    }
  });
});

// // Echelle de l'affichage de la carte !!
// A adapter en fonction des éléments, après le merge avec le reste!!

map.fitBounds([
  [45.757456, 4.832211],
  [45.731904, 4.825906],
  [45.773642, 4.823392],
]);

// const group = [];
// map.fitBounds(group.getBounds());