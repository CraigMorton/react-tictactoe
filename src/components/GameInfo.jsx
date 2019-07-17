import React from 'react';
import { getOtherPlayer, isTiedGame } from '../state/gameLogic';

export default function GameInfo({ player, gameOver, grid = [] }) {
  const opponent = getOtherPlayer(player);
  const tiedGame = isTiedGame(grid);
  return (
    <>
      {!gameOver && <p>Current player: {player}</p>}
      {gameOver && !tiedGame && <p>Winner: {opponent}</p>}
      {tiedGame && gameOver && <p>Tied Game</p>}
    </>
  );
}
