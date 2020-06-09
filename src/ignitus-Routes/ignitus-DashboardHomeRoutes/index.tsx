/* eslint-disable import/no-default-export */
/* eslint-disable import/extensions */
import React, { Suspense, lazy, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Notfound } from '../../ignitus-Shared';
import { LazyLoader } from '../../ignitus-Shared/ignitus-DesignSystem/shared';
import { PrivateRoute } from '../ignitus-PrivateRoutes';

const LazyPosts = lazy(() =>
  import(
    '../../ignitus-Dashboard/ignitus-DashboardHome/ignitus-Posts/Components'
  ),
);

// const LazyDashBoardNavigation = lazy(() =>
//   import(
//     '../../ignitus-Dashboard/ignitus-DashboardHome/ignitus-DashboardHomeHeader/Components'
//   ),
// );

export const DashboardHomeRoutes = () => (
  <React.Fragment>
    <Suspense
      fallback={
        <Fragment>
          <LazyLoader />
        </Fragment>
      }
    >
      <Switch>
        <PrivateRoute path="/ignitus-dashboard" Component={LazyPosts} />
        <Route exact path="/" render={() => <Notfound />} />
      </Switch>
    </Suspense>
  </React.Fragment>
);
