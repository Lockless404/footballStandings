import React from 'react';
import PropTypes from 'prop-types';

const TableLine = (props) => {
  const { stats, team } = props.data;
  const rank = stats[8].value;
  const logo = team.logos[0].href;
  const { name } = team;
  const wins = stats[0].value;
  const draws = stats[2].value;
  const losses = stats[1].value;
  const gD = stats[9].value;
  const gF = stats[4].value;
  const gA = stats[5].value;
  const points = stats[6].value;

  return (
    <>
      <tr>
        <td>{rank}</td>
        <td><img className='clubLogos' src={logo} alt="Badge Logo" /></td>
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
};

TableLine.propTypes = {
  rank: PropTypes.string, 
  logo: PropTypes.string, 
  name: PropTypes.string,
  wins: PropTypes.string, 
  draws: PropTypes.string, 
  losses: PropTypes.string, 
  gD: PropTypes.string, 
  gF: PropTypes.string, 
  gA: PropTypes.string, 
  points: PropTypes.string, 
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
}

export default TableLine;
