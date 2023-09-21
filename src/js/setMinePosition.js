export default function setMinePosition(board, numberOfMines) {
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