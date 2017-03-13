import React, { PropTypes } from 'react';

const TableRow = ({ rank, username, avatar, total, recent }) => {
  return (
    <tr>
      <td>{rank}</td>
      <td>
        <img
          className="img rounded"
          style={{maxHeight: '50px'}}
          src={avatar}
        />
        {' '}{username}
      </td>
      <td>{total}</td>
      <td>{recent}</td>
    </tr>
  );
};

TableRow.propTypes = {
  rank: PropTypes.number,
  username: PropTypes.string,
  avatar: PropTypes.string,
  total: PropTypes.number,
  recent: PropTypes.number,
};

export default TableRow;
