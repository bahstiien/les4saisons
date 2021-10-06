let currentLanguage = "fr";

const switchLanguageBtn = document.querySelector('#btnLangage');
switchLanguageBtn.addEventListener('click', function() {
   if(currentLanguage === "fr"){
       currentLanguage = "en"; 
   }
   else {
       currentLanguage = "fr";
   }
    i18n.changeLanguage(currentLanguage);
});

const listEventInSpring = eventDataBase.filter((key) => key.season.includes('spring'));
const listEventInSummer = eventDataBase.filter((key) => key.season.includes('summer'));
const listEventInFall = eventDataBase.filter((key) => key.season.includes('fall'));
const listEventInWinter = eventDataBase.filter((key) => key.season.includes('winter'));

const springIMG = document.querySelector('.springIMG');
const summerIMG = document.querySelector('.summerIMG');
const fallIMG = document.querySelector('.fallIMG');
const winterIMG = document.querySelector('.winterIMG')
const listEvent = document.querySelector('listEvent');

springIMG.addEventListener('mouseover', () => {(listEventInSpring.forEach((event) => {
    // const newEvent = document.createElement("p");
    // newEvent.classList.add('liSpring')
    // newEvent.innerHTML = `${event.name}`;
    // listEvent.appendChild(newEvent);
    console.log(`${event.name}`)
}))})

summerIMG.addEventListener('mouseover', () => {(listEventInSummer.forEach((event) => {
    // const listEvent = document.querySelector('listEvent');
    // const newEvent = document.createElement("p");
    // newEvent.classList.add('liSpring')
    // newEvent.innerHTML = `${event.name}`;
    // listEvent.appendChild(newEvent);
    console.log(`${event.name}`)
}))})

fallIMG.addEventListener('mouseover', () => {(listEventInFall.forEach((event) => {
    // const listEvent = document.querySelector('listEvent');
    // const newEvent = document.createElement("p");
    // newEvent.classList.add('liSpring')
    // newEvent.innerHTML = `${event.name}`;
    // listEvent.appendChild(newEvent);
    console.log(`${event.name}`)
}))})

winterIMG.addEventListener('mouseover', () => {(listEventInWinter.forEach((event) => {
    // const listEvent = document.querySelector('listEvent');
    // const newEvent = document.createElement("p");
    // newEvent.classList.add('liSpring')
    // newEvent.innerHTML = `${event.name}`;
    // listEvent.appendChild(newEvent);
    console.log(`${event.name}`)
}))})

// listEventInSpring.forEach((event) => {
//     const newEvent = document.createElement("p");
//     newEvent.classList.add('liSpring')
//     newEvent.innerText = `${event.name}`;
//     listEvent.appendChild(newEvent)
// })

// listEventInSummer.forEach((event) => {
//     const newEvent = document.createElement("li");
//     newEvent.classList.add('liSummer')
//     newEvent.innerText = `${event.name}`;
//     listEvent.appendChild(newEvent)
// })

// listEventInFall.forEach((event) => {
//     const newEvent = document.createElement("li");
//     newEvent.classList.add('liFall')
//     newEvent.innerText = `${event.name}`;
//     listEvent.appendChild(newEvent)
// })

// listEventInWinter.forEach((event) => {
//     const newEvent = document.createElement("li");
//     newEvent.classList.add('liWinter')
//     newEvent.innerText = `${event.name}`;
//     listEvent.appendChild(newEvent)
// })

// function creadListEvent(seasonTab) {


//     const listFallEvent = document.createElement('div');
//     listFallEvent.classList.add('BoxlistEvent');
//     listEvent.appendChild(listFallEvent)


//     const listFall = document.createElement('p');
//     listFall.classList.add('listEvent');
//     listFall.innerHTML = name;
//     listFallEvent.appendChild(listFall)
// };

// for (let i = 0; i < seasonTab.length; i++) {
//     creadListEvent(seasonTab[i].name)
// };



// creadListEvent(listEventInFall)


