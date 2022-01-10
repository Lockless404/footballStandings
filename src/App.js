import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header';
import League from './components/League';
import { getLeaguesFromApi } from './redux/League/league';

function App() {
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

  useEffect(() => {
    if (!leagues.leagues[0]) {
      dispatch(getLeaguesFromApi());
    }
  }, []);

  console.log(leagues.leagues.data);

  return (
    <div className="App">
      <Header />
      <hr />
      <section className="leagues">
        {data.data.map((league) => (
          <League key={league.id} id={league.id} data={league}/>
        ))}
      </section>
    </div>
  );
}

export default App;
