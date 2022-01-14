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
              <TableLine
                key={standing.team.id}
                rank={standing.stats[8].value}
                logo={standing.team.logos[0].href}
                name={standing.team.name}
                wins={standing.stats[0].value}
                draws={standing.stats[2].value}
                losses={standing.stats[1].value}
                gD={standing.stats[9].value}
                gF={standing.stats[4].value}
                gA={standing.stats[5].value}
                points={standing.stats[6].value}
              />
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
