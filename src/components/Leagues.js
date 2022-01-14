import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import League from './League';
import { getLeaguesFromApi } from '../redux/League/league';

const Leagues = () => {
  const dispatch = useDispatch();
  const leagues = useSelector((state) => state.leaguesReducer);

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
        <section className="leagues">
          {leagues.leagues.map((league) => (
            <League key={league.id} id={league.id} data={league} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Leagues;
