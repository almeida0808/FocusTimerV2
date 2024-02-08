import state from "./state.js"
import * as events from "./events.js"
import * as timer from "./timer.js"

export function start(seconds,minutes){
    state.minutes == minutes
    state.seconds == seconds

timer.updatedisplay()
}

events.registerControls()
events.setMinutes()