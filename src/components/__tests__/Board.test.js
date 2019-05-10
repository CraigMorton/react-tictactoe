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
});
