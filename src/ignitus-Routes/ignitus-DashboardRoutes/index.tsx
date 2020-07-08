/* eslint-disable import/no-default-export */
/* eslint-disable import/extensions */
import React, { Suspense, lazy, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Notfound } from '../../ignitus-Shared';
import { LazyLoader } from '../../ignitus-Shared/ignitus-DesignSystem/shared';
import { PrivateRoute } from '../ignitus-PrivateRoutes';

const LazyStudentDashBoard = lazy(() =>
  import('../../ignitus-Dashboard/ignitus-StudentDashboard/Components'),
);

const LazyDashBoardNavigation = lazy(() =>
  import('../../ignitus-Dashboard/ignitus-DashboardHeader/Containers'),
);

const LazyGeneralSettings = lazy(() =>
  import(
    '../../ignitus-Dashboard/ignitus-DashboardSettings/generalSettings/Components'
  ),
);

export const DashboardRoutes = () => (
  <React.Fragment>
    <Suspense
      fallback={
        <Fragment>
          <LazyLoader />
        </Fragment>
      }
    >
      <LazyDashBoardNavigation />
      <Switch>
        <Route exact path="/" render={() => <Notfound />} />
        <Route path="/dashboard/settings" component={LazyGeneralSettings} />
        <PrivateRoute path="/dashboard" Component={LazyStudentDashBoard} />
      </Switch>
    </Suspense>
  </React.Fragment>
);
