function computerPlay() {
    moves = ['Rock', 'Paper', 'Scissors']
    return moves[Math.floor(Math.random() * moves.length)]
}