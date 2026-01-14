function getComputerChoice(){
    let chance = Math.random();
    let choice;
    if (chance < 0.3333333333){
        choice = "rock";
    } else if ( chance > 0.3333333333 && chance < 0.6666666666){
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

function getHumanChoice(){
    choice = prompt("Rock, paper, or scissors?")
    return choice.toLowerCase();
}

let playerScore = 0;
let computerScore = 0;

function playRound(human, computer){
    switch(human){
        case "rock":
            switch(computer){
                case "rock":
                    console.log("draw")

                break;
                case "paper":
                    console.log("You lose, paper beats rock")
                    ++computerScore;
                break;
                case "scissors":
                    console.log("You win, rock beats scissors")
                    ++playerScore;
                break;
            }
                
        break;
        case "paper":
             switch(computer){
                case "rock":
                    console.log("You win, paper beats rock")
                    ++playerScore;
                break;
                case "paper":
                    console.log("draw")
                break;
                case "scissors":
                    console.log("You lose, scissors beats paper")
                    ++computerScore;
                break;
            }

        break;
        case "scissors":
             switch(computer){
                case "rock":
                    console.log("You lose, rock beats scissors")
                    ++computerScore;
                break;
                case "paper":
                    console.log("You win, scissors beats paper")
                    ++playerScore;
                break;
                case "scissors":
                    console.log("draw")
                break;
            }

        break;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)