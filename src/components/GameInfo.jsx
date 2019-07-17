import React from 'react';

export default function GameInfo({ player, opponent, gameOver, catsGame }) {
  return (
    <>
      {!gameOver && <p>Current player: {player}</p>}
      {gameOver && !catsGame && <p>Winner: {opponent}</p>}
      {catsGame && gameOver && <p>Cat's Game - Tie</p>}
    </>
  );
}
