import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import leaguesReducer from '../../redux/League/league';
import tableReducer from '../../redux/Table/table';

const reducer = combineReducers({
  leaguesReducer,
  tableReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
