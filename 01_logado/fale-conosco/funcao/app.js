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

function smsfale(){
    const smsAssunto = document.getElementById('formGroupExampleInput').value
    const smsMmsagem = document.getElementById('exampleFormControlTextarea1').value

    if(smsAssunto == '' || smsMmsagem == '' ){
        alert("Falta dados")
    } else {
        alert('Mensagem enviada')
    }
}
/*===== Grupo de links =======*/