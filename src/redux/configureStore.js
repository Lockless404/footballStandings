import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import leaguesReducer from './League/league';
import tableReducer from './Table/table';

const reducer = combineReducers({
  leaguesReducer,
  tableReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
