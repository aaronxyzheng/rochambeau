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

function getHumanChoice() {
    let userInput = prompt("Type Rock, Paper, or Scissors");

    return userInput.toLowerCase();
}


function playRound(humanChoice, computerChoice) {

    if(humanChoice === computerChoice) {
        console.log("Tie! You guys both chose: " + humanChoice);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log("You won! You chose: " + humanChoice + ", Computer Chose: " + computerChoice);
        humanScore += 1;
    } else {
        console.log("You lost! You chose: " + humanChoice + ", Computer Chose: " + computerChoice);
        computerScore += 1;
    }
}

function playGame() {

    for(let i = 1; i<=5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log("Your Score: " + humanScore + " , Computer Score: " + computerScore);
}

let humanScore = 0;
let computerScore = 0;

playGame()