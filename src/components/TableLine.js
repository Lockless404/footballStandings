import React from 'react'

const TableLine = (props) => {

  const standings = props.data;

  return (
    <>
      <tr>
        <td>{standings.stats[8].value}</td>
        <td><img className='clubLogos' src={standings.team.logos[0].href} alt="Badge Logo" /></td>
        <td>{standings.team.name}</td>
        <td>{standings.stats[0].value}</td>
        <td>{standings.stats[2].value}</td>
        <td>{standings.stats[1].value}</td>
        <td>{standings.stats[9].value}</td>
        <td>{standings.stats[4].value}</td>
        <td>{standings.stats[5].value}</td>
        <td>{standings.stats[6].value}</td>
      </tr> 
    </>
  )
}

export default TableLine
