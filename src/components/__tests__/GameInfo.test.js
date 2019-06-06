import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import GameInfo from '../GameInfo';
import { expectToExist } from '../../testing/custom_assertions';

describe('GameInfo component', function() {
  describe('should display given current player when game is not over', function() {
    it('when player is X', function() {
      const { getByText } = render(<GameInfo gameOver={false} player={'X'} />);
      expectToExist(getByText, 'Current player: X');
    });
    it('when player is O', function() {
      const { getByText } = render(<GameInfo gameOver={false} player={'O'} />);
      expectToExist(getByText, 'Current player: O');
    });
    it('when player is arbitrary string', function() {
      const { getByText } = render(
        <GameInfo gameOver={false} player={'not a valid player symbol'} />,
      );
      expectToExist(getByText, 'Current player: not a valid player symbol');
    });
  });
});
