import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import DashboardComponent from './DashboardComponent';

const RoutingFile = () => {
  return (
    <Router>
      <Route exact path="/" component={LoginComponent} />
      <Route path="/dashboard" component={DashboardComponent} />
    </Router>
  );
}

export default RoutingFile;
