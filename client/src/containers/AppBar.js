import React, { useCallback } from 'react';

import { useMappedState, useDispatch } from 'redux-react-hook';

import AppBar from '../components/AppBar';

import { isConnectedSelector } from '../selectors/user';

import { openLoginModal, openSignupModal } from '../actionCreators/ui';
import { logOut } from '../actionCreators/user';

const mapState = state => ({
  isConnected: isConnectedSelector(state),
});

const AppBarContainer = (props) => {
  const stateProps = useMappedState(mapState);

  const dispatch = useDispatch();
  const dispatchProps = {
    onLoginClick: useCallback(() => dispatch(openLoginModal()), []),
    onSignupClick: useCallback(() => dispatch(openSignupModal()), []),
    onLogoutClick: useCallback(() => dispatch(logOut()), []),
  };

  return (
    <AppBar
      {...stateProps}
      {...dispatchProps}
      {...props}
    />
  );
};

export default AppBarContainer;
