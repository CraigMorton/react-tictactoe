import React from 'react';
import Cell from './Cell.jsx';

export default function Board({
  grid = [],
  handleCellClick,
  winningCells = [],
  gameOver,
}) {
  return (
    <div className="board">
      {grid.map((cell, index) => (
        <Cell
          key={index}
          symbol={cell}
          claimed={cell !== ''}
          winner={winningCells.includes(index)}
          gameOver={gameOver}
          index={index}
          handleClick={handleCellClick}
        />
      ))}
    </div>
  );
}
