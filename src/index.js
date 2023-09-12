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
setMinePosition (board, numberOfMines);
console.log(board);
return board;  
}

function nearbyTile (tile, board) {
let surroundingTiles = [];
for ( let xNearBy = -1; xNearBy <= 1; xNearBy ++) {
  for ( let yNearBy = -1; yNearBy <= 1; yNearBy ++) {
    const newX = tile.x + xNearBy;
    const newY = tile.y + yNearBy;

    if (newX >= 0 && newX < board.length && newY >= 0 && newY < board.length) {
     const nearTile = board[newX][newY];
      surroundingTiles.push(nearTile);
    }
  }
}
console.log(surroundingTiles)
  const mines = surroundingTiles.filter(tile => tile.mine===true);
  reveal(tile, mines, surroundingTiles);
}

function setMinePosition (board, numberOfMines) {
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
  tile.element.addEventListener("click", function() {
    revealTile(tile, board);
  });
  const boardElement = document.querySelector(".board");
  boardElement.style.setProperty("--size", boardSize);
  boardElement.append(tile.element); 
  return element;
}

function reveal(tile, mines, surroundingTiles) {
  if (mines.length === 0) { 
    surroundingTiles.forEach(revealTile); 
  } else { 
     const mineNumber = document.createElement("p");
     mineNumber.textContent = mines.length
     tile.element.appendChild(mineNumber);
     console.log("A p was created with the value: " + mines.length)
  }
}



function revealTile(tile, board) {
  
  if (tile.mine === true) {
    tile.element.setAttribute("class", "bomb");
    // game over
  } else {
    tile.element.setAttribute("class", "revealed");
    tile.hidden = false;
    // console.log(tile.hidden);
    nearbyTile(tile, board);

  }
  // console.log(board); //remove board console logs and then from revealTile, createDiv param and argument. 
}


// const boardSize = 5;
// const numberOfMines = 15;
// createGameBoard(boardSize, numberOfMines);

window.addEventListener("load", function() {
createGameBoard(5, 1);
// document.querySelector("div.board").addEventListener("click", revealTile);
});