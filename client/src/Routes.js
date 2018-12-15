import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Loadable from 'react-loadable';

import LoadingComponent from './components/LoadingComponent';
import DefaultLayout from './pages/DefaultLayout';

const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: LoadingComponent,
});

const Profile = Loadable({
  loader: () => import('./pages/Profile'),
  loading: LoadingComponent,
});

const Routes = () => (
  <Switch>
    <DefaultLayout exact path="/" component={Home} />
    <DefaultLayout exact path="/profile" component={Profile} />
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);

export default Routes;
