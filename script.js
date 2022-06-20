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
        return 0;
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors' ||
        playerSelection == 'Paper' && computerSelection == 'Rock' ||
        playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return 1;
    } else {
        return -1
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    let nodePlayerScore = document.querySelector('#playerScore');
    let nodeComputerScore = document.querySelector('#computerScore');
    let nodeWinner = document.querySelector('#winner');

    // for (let i = 0; i < 5; i++) {
    //     console.log(`Round ${i + 1}:`)

    //     playerSelection = prompt('Choose a move ("rock", "paper", "scissors"): ')
    //     computerSelection = computerPlay()
    //     result = playRound(playerSelection, computerSelection)
    //     console.log(result)

    //     if (result.search('win') >= 0) {
    //         score++
    //     } else if (result.search('lose') >= 0) {
    //         score--
    //     }
    // }

    function handleClick(clickEvent) {
        clickEvent.stopImmediatePropagation();

        let move;
        for (const node of clickEvent.path) {
            if (node.nodeName == 'BUTTON') {
                move = node.id;
                break;
            }
        }
        result = playRound(move, computerPlay());

        if (playerScore < 5 && computerScore < 5) {
            if (result === 1) {
                playerScore += 1;
                nodeWinner.textContent = 'Player wins this round.';
            } else if (result === -1) {
                computerScore += 1;
                nodeWinner.textContent = 'Computer wins this round.';
            } else {
                nodeWinner.textContent = 'Tied round.';
            }
            
            nodePlayerScore.textContent = playerScore;
            nodeComputerScore.textContent = computerScore;
        }
        if (playerScore >= 5 || computerScore >= 5) {
            const winner = (playerScore > computerScore) ? 'Player' : 'Computer';
            nodeWinner.textContent = `${winner} wins!`;
        }
    }

    const moves = document.querySelectorAll('#rock, #paper, #scissors, .icon');
    moves.forEach((move) => move.addEventListener('click', handleClick));
}

game()