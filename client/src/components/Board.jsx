import React from 'react'
import Cell from './Cell.jsx'

const Board = (props) => {
  return (
    <div className='board'>
      {props.grid.map((cell, index) => {
          return <Cell
          key={index}
          symbol={cell}
          claimed={cell !== '-'}
          index={index}
          handleClick={props.handleCellClick}
          />
        })}
    </div>
  )
}

export default Board
