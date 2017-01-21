import React from 'react'
import Cell from './Cell.jsx'

const Board = (props) => (
  <div className='board'>
    {props.grid.map((cell, index) => (
      <Cell
      key={index}
      symbol={cell}
      claimed={cell !== ''}
      index={index}
      handleClick={props.handleCellClick}
      />)
    )}
  </div>
)

export default Board
