import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Cell from '../Cell';
import { expectToExist } from '../../testing/custom_assertions';

describe('Cell component', function() {
  it('should render', function() {
    render(<Cell />);
  });

  describe('rendered data', function() {
    it('should render X when given X', function() {
      const { getByText } = render(<Cell symbol={'X'} />);
      expectToExist(getByText, 'X');
    });

    it('should render O when given O', function() {
      const { getByText } = render(<Cell symbol={'O'} />);
      expectToExist(getByText, 'O');
    });

    it('should render when symbol passed is empty string', function() {
      render(<Cell symbol={''} />);
    });
  });

  describe('onClick behaviour', function() {
    it('should call handleClick when clicked', function() {
      const handleClick = jest.fn();
      const { getByText } = render(
        <Cell symbol={'X'} handleClick={handleClick} />,
      );
      fireEvent.click(getByText('X'));
      expect(handleClick.mock.calls.length).toBe(1);
    });

    it('should disable onClick if already claimed', function() {
      const handleClick = jest.fn();
      const { getByText } = render(
        <Cell symbol={'X'} claimed={true} handleClick={handleClick} />,
      );
      fireEvent.click(getByText('X'));
      expect(handleClick.mock.calls.length).toBe(0);
    });

    it('should disable onClick if game is over', function() {
      const handleClick = jest.fn();
      const { getByText } = render(
        <Cell symbol={'X'} gameOver={true} handleClick={handleClick} />,
      );
      fireEvent.click(getByText('X'));
      expect(handleClick.mock.calls.length).toBe(0);
    });

    it('should disable onClick when part of a winning line of cells', function() {
      const handleClick = jest.fn();
      const { getByText } = render(
        <Cell symbol={'X'} winner={true} handleClick={handleClick} />,
      );
      fireEvent.click(getByText('X'));
      expect(handleClick.mock.calls.length).toBe(0);
    });
  });
});
