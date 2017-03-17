import { combineReducers } from 'redux';

const DEFAULT_W = 20;
const DEFAULT_H = 20;

const defaultGrid = (width, height) => {
  const random = () => {
    const rand = Math.floor(Math.random() * 4);
    return rand === 0;
  };
  const row = (width) => {
    const arr = Array(width).fill(false);
    return arr.map(random);
  };

  const grid = Array(height).fill(false).map(() => row(width));
  return grid;
};

const cell = (state, action ) => {
  switch (action.type) {
    default:
      return state;
  }
};

const row = (state, action) => {
  
}

const cells = (state = defaultGrid(DEFAULT_W, DEFAULT_H), action) => {
  switch (action.type) {
    case 'TOGGLE_CELL':
      return [
        ...state.slice(0, action.id[0]),
        state[action.id[0]].map((el, j) => {
          if ('' + j === action.id[1]) {
            return !el;
          }
          return el;
        }),
        ...state.slice(+action.id[0] + 1)
      ];
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
  board
});
