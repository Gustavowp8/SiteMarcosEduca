const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);


/*====opções do perfil=======*/

function opPerfil(){
    opcUsuario.style.display='block'
}

function irParaPag(){
    alert('Direcionar')
}

function sairOpUser(){
    opcUsuario.style.display='none'
}

function deslogar(){
    location='../planos/login.html'
}

function chamaOpUser(){
    opcoesUsuario.style.display='block'
}
/*======opções do perfil=====*/

//Remover esta parte
function aviso(){
    alert('Pagina em manutenção!')
}
function sobre(){
    alert('Não é possível acessar a DASHBOARD do site Qlegis.')
}
function fecha(){
    fer.style.display='none'
}
function falecom(){
    alert('Você será direcionado para o WhastApp!')
    location='https://api.whatsapp.com/send?phone=5561995084318&text=Tenho%20uma%20duvida%2C%20'
}

function pagat(){
    alert('Meio de pagamento desabilitado!')
}

function cadastro(){
    alert('O banco de dados não foi estabelecido!')
}

function verifiarLog(){
    alert("Você esta em uma verção de teste!")
    location='../logado/logado.html'
}
//Remover esta parte