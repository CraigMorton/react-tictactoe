import React from 'react'
import Board from '../components/Board.jsx'
import GameInfo from '../components/GameInfo.jsx'
import SimpleButton from '../components/generic/SimpleButton.jsx'
import {
  winningSection,
  isCatsGame,
  getOtherPlayer,
  isGridComplete,
} from '../functions/gameLogic.js'

class TicTacToeContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      grid: ['', '', '', '', '', '', '', '', ''],
      player: 'X',
      opponent: 'O',
      catsGame: false,
      gameOver: false,
      winningCells: null,
    }
  }

  handleCellClick = (event) => {
    const index = event.target.dataset.index
    const grid = this.state.grid.slice()
    grid[index] = this.currentPlayerSymbol()
    const isPlayerXTurn = !this.state.isPlayerXTurn

    this.setState({grid, isPlayerXTurn})
  }

  restartGame = (event) => {
    this.setState({
      grid: ['', '', '', '', '', '', '', '', ''],
      player: 'X',
      opponent: 'O',
      catsGame: false,
      gameOver: false,
      winningCells: null,
    })
  }

  currentPlayerSymbol = () => this.state.isPlayerXTurn ? 'X' : 'O'
  otherPlayerSymbol = () => !this.state.isPlayerXTurn ? 'X' : 'O'

  render = () => (
    <div>
      <Board
      grid={this.state.grid}
      handleCellClick={this.handleCellClick}
      gameOver={this.state.gameOver}
      winningCells={this.state.winningCells}
      />
      <GameInfo
      player={this.state.player}
      opponent={this.state.opponent}
      gameOver={this.state.gameOver}
      catsGame={this.state.catsGame}
      />
      <SimpleButton
      onClick={this.restartGame}
      text='Restart Game'
      />
    </div>
  )

}

export default TicTacToeContainer
