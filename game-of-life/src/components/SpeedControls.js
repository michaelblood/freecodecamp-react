import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Button from './Button';

import { SPEEDS } from '../constants';

class SpeedControls extends Component {
  shouldComponentUpdate(prevProps) {
    return this.props.delay !== prevProps.delay;
  }
  render() {
    const { onClick, delay } = this.props;
    return (
      <div className="button-group">
        <Button disabled={delay === SPEEDS.SLOW} onClick={() => onClick(SPEEDS.SLOW)} text="Slow" />
        <Button disabled={delay === SPEEDS.MEDIUM} onClick={() => onClick(SPEEDS.MEDIUM)} text="Normal" />
        <Button disabled={delay === SPEEDS.FAST} onClick={() => onClick(SPEEDS.FAST)} text="Fast" />
      </div>
    );
  }
}

SpeedControls.propTypes = {
  onClick: PropTypes.func,
  delay: PropTypes.number,
};

export default SpeedControls;
