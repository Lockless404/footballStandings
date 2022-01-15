import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import League from './League';
import { getLeaguesFromApi } from '../redux/League/league';

const Leagues = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const leagues = useSelector((state) => state.leaguesReducer);

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (leagues) {
      dispatch(getLeaguesFromApi());
    }
  }, []);

  return (
    <div>
      <div className="App">
        <Header />
        <hr />
        <input placeholder="Search by League Name" className="input" type="text" value={value} onChange={inputHandler} />
        <section className="leagues">
          {
            value ? (
              leagues.leagues
                .filter((league) => league.name
                  .toLowerCase()
                  .includes(value.toLocaleLowerCase()))
                .map((league) => (
                  <League
                  key={league.id}
                  id={league.id}
                  name={league.name}
                  logos={league.logos.dark}
                />
                ))
            )
            : (
              leagues.leagues.map((league) => (
              <League
                key={league.id}
                id={league.id}
                name={league.name}
                logos={league.logos.light}
              />
            ))
            )
          }
        </section>
      </div>
    </div>
  );
};

export default Leagues;
