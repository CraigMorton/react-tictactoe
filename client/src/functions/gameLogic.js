const isGridComplete = function (grid) {
  return grid.map((cell) => cell.claimed)
    .reduce((acc, curr) => acc && curr, true)
}

export {isGridComplete}
