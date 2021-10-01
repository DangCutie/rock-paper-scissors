//sets array for computerChoices
let gameChoices = ["rock", "paper", "scissors"]

//score tracker
let playerScore = 0;
let computerScore = 0;

//game logic to declare wins, losses, ties
function firstRound() {
    let playerChoice = prompt("Rock, paper, or scissors? ")
    let computerChoice = gameChoices[Math.floor(Math.random()*gameChoices.length)];
    let result;
    console.log(`You picked: ${playerChoice[0].toUpperCase()}${playerChoice.substring(1).toLowerCase()}`);
    console.log(`Computer picked: ${computerChoice}`);

    if (playerChoice.toLowerCase() !== "scissors" && playerChoice.toLowerCase() !== "rock"
            && playerChoice.toLowerCase() !== "paper"){
    prompt("Please select only rock, paper, or scissors.")    
    }

    if (playerChoice.toLowerCase() === "rock") {
        if (computerChoice.toLowerCase() === "scissors") {
            playerChoice ++;
            result = "You win! Rock beats scissors.";
            console.log(result);
        } else if (computerChoice.toLowerCase() === "paper") {
            computerScore ++;
            result = "You lose! Paper beats rock.";
            console.log(result);
        } else if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
            result = "It's a draw!";
            console.log(result);
        }
    }

    if (playerChoice.toLowerCase() === "scissors") {
        if (computerChoice.toLowerCase() === "paper") {
            playerChoice ++;
            result = "You win! Scissors beats paper.";
            console.log(result);
        } else if (computerChoice.toLowerCase() === "rock") {
            computerScore ++;
            result = "You lose! Rock beats scissors.";
            console.log(result);
        } else if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
            result = "It's a draw!";
            console.log(result);
        }
    }

    if (playerChoice.toLowerCase() === "paper") {
        if (computerChoice.toLowerCase() === "rock") {
            playerChoice ++;
            result = "You win! Paper beats rock.";
            console.log(result);
        } else if (computerChoice.toLowerCase() === "scissors") {
            computerScore ++;
            result = "You lose! Scissors beats paper.";
            console.log(result);
        } else if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
            result = "It's a draw!";
            console.log(result);
        }
    } return result;
}

 //runs five rounds of game
function fiveRounds() {
    for (let i = 1; i<= 5; i++) {
        firstRound();
        console.log((`Player score: ${playerScore} Computer score: ${computerScore}`));
    } return (playerScore > computerScore) ? "You win! Refresh the page to play again!" : 
            (playerScore < computerScore) ? "You lose! Refresh the page to play again!" :
            "Tie game! Refresh the page to play again!"
}

//runs the game
console.log(fiveRounds());