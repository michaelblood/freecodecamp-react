import React, { PropTypes } from 'react';

import TableRow from './TableRow';

const renderRows = (campers) => {
  return campers.map((camper, index)=> (
    <TableRow
      key={camper.username}
      rank={index + 1}
      username={camper.username}
      avatar={camper.img}
      total={Number(camper.alltime)}
      recent={Number(camper.recent)}
    />
  ))
};

const Table = ({ campers }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <table className="table table-striped table-bordered">
            <thead>
              <tr className="table-header">
                <th>Rank</th>
                <th>User</th>
                <th>Total points</th>
                <th>Recent points</th>
              </tr>
            </thead>
            <tbody>
              {renderRows(campers)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Table.propTypes = {
  campers: PropTypes.arrayOf(PropTypes.object),
};

export default Table;
