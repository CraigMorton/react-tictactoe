const isGridComplete = function (grid) {
  // Craig's Functional Programming version
  return grid.map((cell) => cell.claimed)
    .reduce((acc, curr) => acc && curr, true)

  // Alex's OOP version
  const claimedness = grid.map((cell) => cell.claimed)
  for (let i = 0; i < claimedness.length; i++) {
    if (claimedness[i] === false) {
      return false
    }
  }
  return true

  // Darren's shortcut! Awesome
  return grid.some(cell => !cell.claimed)
}

export {isGridComplete}
