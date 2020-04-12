/* eslint-disable import/no-default-export */
/* eslint-disable import/extensions */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../ignitus-PrivateRoutes';
import Dashboard from '../../ignitus-Dashboard/ignitus-StudentDashboard';
import dashBoardHeader from '../../ignitus-Dashboard/ignitus-DashboardHeader';
import { Notfound } from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-NotFound/Components';

// eslint-disable-next-line import/prefer-default-export
const DashboardRoutes = () => (
  <React.Fragment>
    <dashBoardHeader.containers.dashboardHeaderContainer />
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Notfound />
        )}
      />
      <PrivateRoute path="/dashboard" Component={Dashboard.components.Dashboard} />
    </Switch>
  </React.Fragment>
);

export default DashboardRoutes;
