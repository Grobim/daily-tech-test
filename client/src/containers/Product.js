import React from 'react';

import { useMappedState } from 'redux-react-hook';

import ProductComponent from '../components/Product';

import { isConnectedSelector } from '../selectors/user';

const mapState = state => ({
  isConnected: isConnectedSelector(state),
});

const Product = (props) => {
  const stateProps = useMappedState(mapState);

  return <ProductComponent {...stateProps} {...props} />;
};

export default Product;
