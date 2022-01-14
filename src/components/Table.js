import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './Header';
import TableLine from './TableLine';

const Table = () => {
  const dataa = useSelector((state) => state.tableReducer);

  return (
    <div className="App">
      <Header />
      <hr />
      <section>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Logo</th>
              <th>Name</th>
              <th>Wins</th>
              <th>Draws</th>
              <th>Losses</th>
              <th>GD</th>
              <th>GF</th>
              <th>GA</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {dataa.table.map((standing) => (
              <TableLine key={standing.team.id} data={standing} />
            ))}
          </tbody>
        </table>
      </section>
      <Link className="backA" to="/">Back</Link>
      <hr className="end" />
    </div>
  );
};

export default Table;
