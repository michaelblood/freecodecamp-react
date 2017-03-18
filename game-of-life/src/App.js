import React from 'react';

import { Board, Buttons, Configure, Generation } from './containers';

const App = () => {
  return (
    <div className="container">
      <div className="menu">
        <h1>Conway's Game of Life</h1>
        <div className="options">
          <Buttons />
          <Generation />
          <Configure />
        </div>
      </div>
      <Board />
    </div>
  );
};

export default App;
