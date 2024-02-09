import * as el from "./elementsTema.js";
import state from "../FocusTimer/state.js";
import * as sounds from "../FocusTimer/sounds.js";
// controle de visibilidade dos btns dos temas
function VisibilytiControlsTema() {
  el.painelControlTemas.classList.toggle("hide");
  el.downButtons.classList.toggle("hide");
}
el.downButtons.addEventListener("click", VisibilytiControlsTema);
el.upButtons.addEventListener("click", VisibilytiControlsTema);

function removeClass() {
  el.HTML.classList.remove("mario");
  el.HTML.classList.remove("predios");
  el.HTML.classList.remove("peixes");
  el.HTML.classList.remove("chuva");
  sounds.removeMusic();
}

//mudança de temas
function TemaMario() {
  el.background.src = "backgrounds/chill-mario-pixel-moewalls-com.mp4";
  removeClass();
  el.HTML.classList.add("mario");
  state.tema = "mario";
  state.musicOn = false;
}
el.btnMario.addEventListener("click", TemaMario);

function TemaPeixes() {
  el.background.src = "backgrounds/koi-fish-pond-pixel-moewalls-com.mp4";
  removeClass();
  el.HTML.classList.add("peixes");
  state.tema = "peixes";
}
el.btnPeixes.addEventListener("click", TemaPeixes);

function TemaPredios() {
  el.background.src = "backgrounds/bg-day.mp4";
  removeClass();
  el.HTML.classList.add("predios");
  state.tema = "predios";
}
el.btnPredios.addEventListener("click", TemaPredios);

function TemaChuva() {
  el.background.src =
    "backgrounds/rainy-waterfall-pixel-desktop-wallpaperwaifu-com.mp4";
  removeClass();
  el.HTML.classList.add("chuva");
  state.tema = "chuva";
}
el.btnChuva.addEventListener("click", TemaChuva);

