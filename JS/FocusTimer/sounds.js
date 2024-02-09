import state from "./state.js"
import * as el from "./elementsFT.js"
export const buttonPressAudio = new Audio('./sounds/sound-5.mp3')
export let kichenTimer = new Audio('../sounds/kichen-timer.mp3')
export let bgAudio = new Audio('./')
bgAudio.loop = true
export function temaSound(){
    if(state.tema === "mario"){
        bgAudio = new Audio('./sounds/lofi-mario.mp3')
        bgAudio.play()
    }
    if(state.tema === "predios"){
        bgAudio = new Audio('./sounds/lofi-predios.mp3')
        bgAudio.play()
    }
    if(state.tema === "peixes"){
        bgAudio = new Audio('./sounds/lofi-peixes.mp3')
        bgAudio.play()
    }
    if(state.tema === "chuva"){
        bgAudio = new Audio('./sounds/lofi-chuva.mp3')
        bgAudio.play()
    }
}

export function alarmeTema(){
    if(state.tema === "mario" ){
        kichenTimer = new Audio('../sounds/alarme-mario.mp3')
        kichenTimer.play()
      }else{
        kichenTimer.play()
}}
export function removeMusic(){
    el.HTML.classList.remove('musicOn')
    state.musicOn = false
    bgAudio.pause()
}