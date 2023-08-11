import "../css/style.css";
import { HEXALPHABET } from "./consts";

const body = document.querySelector("body");
const spanColor = document.querySelector(".color");
const button = document.querySelector("button");

let newColor = "";

function randomWord() {
  return Math.floor(Math.random() * HEXALPHABET.length);
}

function createNewColor() {
  let createColor = "";
  for (let i = 0; i < 6; i++) {
    createColor += HEXALPHABET[randomWord()];
  }
  return createColor;
}

button.addEventListener("click", () => {
  newColor = createNewColor();
  spanColor.innerText = `#${newColor}`;
  body.style.background = `#${newColor}`;
  button.style.background = `#${newColor}`;
});
