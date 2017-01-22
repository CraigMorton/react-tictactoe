import React from 'react'
import Cell from './Cell.jsx'

const Board = (props) => {
  let handleCellClick = props.handleCellClick
  if (props.gameOver) handleCellClick = null
  let winningCells = props.winningCells
  if (props.winningCells == null) {
    winningCells = []
  }
  return (
    <div className='board'>
      {props.grid.map((cell, index) => (
        <Cell
        key={index}
        symbol={cell}
        claimed={cell !== ''}
        winner={winningCells.includes(index)}
        index={index}
        handleClick={handleCellClick}
        />)
      )}
    </div>
  )
}

export default Board
