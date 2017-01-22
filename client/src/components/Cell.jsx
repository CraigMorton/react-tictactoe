import React from 'react'

const Cell = function (props) {
  let onClick = props.handleClick
  let htmlClasses = 'cell'
  if (props.claimed) {
    onClick = null
    htmlClasses += ' cell-claimed'
    if (props.winner) {
      htmlClasses += ' cell-winner'
    }
  }

  return (
    <div
    className={htmlClasses}
    data-index={props.index}
    onClick={onClick}
    >{props.symbol}</div>
    )
}

export default Cell
