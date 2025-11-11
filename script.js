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

    humanChoice = humanChoice.toLowerCase();

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

const buttonList = document.querySelectorAll(".game-button")
for (const button of buttonList) {
    button.addEventListener("click", event => {

        let humanChoice = event.target.textContent;
        playRound(humanChoice, getComputerChoice());
    })
}

let humanScore = 0;
let computerScore = 0;
