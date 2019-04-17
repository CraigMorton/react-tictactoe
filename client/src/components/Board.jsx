import React from 'react';
import Cell from './Cell.jsx';

const Board = ({ grid, handleCellClick, winningCells, gameOver }) => (
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

export default Board;
