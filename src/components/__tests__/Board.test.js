import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Board from '../Board';

describe('Board component', function() {
  it('should render', function() {
    render(<Board />);
  });
});
