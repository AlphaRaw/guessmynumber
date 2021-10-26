'use strict';
// DOM selectors
let numberText = document.querySelector('.number');
let scoreText = document.querySelector('.score');
// State variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector
        ('.guess').value);
    console.log(guess);
    // When there is no input    
    if (!guess) {
        displayMessage() =
            '⛔ No number!';

        // When player wins
    } else if (guess === secretNumber) {
        // Logs highscore if the score is higher than current highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
        numberText.textContent = secretNumber

        displayMessage("Correct Number! 🎉");

        document.querySelector('body').style.backgroundColor = '#60b347';

        numberText.style.width = '30rem';
        // When guess is too high 
    } else if (guess != secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
            score--;
            scoreText.textContent = score;
        }
    } else {
        displayMessage('You lost the game! 💥');
        scoreText.textContent = 0;

    }
});
// Resets the DOM to intial values
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20 + 1)
    scoreText.textContent = score = 20;
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    numberText.textContent = '?';
    numberText.style.width = '15rem';

})

