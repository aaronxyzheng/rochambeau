function getComputerChoice() {
    let choiceInt = Math.floor(Math.random() * 3) + 1;

    switch(choiceInt) {
        case 1:
            return "rock";
        
        case 2:
            return "scissors";

        case 3:
            return "paper";
    }
}


function playRound(humanChoice, computerChoice) {
    
    if (gameOver === true) return;

    humanChoice = humanChoice.toLowerCase();
    const resultDiv = document.querySelector("#result-div");
    const scoreDiv = document.querySelector("#score-div");
    const gameResultDiv = document.querySelector("#game-result-div");

    if(humanChoice === computerChoice) {
        resultDiv.textContent = "Tie! You guys both chose: " + humanChoice;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        resultDiv.textContent = "You won! You chose: " + humanChoice + ", Computer Chose: " + computerChoice;
        humanScore += 1;
    } else {
        resultDiv.textContent = "You lost! You chose: " + humanChoice + ", Computer Chose: " + computerChoice;
        computerScore += 1;
    }

    scoreDiv.textContent = "Human Score: " + humanScore + "  Computer Score: " + computerScore;
    if(humanScore >= 5 || computerScore >= 5) {
        humanScore > computerScore ? gameResultDiv.textContent = "Game Over. You Won!" : gameResultDiv.textContent = "Game Over. Computer Won.";
        gameOver = true;
    }
}

const buttonList = document.querySelectorAll(".game-button")
for (const button of buttonList) {
    button.addEventListener("click", event => {

        let humanChoice = event.target.textContent;
        playRound(humanChoice, getComputerChoice());
    })
}


let humanScore = 0;
let gameOver = false;
let computerScore = 0;