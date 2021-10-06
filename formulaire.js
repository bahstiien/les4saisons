const btnSendMessage = document.querySelector(".submit");
btnSendMessage.addEventListener("click", function(event) {
 event.preventDefault();
  const season        = document.querySelector("#season");
  const name          = document.querySelector("#name");
  const title         = document.querySelector("#title");
  const img           = document.querySelector(".img");
  const place         = document.querySelector("#place");
  const description   = document.querySelector("#description");
  let newEvent = {
    season, name, title, img, date, place, description
  }
localStorage.setItem(“nom”, document.querySelector(‘#name’).value);
console.log(document.querySelector(‘#name’).value);