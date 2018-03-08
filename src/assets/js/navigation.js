(() => {
    const navElem = document.querySelector('nav');
    const hamburgerElem = document.querySelector('.btn-hamburger');
    const btnNav = document.querySelector('btn-nav');
    const documentBody = document.body;
    
    function toggleMenu(){
        navElem.classList.toggle('active');
    }
    
    function removeMenu(){
        navElem.classList.remove('active');
    }
    
    hamburgerElem.addEventListener('click', ()=>{
        toggleMenu();
    })
    
    documentBody.addEventListener('click', (event)=>{
        if(navElem.contains(event.target)){
            return;
        } else{
            removeMenu()
        }
    })
})()