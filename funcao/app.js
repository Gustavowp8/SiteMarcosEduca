const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}
btnMobile.addEventListener('click', toggleMenu);

function irSobre(){
    location='sobre.html'
}

function irAjuda(){
    location='ajuda.html'
}

function irTermos(){
    location='termos.html'
}

function irDuvidas(){
    location='duvidas.html'
}

function irPlnaos(){
    location='00_planos/planos.html'
}

function irAjuda(){
    location='ajuda.html'
}

function faleConosco(){
    location='faleConosco.html'
}

function btnEnvia(){
    alert('Mensagem enviada')
}

function avisoDeLogin(){
    avisoEntra.style.display='block'
}

function fechaAvisoDeLogin(){
    avisoEntra.style.display='none'
}

function avisoLink(){
    alert('Sem link')
}

/*====== link dentro da pagina ======*/
function irSobreA(){
    location='../sobre.html'
}
function irAjudaA(){
    location='../ajuda.html'
}

function irTermosA(){
    location='../termos.html'
}

function irDuvidasA(){
    location='../duvidas.html'
}

function irPlnaos(){
    location='planos.html'
}

function irAjudaA(){
    location='../ajuda.html'
}

function faleConoscoA(){
    location='../faleConosco.html'
}