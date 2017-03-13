import React, { PropTypes } from 'react';

import TableRow from './TableRow';

const Table = ({ leaderboard, sort }) => {
  return (
    <div>
      
    </div>
  );
};

Table.propTypes = {
  leaderboard: PropTypes.arrayOf(PropTypes.object),
  sort: PropTypes.func,
};

export default Table;
