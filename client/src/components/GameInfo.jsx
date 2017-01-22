import React from 'react'

const GameInfo = ({
  player,
  gameOver,
  opponent,
}) => {
  let gameInfoContent
  if (gameOver) {
    gameInfoContent = <p>Winner: {opponent}</p>
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
