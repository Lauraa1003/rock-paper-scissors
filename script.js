let playerScore = 0
let computerScore = 0

const playerCurrentScore = document.querySelector('#player-score');
const computerCurrentScore = document.querySelector('#computer-score');
const playerChoiceIcon = document.querySelector('#player-choice');
const computerChoiceIcon = document.querySelector('#computer-choice');
const roundResult = document.querySelector('#round-result');



// hide start container
document.getElementById("startbutton").addEventListener("click", hideDiv);
let startContainer = document.getElementById('startcontainer');

function hideDiv() {
    startContainer.style.display = 'none';
}



 // computer chooses random element from array
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
 }
    
// create a function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    let result = ""
         if (playerScore < 5 && computerScore < 5){
          if(playerSelection == 'rock'){
             playerChoiceIcon.className = 'fas fa-hand-rock';
            }
         else if (playerSelection == 'paper') {
             playerChoiceIcon.className = 'fas fa-hand-paper';
            }
         else if (playerSelection == 'scissors') {
             playerChoiceIcon.className = 'fas fa-hand-scissors';
            }
          if (computerSelection == 'rock') {
             computerChoiceIcon.className = 'fas fa-hand-rock';
            }
         else if (computerSelection == 'paper') {
             computerChoiceIcon.className = 'fas fa-hand-paper';
            }
         else if (computerSelection == 'scissors') {
             computerChoiceIcon.className = 'fas fa-hand-scissors';
            }

//if playerSelection wins add score to playerScore and show result
            if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
                (playerSelection == 'paper' && computerSelection == 'rock') ||
                (playerSelection == 'scissors' && computerSelection == 'paper')) {

                 roundResult.textContent = "You won this round!";
                 playerScore++
                 playerCurrentScore.textContent = playerScore;
            }

// if same choice show tie result
            else if (playerSelection === computerSelection) {
                
                roundResult.textContent = "It's a tie!";
            }
        
// if computerSelection wins add score to ComputerScore
            else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
                 (computerSelection == 'paper' && playerSelection== 'rock') ||
                 (computerSelection == 'scissors' && playerSelection == 'paper')){

                roundResult.textContent = "The computer won this round...";
                computerScore++
                computerCurrentScore.textContent = computerScore;
            }

            if(playerScore == 5 || computerScore == 5){
             playerCurrentScore.textContent = playerScore;
             computerCurrentScore.textContent = computerScore;
             resultPopup();
            }

        }
    }

// hide game container and open bottom container

function showGameResults() {
        let gameContainer = document.querySelector('.game1');
        let bottomContainer = document.getElementById('bottomcontainer');
        gameContainer.style.display = 'none';
        bottomContainer.style.display = 'block';
    }


const loseSound =document.getElementById("lose");   
const winSound = document.getElementById("win");  
const div = document.createElement('div');  
const container = document.querySelector('.bottomcontainer');
const content = document.createElement('div');
 


 // show results + winner/loser sound + text content.
function resultPopup(){
        if(playerScore == 5){
            showGameResults()
            content.classList.add('content');
            content.textContent = `Yayyy you win!\n \n \n Your score is:${playerScore}\n \n  and the computer score is:${computerScore}`;
            container.appendChild(content);
            if (!winSound) return;
            winSound.currentTime = 0;
            winSound.play(); 
        }
        else if (computerScore == 5){
            showGameResults()
            content.classList.add('content');
            content.textContent = `Too bad, the computer wins this time!\n \n \n The computer score is:${computerScore}\n \n and your score is:${playerScore}`;
            container.appendChild(content);
            if (!loseSound) return;
            loseSound.currentTime = 0;
            loseSound.play(); 
        }
    }
    
// assign game icons to player/computer choice

const rockBtn = document.querySelector('#rock-button');
const paperBtn = document.querySelector('#paper-button');
const scissorsBtn = document.querySelector('#scissors-button');

        rockBtn.addEventListener("click", () => {
            playRound('rock', computerPlay());
        })
        paperBtn.addEventListener("click", () => {
            playRound('paper', computerPlay());
        })
        scissorsBtn.addEventListener("click", () => {
            playRound('scissors', computerPlay());
        })
        
    
// sound effects
const mySound = document.getElementById("sound");  

        rockBtn.addEventListener("click", function(){
            if (!mySound) return;
            mySound.currentTime = 0;
            mySound.play(); });   

        paperBtn.addEventListener("click", function(){
            if (!mySound) return;
            mySound.currentTime = 0;
            mySound.play(); });        

        scissorsBtn.addEventListener("click", function(){
            if (!mySound) return;
            mySound.currentTime = 0;
            mySound.play(); });         

// restart game           

document.getElementById("restart").addEventListener("click", restartGame);

function restartGame(){
    location.reload();

}





// previous code / console.log

// loop over the game 5 times 
       /*
        function game() {
            for( i = 0; i < 5; i++ ) { 
                playRound();
            }
            

            
           
// count score and show winner/loser/tie
            if (playerScore > computerScore) {
                console.log(' Yay you won the game! ');
            } else if (computerScore > playerScore) {
                console.log(' Too bad the computer won this game ');
            } else if (computerScore === playerScore) {
                console.log(' It\'s a tie! ')
            }
        }
        game();
    */

   