(()=>{
  const btnLang = document.querySelectorAll('.btn-lang');
  
  function activeLanguage(event){
    btnLang.forEach((elem)=>{
      elem.classList.remove('active');
    })
    event.target.classList.add('active');
  }
  
  btnLang.forEach((elem)=>{
    elem.addEventListener('click', (event)=>{
      activeLanguage(event)
    })
  })
})