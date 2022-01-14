import React from 'react';
import PropTypes from 'prop-types';

const TableLine = (props) => {
  const { stats, team } = props.data;

  return (
    <>
      <tr>
        <td>{stats[8].value}</td>
        <td><img className='clubLogos' src={team.logos[0].href} alt="Badge Logo" /></td>
        <td>{team.name}</td>
        <td>{stats[0].value}</td>
        <td>{stats[2].value}</td>
        <td>{stats[1].value}</td>
        <td>{stats[9].value}</td>
        <td>{stats[4].value}</td>
        <td>{stats[5].value}</td>
        <td>{stats[6].value}</td>
      </tr>
    </>
  );
};

TableLine.propTypes = {
  stats: PropTypes.array,
  team: PropTypes.object,
};

export default TableLine;
