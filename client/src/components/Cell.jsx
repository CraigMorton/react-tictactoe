import React from 'react'

const Cell = function (props) {
  let onClick = props.handleClick
  let htmlClasses = 'cell'
  if (props.claimed) {
    onClick = null
    htmlClasses += ' cell-claimed'
  }
  return (
    <button
    className={htmlClasses}
    value={props.index}
    onClick={onClick}
    >{props.symbol}</button>)
}

export default Cell
