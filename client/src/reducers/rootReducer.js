import { combineReducers } from 'redux';
import hikesReducer from './hikesReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  hikes: hikesReducer,
  user: userReducer,
});

export default rootReducer;
