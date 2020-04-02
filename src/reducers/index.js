import { combineReducers } from "redux";

import events from './events'
import editing from './editing'

const reducers = combineReducers({
  events,
  editing
});

export default reducers