/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Notfound } from './notFound';
import PrivateRoute from './privateRoute';
import Dashboard from '../ignitus-Dashboard/ignitus-Student-Dashboard';
import dashBoardHeader from '../ignitus-Dashboard/ignitus-Dashboard-Header';

// eslint-disable-next-line import/prefer-default-export
export const ProtectedRoutes = () => (
  <div>
    <dashBoardHeader.containers.dashboardHeaderContainer />
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <div className="content">
            <Notfound />
          </div>
        )}
      />
      <PrivateRoute path="/dashboard" Component={Dashboard.components.Dashboard} />
    </Switch>
  </div>
);
