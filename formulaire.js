document
  .querySelector('#contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    let erreur;
    let name = document.querySelector('#name');
    let prenom = document.querySelector('#prenom');
    let email = document.querySelector('#email');
    let message = document.querySelector('#message');

    if (!message.value) {
      erreur  = 'Veuillez saisir votre message !';
    }

    if (!email.value) {
      erreur = 'Veuillez saisir votre émail !';
    }

    if (!prenom.value) {
      erreur = 'Veuillez saisir votre prénom !';
    }

    if (!name.value) {
      erreur = 'Veuillez saisir votre nom !';
    }

    if (erreur) {
      event.preventDefault();
      document.querySelector('#erreur').innerHTML = erreur;
    } else {
      alert('Nous vous remercions pour votre message !');
    }
  });

  //translate
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
const btnSendMessage = document.querySelector("submit");
console.log(btnSendMessage);


  localStorage.setItem("Nom", document.querySelector('#firstName').value);
  console.log(document.querySelector('#firstName').value);






  // document.getElementById("contactForm").addEventListener("submit", function(e) {
    //   e.preventDefault();
    //   let erreur;
    
    //   const firstName     = document.querySelector('#firstName');
    //   const lastName      = document.querySelector('#lastName');
    //   const email         = document.querySelector('#email');
    //   const title         = document.querySelector('#title'); 
    //   const subtitle      = document.querySelector('#subtitle');
    //   const place         = document.querySelector('#place');
    //   const message       = document.querySelector('#message');
    //   alert('Formulaire envoyé !');
    // });


// document.querySelector('#contactForm').addEventListener('submit', function (event) {
//     event.preventDefault();


//     const firstName     = document.querySelector('#firstName');
//     const lastName      = document.querySelector('#lastName');
//     const email         = document.querySelector('#email');
//     const title         = document.querySelector('#title');
//     const subtitle      = document.querySelector('#subtitle');
//     const place         = document.querySelector('#place');
//     const message       = document.querySelector('#message');
// if (!message.value) {
//   erreur = 'Veuillez saisir votre message !';
// }

// if (!place.value) {
//   erreur = "Veuillez saisir le lieu de l'évènement !";
// }

// if (!subtitle.value) {
//   erreur = 'Veuillez saisir un sous titre à votre évènement !';
// }

// if (!title.value) {
//   erreur = 'Veuillez saisir le titre de votre évènement !';
// }

// if (!email.value) {
//   erreur = 'Veuillez saisir votre email !';// }

// if (!lastName.value) {
//   erreur = 'Veuillez saisir votre prénom !';
// }

// if (!firstName.value) {
//   erreur = 'Veuillez saisir votre nom !';
// }

// if (erreur) {
//   event.preventDefault();
//   document.querySelector('#erreur').innerHTML = erreur;
// } else {
//   alert("Nous vous remercions pour votre contribution !");
// }
// });
// document
//   .querySelector('#contactForm')
//   .addEventListener('submit', function (event) {
//     event.preventDefault();

//     let erreur;
//     let name = document.querySelector('#name');
//     let prenom = document.querySelector('#prenom');
//     let email = document.querySelector('#email');
//     let message = document.querySelector('#message');

//     if (!message.value) {
//       erreur = 'Veuillez saisir votre message !';
//     }

//     if (!email.value) {
//       erreur = 'Veuillez saisir votre émail !';
//     }

//     if (!prenom.value) {
//       erreur = 'Veuillez saisir votre prénom !';
//     }

//     if (!name.value) {
//       erreur = 'Veuillez saisir votre nom !';
//     }

//     if (erreur) {
//       event.preventDefault();
//       document.querySelector('#erreur').innerHTML = erreur;
//     } else {
//       alert('Nous vous remercions pour votre message !');
//     }
//   });


  
  
