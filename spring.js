

let eventInSpring = eventDataBase.filter((key) => key.season.includes('spring'));

const eventCards = document.querySelector(".eventCards");

function createCardEvent(name, date, localisation, description, img) {
    const eventCard = document.createElement("div");
    eventCard.classList.add("eventCard");
    eventCards.appendChild(eventCard)

    const cardHeader = document.createElement("div");
    cardHeader.classList.add('cardHeader');
    eventCard.appendChild(cardHeader);

    const cardImg = document.createElement("div");
    cardImg.style.backgroundImage = `url(${img})`;
    cardImg.classList.add('cardImg');
    eventCard.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.classList.add('cardBody');
    eventCard.appendChild(cardBody);

    const cardName = document.createElement('h3');
    cardName.classList.add('card-name');
    cardName.setAttribute("data-translatable", true)
    cardName.innerHTML = name;
    cardBody.appendChild(cardName)

    const cardDate = document.createElement('p');
    cardDate.classList.add('cardDate');
    cardDate.setAttribute("data-translatable", true)
    cardDate.innerHTML = date;
    cardBody.appendChild(cardDate);

    const cardMaps = document.createElement('p');
    cardMaps.classList.add('cardMaps');
    cardMaps.setAttribute("data-translatable", true)
    cardMaps.innerHTML = localisation;
    cardBody.appendChild(cardMaps)

    const cardDescription = document.createElement('p');
    cardDescription.classList.add('cardDescription');
    cardDescription.innerHTML = description;
    cardDescription.setAttribute("data-translatable", true)
    cardBody.appendChild(cardDescription)
}

for (let i = 0; i < eventInSpring.length; i++) {
    createCardEvent(eventInSpring[i].name, eventInSpring[i].date, eventInSpring[i].localisation, eventInSpring[i].description, eventInSpring[i].img)
    i18n.changeLanguage("fr");
}
