// MENU
let nav_icon = document.getElementById('nav-icon3')
nav_icon.addEventListener('click', () => {
    document.getElementById('nav-icon3').classList.toggle('open')
    document.getElementById('painel-content').classList.toggle('active')
    document.getElementById('painel').classList.toggle('background')
})

function element(id) {
    let element = document.getElementById(`${id}`)
    document.getElementById(`li__${id}`).classList.toggle('active')
    element.classList.toggle('d-n')

    let linkActive = document.querySelectorAll('#painel-content ul li ul li span')
    linkActive.forEach(active => {
        active.addEventListener('click', () => {
            linkActive.forEach(linkRemove => {

                linkRemove.classList.remove('link__active')
            })
            active.classList.toggle('link__active')
        })
    })
}


// Disciplina add
var btnDisciplinaAdd = document.getElementById('btn-add-disciplina')
btnDisciplinaAdd.addEventListener('click', ()=>{
    let campInputs = document.getElementById('add-disciplina')
    campInputs.classList.toggle('sr-only')
})