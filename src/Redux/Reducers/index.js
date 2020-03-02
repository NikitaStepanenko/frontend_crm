import { combineReducers } from 'redux';
import projectReducer from './project.js';


const allReducers = combineReducers({
  project: projectReducer,
});

export default allReducers;
