import getWord from "./utils/words.js";

const contentBtns = document.querySelector(".btns");
const contentGuessWord = document.querySelector(".guess-word");
const img = document.querySelector("img");
const contentClue = document.querySelector(".clue");
const newGameBtn = document.querySelector(".new-game");
let indexImg;

init();

function init() {
  indexImg = 1;
  img.src = `/assets/img1.png`;

  generateButtons();
}

function generateButtons() {
  contentBtns.textContent = "";

  for (let i = 97; i < 123; i++) {
    const btn = document.createElement("button");
    const letter = String.fromCharCode(i).toUpperCase();
    btn.textContent = letter;

    btn.onclick = () => {
      btn.disabled = true;
      btn.style.backgroundColor = "gray";
    };

    contentBtns.appendChild(btn);
  }
}
