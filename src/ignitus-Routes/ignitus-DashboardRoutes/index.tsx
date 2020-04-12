/* eslint-disable import/no-default-export */
/* eslint-disable import/extensions */
import React, {Suspense, lazy, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import PrivateRoute from '../ignitus-PrivateRoutes';
import dashBoardHeader from '../../ignitus-Dashboard/ignitus-DashboardHeader';
import {Notfound} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-NotFound/Components';
import {Loading} from '../../ignitus-Shared/ignitus-Utilities/Components/loader';

const LazyStudentDashBoard = lazy(() =>
  import('../../ignitus-Dashboard/ignitus-StudentDashboard/Components'),
);

const DashboardRoutes = () => (
  <React.Fragment>
    <dashBoardHeader.containers.dashboardHeaderContainer />
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <Switch>
        <Route exact path="/" render={() => <Notfound />} />
        <PrivateRoute path="/dashboard" Component={LazyStudentDashBoard} />
      </Switch>
    </Suspense>
  </React.Fragment>
);

export default DashboardRoutes;
