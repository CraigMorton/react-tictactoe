export function isGridComplete(grid) {
  if (!validateGrid(grid)) return false;
  return grid.map(cell => cell !== '').reduce((acc, curr) => acc && curr, true);
}

export function validateGrid(grid) {
  return grid.length === 9;
}

export function winningLine(grid) {
  if (!validateGrid(grid)) return [];
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

export function isTiedGame(grid) {
  return isGridComplete(grid) && winningLine(grid).length === 0;
}

export function isGameOver(grid) {
  return isGridComplete(grid) || winningLine(grid).length !== 0;
}

export function getOtherPlayer(player) {
  const findOtherPlayer = {
    X: 'O',
    O: 'X',
  };
  return findOtherPlayer[player];
}
