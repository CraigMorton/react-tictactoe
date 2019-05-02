import { winningLine } from '../../state/gameLogic.js';

describe('winningLine function', () => {
  it('should return indices of section where winning row found', () => {
    const grid = ['X', 'O', 'X', 'O', 'O', 'X', 'O', 'X', 'X'];
    expect(winningLine(grid)).toEqual([2, 5, 8]);
  });

  it('should return empty array if no winning row found', () => {
    const grid = ['X', 'O', 'O', 'O', 'X', 'X', 'X', 'X', 'O'];
    expect(winningLine(grid)).toEqual([]);
  });

  it('should return first winning sections when multiple wins on board -- should not be possible during normal gameplay', () => {
    const grid = ['X', 'X', 'X', 'O', 'O', 'O', '', '', ''];
    expect(winningLine(grid)).toEqual([0, 1, 2]);
  });
});
