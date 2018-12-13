import React, { useState, useCallback } from 'react';
import { Route } from 'react-router-dom';

import { useDispatch, useMappedState } from 'redux-react-hook';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import LoginDialogContainer from '../containers/LoginDialogContainer';

import { openLoginModal, openSignupModal } from '../actionCreators/ui';
import { logOut } from '../actionCreators/user';
import { isConnectedSelector } from '../selectors/user';

import styles from './DefaultLayout.styles';

const mapState = state => ({
  isConnected: isConnectedSelector(state),
});

const DefaultLayout = ({
  component: Component,
  classes,
  theme,
  ...rest
}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const { isConnected } = useMappedState(mapState);

  const dispatch = useDispatch();

  const handleLoginClick = useCallback(() => dispatch(openLoginModal()), []);
  const handleSignupClick = useCallback(() => dispatch(openSignupModal()), []);
  const handleLogoutClick = useCallback(() => dispatch(logOut()), []);

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button key={0} onClick={() => setMobileDrawerOpen(false)}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Un peu de text" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap className={classes.grow}>
                Responsive drawer
              </Typography>
              {isConnected
                ? <Button color="inherit" onClick={handleLogoutClick}>Logout</Button>
                : (
                  <React.Fragment>
                    <Button color="inherit" onClick={handleSignupClick}>Signup</Button>
                    <Button color="inherit" onClick={handleLoginClick}>Login</Button>
                  </React.Fragment>
                )
              }
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer}>
            <Hidden smUp implementation="css">
              <Drawer
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileDrawerOpen}
                onClose={() => setMobileDrawerOpen(false)}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Component {...matchProps} />
          </main>
          <LoginDialogContainer />
        </div>
      )}
    />
  );
};

export default withStyles(styles, { withTheme: true })(DefaultLayout);
