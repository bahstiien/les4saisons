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
