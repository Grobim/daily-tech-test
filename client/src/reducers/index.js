import { combineReducers } from 'redux';

import ui from './ui';
import user from './user';

const reducers = combineReducers({
  ui,
  user,
});

export default reducers;
