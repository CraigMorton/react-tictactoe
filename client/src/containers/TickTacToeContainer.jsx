import React from 'react'
import Board from '../components/Board.jsx'
import {isGridComplete} from '../functions/gameLogic.js'

class TickTacToeContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      grid: [
        {
          symbol: '-',
          claimed: false
        },
        {
          symbol: '-',
          claimed: false
        },
        {
          symbol: '-',
          claimed: false
        },
        {
          symbol: '-',
          claimed: false
        },
        {
          symbol: '-',
          claimed: false
        },
        {
          symbol: '-',
          claimed: false
        },
        {
          symbol: '-',
          claimed: false
        },
        {
          symbol: '-',
          claimed: false
        },
        {
          symbol: '-',
          claimed: false
        }
      ],
      player: 'x'
    }
    this.handleCellClick = this.handleCellClick.bind(this)
  }

  handleCellClick (event) {
    const index = event.target.value
    const newGrid = this.state.grid.slice()
    newGrid[index] = {
      symbol: this.state.player,
      claimed: true
    }

    let newPlayer = ''
    if (this.state.player === 'x'){
      newPlayer = 'o'
    }
    if (this.state.player === 'o'){
      newPlayer = 'x'
    }

    this.setState({
      grid: newGrid,
      player: newPlayer
    })
  }

  render() {
    // isGridComplete(this.state.grid)
    return (
      <div>
        <Board
        grid={this.state.grid}
        handleCellClick={this.handleCellClick}
        />
      </div>
    )
  }

}

export default TickTacToeContainer
