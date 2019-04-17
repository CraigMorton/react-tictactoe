import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToeContainer from './containers/TicTacToeContainer.jsx';

window.onload = function() {
  ReactDOM.render(<TicTacToeContainer />, document.getElementById('app'));
};
