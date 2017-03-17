import React, { PropTypes } from 'react';

const Cell = ({ alive, onClick }) => {
  return (
    <div
      className={alive ? "alive" : "dead"}
      onClick={() => onClick()}
      style={{
        width: '25px',
        height: '25px',
        margin: '0px',
      }}
    />
  );
};

Cell.propTypes = {
  onClick: PropTypes.func,
  alive: PropTypes.bool,
};

export default Cell;
