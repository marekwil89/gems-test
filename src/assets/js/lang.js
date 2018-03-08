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

(()=>{
  // INTERNET EXPLOER VERSION
  const btnLang = document.querySelectorAll('.btn-lang');
  
  function activeLanguage(event){ 
    for(let i = 0; i < btnLang.length; i++){
      btnLang[i].classList.remove('active');
    }
    event.target.classList.add('active');
  }
  
  for(let i = 0; i < btnLang.length; i ++){
    btnLang[i].addEventListener('click', function(event){
      activeLanguage(event);
    })
  }
})()