function getComputerChoice() {
    let number = Math.random();

    if (number < 0.33) {
        return "rock";
    } else if (number < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let answer = prompt("Enter rock, paper or scissors to play");
    return answer.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win! Rock beats Scissors, You Get 1 point!");
        return 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win! Scissors beats Paper, You Get 1 point!");
        return 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats Rock, You Get 1 point!");
        return 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You Lose! Rock beats Scissors, Computer Gets 1 point!");
        return 0;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You Lose! Scissors beat Paper, Computer Gets 1 point!");
        return 0;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You Lose! Paper beats Rock, Computer Gets 1 point!");
        return 0;
    } else if (humanChoice === computerChoice) {
        console.log("Its a TIE!, both Human and Computer Get 0.5 point each!");
        return -1;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log("Lets Start Round " + i);

        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        let number = playRound(humanChoice, computerChoice);

        if (number === 1) {
            humanScore++;
        } else if (number === 0) {
            computerScore++;
        } else if (number === -1) {
            humanScore += 0.5;
            computerScore += 0.5;
        }
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You have WON the Game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry! You have LOST the Game!");
    } else {
        console.log("The Game is a TIE!");
    }

    console.log("Final Score :\nHuman : " + humanScore + "\nComputer : " + computerScore);
}

playGame();
