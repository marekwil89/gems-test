"use strict";
'use strict';

var navElem = document.querySelector('nav');
var hamburgerElem = document.querySelector('.btn-hamburger');

function toggleClass() {
    navElem.classList.toggle('active');
}

hamburgerElem.addEventListener('click', function () {
    console.log('dadada');
    toggleClass();
});