import { combineReducers } from 'redux';
import hikesReducer from './hikesReducer';
import userReducer from './userReducer';
import alertsReducer from './alertsReducer';

const rootReducer = combineReducers({
  hikes: hikesReducer,
  user: userReducer,
  alerts: alertsReducer
});

export default rootReducer;
