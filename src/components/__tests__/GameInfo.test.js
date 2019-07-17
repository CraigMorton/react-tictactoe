import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import GameInfo from '../GameInfo';
import {
  expectToExist,
  expectNotToExist,
} from '../../testing/custom_assertions';

describe('GameInfo component', function() {
  const inProgressGrid = ['O', '', '', '', 'X', '', '', '', ''];
  const tiedGrid = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
  describe('Current player', function() {
    describe('should display when game is not over', function() {
      it('when player is X', function() {
        const { getByText } = render(
          <GameInfo grid={inProgressGrid} player={'X'} />,
        );
        expectToExist(getByText, 'Current player: X');
      });
      it('when player is O', function() {
        const { getByText } = render(
          <GameInfo grid={inProgressGrid} player={'O'} />,
        );
        expectToExist(getByText, 'Current player: O');
      });
      it('when player is arbitrary string', function() {
        const { getByText } = render(
          <GameInfo
            grid={inProgressGrid}
            player={'not a valid player symbol'}
          />,
        );
        expectToExist(getByText, 'Current player: not a valid player symbol');
      });
    });
    describe('should not display when game is over', function() {
      it('when player is X', function() {
        const { getByText } = render(<GameInfo grid={tiedGrid} player={'X'} />);
        expectNotToExist(getByText, 'Current player: X');
      });
      it('when player is O', function() {
        const { getByText } = render(<GameInfo grid={tiedGrid} player={'O'} />);
        expectNotToExist(getByText, 'Current player: O');
      });
    });
  });
  describe('Winner', function() {
    it('should display when game is won', function() {
      const xWinsGrid = ['X', 'O', '', 'X', 'O', '', 'X', '', ''];
      const { getByText } = render(<GameInfo grid={xWinsGrid} player={'X'} />);
      expectToExist(getByText, 'Winner: O');
    });
    it('should not display when game is in progress', function() {
      const { getByText } = render(
        <GameInfo grid={inProgressGrid} player={'X'} />,
      );
      expectNotToExist(getByText, 'Winner: O');
    });
  });
  describe('Tied Game', function() {
    it('should display when game is a tie', function() {
      const { getByText } = render(<GameInfo grid={tiedGrid} />);
      expectToExist(getByText, 'Tied Game');
    });
    it('should not display when game is in progress', function() {
      const { getByText } = render(<GameInfo grid={inProgressGrid} />);
      expectNotToExist(getByText, 'Tied Game');
    });
  });
});
