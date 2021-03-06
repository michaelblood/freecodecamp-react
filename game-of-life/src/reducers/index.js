import { combineReducers } from 'redux';

import { nextState, defaultGrid } from '../helpers';
import { SPEEDS, DEFAULT_W, DEFAULT_H } from '../constants';

const DEFAULT_GRID = defaultGrid();

const running = (state = false, action) => {
  switch (action.type) {
    case 'START_GAME':
      return true;
    case 'PAUSE_GAME':
      return false;
    default:
      return state;
  }
};

const delay = (state = SPEEDS.FAST, action) => {
  switch (action.type) {
    case 'SET_DELAY':
      return action.delay;
    default:
      return state;
  }
};

const size = (state = { w: DEFAULT_W, h: DEFAULT_H }, action) => {
  switch (action.type) {
    case 'SET_SIZE':
      const grid = action.grid;
      const h = grid.length;
      const w = grid[0].length;
      return { w, h };
    default:
      return state;
  }
};

const scale = (state = 100, action) => {
  switch (action.type) {
    case 'SET_SCALE':
      return action.scale;
    default:
      return state;
  }
};

const generation = (state = 0, action) => {
  switch (action.type) {
    case 'NEXT_STATE':
      return state + 1;
    case 'RANDOMIZE':
      return 0;
    default:
      return state;
  }
};

const cells = (state = DEFAULT_GRID, action) => {
  switch (action.type) {
    case 'TOGGLE_CELL':
      const i = Number(action.id[0]);
      const j = Number(action.id[1]);
      return [
        ...state.slice(0, i),
        [
          ...state[i].slice(0, j),
          !state[i][j],
          ...state[i].slice(j + 1)
        ],
        ...state.slice(i + 1)
      ];
    case 'NEXT_STATE':
      return nextState(state);
    case 'RANDOMIZE':
    case 'SET_SIZE':
    case 'CLEAR_GRID':
      return action.grid;
    default:
      return state;
  }
};

const board = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  cells,
  board,
  running,
  generation,
  size,
  delay,
  scale,
});
