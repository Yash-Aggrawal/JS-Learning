'use strict';

const rollBtn = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');
const currentScoreTextP1 = document.querySelector('#current--0');
const currentScoreTextP2 = document.querySelector('#current--1');
const holdBtn = document.querySelector('.btn--hold');
const totalScoreP1 = document.querySelector('#score--0');
const totalScoreP2 = document.querySelector('#score--1');
const head1 = document.querySelector('#name--0');
const head2 = document.querySelector('#name--1');
const resetBtn = document.querySelector('.btn--new');

let currScore1 = 0;
let currScore2 = 0;
let totalScore1 = 0;
let totalScore2 = 0;
let turn = 1;

rollBtn.addEventListener('click', () => {
  let randomNum = Math.floor(Math.random() * 6) + 1;
  diceImg.src = `dice-${randomNum}.png`;
  if (randomNum === 1) {
    turn = turn === 1 ? 2 : 1;
    head1.classList.remove('player--active');
    head2.classList.remove('player--active');
    turn == 1
      ? head1.classList.add('player--active')
      : head2.classList.add('player--active');
  } else {
    turn === 1 ? (currScore1 += randomNum) : (currScore2 += randomNum);
    currentScoreTextP1.innerHTML = currScore1;
    currentScoreTextP2.innerHTML = currScore2;
  }
});

holdBtn.addEventListener('click', () => {
  turn === 1 ? (totalScore1 += currScore1) : (totalScore2 += currScore2);
  turn === 1 ? (currScore1 = 0) : (currScore2 = 0);
  totalScoreP1.innerHTML = totalScore1;
  totalScoreP2.innerHTML = totalScore2;
  currentScoreTextP1.innerHTML = currScore1;
  currentScoreTextP2.innerHTML = currScore2;
  if (totalScore1 >= 10) {
    head1.innerHTML = 'Player 1 Wins!!';
    rollBtn.disabled = true;
    holdBtn.disabled = true;
  } else if (totalScore2 >= 10) {
    head2.innerHTML = 'Player 2 Wins!!';
    rollBtn.disabled = true;
    holdBtn.disabled = true;
  } else {
    turn = turn === 1 ? 2 : 1;
    head1.classList.remove('player--active');
    head2.classList.remove('player--active');
    turn == 1
      ? head1.classList.add('player--active')
      : head2.classList.add('player--active');
  }
});

resetBtn.addEventListener('click', () => {
  turn = 1;
  rollBtn.disabled = false;
  holdBtn.disabled = false;
  currScore1 = 0;
  currScore2 = 0;
  totalScore1 = 0;
  totalScore2 = 0;
  totalScoreP1.innerHTML = totalScore1;
  totalScoreP2.innerHTML = totalScore2;
  currentScoreTextP1.innerHTML = currScore1;
  currentScoreTextP2.innerHTML = currScore2;
  head2.innerHTML = 'Player 2';
  head1.innerHTML = 'Player 1';
});
