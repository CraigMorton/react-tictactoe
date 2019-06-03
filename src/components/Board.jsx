import React from 'react';
import Cell from './Cell.jsx';
import { isGameOver, winningLine } from '../state/gameLogic';
import initialState from '../state/initialState';
const emptyCell = initialState.grid[0];

export default function Board({ grid = [], handleCellClick }) {
  const winningCells = winningLine(grid);
  return (
    <div className="board">
      {grid.map((cell, index) => (
        <Cell
          key={index + cell}
          symbol={cell}
          claimed={cell !== emptyCell}
          winner={winningCells.includes(index)}
          gameOver={isGameOver(grid)}
          index={index}
          handleClick={handleCellClick}
        />
      ))}
    </div>
  );
}
