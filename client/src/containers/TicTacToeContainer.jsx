import React from 'react'
import Board from '../components/Board.jsx'
import GameInfo from '../components/GameInfo.jsx'

class TicTacToeContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      grid: ['', '', '', '', '', '', '', '', ''],
      isPlayerXTurn: true
    }
  }

  handleCellClick = (event) => {
    const index = event.target.dataset.index
    const grid = this.state.grid.slice()
    grid[index] = this.currentPlayerSymbol()
    const isPlayerXTurn = !this.state.isPlayerXTurn

    this.setState({grid, isPlayerXTurn})
  }

  currentPlayerSymbol = () => this.state.isPlayerXTurn ? 'X' : 'O'

  render = () => (
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

export default TicTacToeContainer
