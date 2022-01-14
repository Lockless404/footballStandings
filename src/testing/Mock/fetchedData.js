const data = () => Promise.resolve(
  {
    data: [
      {
        id: 'arg.1',
        name: 'Argentine Liga Profesional de Fútbol',
        slug: 'argentine-liga-profesional-de-futbol',
        abbr: 'Prim A',
        logos: {
          light: 'https://a.espncdn.com/i/leaguelogos/soccer/500/1.png',
          dark: 'https://a.espncdn.com/i/leaguelogos/soccer/500-dark/1.png',
        },
      },
      {
        id:'eng.1',
        name:'English Premier League',
        slug:'english-premier-league',
        abbr:'Prem',
        logos: {
          light:'https://a.espncdn.com/i/leaguelogos/soccer/500/23.png',
          dark:'https://a.espncdn.com/i/leaguelogos/soccer/500-dark/23.png',
        },
      },
    ],
  }
);

export default data;
