import {
  nextTurnState,
  getOtherPlayer,
  isCatsGame,
} from '../../state/gameLogic.js';

describe('nextTurnState', () => {
  it('should return player, opponent, catsGame and winningCells in an object', () => {
    const resultsObject = nextTurnState([], 'X');
    const resultsKeys = Object.keys(resultsObject);
    expect(resultsKeys.sort()).toEqual(
      ['catsGame', 'opponent', 'player'].sort(),
    );
  });

  it('should return new player as the getOtherPlayer function does', () => {
    const prevPlayer = 'X';
    const combinedResult = nextTurnState([], prevPlayer).player;
    const individualResult = getOtherPlayer(prevPlayer);
    expect(combinedResult).toBe(individualResult);
  });

  it('should return new opponent as opposite of player', () => {
    const prevPlayer = 'X';
    const { player, opponent } = nextTurnState([], prevPlayer);
    expect(opponent).toBe(prevPlayer);
  });

  describe('should return catsGame status as the isCatsGame function does', () => {
    it('should return false when grid is empty array', () => {
      const combinedResult = nextTurnState([], 'X').catsGame;
      const individualResult = isCatsGame([]);
      expect(combinedResult).toBe(individualResult);
    });

    it('should return true no winning plays in complete grid', () => {
      const grid = ['X', 'O', 'O', 'O', 'X', 'X', 'X', 'X', 'O'];
      const combinedResult = nextTurnState(grid, 'X').catsGame;
      const individualResult = isCatsGame(grid);
      expect(combinedResult).toBe(individualResult);
    });

    it('should return false when grid incomplete', () => {
      const grid = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', ''];
      const combinedResult = nextTurnState(grid, 'X').catsGame;
      const individualResult = isCatsGame(grid);
      expect(combinedResult).toBe(individualResult);
    });

    it('should return false when winning play found in grid', () => {
      const grid = ['X', 'X', 'X', 'X', 'O', 'O', 'O', 'X', 'O'];
      const combinedResult = nextTurnState(grid, 'X').catsGame;
      const individualResult = isCatsGame(grid);
      expect(combinedResult).toBe(individualResult);
    });

    it('should return false when winning play found in incomplete grid', () => {
      const grid = ['X', 'X', 'X', 'X', 'O', 'O', 'O', 'X', ''];
      const combinedResult = nextTurnState(grid, 'X').catsGame;
      const individualResult = isCatsGame(grid);
      expect(combinedResult).toBe(individualResult);
    });
  });
});
