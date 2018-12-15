import React, { useCallback } from 'react';

import { useMappedState, useDispatch } from 'redux-react-hook';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
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
  divider: {
    margin: `${theme.spacing.unit}px 0`,
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
      <Typography variant="h4">Products</Typography>
      <Divider className={classes.divider} variant="fullWidth" />
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
