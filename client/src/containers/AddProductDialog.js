import React, { useCallback } from 'react';

import { useDispatch, useMappedState } from 'redux-react-hook';

import AddProductDialogComponent from '../components/AddProductDialog';

import { addProduct } from '../actionCreators/products';
import { closeAddProductModal } from '../actionCreators/ui';

import { addProductModalOpenedSelector } from '../selectors/ui';

const mapState = state => ({
  open: addProductModalOpenedSelector(state),
});

const AddProductDialog = (props) => {
  const stateProps = useMappedState(mapState);

  const dispatch = useDispatch();
  const dispatchProps = {
    onSubmit: useCallback((newUser) => {
      dispatch(addProduct(newUser));
    }, []),
    onClose: useCallback(() => {
      dispatch(closeAddProductModal());
    }, []),
  };

  return (
    <AddProductDialogComponent
      {...stateProps}
      {...dispatchProps}
      {...props}
    />
  );
};

export default AddProductDialog;
