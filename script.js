"use strict";

const answer = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent = "🙅 Invalid Input";
  } else if (guess === answer) {
    document.querySelector(".message").textContent = "🎊 Correct Guess";
    document.querySelector(".number").textContent = guess;
    document.querySelector("body").style.backgroundColor = "#4cf35d";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > answer) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬆️ Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "👎 Oops! You Lost";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < answer) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬇️ Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "👎 Oops! You Lost";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = null;
  document.querySelector(".number").textContent = "?";

  score = 5;
  answer = Math.trunc(Math.random() * 20) + 1;
});
