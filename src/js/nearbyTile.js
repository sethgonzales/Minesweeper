import { reveal } from ".././index.js";

export default function nearbyTile(tile, board) {
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
