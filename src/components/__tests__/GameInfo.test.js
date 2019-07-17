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
      it('player is not given', function() {
        const { getByText } = render(<GameInfo grid={inProgressGrid} />);
        expectToExist(getByText, 'Current player', { exact: false });
      });
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
    });
    describe('should not display when game is over', function() {
      it('when player is not given', function() {
        const { getByText } = render(<GameInfo grid={tiedGrid} />);
        expectNotToExist(getByText, 'Current player', { exact: false });
      });
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
      const { getByText } = render(<GameInfo grid={xWinsGrid} />);
      expectToExist(getByText, 'Winner', { exact: false });
    });
    it('should display when game is won by X', function() {
      const xWinsGrid = ['X', 'O', '', 'X', 'O', '', 'X', '', ''];
      const { getByText } = render(<GameInfo grid={xWinsGrid} player={'O'} />);
      expectToExist(getByText, 'Winner: X');
    });
    it('should display when game is won by O', function() {
      const oWinsGrid = ['X', 'O', 'X', 'X', 'O', '', '', 'O', ''];
      const { getByText } = render(<GameInfo grid={oWinsGrid} player={'X'} />);
      expectToExist(getByText, 'Winner: O');
    });
    it('should not display when game is in progress', function() {
      const { getByText } = render(<GameInfo grid={inProgressGrid} />);
      expectNotToExist(getByText, 'Winner', { exact: false });
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
