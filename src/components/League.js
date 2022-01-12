import { Link } from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
import {  useDispatch } from 'react-redux';
import { getTableFromApi } from '../redux/Table/table';

const League = (props) => {
  const leagues = props.data;
  const dispatch = useDispatch();

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
        <option value="2011">2011</option>
        <option value="2010">2010</option>
        <option value="2009">2009</option>
        <option value="2008">2008</option>
        <option value="2007">2007</option>
        <option value="2006">2006</option>
        <option value="2005">2005</option>
        <option value="2004">2004</option>
        <option value="2003">2003</option>
        <option value="2002">2002</option>
        <option value="2001">2001</option>
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
            dispatch(getTableFromApi(value, id));
          }
        }}
      >
        View Standings
      </Link>
    </form>
  )
}

export default League
