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

    // win lose logic
    const checkResult = function () {
        if (
            (
                cellOne.classList.contains("playerOne") && cellTwo.classList.contains("playerOne") && cellThree.classList.contains("playerOne") ||
                cellFour.classList.contains("playerOne") && cellFive.classList.contains("playerOne") && cellSix.classList.contains("playerOne") ||
                cellSeven.classList.contains("playerOne") && cellEight.classList.contains("playerOne") && cellNine.classList.contains("playerOne") ||
                cellOne.classList.contains("playerOne") && cellFour.classList.contains("playerOne") && cellSeven.classList.contains("playerOne") ||
                cellTwo.classList.contains("playerOne") && cellFive.classList.contains("playerOne") && cellEight.classList.contains("playerOne") ||
                cellThree.classList.contains("playerOne") && cellSix.classList.contains("playerOne") && cellNine.classList.contains("playerOne") ||
                cellOne.classList.contains("playerOne") && cellFive.classList.contains("playerOne") && cellNine.classList.contains("playerOne") ||
                cellThree.classList.contains("playerOne") && cellFive.classList.contains("playerOne") && cellSeven.classList.contains("playerOne")
            ) ||

            (
                cellOne.classList.contains("playerTwo") && cellTwo.classList.contains("playerTwo") && cellThree.classList.contains("playerTwo") ||
                cellFour.classList.contains("playerTwo") && cellFive.classList.contains("playerTwo") && cellSix.classList.contains("playerTwo") ||
                cellSeven.classList.contains("playerTwo") && cellEight.classList.contains("playerTwo") && cellNine.classList.contains("playerTwo") ||
                cellOne.classList.contains("playerTwo") && cellFour.classList.contains("playerTwo") && cellSeven.classList.contains("playerTwo") ||
                cellTwo.classList.contains("playerTwo") && cellFive.classList.contains("playerTwo") && cellEight.classList.contains("playerTwo") ||
                cellThree.classList.contains("playerTwo") && cellSix.classList.contains("playerTwo") && cellNine.classList.contains("playerTwo") ||
                cellOne.classList.contains("playerTwo") && cellFive.classList.contains("playerTwo") && cellNine.classList.contains("playerTwo") ||
                cellThree.classList.contains("playerTwo") && cellFive.classList.contains("playerTwo") && cellSeven.classList.contains("playerTwo")
            )
        ) {
                console.log("winner")
            }
    }

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
        cellNine,
        checkResult
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
        gameBoardModule.checkResult();
    };

    // adds class and input to div
    const playerSelection = function(cell, currentClass) {
        cell.classList.add(currentClass.className);
        cell.textContent = currentClass.input;
    }

    const changeTurn = function() {
        playerTwoTurn = !playerTwoTurn;
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
