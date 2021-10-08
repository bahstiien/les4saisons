let eventInWinter = eventDataBase.filter((key) =>
    key.season.includes('winter')
);

// console.log(eventInWinter);

const eventCards = document.querySelector('.eventCards');

function createCardEvent(name, date, localisation, description, img) {
    const eventCard = document.createElement('div');
    eventCard.classList.add('eventCard');
    eventCards.appendChild(eventCard);

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('cardHeader');
    eventCard.appendChild(cardHeader);

    const cardImg = document.createElement('div');
    cardImg.style.backgroundImage = `url(${img})`;
    cardImg.classList.add('cardImg');
    eventCard.appendChild(cardImg);

    const cardBody = document.createElement('div');
    cardBody.classList.add('cardBody');
    eventCard.appendChild(cardBody);

    const cardName = document.createElement('h3');
    cardName.classList.add('card-name');
    cardName.setAttribute("data-translatable", true)
    cardName.innerHTML = name;
    cardBody.appendChild(cardName);

    const cardDate = document.createElement('p');
    cardDate.classList.add('cardDate');
    cardDate.setAttribute("data-translatable", true)
    cardDate.innerHTML = date;
    cardBody.appendChild(cardDate);

    const cardMaps = document.createElement('div');
    cardMaps.classList.add('cardMaps');
    cardMaps.setAttribute("data-translatable", true)
    cardMaps.innerHTML = localisation;
    cardBody.appendChild(cardMaps);

    const cardDescription = document.createElement('p');
    cardDescription.classList.add('cardDescription');
    cardDescription.setAttribute("data-translatable", true)
    cardDescription.innerHTML = description;
    cardBody.appendChild(cardDescription);

    // const cardMaps = document.createElement('div');
    // cardMaps.classList.add('mapid');
    // cardMaps.innerHTML =
    // cardBody.appendChild(cardMaps);
}

for (let i = 0; i < eventInWinter.length; i++) {
    createCardEvent(
        eventInWinter[i].name,
        eventInWinter[i].date,
        eventInWinter[i].localisation,
        eventInWinter[i].description,
        eventInWinter[i].img
    );
}

for (let i = 0; i < eventInWinter.length; i++) {
    createCardEvent(eventInWinter[i].name, eventInWinter[i].date, eventInWinter[i].localisation, eventInWinter[i].description, eventInWinter[i].img)
    i18n.changeLanguage("fr");
