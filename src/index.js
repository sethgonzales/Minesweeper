import './css/styles.css';

//Business Logic
function createGameBoard(boardSize, numberOfMines) {
  const board = [];
  for (let x = 0; x < boardSize; x++) {
    const row = [];
    for (let y = 0; y < boardSize; y++) {
      const tile = {
        x,
        y,
        hidden: true,
        mine: false,
        flag: false,
      };
      createDiv(boardSize, tile, board);
      row.push(tile);
    }
    board.push(row);
  }
  setMinePosition(board, numberOfMines);
  return board;
}

function nearbyTile(tile, board) {
  let surroundingTiles = [];
  for (let xNearBy = -1; xNearBy <= 1; xNearBy++) {
    for (let yNearBy = -1; yNearBy <= 1; yNearBy++) {
      const newX = tile.x + xNearBy;
      const newY = tile.y + yNearBy;

      if (newX >= 0 && newX < board.length && newY >= 0 && newY < board.length) {
        const nearTile = board[newX][newY];
        surroundingTiles.push(nearTile);
      }
    }
  }
  const mines = surroundingTiles.filter(tile => tile.mine === true);
  reveal(tile, mines, surroundingTiles, board);
}

function setMinePosition(board, numberOfMines) {
  let minesPlaced = 0;
  while (minesPlaced < numberOfMines) {
    const x = Math.floor(Math.random() * board.length);
    const y = Math.floor(Math.random() * board.length);
    if (!board[x][y].mine === true) {
      board[x][y].mine = true;
      minesPlaced++;
    }
  }
}

//UI Logic 
function createDiv(boardSize, tile, board) {
  const element = document.createElement("div");
  tile.element = element;
  tile.element.addEventListener("click", function () {
    revealTile(tile, board);
  });
  tile.element.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    flagTile(tile);
  });
  const boardElement = document.querySelector(".board");
  boardElement.style.setProperty("--size", boardSize);
  boardElement.append(tile.element);
  return element;
}

function flagTile(tile) {
  if (tile.flag === true) {
    tile.flag = false;
    tile.element.removeAttribute("class");
  } else if (tile.hidden === true) {
    tile.flag = true;
    tile.element.classList.add("flag");
  }
}

function reveal(tile, mines, surroundingTiles, board) {
  if (mines.length === 0) {
    surroundingTiles.forEach(function (nearbyTile) {
      revealTile(nearbyTile, board); //for each of the tiles in surrTiles array, find their nearby tiles...THEN for the nearby tiles, run them through reveal tile
    });
  } else {
    const mineNumber = document.createElement("p");
    mineNumber.textContent = mines.length;
    tile.element.appendChild(mineNumber);
  }
}

function revealTile(tile, board) {
  if (tile.flag === true) {
    tile.flag = false;
    tile.element.removeAttribute("class");
  }
  if (tile.mine === true) {
    tile.element.setAttribute("class", "bomb");
    gameOver("lose", board);
  } else if (tile.hidden === true) { //check if true so that we cannot keep clicking on the same tile
    tile.element.setAttribute("class", "revealed");
    tile.hidden = false;
    nearbyTile(tile, board);
    checkWin(board);
  }
}

function checkWin(board) {
  let hasWon = true;
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y].hidden === true && board[x][y].mine === false) {
        hasWon = false;
      }
    }
  }
  if (hasWon) {
    gameOver("win", board);
  }
}

function gameOver(gameStatus, board) {
  document.querySelector(".board").removeEventListener("click", endPropagation, { capture: true });
  document.querySelector(".board").removeEventListener("contextmenu", endPropagation, { capture: true });

  const overlay = document.querySelector('.overlay');
  const win = document.querySelector('.win');
  if (gameStatus === "lose") {
    const loseText = document.createElement("p");
    overlay.style.display = 'block';
    win.style.display = 'none';
    loseText.textContent = "You Lose";
    document.body.appendChild(loseText);
    for (let x = 0; x < board.length; x++) {
      for (let y = 0; y < board[x].length; y++) {
        if (board[x][y].mine === true) {
          board[x][y].element.setAttribute("class", "bomb");
        }
      }
    }
  } else if (gameStatus === "win") {
    const winText = document.createElement("p");
    overlay.style.display = 'none';
    win.style.display = 'block';
    winText.textContent = "You Won!";
    document.body.appendChild(winText);
  }
}

function endPropagation(event) {
  event.stopImmediatePropagation();
}

window.addEventListener("load", function () {
  createGameBoard(10, 5);
});