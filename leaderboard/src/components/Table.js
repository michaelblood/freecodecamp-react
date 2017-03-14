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

const Table = ({ campers, currentFilter, onClick }) => {
  const total = currentFilter === 'alltime' ? 'active-col' : 'inactive-col';
  const recent = currentFilter === 'recent' ? 'active-col' : 'inactive-col';

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr className="table-header">
                <th>Rank</th>
                <th>User</th>
                <th
                  className={total}
                  onClick={total === 'active-col' ? null : () => onClick()}
                >
                  Total points
                </th>
                <th
                  className={recent}
                  onClick={recent === 'active-col' ? null : () => onClick()}
                >
                  Recent points
                </th>
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
  currentFilter: PropTypes.oneOf(['alltime', 'recent']),
  onClick: PropTypes.func,
};

export default Table;
