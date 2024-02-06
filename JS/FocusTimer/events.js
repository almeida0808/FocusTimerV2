import { controls } from "./elementsFT.js"

export function registerControls(){
controls.addEventListener('click' , (event) => {
    console.log(event.target.dataset.action)
})
}