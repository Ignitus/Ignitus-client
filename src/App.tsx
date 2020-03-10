
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withErrorBoundary } from './shared/Components/ErrorBoundary';
import { ProtectedRoutes } from './ignitus-Routes/protectedRoutes';
// eslint-disable-next-line import/named
import { PublicRoutes } from './ignitus-Routes/publicRoutes';
import './App.scss';

const App = () => (
  <div className="content-container">
    <Switch>
      <Route path="/dashboard" component={ProtectedRoutes} />
      <Route path="/" component={PublicRoutes} />
    </Switch>
  </div>
);

export default withErrorBoundary(App);
