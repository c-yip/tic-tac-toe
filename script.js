// game board module
const gameBoardModule = (() => {
    const gameBoard = document.getElementById("game-board");
    const boardCells = document.querySelectorAll(".board-cell");

    return {
        gameBoard,
        boardCells
    }
})();

// game logic module

// players factory function
const Player = (playerOne, playerTwo) => {
    
}