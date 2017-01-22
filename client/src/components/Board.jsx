import React from 'react'
import Cell from './Cell.jsx'

const Board = function ({
  grid,
  handleCellClick,
  winningCells,
  gameOver,
}) {
  let cellOnClick = handleCellClick
  if (gameOver) cellOnClick = null
  let winningCellIndices = winningCells
  if (winningCells == null) {
    winningCellIndices = []
  }
  return (
    <div className='board'>
      {grid.map((cell, index) => (
        <Cell
        key={index}
        symbol={cell}
        claimed={cell !== ''}
        winner={winningCellIndices.includes(index)}
        gameOver={gameOver}
        index={index}
        handleClick={handleCellClick}
        />)
      )}
    </div>
  )
}

export default Board
