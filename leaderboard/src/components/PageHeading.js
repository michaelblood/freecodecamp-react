import React, { PropTypes } from 'react';

const PageHeading = ({ changeFilter, currentFilter, otherFilter }) => {
  return (
    <div>
      <h1>page heading</h1>
      <a onClick={() => changeFilter()}>{otherFilter}</a>
    </div>
  );
};

PageHeading.propTypes = {
  changeFilter: PropTypes.func,
  currentFilter: PropTypes.oneOf(['alltime', 'recent']),
  otherFilter: PropTypes.oneOf(['alltime', 'recent']),
}

export default PageHeading;
