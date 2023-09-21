import { createDiv } from ".././index.js";
import setMinePosition from "./setMinePosition.js";


export default function createGameBoard(boardSize, numberOfMines) {
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

