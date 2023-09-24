

let computerPick = "";
let playerPick = "";
let message = "";
let playerWonMessage = "";
let computerWonMessage = "";
let drawMessage = "";
let playerScore = 0;
let computerScore = 0;
let round = 1;

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



function roundResult(){
    
    playerWonMessage =  "You Won! " + playerPick + " beats " + computerPick + ".";
    computerWonMessage = "Computer Won! " + computerPick + " beats " + playerPick + ".";
    drawMessage = "It is a draw! You picked " + playerPick + " and Computer picked " + computerPick + ".";

    
    if (playerPick == computerPick){
        message = drawMessage;
        round++;
        resultDiv.textContent = message;
        
    } else if (playerPick === "ROCK" && computerPick === "PAPER"){
        message = computerWonMessage;
        computerScore++;
        scoreDiv.textContent = "Player: " + playerScore + " | Computer: " + computerScore + "\n";
        round++;
        resultDiv.textContent = message;

    } else if (playerPick === "ROCK" && computerPick === "SCISSORS"){
        message = playerWonMessage;
        playerScore++;
        scoreDiv.textContent = "Player: " + playerScore + " | Computer: " + computerScore + "\n";
        round++;
        resultDiv.textContent = message;

    } else if (playerPick === "PAPER" && computerPick === "ROCK"){
        message = playerWonMessage;
        playerScore++;
        scoreDiv.textContent = "Player: " + playerScore + " Computer: " + computerScore + "\n";
        round++;    
        resultDiv.textContent = message;
       
    } else if (playerPick ===  "PAPER" && computerPick === "SCISSORS"){
        message = computerWonMessage;
        computerScore++;
        scoreDiv.textContent = "Player: " + playerScore + " Computer: " + computerScore + "\n";
        round++;
        resultDiv.textContent = message;

    } else if (playerPick === "SCISSORS" && computerPick === "PAPER"){
        message = playerWonMessage;
        playerScore++;
        scoreDiv.textContent = "Player: " + playerScore + " Computer: " + computerScore + "\n";
        round++;
        resultDiv.textContent = message;

    } else if (playerPick === "SCISSORS" && computerPick === "ROCK"){
        message = computerWonMessage;
        computerScore++;
        scoreDiv.textContent = "Player: " + playerScore + " Computer: " + computerScore + "\n";
        round++;
        resultDiv.textContent = message;
    }
     else {
        message = "Something Went Wrong";
        
    }

    
};
    
const gameEnd = ()=> {
    if (playerScore === 5 || computerScore === 5 ){
       
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled =true;

        if(playerScore === 5){
            resultDiv.appendChild(finalResultDiv);
            finalResultDiv.textContent = "You've won the game."
        } else if (computerScore === 5){
            resultDiv.appendChild(finalResultDiv);
            finalResultDiv.textContent = "Sorry! you've lost the game."
        }

    } else{
        console.log("still playing");
    }
};

const rockBtn = document.querySelector('#rockButton');
const paperBtn = document.querySelector('#paperButton');
const scissorsBtn = document.querySelector('#scissorsButton');
const scoreDiv = document.querySelector('#score');
const resultDiv = document.querySelector('#result');
const finalResultDiv = document.createElement('div');

rockBtn.addEventListener('click', ()=> {
    console.log ("rock button was clicked");
    playerPick = "ROCK";
    console.log(playerPick);
    getComputerChoice();
    console.log(computerPick);
    roundResult();
    console.log(message);
    console.log(playerScore);
    console.log(computerScore);
    gameEnd();
});

paperBtn.addEventListener('click', ()=> {
   console.log ("paper button was clicked");
   playerPick = "PAPER";
   console.log(playerPick);
   getComputerChoice();
   console.log(computerPick);
   roundResult();
   console.log(message);
   console.log(playerScore);
   console.log(computerScore);
   gameEnd();
});

scissorsBtn.addEventListener('click', ()=> {
    console.log("scissors Butto was clicked");
    playerPick = "SCISSORS";
    console.log(playerPick);
    getComputerChoice();
    console.log(computerPick);
    roundResult();
    console.log(message);
    console.log(playerScore);
    console.log(computerScore);
    gameEnd();
});