import React from 'react';

import { useMappedState } from 'redux-react-hook';

import Drawer from '../components/Drawer';

import { isConnectedSelector } from '../selectors/user';

const mapState = state => ({
  isConnected: isConnectedSelector(state),
});

const DrawerContainer = (props) => {
  const stateProps = useMappedState(mapState);

  return (
    <Drawer
      {...stateProps}
      {...props}
    />
  );
};

export default DrawerContainer;
