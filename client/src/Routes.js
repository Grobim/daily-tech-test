import React from 'react';
import { Switch } from 'react-router-dom';

import Loadable from 'react-loadable';

import LoadingComponent from './components/LoadingComponent';
import DefaultLayout from './pages/DefaultLayout';

const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: LoadingComponent,
});

const Routes = () => (
  <Switch>
    <DefaultLayout exact path="/" component={Home} />
  </Switch>
);

export default Routes;
