import * as el from "./elementsFT.js"
import state from "./state.js"
import * as timer from "./timer.js" 
import * as sounds from './sounds.js'

export function toggleRunning(){
    sounds.buttonPressAudio.play()

state.isRunning =  el.HTML.classList.toggle('running')
timer.contagemRegressiva()
}
export function set(){
sounds.buttonPressAudio.play()

el.minutes.setAttribute('contenteditable', true)
el.minutes.focus()

}

export function reset(){
sounds.buttonPressAudio.play()

    state.isRunning = false
el.HTML.classList.remove('running')
timer.updatedisplay()
sounds.removeMusic()
}
export function toggleMusic(){
    sounds.buttonPressAudio.play()

state.musicOn = el.HTML.classList.toggle('musicOn')
if(state.musicOn === true){
    sounds.temaSound()
}else{
    sounds.bgAudio.pause()
}

}