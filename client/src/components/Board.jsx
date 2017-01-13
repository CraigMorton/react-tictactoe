import React from 'react'
import Cell from './Cell.jsx'

const Board = (props) => {
  return (
    <div>
      {props.grid.map((cell, index) => {
          console.log(cell)

          return <Cell
          key={index}
          symbol={cell.symbol}
          claimed={cell.claimed}
          index={index}
          handleClick={props.handleCellClick}
          />
        })}
    </div>
  )
}

export default Board
