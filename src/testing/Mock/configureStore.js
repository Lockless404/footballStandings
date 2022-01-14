import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import leaguesReducer from './League/league';
import tableReducer from './Table/table';

const reducer = combineReducers({
  leaguesReducer,
  tableReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;