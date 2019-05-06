import React from 'react';
import { render } from 'react-testing-library';
import Cell from '../Cell';

describe('Cell component', function() {
  it('should render', function() {
    render(<Cell />);
  });
});
