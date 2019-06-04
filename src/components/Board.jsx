import React from 'react';
import Cell from './Cell.jsx';
import { isGameOver, winningLine } from '../state/gameLogic';

export default function Board({ grid = [], handleCellClick }) {
  const winningCells = winningLine(grid);
  return (
    <div className="board">
      {grid.map((cell, index) => (
        <Cell
          key={index}
          symbol={cell}
          claimed={cell !== ''}
          winner={winningCells.includes(index)}
          gameOver={isGameOver(grid)}
          index={index}
          handleClick={handleCellClick}
        />
      ))}
    </div>
  );
}
