import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Board from '../Board';
import initialState from '../../state/initialState';

describe('Board component', function() {
  it('should render', function() {
    render(<Board />);
  });

  it('should initially render an empty grid', function() {
    const { queryAllByText } = render(<Board grid={initialState.grid} />);
    expect(queryAllByText('X')).toEqual([]);
    expect(queryAllByText('O')).toEqual([]);
  });

  it('should allow empty cells to be clicked', function() {
    const handleCellClick = jest.fn();
    const { getByTestId } = render(
      <Board grid={['']} handleCellClick={handleCellClick} />,
    );
    fireEvent.click(getByTestId('cell-0'));
    expect(handleCellClick.mock.calls.length).toBe(1);
  });

  it('should not allow previously claimed cells to be clicked', function() {
    const handleCellClick = jest.fn();
    const { getByTestId } = render(
      <Board grid={['X']} handleCellClick={handleCellClick} />,
    );
    fireEvent.click(getByTestId('cell-0'));
    expect(handleCellClick.mock.calls.length).toBe(0);
  });

  it('should not allow any cells to be clicked when game is over', function() {
    const handleCellClick = jest.fn();
    const tiedGrid = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
    const { getByTestId } = render(
      <Board grid={tiedGrid} handleCellClick={handleCellClick} />,
    );
    fireEvent.click(getByTestId('cell-0'));
    expect(handleCellClick.mock.calls.length).toBe(0);
  });
});
