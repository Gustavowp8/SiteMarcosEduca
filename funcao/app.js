const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);

/*====== Dados de cadastro =======*/
function cadastro(){

    var nome = document.getElementById('cNome').value
    var sobreNome = document.getElementById('cSobreNome').value
    var email = document.getElementById('cMail').value
    var senhaPri = document.getElementById('cSenha').value
    var senhaSeg = document.getElementById('mSenha').value
    var tel = document.getElementById('cTel').value
    var estado = document.getElementById('cEst').value

    if(senhaPri != senhaSeg){
        alert('Senhas não confere')
    } else if (nome == '' || sobreNome == '' || email == '' || senhaPri == '' || senhaSeg == '' || tel == ''){
        alert('Falta dados')
    } else {
        localStorage.nome = nome
        localStorage.email = email
        localStorage.senha = senhaPri

        alert('Cadastrado com sucesso!') 
    }
}
/*====== Dados de cadastro =======*/

/*====== LOGIN ======*/
function verifiarLog(){

    var emailUser = document.getElementById('tMail').value
    var senhaUser = document.getElementById('tSenha').value

    var email = localStorage.email
    var senha = localStorage.senha

    if( email != emailUser){
        alert('E-mail errado!')
    } else if (senha != senhaUser) {
        alert('Senha errado!')
    } else{
        location='../001_logado/inicioLogado.html'
    }

}
/*====== LOGIN ======*/ 