import { isCatsGame } from '../../state/gameLogic.js';

describe('isCatsGame function', () => {
  it('should return false when grid is empty array', () => {
    expect(isCatsGame([])).toBe(false);
  });

  it('should return true no winning plays in complete grid', () => {
    const grid = ['X', 'O', 'O', 'O', 'X', 'X', 'X', 'X', 'O'];
    expect(isCatsGame(grid)).toBe(true);
  });

  it('should return false when grid incomplete', () => {
    const grid = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', ''];
    expect(isCatsGame(grid)).toBe(false);
  });

  it('should return false when winning play found in grid', () => {
    const grid = ['X', 'X', 'X', 'X', 'O', 'O', 'O', 'X', 'O'];
    expect(isCatsGame(grid)).toBe(false);
  });

  it('should return false when winning play found in incomplete grid', () => {
    const grid = ['X', 'X', 'X', 'X', 'O', 'O', 'O', 'X', ''];
    expect(isCatsGame(grid)).toBe(false);
  });
});
