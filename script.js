// game board module
const gameBoardModule = (() => {
    const gameBoard = document.getElementById("game-board");
    const boardCells = document.querySelectorAll(".board-cell");

    return {
        gameBoard,
        boardCells
    };
})();

// players factory function
const player = (className, input) => {
    return {className, input};
}

// game logic module
const gameLogic = (() => {
    const playerOne = player("playerOne", "X");
    const playerTwo = player("playerTwo", "O");
    
    let playerTwoTurn = false;

    const playerInput = function(e) {
        const cell = e.target;
        console.log(playerTwoTurn)
        // checks whether player two turn and assigns player to current class
        const currentClass = function() {
            if (playerTwoTurn == false) {
                return playerOne;
            } else return playerTwo;
        }
        
        playerSelection(cell, currentClass());
    };

    // adds class and input to div
    const playerSelection = function(cell, currentClass) {
        cell.classList.add(currentClass.className);
        cell.textContent = currentClass.input;
    }

    return {
        playerInput,
        playerOne,
        playerTwo
    };
})();


// event listener
gameBoardModule.boardCells.forEach(cell => {
    cell.addEventListener('click', gameLogic.playerInput, {once: true})
})
