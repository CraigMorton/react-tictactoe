import React, { Component } from 'react';
import Board from '../components/Board.jsx';
import GameInfo from '../components/GameInfo.jsx';
import SimpleButton from '../components/generic/SimpleButton.jsx';
import {
  winningSection,
  isCatsGame,
  getOtherPlayer,
  isGridComplete,
  isGameOver,
} from '../functions/gameLogic.js';
import initialState from '../state/initialState';

class TicTacToeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  handleCellClick = event => {
    const index = event.target.dataset.index;
    const grid = this.state.grid.slice();
    grid[index] = this.state.player;
    const player = getOtherPlayer(this.state.player);
    const opponent = getOtherPlayer(this.state.opponent);
    const gameOver = isGameOver(grid);
    const catsGame = isCatsGame(grid);
    const winningCells = winningSection(grid);
    this.setState({
      grid,
      player,
      opponent,
      catsGame,
      winningCells,
      gameOver,
    });
  };
  restartGame = () => {
    this.setState(initialState);
  };
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
      <SimpleButton onClick={this.restartGame} text="Restart Game" />
    </div>
  );
}

export default TicTacToeContainer;
