function getComputerChoice(){
    let chance = Math.random();
    let choice;
    if (chance < 1/3){
        choice = "rock";
    } else if ( chance > 1/3 && chance < 2/3){
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

function getHumanChoice(){
    let choice = prompt("Rock, paper, or scissors?")
    return choice.toLowerCase();
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    let result;
    
    function playRound(human, computer){
       
        switch(human){
            case "rock":
                switch(computer){
                    case "rock":
                        result = "draw"

                    break;
                    case "paper":
                        result = "You lose, paper beats rock"
                        ++computerScore;
                    break;
                    case "scissors":
                        result = "You win, rock beats scissors"
                        ++playerScore;
                    break;
                }
                    
            break;
            case "paper":
                switch(computer){
                    case "rock":
                        result = "You win, paper beats rock"
                        ++playerScore;
                    break;
                    case "paper":
                        result = "draw"
                    break;
                    case "scissors":
                        result = "You lose, scissors beats paper"
                        ++computerScore;
                    break;
                }

            break;
            case "scissors":
                switch(computer){
                    case "rock":
                        result = "You lose, rock beats scissors"
                        ++computerScore;
                    break;
                    case "paper":
                        result = "You win, scissors beats paper"
                        ++playerScore;
                    break;
                    case "scissors":
                        result = "draw"
                    break;
                }

            break;
            default:
                console.log("invalid choice")
        }
        console.log(result)
    }

    for (let i = 1; i <= 5; ++i){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice)
    }
    if (playerScore > computerScore){
        console.log("YOU WIN!")
    } else if (playerScore === computerScore){
        console.log("DRAW! PLAY AGAIN.")
    } else {
        console.log("YOU LOSE!")
    }
}

playGame()