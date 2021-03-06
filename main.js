
// Helper function to capitlize first letter of a string and lowercase the rest
let capitilizeFirstLetter = function(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

// randomly select rock, paper, or scissors for the computer to play
let getComputerChoice = function(){
    const options = ["Rock", "Paper", "Scissors"]
    return options[Math.floor(Math.random()*options.length)];
}

// given a player selection and computer selection, play a round of rock, paper, scissors
let playRound = function(playerSelection, computerSelection){

    // player picks rock
    if (playerSelection === "Rock" && computerSelection === "Rock"){
        return `It\'s a tie! you both had ${playerSelection}.`
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        return `Sorry you lose! you had ${playerSelection} and the computer had ${computerSelection}`
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        return `You win! ${playerSelection} beats ${computerSelection}`
    }

    // player picks paper
    else if (playerSelection === "Paper" && computerSelection === "Paper"){
        return `It\'s a tie! you both had ${playerSelection}.`
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        return `Sorry you lose! you had ${playerSelection} and the computer had ${computerSelection}`
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return `You win! ${playerSelection} beats ${computerSelection}` 
    }

    // player picks scissor
    else if (playerSelection === "Scissors" && computerSelection === "Scissors"){
        return `It\'s a tie! you both had ${playerSelection}.`
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        return `Sorry you lose! you had ${playerSelection} and the computer had ${computerSelection}`
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        return `You win! ${playerSelection} beats ${computerSelection}` 
    }
}

// Play 5 rounds of rock, paper, scissors
let game = function(){
    for (let i = 0; i < 5; i++){
        const playerSelection = capitilizeFirstLetter(prompt("Please enter rock, paper, scissors"));
        const computerSelection = getComputerChoice();
        
        console.log(playRound(playerSelection, computerSelection))
    }
}

// run game function
game();
