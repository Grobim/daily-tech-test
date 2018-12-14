import React, { useCallback } from 'react';

import { useMappedState, useDispatch } from 'redux-react-hook';

import Button from '@material-ui/core/Button';

import Products from '../containers/Products';
import AddProductDialog from '../containers/AddProductDialog';

import { isAdminSeletor } from '../selectors/user';

import { openAddProductModal } from '../actionCreators/ui';

const mapState = state => ({
  isAdmin: isAdminSeletor(state),
});

const Home = () => {
  const { isAdmin } = useMappedState(mapState);

  const dispatch = useDispatch();
  const openModal = useCallback(() => {
    dispatch(openAddProductModal());
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {isAdmin && (
        <React.Fragment>
          <Button
            variant="contained"
            color="primary"
            onClick={openModal}
          >
            Add a Product
          </Button>
          <AddProductDialog />
        </React.Fragment>
      )}
      <Products />
    </div>
  );
};

export default Home;
