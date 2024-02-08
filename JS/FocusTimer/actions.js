import * as el from "./elementsFT.js"
import state from "./state.js"
import * as timer from "./timer.js" 

export function toggleRunning(){
state.isRunning =  el.HTML.classList.toggle('running')
timer.contagemRegressiva()
}
export function set(){
el.minutes.setAttribute('contenteditable', true)
el.minutes.focus()
}

export function reset(){
    state.isRunning = false
el.HTML.classList.remove('running')
timer.updatedisplay()
}
export function toggleMusic(){

state.musicOn = el.HTML.classList.toggle('musicOn')

}