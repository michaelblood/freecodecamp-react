import React, { PropTypes } from 'react';

import * as actions from '../actions';
import Button from './Button';

const BoardControls = ({
  onNext,
  onPause,
  onStart,
  onRandom,
  onReset,
  running,
  size,
  delay,
}) => {
  return (
    <div className="button-group">
      <Button disabled={running} onClick={() => onStart(delay)} text="Start" />{' '}
      <Button disabled={!running} onClick={onPause} text="Pause" />{' '}
      <Button disabled={running} onClick={() => onRandom(size)} text="Randomize" />{' '}
      <Button disabled={running} onClick={onNext} text="Next" />
      <Button disabled={running} onClick={() => onReset(size)} text="Reset" />
    </div>
  );
};
BoardControls.propTypes = {
  onNext: PropTypes.func,
  onPause: PropTypes.func,
  onStart: PropTypes.func,
  onRandom: PropTypes.func,
  onReset: PropTypes.func,
  running: PropTypes.bool,
  size: PropTypes.object,
  delay: PropTypes.number,
};

export default BoardControls;
