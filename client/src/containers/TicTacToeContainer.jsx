import React from 'react'
import Board from '../components/Board.jsx'
import GameInfo from '../components/GameInfo.jsx'
import {isGridComplete} from '../functions/gameLogic.js'

class TicTacToeContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      grid: ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
      isPlayerXTurn: true
    }
  }

  handleCellClick = (event) => {
    const index = event.target.value
    const newGrid = this.state.grid.slice()
    newGrid[index] = this.currentPlayerSymbol()

    this.setState({
      grid: newGrid,
      isPlayerXTurn: !this.state.isPlayerXTurn
    })
  }

  currentPlayerSymbol = () => this.state.isPlayerXTurn ? 'X' : 'O'

  render() {
    // isGridComplete(this.state.grid)
    return (
      <div>
        <Board
        grid={this.state.grid}
        handleCellClick={this.handleCellClick}
        />
        <GameInfo
        player={this.currentPlayerSymbol()}
        />
      </div>
    )
  }

}

export default TicTacToeContainer
