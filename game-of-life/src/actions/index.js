import { defaultGrid } from '../helpers';
import { SPEEDS } from '../constants';

export const toggleCell = (id) => ({
  type: 'TOGGLE_CELL',
  id
});

export const next = () => ({
  type: 'NEXT_STATE',
});

export const start = () => ({
  type: 'START_GAME',
});

export const pause = () => ({
  type: 'PAUSE_GAME',
});

export const randomize = (w, h) => ({
  type: 'RANDOMIZE',
  grid: defaultGrid(w, h)
});

export const setSize = (w, h) => ({
  type: 'SET_SIZE',
  grid: defaultGrid(w, h)
});

export const setSpeed = (speed) => {
  let n;
  switch (speed) {
    case 'SLOW':
      n = SPEEDS.SLOW;
      break;
    case 'FAST':
      n = SPEEDS.FAST;
      break;
    case 'MEDIUM':
    default:
      n = SPEEDS.MEDIUM;
  }
  return {
    type: 'SET_SPEED',
    speed: n,
  };
};
