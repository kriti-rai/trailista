import { combineReducers } from 'redux';
import hikeReducer from './hikeReducer';

const rootReducer = combineReducers({
  hikes: hikeReducer
});

export default rootReducer;
