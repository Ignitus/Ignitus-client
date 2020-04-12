import React, {Suspense, lazy} from 'react';
import {Switch, Route} from 'react-router-dom';
import {PublicRoutes} from './ignitus-Routes/ignitus-PublicRoutes';
import {withErrorBoundary} from './ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';

import './App.scss';

const LazyUserInterfaceBook = lazy(() =>
  import('./ignitus-Routes/ignitus-UserInterfaceBookRoutes'),
);

const LazyDashBoardRoutes = lazy(() =>
  import('./ignitus-Routes/ignitus-DashboardRoutes'),
);

const App = () => (
  <div className="content-container">
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/dashboard" component={LazyDashBoardRoutes} />
          <Route path="/interface" component={LazyUserInterfaceBook} />
          <Route path="/" component={PublicRoutes} />{' '}
        </Switch>
      </Suspense>
    </Switch>
  </div>
);

export default withErrorBoundary(App);
