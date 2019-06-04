import { nextTurnState, getOtherPlayer } from '../../state/gameLogic.js';

describe('nextTurnState', () => {
  it('should return player, opponent, catsGame and winningCells in an object', () => {
    const resultsObject = nextTurnState([], 'X');
    const resultsKeys = Object.keys(resultsObject);
    expect(resultsKeys.sort()).toEqual(['opponent', 'player'].sort());
  });

  it('should return new player as the getOtherPlayer function does', () => {
    const prevPlayer = 'X';
    const combinedResult = nextTurnState(prevPlayer).player;
    const individualResult = getOtherPlayer(prevPlayer);
    expect(combinedResult).toBe(individualResult);
  });

  it('should return new opponent as opposite of player', () => {
    const prevPlayer = 'X';
    const { player, opponent } = nextTurnState(prevPlayer);
    expect(opponent).toBe(prevPlayer);
  });
});
