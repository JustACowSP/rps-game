function computerPlay() {
    moves = ['Rock', 'Paper', 'Scissors']
    return moves[Math.floor(Math.random() * moves.length)]
}

function capitalize(str) {
    return str[0].toUpperCase() + str.substr(1).toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection)

    if (playerSelection == computerSelection) {
        return `Tie! You both played ${playerSelection}.`
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors' ||
        playerSelection == 'Paper' && computerSelection == 'Rock' ||
        playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return `You win! ${playerSelection} beats ${computerSelection}.`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
}

function game() {
    let score = 0
    console.log('Time to play Rock, Paper, Scissors!')

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`)

        playerSelection = prompt('Choose a move ("rock", "paper", "scissors"): ')
        computerSelection = computerPlay()
        result = playRound(playerSelection, computerSelection)
        console.log(result)

        if (result.search('win') >= 0) {
            score++
        } else if (result.search('lose') >= 0) {
            score--
        }
    }

    if (score > 0) {
        console.log('You won overall!')
    } else if (score < 0) {
        console.log('The computer won overall!')
    } else {
        console.log('You tied with the computer!')
    }
}

game()