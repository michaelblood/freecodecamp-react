import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Button } from './Buttons';
import { setSpeed } from '../actions';

import { SPEEDS } from '../constants';

const Speed = ({ onClick, delay }) => {
  return (
    <div className="button-group">
      <Button disabled={delay === SPEEDS.SLOW} onClick={() => onClick('SLOW')} text="Slow" />
      <Button disabled={delay === SPEEDS.MEDIUM} onClick={() => onClick('MEDIUM')} text="Normal" />
      <Button disabled={delay === SPEEDS.FAST} onClick={() => onClick('FAST')} text="Fast" />
    </div>
  );
};

Speed.propTypes = {
  onClick: PropTypes.func,
  delay: PropTypes.number,
};

const mapStateToProps = (state) => ({
  delay: state.delay,
});

const mapDispatchToProps = (dispatch) => ({
  onClick(speed) {
    dispatch(setSpeed(speed));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Speed);
