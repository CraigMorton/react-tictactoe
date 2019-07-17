import React from 'react';
import { getOtherPlayer, isCatsGame } from '../state/gameLogic';

export default function GameInfo({ player, gameOver, grid = [] }) {
  const opponent = getOtherPlayer(player);
  const catsGame = isCatsGame(grid);
  return (
    <>
      {!gameOver && <p>Current player: {player}</p>}
      {gameOver && !catsGame && <p>Winner: {opponent}</p>}
      {catsGame && gameOver && <p>Cat's Game - Tie</p>}
    </>
  );
}
