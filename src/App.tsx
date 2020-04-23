import React from 'react';
import styled from '@emotion/styled';

import {Switch, Route} from 'react-router-dom';
import {DashboardRoutes} from './ignitus-Routes/ignitus-DashboardRoutes';
import {PublicRoutes} from './ignitus-Routes/ignitus-PublicRoutes';
import {UserInterfaceBookRoutes} from './ignitus-Routes/ignitus-UserInterfaceBookRoutes';
import {withErrorBoundary, GreyBackground} from './ignitus-Shared';

import './App.css';
const Root = styled.div`
  background: ${GreyBackground};
`;

const App = () => (
  <Root>
    <Switch>
      <Route path="/dashboard" component={DashboardRoutes} />
      <Route path="/interface" component={UserInterfaceBookRoutes} />
      <Route path="/" component={PublicRoutes} />
    </Switch>
  </Root>
);

export default withErrorBoundary(App);
