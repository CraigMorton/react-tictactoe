import React from 'react'
import Board from '../components/Board.jsx'
import GameInfo from '../components/GameInfo.jsx'
import SimpleButton from '../components/SimpleButton.jsx'
import {
  isGameOver,
  winningSection,
  isCatsGame,
} from '../functions/gameLogic.js'

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

  restartGame = (event) => {
    this.setState({
      grid: ['', '', '', '', '', '', '', '', ''],
      isPlayerXTurn: true
    })
  }

  currentPlayerSymbol = () => this.state.isPlayerXTurn ? 'X' : 'O'
  otherPlayerSymbol = () => !this.state.isPlayerXTurn ? 'X' : 'O'

  render = () => (
    <div>
      <Board
      grid={this.state.grid}
      handleCellClick={this.handleCellClick}
      gameOver={isGameOver(this.state.grid)}
      winningCells={winningSection(this.state.grid)}
      />
      <GameInfo
      player={this.currentPlayerSymbol()}
      opponent={this.otherPlayerSymbol()}
      gameOver={isGameOver(this.state.grid)}
      catsGame={isCatsGame(this.state.grid)}
      />
      <SimpleButton
      onClick={this.restartGame}
      text='Restart Game'
      />
    </div>
  )

}

export default TicTacToeContainer
