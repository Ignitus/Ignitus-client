/* eslint-disable import/no-default-export */
/* eslint-disable import/extensions */
import React, {Suspense, lazy, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import PrivateRoute from '../ignitus-PrivateRoutes';
import dashBoardHeader from '../../ignitus-Dashboard/ignitus-DashboardHeader';
import {Notfound} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-NotFound/Components';
import { LazyLoader } from '../../ignitus-Shared/ignitus-DesignSystem/shared';

const LazyStudentDashBoard = lazy(() =>
  import('../../ignitus-Dashboard/ignitus-StudentDashboard/Components'),
);

export const DashboardRoutes = () => (
  <React.Fragment>
    <dashBoardHeader.containers.dashboardHeaderContainer />
    <Suspense
      fallback={
        <Fragment>
          <LazyLoader />
        </Fragment>
      }
    >
      <Switch>
        <Route exact path="/" render={() => <Notfound />} />
        <PrivateRoute path="/dashboard" Component={LazyStudentDashBoard} />
      </Switch>
    </Suspense>
  </React.Fragment>
);

