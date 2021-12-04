let playerScore = 0
let computerScore = 0
    
    // computer chooses random element from array
    function computerPlay() {
        const choices = ["rock", "paper", "scissors"];
        let random = choices[Math.floor(Math.random() * choices.length)];
        return random;
        }
    
        // create a function that plays a single round of Rock Paper Scissors
        function playRound() {
            let computerSelection = computerPlay()
            let playerSelection = prompt('What is your choice?').toLowerCase();
            let result = ""
        // if playerSelection wins add score to playerScore and show result
            if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
                (playerSelection == 'paper' && computerSelection == 'rock') ||
                (playerSelection == 'scissors' && computerSelection == 'paper')) {

                    playerScore++
    
                    result = ( 'You win! ' + playerSelection + ' beats ' + computerSelection + ' Your score is ' + playerScore + ' computer score is ' + computerScore)
                    
                   
                }
        // if same choice show tie result
            else if (playerSelection === computerSelection) {
                
                result = (" it's a tie! You both chose " + computerSelection)
            }
        
        // if computerSelection wins add score to ComputerScore
            else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
                 (computerSelection == 'paper' && playerSelection == 'rock') ||
                 (computerSelection == 'scissors' && playerSelection == 'paper'))
             {
                computerScore++
                result = (' You lose! ' + computerSelection + ' beats ' + playerSelection + ' Your score is ' + playerScore + ' computer score is ' + computerScore)

               
            }
             console.log(result);
        
        }
        
       // loop over the game 5 times 
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
    