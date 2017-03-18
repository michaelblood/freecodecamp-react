import React, { PropTypes } from 'react';

import { connect } from 'react-redux';

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

const mapStateToProps = (state) => ({
  generation: state.generation,
});

export default connect(mapStateToProps)(Generation);
