import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Board, } from './containers';
import { BoardControls, SpeedControls, Generation, Configure, } from './components';
import * as actions from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.onStart = this.onStart.bind(this);
    this.onPause = this.onPause.bind(this);
    this.tick = this.tick.bind(this);
    this.onSpeedClick = this.onSpeedClick.bind(this);
  }

  onStart() {
    this.props.onStart();
    this.tick();
  }

  onPause() {
    const { onPause } = this.props;
    window.cancelAnimationFrame(this.frame);
    window.clearTimeout(this.timeout);
    onPause();
  }
  
  onSpeedClick(speed) {
    const { onSpeedClick } = this.props;
    if (this.props.running) {
      window.cancelAnimationFrame(this.frame);
      window.clearTimeout(this.timeout);
      this.tick();
    }
    onSpeedClick(speed);
  }

  tick() {
    const { delay, dispatch } = this.props;
    dispatch(actions.next());
    this.timeout = setTimeout(() => {
      this.frame = requestAnimationFrame(this.tick);
    }, delay)
  }

  render() {
    const props = this.props;
    return (
      <div className="container">
        <div className="menu">
          <h1>Conway's Game of Life</h1>
          <div className="options">
            <BoardControls
              onNext={props.onNext}
              onStart={this.onStart}
              onPause={this.onPause}
              onRandom={props.onRandom}
              onReset={props.onReset}
              delay={props.delay}
              size={props.size /* for random */}
              running={props.running}
            />
            <SpeedControls
              onClick={this.onSpeedClick}
              delay={props.delay}
            />
            <Generation generation={props.generation} />
            <Configure
              onSubmit={props.onSubmit}
              size={props.size}
            />
          </div>
        </div>
        <Board />
      </div>
    );
  }
}

App.propTypes = {
  delay: PropTypes.number,
  onNext: PropTypes.func,
  onStart: PropTypes.func,
  onPause: PropTypes.func,
  onRandom: PropTypes.func,
  onReset: PropTypes.func,
  size: PropTypes.object,
  running: PropTypes.bool,
  onSpeedClick: PropTypes.func,
  generation: PropTypes.number,
  onSubmit: PropTypes.func,
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => ({
  delay: state.delay,
  size: state.size,
  running: state.running,
  generation: state.generation,
});

const mapDispatchToProps = (dispatch) => ({
  onNext() {
    dispatch(actions.next());
  },
  onStart() {
    dispatch(actions.start());
  },
  onPause() {
    dispatch(actions.pause());
  },
  onRandom(size) {
    dispatch(actions.randomize(size));
  },
  onSpeedClick(speed) {
    dispatch(actions.setSpeed(speed));
  },
  onSubmit(size) {
    dispatch(actions.setSize(size));
  },
  onReset(size) {
    dispatch(actions.clearGrid(size));
  },
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
