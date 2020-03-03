import { combineReducers } from 'redux';
import projectReducer from './project';


const rootReducers = combineReducers({
  projects: projectReducer,
});

export default rootReducers;
