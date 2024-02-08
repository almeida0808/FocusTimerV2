import state from "./state.js";
import * as el from "./elementsFT.js";
import * as actions from "./actions.js"

export function contagemRegressiva() {
  if (!state.isRunning) {
    return;
  }

  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds--

if(seconds < 0){
   seconds = 59
   minutes--
   
}

if(minutes < 0){
   actions.reset()
   return
}


  updatedisplay(minutes, seconds);



  setTimeout(() => contagemRegressiva(), 1000);
}

export function updatedisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}
