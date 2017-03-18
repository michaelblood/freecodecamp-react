import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Board, Buttons, Configure, Generation, Speed } from './containers';

const App = ({ delay }) => {
  return (
    <div className="container">
      <div className="menu">
        <h1>Conway's Game of Life</h1>
        <div className="options">
          <Buttons delay={delay}/>
          <Speed />
          <Generation />
          <Configure />
        </div>
      </div>
      <Board />
    </div>
  );
};

App.PropTypes = {
  delay: PropTypes.number,
};

const mapStateToProps = (state) => ({
  delay: state.delay,
});

export default connect(mapStateToProps)(App);
