import React from 'react'
import ReactDOM from 'react-dom'
import TickTacToeContainer from './containers/TickTacToeContainer.jsx'

window.onload = function () {
  ReactDOM.render(
    <TickTacToeContainer />,
    document.getElementById('app')
  )
}
