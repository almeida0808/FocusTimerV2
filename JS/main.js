const downButtons = document.querySelector('.ph-caret-down')
const upButtons = document.querySelector('.ph-caret-up')
const painelControlTemas = document.getElementById('controlsTemas')

const btnMario = document.querySelector('ph-game-controller')



function VisibilytiControlsTema(){
    painelControlTemas.classList.toggle('hide')
    downButtons.classList.toggle('hide')
}


downButtons.addEventListener("click", VisibilytiControlsTema)
upButtons.addEventListener("click", VisibilytiControlsTema)
