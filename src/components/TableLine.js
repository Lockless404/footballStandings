import React from 'react';
import PropTypes from 'prop-types';

const TableLine = (
  {
    rank,
    logo,
    name,
    wins,
    draws,
    losses,
    gD,
    gF,
    gA,
    points,
  },
) => (
  <>
    <tr>
      <td>{rank}</td>
      <td><img className="clubLogos" src={logo} alt="Badge Logo" /></td>
      <td>{name}</td>
      <td>{wins}</td>
      <td>{draws}</td>
      <td>{losses}</td>
      <td>{gD}</td>
      <td>{gF}</td>
      <td>{gA}</td>
      <td>{points}</td>
    </tr>
  </>
);

TableLine.propTypes = {
  rank: PropTypes.number,
  logo: PropTypes.string,
  name: PropTypes.string,
  wins: PropTypes.number,
  draws: PropTypes.number,
  losses: PropTypes.number,
  gD: PropTypes.number,
  gF: PropTypes.number,
  gA: PropTypes.number,
  points: PropTypes.number,
};

TableLine.defaultProps = {
  rank: '1',
  logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/23.png',
  name: 'Chelsea',
  wins: '38',
  draws: '0',
  losses: '0',
  gD: '1000',
  gF: '1000',
  gA: '0',
  points: '119',
};

export default TableLine;
