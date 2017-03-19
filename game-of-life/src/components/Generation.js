import React, { PropTypes } from 'react';

const Generation = ({ generation }) => {
  return (
    <p className="generation">
      Generation {generation || 0}
    </p>
  );
};

Generation.propTypes = {
  generation: PropTypes.number,
};

export default Generation;
