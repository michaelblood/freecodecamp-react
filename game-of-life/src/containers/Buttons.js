import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

const Button = ({ handler, disabled, text }) => (
  <button
    className={"button " + text}
    disabled={disabled}
    onClick={handler}
  >
    {text}
  </button>
);

const Buttons = ({
  onNext,
  onPause,
  onStart,
  onRandom,
  running,
  size,
}) => {
  return (
    <div className="button-group">
      <Button disabled={running} handler={onStart} text="Start" />{' '}
      <Button disabled={!running} handler={onPause} text="Pause" />{' '}
      <Button disabled={running} handler={() => onRandom(size.w, size.h)} text="Randomize" />{' '}
      <Button disabled={running} handler={onNext} text="Next" />
    </div>
  );
};
Buttons.propTypes = {
  onNext: PropTypes.func,
  onPause: PropTypes.func,
  onStart: PropTypes.func,
  onRandom: PropTypes.func,
  running: PropTypes.bool,
  size: PropTypes.object,
  delay: PropTypes.number,
};

const mapStateToProps = (state) => ({
  running: state.running,
  size: state.size,
  delay: state.delay,
});

const mapDispatchToProps = (dispatch) => {
  let frame;

  const tick = (time) => {
    dispatch({ type: 'NEXT_STATE' });
    setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, delay);
  } /* FIGURE OUT HOW TO GET STATE DELAY */

  return {
    onNext() {
      dispatch(actions.next());
    },
    onStart() {
      dispatch(actions.start());
      frame = requestAnimationFrame(tick);
    },
    onPause() {
      dispatch(actions.pause());
      cancelAnimationFrame(frame);
    },
    onRandom(w, h) {
      dispatch(actions.randomize(w, h));
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
