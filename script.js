// game board module
const gameBoardModule = (() => {
    const gameBoard = document.getElementById("game-board");
    const boardCells = document.querySelectorAll(".board-cell");

    return {
        gameBoard,
        boardCells
    };
})();

// game logic module
const gameLogic = (() => {
    const playerInput = function() {
        console.log('text')
    };

    return {
        playerInput
    };
})();
// players factory function
const Player = (playerOne, playerTwo) => {
    
}

// event listener
gameBoardModule.boardCells.forEach(cell => {
    cell.addEventListener('click', gameLogic.playerInput, {once: true})
})
