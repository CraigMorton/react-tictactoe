const isGridComplete = (grid) => grid.map((cell) => cell !== '')
  .reduce((acc, curr) => acc && curr, true)

export {isGridComplete}
