import React from 'react'

const GameInfo = function ({
  player,
  gameOver,
  opponent,
  catsGame,
}) {
  let gameInfoContent
  if (gameOver) {
    if (catsGame) {
      gameInfoContent = <p>Cat's Game - Tie</p>
    }
    else {
      gameInfoContent = <p>Winner: {opponent}</p>
    }
  }
  else {
    gameInfoContent = <p>Current player: {player}</p>
  }
  return (
    <div className='game-info'>
      {gameInfoContent}
    </div>
  )
}

export default GameInfo
