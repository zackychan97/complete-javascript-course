'use strict';
// Committing to new branch...

// Define our "secret number". We are defining it in Global Scope.
// The value of number is between 1 and 20.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber; // will show our secret number originally hidden by the '?'

// Score tracker defined in global scope
let score = 20;

// High Score tracker defined in global scope
let highScore = 0;

// Display Message Query Selector, a Function that takes a message as a parameter and sets our message text to that parameter input to function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Function that will use query selector to change textContent of our Current Score displayed with the param we pass in
const displayScore = function (message) {
  document.querySelector('.score').textContent = message;
};

// Function that will use query selector to change textContent of our current state of the Number, which the user is trying to guess
const displayNumber = function (message) {
  document.querySelector('.number').textContent = message;
};

// An event listener (click) that contains our control flow for handling our guesses inside of it.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // Control Flow for handling our guesses below
  if (!guess) {
    displayMessage('⛔️  No Number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Updating High Score if highscore > current high score, only updating WHEN/IF we win
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayScore(score);
  displayMessage('Start guessing...');
  displayNumber('?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
});
