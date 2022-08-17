const body = document.querySelector('body');
// game board module
const gameBoard = (() => {
    const gameBoardContainer = document.querySelector('.game-board-container');
    const generateGameBoard = () => {
        for (i=0; i<9; i++) {
            boardCell = document.createElement('div');
            boardCell.classList.add('boardCell');
            gameBoardContainer.append(boardCell);
        }
    }
    return {
        generateGameBoard
    }
})();
body.onload = gameBoard.generateGameBoard;


// display controller module

// players