// import createDiv from '../index.js';
default class Game {
constructor() {
  this.hidden = hidden; //this is what
  this.mine = mine;
  this.number = number;
  this.flagged = flagged;
}

createGameBoard(boardSize) {
  const board = [];
  
  for (let x = 0; x < boardSize; x++) {
    const row = [];
    for (let y = 0; y < boardSize; y++) {
      const element = document.createElement("div"); //move to ui logic 
      setStatusHidden(element);
      // set class to hidden for each div container
      

      
      const tile = {
        element,
        x,
        y,
        hidden = true,
        mine = false,
        flag = false,
      };
      row.push(tile);
    }
    board.push(row);
 
  }
console.log(board);
  return board;

}
}