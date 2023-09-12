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
    createDiv(boardSize, tile);
    row.push(tile);
  }
  board.push(row);
}
setMinePosition (board, numberOfMines);
console.log(board);
return board;  
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
function createDiv(boardSize, tile) {
  const element = document.createElement("div");
  tile.element = element;
  tile.element.addEventListener("click", revealTile(tile));

  const boardElement = document.querySelector(".board");
  boardElement.style.setProperty("--size", boardSize);
  boardElement.append(tile.element);
  return element;
}

function revealTile(tile) {
  if (tile.mine === true) {
    console.log("clicked");
    //change CSS color to red for that tile
    // game over
  } else {
    console.log("else");
    // reveal the square
  }
  console.log("you workin");
}


// const boardSize = 5;
// const numberOfMines = 15;
// createGameBoard(boardSize, numberOfMines);

window.addEventListener("load", function() {
createGameBoard(5, 10);
document.querySelector("div.board").addEventListener("click", revealTile);
});