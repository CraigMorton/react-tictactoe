import { isGridComplete } from '../src/state/gameLogic.js';

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

import { winningLine } from '../src/state/gameLogic.js';

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

import { isCatsGame } from '../src/state/gameLogic.js';

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

import { isGameOver } from '../src/state/gameLogic.js';

describe('isGameOver function', () => {
  it('should return true when grid is empty array', () => {
    expect(isGameOver([])).toBe(true);
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

import { getOtherPlayer } from '../src/state/gameLogic.js';

describe('getOtherPlayer function', () => {
  it('should return O when passed X', () => {
    expect(getOtherPlayer('X')).toBe('O');
  });

  it('should return X when passed O', () => {
    expect(getOtherPlayer('O')).toBe('X');
  });
});

import { nextTurnState } from '../src/state/gameLogic.js';

describe('nextTurnState', () => {
  it('should return player, opponent, gameOver, catsGame and winningCells in an object', () => {
    const resultsObject = nextTurnState([], 'X');
    const resultsKeys = Object.keys(resultsObject);
    expect(resultsKeys.sort()).toEqual(
      ['catsGame', 'gameOver', 'opponent', 'player', 'winningCells'].sort(),
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

  describe('should return gameOver status as the isGameOver function does', () => {
    it('should return true when grid is empty array', () => {
      const combinedResult = nextTurnState([], 'X').gameOver;
      const individualResult = isGameOver([]);
      expect(combinedResult).toBe(individualResult);
    });

    it('should return true no winning plays in complete grid', () => {
      const grid = ['X', 'O', 'O', 'O', 'X', 'X', 'X', 'X', 'O'];
      const combinedResult = nextTurnState(grid, 'X').gameOver;
      const individualResult = isGameOver(grid);
      expect(combinedResult).toBe(individualResult);
    });

    it('should return false when grid incomplete', () => {
      const grid = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', ''];
      const combinedResult = nextTurnState(grid, 'X').gameOver;
      const individualResult = isGameOver(grid);
      expect(combinedResult).toBe(individualResult);
    });

    it('should return true when winning play found in grid', () => {
      const grid = ['X', 'X', 'X', 'X', 'O', 'O', 'O', 'X', 'O'];
      const combinedResult = nextTurnState(grid, 'X').gameOver;
      const individualResult = isGameOver(grid);
      expect(combinedResult).toBe(individualResult);
    });

    it('should return true when winning play found in incomplete grid', () => {
      const grid = ['X', 'X', 'X', 'X', 'O', 'O', 'O', 'X', ''];
      const combinedResult = nextTurnState(grid, 'X').gameOver;
      const individualResult = isGameOver(grid);
      expect(combinedResult).toBe(individualResult);
    });
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

  describe('should return winningCells as the winningLine function does', () => {
    it('should return indices of section where winning row found', () => {
      const grid = ['X', 'O', 'X', 'O', 'O', 'X', 'O', 'X', 'X'];
      const combinedResult = nextTurnState(grid, 'X').winningCells;
      const individualResult = winningLine(grid);
      expect(combinedResult).toEqual(individualResult);
    });

    it('should return empty array if no winning row found', () => {
      const grid = ['X', 'O', 'O', 'O', 'X', 'X', 'X', 'X', 'O'];
      const combinedResult = nextTurnState(grid, 'X').winningCells;
      const individualResult = winningLine(grid);
      expect(combinedResult).toEqual(individualResult);
    });

    it('should return first winning sections when multiple wins on board -- should not be possible during normal gameplay', () => {
      const grid = ['X', 'X', 'X', 'O', 'O', 'O', '', '', ''];
      const combinedResult = nextTurnState(grid, 'X').winningCells;
      const individualResult = winningLine(grid);
      expect(combinedResult).toEqual(individualResult);
    });
  });
});
