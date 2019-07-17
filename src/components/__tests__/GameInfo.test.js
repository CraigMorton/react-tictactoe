import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import GameInfo from '../GameInfo';
import {
  expectToExist,
  expectNotToExist,
} from '../../testing/custom_assertions';

describe('GameInfo component', function() {
  describe('Current player', function() {
    describe('should display when game is not over', function() {
      it('when player is X', function() {
        const { getByText } = render(
          <GameInfo gameOver={false} player={'X'} />,
        );
        expectToExist(getByText, 'Current player: X');
      });
      it('when player is O', function() {
        const { getByText } = render(
          <GameInfo gameOver={false} player={'O'} />,
        );
        expectToExist(getByText, 'Current player: O');
      });
      it('when player is arbitrary string', function() {
        const { getByText } = render(
          <GameInfo gameOver={false} player={'not a valid player symbol'} />,
        );
        expectToExist(getByText, 'Current player: not a valid player symbol');
      });
    });
    describe('should not display when game is over', function() {
      it('when player is X', function() {
        const { getByText } = render(<GameInfo gameOver={true} player={'X'} />);
        expectNotToExist(getByText, 'Current player: X');
      });
      it('when player is O', function() {
        const { getByText } = render(<GameInfo gameOver={true} player={'O'} />);
        expectNotToExist(getByText, 'Current player: O');
      });
    });
  });
  describe('Winner', function() {
    it('should display when game is over', function() {
      const { getByText } = render(<GameInfo gameOver={true} opponent={'O'} />);
      expectToExist(getByText, 'Winner: O');
    });
    it('should not display when game is in progress', function() {
      const { getByText } = render(
        <GameInfo gameOver={false} opponent={'O'} />,
      );
      expectNotToExist(getByText, 'Winner: O');
    });
  });
  describe("Cat's game", function() {
    it('should display when game is over and game is a tie', function() {
      const { getByText } = render(
        <GameInfo catsGame={true} gameOver={true} />,
      );
      expectToExist(getByText, "Cat's Game - Tie");
    });
    it('should not display when game is in progress', function() {
      const { getByText } = render(
        <GameInfo catsGame={true} gameOver={false} />,
      );
      expectNotToExist(getByText, "Cat's Game - Tie");
    });
  });
});
