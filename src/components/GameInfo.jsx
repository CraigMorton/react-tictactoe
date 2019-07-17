import React from 'react';
import { getOtherPlayer } from '../state/gameLogic';

export default function GameInfo({ player, gameOver, catsGame }) {
  const opponent = getOtherPlayer(player);
  return (
    <>
      {!gameOver && <p>Current player: {player}</p>}
      {gameOver && !catsGame && <p>Winner: {opponent}</p>}
      {catsGame && gameOver && <p>Cat's Game - Tie</p>}
    </>
  );
}
