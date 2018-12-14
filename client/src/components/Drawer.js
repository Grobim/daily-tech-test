import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import ListIcon from '@material-ui/icons/ViewList';
import AccountIcon from '@material-ui/icons/AccountBox';
import MaterialDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

import styles from './Drawer.styles';

const Drawer = ({
  classes,
  theme,
  mobileDrawerOpen,
  onDrawerClose,
  isConnected,
}) => {
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem
          to="/"
          href="/"
          button
          key={0}
          onClick={onDrawerClose}
          component={Link}
        >
          <ListItemIcon><ListIcon /></ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
        {isConnected && (
          <React.Fragment>
            <ListItem
              to="/profile"
              href="/profile"
              button
              key={1}
              onClick={onDrawerClose}
              component={Link}
            >
              <ListItemIcon><AccountIcon /></ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </React.Fragment>
        )}
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <MaterialDrawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileDrawerOpen}
          onClose={onDrawerClose}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </MaterialDrawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <MaterialDrawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </MaterialDrawer>
      </Hidden>
    </nav>
  );
};

Drawer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  theme: PropTypes.objectOf(PropTypes.any).isRequired,
  mobileDrawerOpen: PropTypes.bool.isRequired,
  onDrawerClose: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

export default withStyles(styles, { withTheme: true })(Drawer);
