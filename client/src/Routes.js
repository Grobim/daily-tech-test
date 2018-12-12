import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import LoadingComponent from './components/LoadingComponent';

const Home = Loadable({
  loader: () => import('./components/Home'),
  loading: LoadingComponent,
});

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;
