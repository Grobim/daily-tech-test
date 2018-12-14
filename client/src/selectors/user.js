import { USER_CONNECTED_STATE } from '../reducers/user';

const rootUserSelector = state => state.user;

const isConnectedSelector = state => rootUserSelector(state).state === USER_CONNECTED_STATE;
const userSelector = state => rootUserSelector(state).user;
const isAdminSeletor = state => isConnectedSelector(state)
  && userSelector(state).role === 'Admin';

export {
  isConnectedSelector,
  userSelector,
  isAdminSeletor,
};
