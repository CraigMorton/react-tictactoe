import React from 'react'
import ReactDOM from 'react-dom'
import TickTackToeContainer from './containers/TickTackToeContainer.jsx'

window.onload = function () {
  ReactDOM.render(
    <TickTackToeContainer />,
    document.getElementById('app')
  )
}
