import { getOtherPlayer } from '../../state/gameLogic.js';

describe('getOtherPlayer function', () => {
  it('should return O when passed X', () => {
    expect(getOtherPlayer('X')).toBe('O');
  });

  it('should return X when passed O', () => {
    expect(getOtherPlayer('O')).toBe('X');
  });
});
