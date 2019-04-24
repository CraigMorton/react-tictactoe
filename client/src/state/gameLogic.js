const isGridComplete = grid =>
  grid.map(cell => cell !== '').reduce((acc, curr) => acc && curr, true);

export { isGridComplete };

export function winningLine(grid) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const winningLinesCellValues = winningLines.map(line =>
    line.map(cellIndex => grid[cellIndex]),
  );
  const lineWinStatus = winningLinesCellValues.map(line =>
    line.reduce((acc, cell) => cell !== '' && cell === line[0] && acc, true),
  );
  const winningLineIndex = lineWinStatus.indexOf(true);

  if (winningLineIndex === -1) return [];
  const winningLine = winningLines[winningLineIndex];
  return winningLine;
}

export { winningLine };

const isCatsGame = grid =>
  isGridComplete(grid) && winningLine(grid).length === 0;

export { isCatsGame };

const isGameOver = grid =>
  isGridComplete(grid) || winningLine(grid).length !== 0;

export { isGameOver };

const getOtherPlayer = function(player) {
  const findOtherPlayer = {
    X: 'O',
    O: 'X',
  };
  return findOtherPlayer[player];
};

export { getOtherPlayer };

export function nextTurnState(grid, prevPlayer) {
  return {
    player: getOtherPlayer(prevPlayer),
    opponent: prevPlayer,
    gameOver: isGameOver(grid),
    catsGame: isCatsGame(grid),
    winningCells: winningLine(grid),
  };
}
