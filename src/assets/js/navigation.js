const navElem = document.querySelector('nav');
const hamburgerElem = document.querySelector('.btn-hamburger');

function toggleClass(){
    navElem.classList.toggle('active');
}

hamburgerElem.addEventListener('click', ()=>{
    console.log('dadada');
    toggleClass();
})