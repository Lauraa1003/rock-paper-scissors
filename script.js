    // create a function that returns random elements
    function computerPlay() {
        const choices = ["rock ", "paper ", "scissors "];
        let random = choices[Math.floor(Math.random() * choices.length)];
        return random;
        }
    
        // create a function that plays a single round of Rock Paper Scissors
        function playRound() {
            let computerSelection = computerPlay()
            let playerSelection = prompt('What is your choice?').toLowerCase();
            let result = ""
            if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
                (playerSelection == 'paper' && computerSelection == 'rock') ||
                (playerSelection == 'scissors' && computerSelection == 'paper')) {
    
                    result = ( 'You win! ' + playerSelection + ' beats ' + computerSelection)
                }
    
            else if ( playerSelection === computerSelection) {
                
                result = (" it's a tie! You both chose " + computerSelection)
            }
    
            else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
                 (computerSelection == 'paper' && playerSelection == 'rock') ||
                 (computerSelection == 'scissors' && playerSelection == 'paper'))
             {
    
                result = (' You lose! ' + computerSelection + ' beats ' + playerSelection)
            }
    
            return result;
        
    
        }
    
        playRound();
    
        function game() {
            
        }
    
     
    