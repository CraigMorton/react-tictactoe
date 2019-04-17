import React from 'react';

const GameInfo = ({ player, opponent, gameOver, catsGame }) => (
  <div className="game-info">
    {!gameOver && <p>Current player: {player}</p>}
    {gameOver && !catsGame && <p>Winner: {opponent}</p>}
    {catsGame && <p>Cat's Game - Tie</p>}
  </div>
);

export default GameInfo;
