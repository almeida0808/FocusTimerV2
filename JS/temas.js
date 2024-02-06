import * as el from './elements.js'


// controle de visibilidade dos btns dos temas
function VisibilytiControlsTema(){
    el.painelControlTemas.classList.toggle('hide')
    el.downButtons.classList.toggle('hide')

}
el.downButtons.addEventListener("click", VisibilytiControlsTema)
el.upButtons.addEventListener("click", VisibilytiControlsTema)

function removeClass(){
    el.HTML.classList.remove('mario')
    el.HTML.classList.remove('predios')
    el.HTML.classList.remove('peixes')
    el.HTML.classList.remove('chuva')

}

//mudança de temas
function TemaMario(){
el.background.src = 'backgrounds/chill-mario-pixel-moewalls-com.mp4'
removeClass()
el.HTML.classList.add('mario')

}
el.btnMario.addEventListener('click' , TemaMario)

function TemaPeixes(){
    el.background.src = "backgrounds/koi-fish-pond-pixel-moewalls-com.mp4"
    removeClass()
el.HTML.classList.add('peixes')
}
el.btnPeixes.addEventListener('click' , TemaPeixes)

function TemaPredios(){
    el.background.src = "backgrounds/bg-day.mp4"
    removeClass()
el.HTML.classList.add('predios')
}
el.btnPredios.addEventListener('click' , TemaPredios)


function TemaChuva(){
el.background.src = 'backgrounds/rainy-waterfall-pixel-desktop-wallpaperwaifu-com.mp4'
removeClass()
el.HTML.classList.add('chuva')
}

el.btnChuva.addEventListener('click' , TemaChuva)
