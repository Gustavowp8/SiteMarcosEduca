/*==== header ====*/

function chamaUser(){
    menu.style.display='block'
}

function irPag(){
    menu.style.display='none'
    alert('Link indisponivel')
}

function fecharMineMeu(){
    menu.style.display='none'
}

/*==== header ====*/

/*====== MENU ======*/

function chamaComcurso(){
    opc3.style.display='block'
}
function fechaConcursos(){
    opc3.style.display='none'
}

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

/*====== MENU ======*/

userNome.innerHTML = localStorage.nome

function irPag(){
    var sair = confirm('Tem certeza que deseja sair ?')

    if(sair == true){
        location='../00_planos/login.html'
    }
}