let playerScore = 0;
let computerScore = 0;



rock.addEventListener('click', () => {
    playRound("rock");
});
paper.addEventListener('click', () => {
    playRound("paper");
});
scissors.addEventListener('click', () => {
    playRound("scissors");
});


function showScore(){
    const showScore = document.getElementById("score")
    showScore.innerText = "You have " + playerScore + " points! \nThe computer has " + computerScore + " points!"
};


function computerPlay(){
    var myArray = ["rock","paper","scissors"];

    var computerSelection = myArray[Math.floor(Math.random()*myArray.length)];

    console.log("The computer has selected " + computerSelection);

    return computerSelection;
}


function playRound(playerSelection) {

    var showResult = document.getElementById("result");

    var showGameResult = document.getElementById("gameResult");

    var computerSelected = computerPlay();

    console.log("Your selection is " + playerSelection);
    
    if(computerSelected === "rock" && playerSelection ==="rock"){
        showResult.innerText = "Its a tie";
        showScore();
    }
    else if (computerSelected === "rock" && playerSelection === "paper"){
        showResult.innerText = "You win! " + playerSelection + " beats " + computerSelected;
        playerScore++;
        showScore();
    }
    else if (computerSelected === "rock" && playerSelection === "scissors"){
        showResult.innerText = "You lose! " + computerSelected + " beats " + playerSelection;
        computerScore++;
        showScore();
    }
    ///////////////////////////////////////////////////////////////////////////////////
    else if(computerSelected === "scissors" && playerSelection ==="scissors"){
        showResult.innerText = ("Its a tie");
        showScore();
    }
    else if (computerSelected === "scissors" && playerSelection === "paper"){
        showResult.innerText = ("You lose! " + computerSelected + " beats " + playerSelection);
        computerScore++;
        showScore();
    }
    else if (computerSelected === "scissors" && playerSelection === "rock"){
        showResult.innerText = ("You win! " + playerSelection + " beats " + computerSelected);
        playerScore++;
        showScore();
    }
    ///////////////////////////////////////////////////////////////////////////////////
    else if(computerSelected === "paper" && playerSelection ==="paper"){
        showResult.innerText = ("Its a tie");
        showScore();
    }
    else if (computerSelected === "paper" && playerSelection === "rock"){
        showResult.innerText = ("You lose! " + computerSelected + " beats " + playerSelection);
        computerScore++;
        showScore();
    }
    else if (computerSelected === "paper" && playerSelection === "scissors"){
        showResult.innerText =("You win! " + playerSelection + " beats " + computerSelected);
        playerScore++;
        showScore();
    }

    if (playerScore === 5){
        showGameResult.innerHTML = "YOU WIN !"
    }
    else if (computerScore === 5){
        showGameResult.innerHTML = "YOU LOSE !"
    }
    else {
        showGameResult.innerHTML = ("")
    }
    

}






