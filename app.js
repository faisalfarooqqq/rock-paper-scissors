

let computerPick = "";
let playerPick = "";
let message = "";
let playerWonMessage = "";
let computerWonMessage = "";
let drawMessage = "";


function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    
    if(random === 0){
        computerPick = "ROCK";

    }
    else if(random === 1){
        computerPick = "PAPER";
    }
    else {
        computerPick = "SCISSORS";
    }
    return computerPick;
}



function getPlayerChoice(){
    
    playerPick = window.prompt("Please enter your Pick");

    playerPick = playerPick.toUpperCase();

    return playerPick;
}



function roundResult(){
    
    playerWonMessage =  "You Won! " + playerPick + " beats " + computerPick + ".";
    computerWonMessage = "Computer Won! " + computerPick + " beats " + playerPick + ".";
    drawMessage = "It is a draw! You picked " + playerPick + " and Computer picked " + computerPick + ".";

    
    if (playerPick == computerPick){
        message = drawMessage;
        
    } else if (playerPick === "ROCK" && computerPick === "PAPER"){
        message = computerWonMessage;
        

    } else if (playerPick === "ROCK" && computerPick === "SCISSORS"){
        message = playerWonMessage;
        
    } else if (playerPick === "PAPER" && computerPick === "ROCK"){
        message = playerWonMessage;
        
       
    } else if (playerPick ===  "PAPER" && computerPick === "SCISSORS"){
        message = computerWonMessage;
        
    } else if (playerPick === "SCISSORS" && computerPick === "PAPER"){
        message = playerWonMessage;
        
        
    } else if (playerPick === "SCISSORS" && computerPick === "ROCK"){
        message = computerWonMessage;
    }
     else {
        message = "Something Went Wrong";
        
    }
    return message;
}
    

function game(){
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++){
        getComputerChoice();
        getPlayerChoice();
        
        let roundWinner = roundResult();
        console.log(roundWinner);

        if (roundWinner === playerWonMessage){
            playerScore++;
            console.log("Player Score: " + playerScore);
        } else if(roundWinner === computerWonMessage){
            computerScore++;
            console.log("Computer Score: " + computerScore);
        }else{
            console.log("the round of a draw.");
        }
    

    }

    if (playerScore > computerScore){
        console.log("Congrats! Yo've Won.");
    } else if (playerScore < computerScore){
        console.log("Unlucky! You've lost.")
    } else{
        console.log("It's a tie.")
    }
}

console.log(game())