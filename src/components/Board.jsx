import React from 'react';
import Cell from './Cell.jsx';
import initialState from '../state/initialState';
const emptyCell = initialState.grid[0];

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
          key={index + cell}
          symbol={cell}
          claimed={cell !== emptyCell}
          winner={winningCells.includes(index)}
          gameOver={gameOver}
          index={index}
          handleClick={handleCellClick}
        />
      ))}
    </div>
  );
}
