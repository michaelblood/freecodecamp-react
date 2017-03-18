import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

const Button = ({ onClick, disabled, text }) => (
  <button
    className={"button " + text}
    disabled={disabled}
    onClick={onClick}
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
  delay,
}) => {
  return (
    <div className="button-group">
      <Button disabled={running} onClick={() => onStart(delay)} text="Start" />{' '}
      <Button disabled={!running} onClick={onPause} text="Pause" />{' '}
      <Button disabled={running} onClick={() => onRandom(size.w, size.h)} text="Randomize" />{' '}
      <Button disabled={running} onClick={onNext} text="Next" />
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
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let frame;
  let timeout;

  const tick = (time) => {
    dispatch({ type: 'NEXT_STATE' });
    timeout = setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, ownProps.delay);
  };

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
      clearTimeout(timeout);
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

export { Button };
