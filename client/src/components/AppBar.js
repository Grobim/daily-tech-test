import React from 'react';
import PropTypes from 'prop-types';

import MaterialAppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import styles from './AppBar.styles';

const AppBar = ({
  isConnected,
  classes,
  onMenuClick,
  onLoginClick,
  onSignupClick,
  onLogoutClick,
}) => (
  <MaterialAppBar position="fixed" className={classes.appBar}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={onMenuClick}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" noWrap className={classes.grow}>
        Dailymotion technical test
      </Typography>
      {isConnected
        ? <Button color="inherit" onClick={onLogoutClick}>Logout</Button>
        : (
          <React.Fragment>
            <Button color="inherit" onClick={onSignupClick}>Signup</Button>
            <Button color="inherit" onClick={onLoginClick}>Login</Button>
          </React.Fragment>
        )
      }
    </Toolbar>
  </MaterialAppBar>
);

AppBar.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  onMenuClick: PropTypes.func.isRequired,
  onLoginClick: PropTypes.func.isRequired,
  onSignupClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(AppBar);
