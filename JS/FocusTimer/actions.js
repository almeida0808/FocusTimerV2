import * as el from "./elementsFT.js"
import state from "./state.js"
import * as timer from "./timer.js" 

export function toggleRunning(){
state.isRunning =  el.HTML.classList.toggle('running')
timer.contagemRegressiva()
}
export function set(){
    console.log(  'sou o set')
}

export function reset(){
    state.isRunning = false
el.HTML.classList.remove('running')
}
export function toggleMusic(){

state.musicOn = el.HTML.classList.toggle('musicOn')

}