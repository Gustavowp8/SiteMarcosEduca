/*====== Menu ======*/
const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(){
   const nav = document.getElementById('nav');
   nav.classList.toggle('active');
}
btnMobile.addEventListener('click', toggleMenu);
/*====== Menu ======*/

/*===== Grupo de links =======*/
function temas(){
    alert('Indisponível')
}
function ajuda(){
    alert('Indisponível')
}

function fechaNotifi(){
    notif.style.display='none'
}
function chamaNotifi(){
    notif.style.display='block'
}
function chamaOpcUser(){
    opcsUser.style.display='block'
}
function irLogin(){
    alert('Sem link')
    location='inicioLogado.html'
}
function chamaDis(){
    maisOpcDis.style.display='block'
}

/*function Irfiltros(){
    cPrincipal.style.display='flex'
}*/

const filtro = document.getElementById('abrirFiltros');
function toggleFiltro(){
    const filtroNav = document.getElementById('filtroNav')
    filtroNav.classList.toggle('active');
}
filtro.addEventListener('click', toggleFiltro)



/*===== Grupo de links =======*/