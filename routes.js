import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
