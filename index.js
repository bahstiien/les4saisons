let currentLanguage = 'fr';

const switchLanguageBtn = document.querySelector('#btnLangage');
switchLanguageBtn.addEventListener('click', function () {
  if (currentLanguage === 'fr') {
    currentLanguage = 'en';
  } else {
    currentLanguage = 'fr';
  }
  i18n.changeLanguage(currentLanguage);
});

const listEventInSpring = eventDataBase.filter((key) =>
  key.season.includes('spring')
);
const listEventInSummer = eventDataBase.filter((key) =>
  key.season.includes('summer')
);
const listEventInFall = eventDataBase.filter((key) =>
  key.season.includes('fall')
);
const listEventInWinter = eventDataBase.filter((key) =>
  key.season.includes('winter')
);

const springIMG = document.querySelector('.springIMG');
const summerIMG = document.querySelector('.summerIMG');
const fallIMG = document.querySelector('.fallIMG');
const winterIMG = document.querySelector('.winterIMG');
const listEvent = document.querySelector('.listEvent');
const saut = document.querySelector('.saut');
const showListSpring = document.querySelectorAll('liSpring');

let listSpringName = [];
let listSummerName = [];
let listFallName = [];
let listWinterName = [];

listEventInSpring.forEach((event) => {
    listSpringName.push(event.name)});
    
springIMG.addEventListener('mouseover', () => {
    let none=document.querySelector('.unnone');
    none.innerHTML= (listEventInSpring[0]).name +' ~ '+ (listEventInSpring[1]).name +' ~ '+ (listEventInSpring[2]).name;
    none.classList.remove("none");
});

springIMG.addEventListener('mouseout', () => {
  let none = document.querySelector('.unnone');
  none.classList.toggle('none');
});

listEventInSummer.forEach((event) => {
    listSummerName.push(event.name) + ' '});
    
summerIMG.addEventListener('mouseover', () => {
    let none=document.querySelector('.unnone');
    none.innerHTML= (listEventInSummer[0]).name +' ~ '+ (listEventInSummer[1]).name +' ~ '+ (listEventInSummer[2]).name+' ~ '+(listEventInSummer[3]).name;
    none.classList.remove("none");
});

summerIMG.addEventListener('mouseout', () => {
    let none=document.querySelector('.unnone');
    none.classList.toggle("none");
});

listEventInFall.forEach((event) => {
    listFallName.push(event.name) + ' '});
    
fallIMG.addEventListener('mouseover', () => {
    let none=document.querySelector('.unnone');
    none.innerHTML = (listEventInFall[0]).name +' ~ '+ (listEventInFall[1]).name +' ~ '+ (listEventInFall[2]).name;

    none.classList.remove("none");
});

fallIMG.addEventListener('mouseout', () => {
    let none=document.querySelector('.unnone');
    none.classList.toggle("none");
});

listEventInWinter.forEach((event) => {
    listWinterName.push(event.name) + ' '});
    
winterIMG.addEventListener('mouseover', () => {
    let none=document.querySelector('.unnone');
    none.innerHTML= (listEventInWinter[0]).name +' ~ '+ (listEventInWinter[1]).name +' ~ '+ (listEventInWinter[2]).name+' ~ '+(listEventInWinter[3]).name;
    ;
    none.classList.remove("none");
});

winterIMG.addEventListener('mouseout', () => {
    let none=document.querySelector('.unnone');
    none.classList.toggle("none");
});
// function activeTextSpring () {

// springIMG.addEventListener('mouseover',() => {
//     if (showListSpring.style.display ='block');{
//         showListSpring.style.display = 'block'
//     }
//     else {
//         (showListSpring.style.display = 'none')
//     }
// });
// activeTextSpring();

// showListSpring.style.display = 'none';

// summerIMG.addEventListener('mouseover', () => {(listEventInSummer.forEach((event) => {
//     const listEvent = document.querySelector('listEvent');
//     const newEvent = document.createElement("p");
//     newEvent.classList.add('liSpring')
//     newEvent.innerHTML = `${event.name}`;
//     listEvent.appendChild(newEvent);
//     console.log(`${event.name}`)
// }))})

// fallIMG.addEventListener('mouseover', () => {(listEventInFall.forEach((event) => {
//     const listEvent = document.querySelector('listEvent');
//     const newEvent = document.createElement("p");
//     newEvent.classList.add('liSpring')
//     newEvent.innerHTML = `${event.name}`;
//     listEvent.appendChild(newEvent);
//     console.log(`${event.name}`)
// }))})

// winterIMG.addEventListener('mouseover', () => {(listEventInWinter.forEach((event) => {
//     const listEvent = document.querySelector('listEvent');
//     const newEvent = document.createElement("p");
//     newEvent.classList.add('liSpring')
//     newEvent.innerHTML = `${event.name}`;
//     listEvent.appendChild(newEvent);
//     console.log(`${event.name}`)
// }))})

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
//  };

//  for (let i = 0; i < seasonTab.length; i++) {
//      creadListEvent(seasonTab[i].name)
//  };

// creadListEvent(listEventInFall)

// creadListEvent(listEventInFall)
