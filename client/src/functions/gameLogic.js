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

  if (winningSectionIndex === -1) return null
  const winningSection = sections[winningSectionIndex]
  return winningSection
}

export {winningSection}

const isCatsGame = (grid) => isGridComplete(grid) && !winningSection(grid)

export {isCatsGame}

const isGameOver = (grid) => (
  isGridComplete(grid) || winningSection(grid) != null
)

export {isGameOver}
