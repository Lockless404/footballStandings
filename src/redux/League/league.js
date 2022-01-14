// actions
const FETCH_LEAGUES = 'FETCH_LEAGUES';

// constant apiUrl
const leaguesUrl = 'https://api-football-standings.azharimm.site/leagues';

// intial state
const initialState = {
  leagues: [],
};

// create action creators return object
export const getLeagues = (payload) => ({
  type: FETCH_LEAGUES,
  payload,
});

// Action creator that return a function
export const getLeaguesFromApi = () => async (dispatch) => {
  const pull = await fetch(leaguesUrl);
  const res = await pull.json();
  const duds = ['aus.1', 'bra.1', 'por.1', 'chn.1', 'idn.1', 'mys.1', 'sgp.1', 'tha.1', 'tur.1', 'uga.1'];

  dispatch(getLeagues(res.data.filter(({ id }) => !duds.includes(id))));
};

// Create a reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEAGUES:
      return { ...state, leagues: action.payload };

    default:
      return state;
  }
};

export default reducer;
