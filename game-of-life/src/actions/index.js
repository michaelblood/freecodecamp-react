import { defaultGrid, createBlankGrid } from '../helpers';

export const toggleCell = (id) => ({
  type: 'TOGGLE_CELL',
  id
});

export const next = () => ({
  type: 'NEXT_STATE',
});

export const start = () => {
  return {
    type: 'START_GAME',
  };
};

export const pause = () => {
  return {
    type: 'PAUSE_GAME',
  };
}

export const randomize = ({ w, h }) => ({
  type: 'RANDOMIZE',
  grid: defaultGrid(w, h)
});

export const setSize = ({ w, h }) => ({
  type: 'SET_SIZE',
  grid: defaultGrid(w, h)
});

export const clearGrid = ({ w, h }) => ({
  type: 'CLEAR_GRID',
  grid: createBlankGrid(w, h)
});

export const setSpeed = (speed) => {
  return {
    type: 'SET_DELAY',
    delay: speed,
  };
};

export const tick = ({ frame, timeout }) => ({
  type: 'TICK',
  timeout,
  frame
});
