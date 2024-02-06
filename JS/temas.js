import * as elements from './elements.js'



function VisibilytiControlsTema(){
    elements.painelControlTemas.classList.toggle('hide')
    elements.downButtons.classList.toggle('hide')
}

elements.downButtons.addEventListener("click", VisibilytiControlsTema)
elements.upButtons.addEventListener("click", VisibilytiControlsTema)


function TemaMario(){
elements.background.src = 'backgrounds/chill-mario-pixel-moewalls-com.mp4'
}
elements.btnMario.addEventListener('click' , TemaMario)

function TemaPeixes(){
    elements.background.src = "backgrounds/koi-fish-pond-pixel-moewalls-com.mp4"
}
elements.btnPeixes.addEventListener('click' , TemaPeixes)

function TemaPredios(){
    elements.background.src = "backgrounds/bg-day.mp4"
}
elements.btnPredios.addEventListener('click' , TemaPredios)


function TemaChuva(){
elements.background.src = 'backgrounds/rainy-waterfall-pixel-desktop-wallpaperwaifu-com.mp4'
}
elements.btnChuva.addEventListener('click' , TemaChuva)
