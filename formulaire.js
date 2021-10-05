document
  .querySelector('#contactForm')
  .addEventListener('submit', function (evente) {
    evente.preventDefault();

    let erreur;

    let firstName     = document.querySelector('#firstName');
    let lastName      = document.querySelector('#lastName');
    let email         = document.querySelector('#email');
    let title         = document.querySelector('#title');
    let subtitle      = document.querySelector('#subtitle');
    let place         = document.querySelector('#place');
    let message       = document.querySelector('#message');

    if (!message.value) {
      erreur = 'Veuillez saisir votre message !';
    }

    if (!place.value) {
      erreur = "Veuillez saisir le lieu de l'évènement !";
    }

    if (!subtitle.value) {
      erreur = 'Veuillez saisir un sous titre à votre évènement !';
    }

    if (!title.value) {
      erreur = 'Veuillez saisir le titre de votre évènement !';
    }

    if (!email.value) {
      erreur = 'Veuillez saisir votre email !';
    }

    if (!lastName.value) {
      erreur = 'Veuillez saisir votre prénom !';
    }

    if (!firstName.value) {
      erreur = 'Veuillez saisir votre nom !';
    }

    if (erreur) {
      evente.preventDefault();
      document.querySelector('#erreur').innerHTML = erreur;
    } else {
      alert("Nous vous remercions pour votre contribution !");
    }
  });
