import React, { PropTypes } from 'react';

const PageHeading = ({ changeFilter, otherFilter }) => {
  const buttonName = otherFilter === 'recent' ?
    'Last 30 days' :
    'All time';
  return (
    <div className="page-heading">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <h1 className="float-left">freeCodeCamp leaderboard</h1>
          </div>
          <div className="col-sm-6 col-xs-12">
            <a
              className="float-right btn btn-secondary header-button"
              role="button"
              onClick={() => changeFilter()}
            >
              {`Switch to ${buttonName}?`}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

PageHeading.propTypes = {
  changeFilter: PropTypes.func,
  currentFilter: PropTypes.oneOf(['alltime', 'recent']),
  otherFilter: PropTypes.oneOf(['alltime', 'recent']),
}

export default PageHeading;
