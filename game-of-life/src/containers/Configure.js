import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

const Configure = ({ size, onSubmit }) => {
  let width, height;
  return (
    <div className="options">
      <label htmlFor="width-input" className="size-label">Width [30-150]: </label>
      <input
        type="number"
        className="input"
        id="width-input"
        ref={node => { width = node; }}
        placeholder={size.w}
        min="30"
        max="150"
      />
      {' '}
      <label htmlFor="height-input" className="size-label">Height [30-150]: </label>
      <input
        type="number"
        className="input"
        id="height-input"
        ref={node => { height = node; }}
        placeholder={size.h}
        min="30"
        max="150"
      />
      {' '}
      <button
        className="button"
        onClick={() => {
          onSubmit(Number(width.value || size.w), Number(height.value || size.h));
          width.value = '';
          height.value = '';
        }}
      >
        Update size
      </button>
      <hr/>
    </div>
  );
};

Configure.propTypes = {
  onSubmit: PropTypes.func,
  size: PropTypes.object,
};

const mapStateToProps = (state) => ({
  size: state.size,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(w, h) {
    dispatch(actions.setSize(w, h));
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Configure);
