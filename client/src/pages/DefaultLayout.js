import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '../containers/AppBar';
import Drawer from '../containers/Drawer';
import LoginDialog from '../containers/LoginDialog';

import styles from './DefaultLayout.styles';

const DefaultLayout = ({
  component: Component,
  classes,
  theme,
  ...rest
}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className={classes.root}>
          <AppBar
            onMenuClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
          />
          <Drawer
            mobileDrawerOpen={mobileDrawerOpen}
            onDrawerClose={() => setMobileDrawerOpen(false)}
          />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Component {...matchProps} />
          </main>
          <LoginDialog />
        </div>
      )}
    />
  );
};

export default withStyles(styles, { withTheme: true })(DefaultLayout);
