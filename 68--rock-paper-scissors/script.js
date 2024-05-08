// ROCK PAPER SCISSORS



const playerDisplay = document.getElementById('playerDisplay')
const botDisplay = document.getElementById('botDisplay')
const resultDisplay = document.getElementById('resultDisplay')
const playerScoreDisplay = document.getElementById('playerScoreDisplay')
const botScoreDisplay = document.getElementById('botScoreDisplay')

let playerScore = 0;
let botScore = 0;


const choices = ["Rock", "Paper", "Scissors"];

function playGame(playerChoice) {

    const botChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (playerChoice === botChoice) {
        result = 'Reported, drawing to a bot'
    }
    else {
        switch (playerChoice) {
            case 'Rock':
                result = (botChoice === 'Scissors') ? 'You win!' : 'You lose!';
                break;
            case 'Paper':
                result = (botChoice === 'Rock') ? 'You win!' : 'You lose!';
                break;
            case 'Scissors':
                result = (botChoice === 'Paper') ? 'You win!' : 'You lose!';
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`
    botDisplay.textContent = `BOT: ${botChoice}`
    resultDisplay.textContent = result;

    resultDisplay.classList.remove('greenText', 'redText');

    switch (result) {
        case "You win!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            if (playerScore === 5) {
                resultDisplay.textContent = "You win the game!";
                playerScore = 0;
                botScore = 0;
                playerScoreDisplay.textContent = playerScore;
                botScoreDisplay.textContent = botScore;
            }
            break;

        case "You lose!":
            resultDisplay.classList.add("redText");
            botScore++;
            botScoreDisplay.textContent = botScore;
            if (botScore === 5) {
                resultDisplay.textContent = "You lose the game!";
                playerScore = 0;
                botScore = 0;
                playerScoreDisplay.textContent = playerScore;
                botScoreDisplay.textContent = botScore;
            }
            break;
        // if you don't put a break, the code will continue to run and the next case will be executed
    }
}