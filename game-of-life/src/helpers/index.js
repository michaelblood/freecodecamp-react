import { DEFAULT_W, DEFAULT_H } from '../constants';

const inBounds = (size) => (n) => {
  if (n === size) return 0;
  if (n === -1) return size - 1;
  return n;
};

const getNeighbors = (grid, y, x) => {
  const height = grid.length;
  const width = grid[0].length;

  const $h = inBounds(height);
  const $w = inBounds(width);

  return [-1, 0, 1].reduce((total, i) => (
    total + [-1, 0, 1].reduce((total, j) => (
      (i || j)
        ? total + grid[$h(y + i)][$w(x + j)]
        : total
    ), 0)
  ), 0)
};

const willLive = (isAlive, neighbors) => (
  isAlive
    ? neighbors === 2 || neighbors === 3
    : neighbors === 3
);

export const nextState = (grid) => {
  return grid.map((row, i) => (
    row.map((cell, j) => (
      willLive(cell, getNeighbors(grid, i, j))
    ))
  ));
};

export const defaultGrid = (width = DEFAULT_W, height = DEFAULT_H) => {
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

export const createBlankGrid = (width, height) => {
  const row = () => Array(width).fill(false);
  return Array(height).fill(row());
};
