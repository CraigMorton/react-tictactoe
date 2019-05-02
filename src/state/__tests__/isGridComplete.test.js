import { isGridComplete } from '../../state/gameLogic.js';

describe('isGridComplete', () => {
  it('should return false if game not finished ', () => {
    const grid = ['', '', ''];
    expect(isGridComplete(grid)).toBe(false);
  });

  it('should return true if all cells claimed', () => {
    const grid = ['x', 'x'];
    expect(isGridComplete(grid)).toBe(true);
  });

  it('should return true when input is empty array', () => {
    expect(isGridComplete([])).toBe(true);
  });
});
