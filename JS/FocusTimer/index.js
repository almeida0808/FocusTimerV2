import state from "./state.js"
import * as events from "./events.js"

export function start(seconds,minutes){
    state.minutes == minutes
    state.seconds == seconds
}

events.registerControls()