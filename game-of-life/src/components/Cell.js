import React, { PropTypes } from 'react';

const Cell = ({ alive, onClick, newborn }) => {
  return (
    <div
      className={(alive ? 'alive' : 'dead') + (newborn ? ' newborn' : '')}
      onClick={(e) => {
        onClick();
      }}
    />
  );
};

Cell.propTypes = {
  onClick: PropTypes.func,
  alive: PropTypes.bool,
  newborn: PropTypes.bool,
};

export default Cell;
