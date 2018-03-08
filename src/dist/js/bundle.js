'use strict';

// (() => {
//   const btnLang = document.querySelectorAll('.btn-lang');

//   function activeLanguage(event){
//     btnLang.forEach((elem)=>{
//       elem.classList.remove('active');
//     })
//     event.target.classList.add('active');
//   }

//   btnLang.forEach((elem)=>{
//     elem.addEventListener('click', (event)=>{
//       activeLanguage(event)
//     })
//   })
// })()

(function () {
  // INTERNET EXPLOER VERSION
  var btnLang = document.querySelectorAll('.btn-lang');

  function activeLanguage(event) {
    for (var i = 0; i < btnLang.length; i++) {
      btnLang[i].classList.remove('active');
    }
    event.target.classList.add('active');
  }

  for (var i = 0; i < btnLang.length; i++) {
    btnLang[i].addEventListener('click', function (event) {
      activeLanguage(event);
    });
  }
})();
'use strict';

(function () {
    var navElem = document.querySelector('nav');
    var hamburgerElem = document.querySelector('.btn-hamburger');
    var btnNav = document.querySelector('btn-nav');
    var documentBody = document.body;

    function toggleMenu() {
        navElem.classList.toggle('active');
    }

    function removeMenu() {
        navElem.classList.remove('active');
    }

    hamburgerElem.addEventListener('click', function () {
        toggleMenu();
    });

    documentBody.addEventListener('click', function (event) {
        if (navElem.contains(event.target)) {
            return;
        } else {
            removeMenu();
        }
    });
})();