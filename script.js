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