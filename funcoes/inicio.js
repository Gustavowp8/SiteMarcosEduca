
function chamaMenuUser(){
    opcQu.style.display='block'
}
function fechaMenu(){
    opcQu.style.display='none'
}

/*==== aviso ====*/

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  function verSite(){
      aviso.style.display='none'
  }

  function chamaPro(){
      alert('Você será direcionado ao WhatsApp')
      location='https://api.whatsapp.com/send?phone=5561995084318&text=Tenho%20uma%20duvida%2C%20'
  }

  function avisoProc(){
      alert('Aguardando documento HTML')
  }
 
  function dash(){
    location="questions/01.1_QUESTOES_TODAS_AS_QUESTOES _ADICIONAR-ABCDE.html"
  }
  /*==== aviso ====*/

  /*====== links ======*/
  function paginaPlanos(){
    location='planos/planos.html'
  }
  function verifiarLog(){
    location='../00_logado/inicioLogado.html'
  }
  function avisoEntre(){
    location='planos/login.html'
  }