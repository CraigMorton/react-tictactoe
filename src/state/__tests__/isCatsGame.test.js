import { isTiedGame } from '../../state/gameLogic.js';

describe('isTiedGame function', () => {
  it('should return false when grid is empty array', () => {
    expect(isTiedGame([])).toBe(false);
  });

  it('should return true no winning plays in complete grid', () => {
    const grid = ['X', 'O', 'O', 'O', 'X', 'X', 'X', 'X', 'O'];
    expect(isTiedGame(grid)).toBe(true);
  });

  it('should return false when grid incomplete', () => {
    const grid = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', ''];
    expect(isTiedGame(grid)).toBe(false);
  });

  it('should return false when winning play found in grid', () => {
    const grid = ['X', 'X', 'X', 'X', 'O', 'O', 'O', 'X', 'O'];
    expect(isTiedGame(grid)).toBe(false);
  });

  it('should return false when winning play found in incomplete grid', () => {
    const grid = ['X', 'X', 'X', 'X', 'O', 'O', 'O', 'X', ''];
    expect(isTiedGame(grid)).toBe(false);
  });
});
