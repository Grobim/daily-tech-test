import React from 'react';

import { Redirect } from 'react-router-dom';
import { useMappedState } from 'redux-react-hook';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { userSelector } from '../selectors/user';

import { useJsonFetch } from '../hooks';

const mapState = state => ({
  user: userSelector(state),
});

const styles = theme => ({
  divider: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

const Profile = ({ classes }) => {
  const { user } = useMappedState(mapState);
  if (!user) {
    return <Redirect to="/" />;
  }

  const boughtProducts = useJsonFetch(`/users/${user.$loki}/bought-products`);

  return (
    <div>
      <Typography variant="h4">Profile</Typography>
      <Divider className={classes.divider} variant="fullWidth" />
      <Typography variant="h6">Name</Typography>
      <Typography variant="body1">{user.username}</Typography>
      <Typography variant="h6">Email</Typography>
      <Typography variant="body1">{user.email}</Typography>
      {boughtProducts && (
        <pre>{JSON.stringify(boughtProducts, null, 2)}</pre>
      )}
    </div>
  );
};

export default withStyles(styles)(Profile);
