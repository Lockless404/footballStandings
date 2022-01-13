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
  dispatch(getLeagues(res.data));
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