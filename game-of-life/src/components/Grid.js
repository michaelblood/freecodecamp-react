import React, { PropTypes } from 'react';

import Cell from './Cell';

const Grid = ({ cells, onCellClick }) => {
  return (
    <div className="board">
      {cells.map((row, i) => {
        return (
          <div key={i} className="row">
            {row.map((cell, j) => {
              const id = [i, j];
              return (
                <Cell
                  key={id.join('')}
                  alive={cell}
                  onClick={() => onCellClick(id)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
Grid.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)),
  onCellClick: PropTypes.func,
};

export default Grid;
