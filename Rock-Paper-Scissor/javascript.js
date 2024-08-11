let conclusion = "";

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if(rand === 0){
        return "Rock";
    }else if(rand === 1){
        return "Paper";
    }else{
        return "Scissors";
    }
}

function getHumanChoice(answer){
    return prompt("Rock, Paper, or Scissors: ");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    if(humanSelection.toUpperCase() === "ROCK"){
        if(computerSelection === "Rock"){
            console.log("Both players threw Rock! It's a draw!");
            return 0;
        }else if(computerSelection === "Paper"){
            console.log("You lose! Paper beats Rock!");
            return -1;
        }else if(computerSelection === "Scissors"){
            console.log("You win! Rock beats Scissors!");
            return 1;
        }
    }else if(humanSelection.toUpperCase() === "SCISSORS"){
        if(computerSelection === "Rock"){
            console.log("You lose! Rock beats Scissors!");
            return -1;
        }else if(computerSelection === "Paper"){
            console.log("You win! Scissors beats Paper!");
            return 1;
        }else if(computerSelection === "Scissors"){
            console.log("Both players threw Scissors! It's a draw!");
            return 0;
        }
    }else if(humanSelection.toUpperCase() === "PAPER"){
        if(computerSelection === "Rock"){
            console.log("You win! Paper beats Rock!");
            return 1;
        }else if(computerSelection === "Paper"){
            console.log("Both players threw Paper! It's a draw!");
            return 0;
        }else if(computerSelection === "Scissors"){
            console.log("You lose! Scissors beats Paper!");
            return -1;
        }
    }else{
        console.log("Invalid input. This round is considered a draw");
        return 0;
    }
}

for(let i = 0; i < 5; i++){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log("Round " + (i+1) + "! " + "You: " + humanChoice + " Computer: " + computerChoice);

    if(playRound(humanChoice,computerChoice) === 1){
        humanScore += 1;
    }else if(playRound(humanChoice,computerChoice) === -1){
        computerScore += 1;
    }

    console.log("Your Score: " + humanScore + " Computer Score: " + computerScore);
}

if(computerScore > humanScore){
    conclusion = "YOU LOSE!";
}else if(computerScore < humanScore){
    conclusion = "YOU WIN!";
}else{
    conclusion = "DRAW!";
}

document.getElementById("conclusion").innerHTML = conclusion;