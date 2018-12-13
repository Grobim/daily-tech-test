import { USER_CONNECTED_STATE } from '../reducers/user';

const rootUserSelector = state => state.user;

const isConnectedSelector = state => rootUserSelector(state).state === USER_CONNECTED_STATE;
const userSelector = state => rootUserSelector(state).user;

export {
  isConnectedSelector,
  userSelector,
};
