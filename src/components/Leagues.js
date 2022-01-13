import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import League from './League';
import { getLeaguesFromApi } from '../redux/League/league';

const Leagues = () => {
  const dispatch = useDispatch();
  const data = {
    "data": [
      {
        "id": "arg.1",
        "name": "Argentine Liga Profesional de Fútbol",
        "slug": "argentine-liga-profesional-de-futbol",
        "abbr": "Prim A",
        "logos": {
          "light": "https://a.espncdn.com/i/leaguelogos/soccer/500/1.png",
          "dark": "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/1.png"
        },
      },
      {
        "id":"eng.1",
        "name":"English Premier League",
        "slug":"english-premier-league",
        "abbr":"Prem",
        "logos": {
          "light":"https://a.espncdn.com/i/leaguelogos/soccer/500/23.png",
          "dark":"https://a.espncdn.com/i/leaguelogos/soccer/500-dark/23.png",
        },
      },
    ]
  }

  

  const leagues = useSelector((state) => state.leaguesReducer);

  console.log(leagues.leagues);

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
            <League key={league.id} id={league.id} data={league}/>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Leagues
