'use strict';

(function () {
  var btnLang = document.querySelectorAll('.btn-lang');

  function activeLanguage(event) {
    btnLang.forEach(function (elem) {
      elem.classList.remove('active');
    });
    event.target.classList.add('active');
  }

  btnLang.forEach(function (elem) {
    elem.addEventListener('click', function (event) {
      activeLanguage(event);
    });
  });
});
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

    documentBody.addEventListener('click', function () {
        if (navElem.contains(event.target)) {
            return;
        } else {
            removeMenu();
        }
    });
});