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

