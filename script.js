import getWord from "./utils/words";

const contentBtns = document.querySelector(".btns");
const contentGuessWord = document.querySelector(".guess-word");
const img = document.querySelector("img");
const contentClue = document.querySelector(".clue");
const newGameBtn = document.querySelector(".new-game");
let imgIndex;

init();

function init() {
  imgIndex = 1;
  img.src = `img1.png`;

  generateButtons();
}

function generateButtons() {
  contentBtns.textContent = "";
}
