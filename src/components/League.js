import { Link } from 'react-router-dom';
import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { getTableFromApi } from '../redux/Table/table';

const League = (props) => {
  const leagues = props.data;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.tableReducer);

  return (
    <form id={leagues.id}>
      <img className='cardPic' src={leagues.logos.light} alt="" />
      <h4>{leagues.name}</h4>
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
          const id = e.target.parentElement.id;
          const value = e.target.previousElementSibling.value;
          if (value == '') {
            e.preventDefault();
            alert('Please select season')
          } else {
            if (data) {
              dispatch(getTableFromApi(value, id));
            }
          }
        }}
      >
        View Standings
      </Link>
    </form>
  )
}

export default League
