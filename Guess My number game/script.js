'use strict';

const input = document.getElementsByClassName('guess')[0];
const submitBtn = document.getElementsByClassName('btn check')[0];
const text = document.getElementsByClassName('message')[0];
const ansText = document.getElementsByClassName('number')[0];
const scoreText = document.getElementsByClassName('score')[0];
const againBtn = document.getElementsByClassName('btn again')[0];
const highscoreText = document.getElementsByClassName('highscore')[0];

let ans = Math.floor(Math.random() * 19) + 1;
let score = 20;
let highScore = 0;

submitBtn.addEventListener('click', () => {
  const inputNumber = Number(input.value);
  if (!inputNumber || inputNumber < 0 || inputNumber > 20) {
    text.innerHTML = '👎 Not a valid number';
  } else if (inputNumber < ans) {
    text.innerHTML = '📉 Too low';
  } else if (inputNumber > ans) {
    text.innerHTML = '📈 Too high';
  } else if (inputNumber === ans) {
    text.innerHTML = '🎉 You Won';
    ansText.innerHTML = ans;
    ansText.style.width = '30rem';
    highScore = Math.max(score, highScore);
    highscoreText.innerHTML = highScore;
    document.querySelector('body').style.background = '#60b347';
    return;
  }
  input.value = '';
  score = score > 0 ? score - 1 : 0;
  scoreText.innerHTML = score;
  if (score === 0) {
    text.innerHTML = '❌ You lose, Please replay';
  }
});

againBtn.addEventListener('click', () => {
  text.innerHTML = 'Start guessing...';
  ansText.innerHTML = '?';
  ansText.style.width = '15rem';
  input.value = '';
  score = 20;
  scoreText.innerHTML = score;
  ans = Math.floor(Math.random() * 19) + 1;

  document.querySelector('body').style.background = '#222';
});
