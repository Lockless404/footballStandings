import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getTableFromApi } from '../redux/Table/table';

const League = (
  {
    id,
    name,
    logos,
  },
) => {
  const dispatch = useDispatch();

  return (
    <form id={id}>
      <img className="cardPic" src={logos} alt="" />
      <h4>{name}</h4>
      <select name="season" required>
        <option value="" defaultValue>Season</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
      </select>
      <Link
        to="/table"
        onClick={(e) => {
          const { id } = e.target.parentElement;
          const { value } = e.target.previousElementSibling;
          if (value === '') {
            e.preventDefault();
            alert('Please select season');
          } else {
            dispatch(getTableFromApi(value, id));
          }
        }}
      >
        View Standings
      </Link>
    </form>
  );
};

League.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  logos: PropTypes.string,
};

League.defaultProps = {
  id: 'eng.1',
  name: 'English Premier League',
  logos: 'https://a.espncdn.com/i/leaguelogos/soccer/500/23.png',
};

export default League;
