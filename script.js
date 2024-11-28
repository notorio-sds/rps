


// RPS Game

let humanScore = 0
let computerScore = 0
let rounds = 0

function getComputerChoice() {
    let computerChoice = "";
    let number = Math.floor(Math.random() * 3)

    if (number == 0) {
        computerChoice = 'Rock';
    } else if (number == 1) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
    return computerChoice
}

function getPlayerChoice() {
    return prompt("Choose between Rock, Paper, or Scissors")
}



function playGame() {

    function playRound(playerChoice, computerChoice) {

        playerChoice = playerChoice.toLowerCase()
        computerChoice = computerChoice.toLowerCase()

        if (playerChoice == 'paper') {
            if (computerChoice == 'rock') {
                console.log(`You win! You picked ${playerChoice} and computer picked ${computerChoice}!`)
                humanScore += 1
            } else if (computerChoice == 'scissors') {
                console.log(`You lose! You picked ${playerChoice} and computer picked ${computerChoice}!`)
                computerScore += 1
            } else {
                console.log(`You both picked ${playerChoice}! It is a tie!`)
            }
        }

        else if (playerChoice == 'rock') {
            if (computerChoice == 'paper') {
                console.log(`You lose! You picked ${playerChoice} and computer picked ${computerChoice}!`)
                computerScore += 1
            } else if (computerChoice == 'scissors') {
                console.log(`You win! You picked ${playerChoice} and computer picked ${computerChoice}!`)
                humanScore += 1
            } else {
                console.log(`You both picked ${playerChoice}! It is a tie!`)
            }
        }

        else if (playerChoice == 'scissors') {
            if (computerChoice == 'rock') {
                console.log(`You lose! You picked ${playerChoice} and computer picked ${computerChoice}!`)
                computerScore += 1
            } else if (computerChoice == 'paper') {
                console.log(`You win! You picked ${playerChoice} and computer picked ${computerChoice}!`)
                playerScore += 1
            } else {
                console.log(`You both picked ${playerChoice}! It is a tie!`)
            }
        }

        rounds += 1
    }


    playRound(getPlayerChoice(), getComputerChoice())
    playRound(getPlayerChoice(), getComputerChoice())
    playRound(getPlayerChoice(), getComputerChoice())
    playRound(getPlayerChoice(), getComputerChoice())
    playRound(getPlayerChoice(), getComputerChoice())

    console.log(rounds)


}


playGame()