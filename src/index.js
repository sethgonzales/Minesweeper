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

function nearbyTile ({x, y}, board) {
let surroundingTiles = [];
// const nearbyTileLocation = []
for ( let xNearBy = -1; xNearBy <= 1; xNearBy ++) {
  for ( let yNearBy = -1; yNearBy <= 1; yNearBy ++) {
    const newX = x + xNearBy;
    const newY = y + yNearBy;

    if (newX >= 0 && newX < board.length && newY >= 0 && newY < board.length) {
     const nearTile = board[newX][newY];
      surroundingTiles.push(nearTile);
    }
  }
}
  checkAdjacentTiles(surroundingTiles);
}

function checkAdjacentTiles(surroundingTiles) {
  //create an array of surrounding tiles  

      // EXAMPLE: adjTiles = [t1.mine=t, t2.mine=f, t3.mine=f]
  
  //look through array and filter to create array of tiles with mines =true
 const mines = surroundingTiles.filter(tile => tile.mine===true);
 console.log(mines);
//       EXAMPLE: mines = [t1.mine=t]
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
    nearbyTile(tile, board);
    revealTile(tile, board);
  });
  const boardElement = document.querySelector(".board");
  boardElement.style.setProperty("--size", boardSize);
  boardElement.append(tile.element); 
  return element;
}


  // //look through the mines array 
  //     if (mines.length === 0) { //if the array contains NO mines
  //         adjTiles.forEach(revealTile()) //loop through the array of adjacent tiles and reveal them if they also do not have adjacent mines.
  //     else { //for any tile that does have adjacent mines
  //         tile.element.innerHTML = 
  //         <p>${mines.length}</p> //update the tile to have the number of mines, found by the lenth of the mines array.
  //     }
  //     }
  //   }



function revealTile(tile) {
  
  if (tile.mine === true) {
    tile.element.setAttribute("class", "bomb");
    // game over
  } else {
    tile.element.setAttribute("class", "revealed");
    tile.hidden = false;
    console.log(tile.hidden);
  }
  // console.log(board); //remove board console logs and then from revealTile, createDiv param and argument. 
}


// const boardSize = 5;
// const numberOfMines = 15;
// createGameBoard(boardSize, numberOfMines);

window.addEventListener("load", function() {
createGameBoard(5, 10);
// document.querySelector("div.board").addEventListener("click", revealTile);
});