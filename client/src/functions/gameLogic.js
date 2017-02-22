const isGridComplete = (grid) => grid.map((cell) => cell !== '')
  .reduce((acc, curr) => acc && curr, true)

export {isGridComplete}

const winningSection = function (grid) {
  const sections = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const cellValues = sections.map(section => section
    .map(cellIndex => grid[cellIndex]))
  const sectionWinStatus = cellValues.map(section => section
    .reduce((acc, cell) => cell !== '' && cell === section[0] && acc, true))
  const winningSectionIndex = sectionWinStatus.indexOf(true)

  if (winningSectionIndex === -1) return []
  const winningSection = sections[winningSectionIndex]
  return winningSection
}

export {winningSection}

const isCatsGame = (grid) => (
  isGridComplete(grid) && winningSection(grid).length === 0
)

export {isCatsGame}

const isGameOver = (grid) => (
  isGridComplete(grid) || winningSection(grid).length !== 0
)

export {isGameOver}

const getOtherPlayer = function (player) {
  const findOtherPlayer = {
    X: 'O',
    O: 'X',
  }
  return findOtherPlayer[player]
}

export {getOtherPlayer}
