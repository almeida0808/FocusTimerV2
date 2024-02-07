import state from "./state.js";
import * as el from "./elementsFT.js"

export function contagemRegressiva(){
   if(!state.isRunning){
    return
   }

   setTimeout(() => contagemRegressiva(),1000)
}

export function updatedisplay(minutes, seconds){
minutes = minutes ?? state.minutes
seconds = seconds ?? state.seconds

el.minutes.textContent = String(minutes).padStart(2, '0')
el.seconds.textContent = String(seconds).padStart(2, '0')
}