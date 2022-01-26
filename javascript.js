function computerPlay(){
    var myArray = ["rock","paper","scissors"];

    var computerSelection = myArray[Math.floor(Math.random()*myArray.length)];

    console.log("The computer has selected " + computerSelection);

    return computerSelection;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    console.log("Your selection is " + playerSelection);
  
    if(computerSelection === "rock" && playerSelection ==="rock"){
        console.log("Its a tie");
    }
    else if (computerSelection === "rock" && playerSelection === "paper"){
        console.log ("You win! " + playerSelection + " beats " + computerSelection);
        playerScore++;
    }
    else if (computerSelection === "rock" && playerSelection === "scissors"){
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
        computerScore++;
    }
    ///////////////////////////////////////////////////////////////////////////////////
    else if(computerSelection === "scissors" && playerSelection ==="scissors"){
        console.log("Its a tie");
    }
    else if (computerSelection === "scissors" && playerSelection === "paper"){
        console.log ("You lose! " + computerSelection + " beats " + playerSelection);
        computerScore++;
    }
    else if (computerSelection === "scissors" && playerSelection === "rock"){
        console.log("You win! " + playerSelection + " beats " + computerSelection);
        playerScore++;
    }
    ///////////////////////////////////////////////////////////////////////////////////
    else if(computerSelection === "paper" && playerSelection ==="paper"){
        console.log("Its a tie");
    }
    else if (computerSelection === "paper" && playerSelection === "rock"){
        console.log ("You lose! " + computerSelection + " beats " + playerSelection);
        computerScore++;
    }
    else if (computerSelection === "paper" && playerSelection === "scissors"){
        console.log("You win! " + playerSelection + " beats " + computerSelection);
        playerScore++;
    }
}


function game(){

    for (let i=0; i < 5; i++){
    playerSelectionPrompt = window.prompt("Please select either: rock, paper or scissors");
    playerSelection = playerSelectionPrompt.toLowerCase();
    
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    } 
    if (playerScore === computerScore){
        console.log("The game is a tie");
    }   
    else if(playerScore > computerScore){
        console.log("You win the game!");
    }
    else {
        console.log("You lose the game");
    }
}

game();