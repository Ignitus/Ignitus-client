import React from 'react';
import styled from '@emotion/styled';

import { Switch, Route } from 'react-router-dom';
import { DashboardRoutes } from './ignitus-Routes/ignitus-DashboardRoutes';
import { PublicRoutes } from './ignitus-Routes/ignitus-PublicRoutes';
import { UserInterfaceBookRoutes } from './ignitus-Routes/ignitus-UserInterfaceBookRoutes';
import { withErrorBoundary, GreyBackground } from './ignitus-Shared';

import './App.css';
import { StudentProfile } from './ignitus-Dashboard/ignitus-DashboardSettings/generalSettings/Components';

const Root = styled.div`
  background: ${GreyBackground};
`;

export const App = withErrorBoundary(() => (
  <Root>
    <Switch>
      <Route path="/dashboard" component={DashboardRoutes} />
      <Route path="/settings" component={StudentProfile} />
      <Route path="/interface" component={UserInterfaceBookRoutes} />
      <Route path="/" component={PublicRoutes} />
    </Switch>
  </Root>
));
