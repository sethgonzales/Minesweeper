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
    createDiv(tile);
    row.push(tile);
  }
  board.push(row);
}
console.log(board);
setMinePosition (board, numberOfMines);
return board;  
}

function setMinePosition (board, numberOfMines) {
  let minesPlaced = 0;
  
  while (minesPlaced < numberOfMines) {
    const x = Math.floor(Math.random() * boardSize);
    const y = Math.floor(Math.random() * boardSize);
  
    if (!board[x][y].tile.mine === true) {
      board[x][y].tile.mine = true;
      minesPlaced++;
    }// not working figure out tomorrow
}
}
  
//UI Logic 
function createDiv(tile) {
  const element = document.createElement("div");
  tile.element = element;

  const boardElement = document.querySelector(".board");
  boardElement.style.setProperty("--size", boardSize);
  boardElement.append(tile.element);
  return element;
}

const boardSize = 5;
const numberOfMines = 10;
createGameBoard(boardSize, numberOfMines);