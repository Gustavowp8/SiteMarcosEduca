const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);


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
//Remover esta parte