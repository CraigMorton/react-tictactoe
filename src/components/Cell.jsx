import React from 'react';
import classNames from 'classnames';

export default function Cell({
  handleClick,
  claimed,
  winner,
  gameOver,
  index,
  symbol,
}) {
  return (
    <div
      className={classNames('cell', {
        'cell-claimed': claimed,
        'cell-winner': winner,
        'cell-game-over': gameOver,
      })}
      data-index={index}
      onClick={claimed || winner || gameOver ? null : handleClick}
    >
      {symbol}
    </div>
  );
}
