import React from 'react'

const Cell = function (props) {
  let onClick = props.handleClick
  if (props.claimed) {
    onClick = null
  }
  return (
    <button
    value={props.index}
    onClick={onClick}
    >{props.symbol}</button>)
}

export default Cell
