import React from 'react'
import classNames from 'classnames'

const Cell = ({
  handleClick,
  claimed,
  winner,
  gameOver,
  index,
  symbol,
}) => (
  <div
    className={classNames('cell', {
      'cell-claimed': claimed,
      'cell-winner': winner,
      'cell-game-over': gameOver,
    })}
    data-index={index}
    onClick={claimed || winner || gameOver ? null : handleClick}
    >{symbol}
  </div>
)

export default Cell
