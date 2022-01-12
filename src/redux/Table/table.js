// actions
const FETCH_TABLE = 'FETCH_TABLE';

// intial state
const initialState = {
  table: [],
};

// create action creators return object
export const getTable = (payload) => ({
  type: FETCH_TABLE,
  payload,
});

// Action creator that return a function
export const getTableFromApi = (year, id) => async (dispatch) => {
  const pull = await fetch(`https://api-football-standings.azharimm.site/leagues/${id}/standings?season=${year}&sort=asc`);
  const response = await pull.json();
  const res = Object.entries(response)
  dispatch(getTable(res));
};

// Create a reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TABLE:
      return { ...state, table: action.payload };

    default:
      return state;
  }
};

export default reducer;