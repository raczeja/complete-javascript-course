'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'not a number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'you wim';
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    ocument.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? (document.querySelector('.message').textContent = 'too big')
        : (document.querySelector('.message').textContent = 'too small');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').textContent = '';
  document.querySelector('.score').value = score;
  document.querySelector('.number').textContent = '?';
});
