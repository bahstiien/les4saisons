const locatBtn = document.querySelector('#geoloc-button');
const geolocStatus = document.querySelector('#geoloc-status');

let map = L.map('mapid').setView([45.74563313490728, 2.827675010610884], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const markerHallTonyGarnier = L.marker([45.731904, 4.825906])
  .addTo(map)
  .bindPopup('Hall Tony Garnier');

const placeBellecour = L.marker([45.757456, 4.832211])
  .addTo(map)
  .bindPopup('Place Bellecour');

const boulevardCroixRousse = L.marker([45.773642, 4.823392])
  .addTo(map)
  .bindPopup('Boulevard de la Croix-Rousse');

map.fitBounds([
  [45.757456, 4.832211],
  [45.731904, 4.825906],
  [45.773642, 4.823392],
]);



function onGeolocationSuccess(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const long = position.coords.longitude;

  map.setView([lat, long], 15);

  L.marker([lat, long]).addTo(map).bindPopup('Vous êtes ici!').openPopup();
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

//* flist marker sur map//*

//* fonction initéraire //*
