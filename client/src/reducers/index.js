import { combineReducers } from 'redux';

import ui from './ui';
import user from './user';
import products from './products';

const reducers = combineReducers({
  ui,
  user,
  products,
});

export default reducers;
