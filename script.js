let playerScore = 0
let computerScore = 0

const playerCurrentScore = document.querySelector('#player-score');
const computerCurrentScore = document.querySelector('#computer-score');
const playerChoiceIcon = document.querySelector('#player-choice');
const computerChoiceIcon = document.querySelector('#computer-choice');
const roundResult = document.querySelector('#round-result');

    
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
        // if playerSelection wins add score to playerScore and show result
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
    

 const loseSound =document.getElementById("lose");   
 const winSound = document.getElementById("win");  

 
    function resultPopup(){
        if(playerScore == 5){
            roundResult.textContent = "YOU ARE THE WINNER!"
            if (!winSound) return;
            winSound.currentTime = 0;
            winSound.play(); 
           
        }
        else if (computerScore == 5){
            roundResult.textContent = "TOO BAD THE COMPUTER WINS"
            if (!loseSound) return;
            loseSound.currentTime = 0;
            loseSound.play(); 
        }
    }
    
        
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

const startBtn = document.getElementById("start");

//create start button that activates game + sound
const startSound = document.getElementById("play");











   // loop over the game 5 times 
       /*
        function game() {
            for( i = 0; i < 5; i++ ) { 
                playRound();
            }
            */

            /*
           
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

    