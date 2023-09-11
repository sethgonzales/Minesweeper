// import { createGameBoard } from "./js/game-logic.js";
import './css/styles.css';

//Business Logic
  function createGameBoard(boardSize) {
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
          // number,
        };

        createDiv(tile);

        row.push(tile);
      }
      board.push(row);
   
    }
  console.log(board);
    return board;
  
  }

// createGameBoard(10);

//UI Logic 
// const board = createGameBoard(10);


function createDiv(tile) {
  const element = document.createElement("div");
  tile.element = element;

  const boardElement = document.querySelector(".board");
  boardElement.append(tile.element);
  return element;
}

const boardSize = 10;
createGameBoard(boardSize);


// const board = createGameBoard(10);
// const boardElement = document.querySelector(".board");

// board.forEach(row => {
//   row.forEach(tile => {
//     boardElement.append(tile.element);
//     // tile.element.addEventListener(click), () => {
//     //   tile.hidden = false;
//     })
//   });


// function setStatusHidden(element) {
//   element.setAttribute("class", "hidden");
// }

// document.getElementsByClassName("first-class")[0].removeAttribute("class", "hidden");