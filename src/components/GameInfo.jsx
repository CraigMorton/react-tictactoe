import React from 'react';
import { getOtherPlayer, isTiedGame, isGameOver } from '../state/gameLogic';

export default function GameInfo({ player, grid = [] }) {
  const opponent = getOtherPlayer(player);
  const tiedGame = isTiedGame(grid);
  const gameOver = isGameOver(grid);
  return (
    <>
      {!gameOver && <p>Current player: {player}</p>}
      {gameOver && !tiedGame && <p>Winner: {opponent}</p>}
      {tiedGame && gameOver && <p>Tied Game</p>}
    </>
  );
}
