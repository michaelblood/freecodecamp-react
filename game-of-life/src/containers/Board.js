import React from 'react';
import { connect } from 'react-redux';

import { Grid } from '../components';

import * as actions from '../actions';

const mapStateToProps = (state, ownProps) => ({
  cells: state.cells,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCellClick(id) {
    dispatch(actions.toggleCell(id))
  },
});

const Board = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);

export default Board;
