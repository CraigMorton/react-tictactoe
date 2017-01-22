import React from 'react'

const Cell = function ({
  handleClick,
  claimed,
  winner,
  gameOver,
  index,
  symbol,
}) {
  let onClick = handleClick
  let htmlClasses = 'cell'
  if (claimed) {
    onClick = null
    htmlClasses += ' cell-claimed'
    if (winner) {
      htmlClasses += ' cell-winner'
    }
  }
  if (gameOver) htmlClasses += ' cell-game-over'
  return (
    <div
    className={htmlClasses}
    data-index={index}
    onClick={onClick}
    >{symbol}</div>
    )
}

export default Cell
