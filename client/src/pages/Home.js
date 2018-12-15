import React, { useCallback } from 'react';

import { useMappedState, useDispatch } from 'redux-react-hook';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import Products from '../containers/Products';
import AddProductDialog from '../containers/AddProductDialog';

import { isAdminSeletor } from '../selectors/user';

import { openAddProductModal } from '../actionCreators/ui';

const mapState = state => ({
  isAdmin: isAdminSeletor(state),
});

const styles = theme => ({
  addButton: {
    marginBottom: theme.spacing.unit * 3,
  },
});

const Home = ({ classes }) => {
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
            className={classes.addButton}
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

export default withStyles(styles)(Home);
