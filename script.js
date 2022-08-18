// game board module
const gameBoardModule = (() => {
    const gameBoard = document.getElementById("game-board");
    const boardCells = document.querySelectorAll(".board-cell");
    const cellOne = document.querySelector("[data-id='one']")
    const cellTwo = document.querySelector("[data-id='two']")
    const cellThree = document.querySelector("[data-id='three']")
    const cellFour = document.querySelector("[data-id='four']")
    const cellFive = document.querySelector("[data-id='five']")
    const cellSix = document.querySelector("[data-id='six']")
    const cellSeven = document.querySelector("[data-id='seven']")
    const cellEight = document.querySelector("[data-id='eight']")
    const cellNine = document.querySelector("[data-id='nine']")
    return {
        gameBoard,
        boardCells,
        cellOne,
        cellTwo,
        cellThree,
        cellFour,
        cellFive,
        cellSix,
        cellSeven,
        cellEight,
        cellNine
    };
})();

// players factory function
const player = (className, input) => {
    return {className, input, name};
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
        changeTurn();
    };

    // adds class and input to div
    const playerSelection = function(cell, currentClass) {
        cell.classList.add(currentClass.className);
        cell.textContent = currentClass.input;
    }

    const changeTurn = function() {
        playerTwoTurn = !playerTwoTurn;
    }

    // const checkResult = function (className) {
    //     gameBoardModule.boardCells.forEach(cell => {
    //         if (
    //             cell.
    //             ) {
                    
    //             }
    //     })

        
    // }

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
