import { isGameOver } from '../../state/gameLogic.js';

describe('isGameOver function', () => {
  it('should return false when grid is invalid', () => {
    expect(isGameOver([])).toBe(false);
  });

  it('should return true no winning plays in complete grid', () => {
    const grid = ['X', 'O', 'O', 'O', 'X', 'X', 'X', 'X', 'O'];
    expect(isGameOver(grid)).toBe(true);
  });

  it('should return false when grid incomplete', () => {
    const grid = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', ''];
    expect(isGameOver(grid)).toBe(false);
  });

  it('should return true when winning play found in grid', () => {
    const grid = ['X', 'X', 'X', 'X', 'O', 'O', 'O', 'X', 'O'];
    expect(isGameOver(grid)).toBe(true);
  });

  it('should return true when winning play found in incomplete grid', () => {
    const grid = ['X', 'X', 'X', 'X', 'O', 'O', 'O', 'X', ''];
    expect(isGameOver(grid)).toBe(true);
  });
});
