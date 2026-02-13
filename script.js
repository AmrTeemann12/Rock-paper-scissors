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
            result = "invalid choice"
    }
    statement = document.createElement("p");
    statement.textContent = result;
    resultBox.appendChild(statement)
}

const resultBox = document.querySelector("#result-box")
const showComputerChoice = document.querySelector("#computer-choice")
const showPlayerChoice = document.querySelector("#player-choice")
const buttons = document.querySelectorAll(".play-button");

buttons.forEach((button) => button.addEventListener("click", (e) => {
    const computerSelection = getComputerChoice();
    playRound(e.target.id, computerSelection)
    showPlayerChoice.style.backgroundImage = `url(images/${e.target.id}.png)`;
    showComputerChoice.style.backgroundImage = `url(images/${computerSelection}.png)`
}));
