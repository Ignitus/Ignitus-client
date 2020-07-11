/* eslint-disable import/extensions */
import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { StudentSignUpFlow } from '../../ignitus-Authentication/ignitus-StudentSignUpFlow';
import { LazyLoader } from '../../ignitus-Shared/ignitus-DesignSystem/shared';

import {
  CommonLoginUI,
  CommonSignUpUI,
} from '../../ignitus-Authentication/ignitus-CommonAuthenticationInterface/Components';

const LazyLogInStudent = lazy(() =>
  import(
    '../../ignitus-Authentication/ignitus-CommonLoginInterface/Containers/studenLogin'
  ),
);

const LazySignUpStudent = lazy(() =>
  import(
    '../../ignitus-Authentication/ignitus-CommonSignupInterface/Containers/studentSignup'
  ),
);

const LazyLogInProfessor = lazy(() =>
  import(
    '../../ignitus-Authentication/ignitus-CommonLoginInterface/Containers/professorLogin'
  ),
);

const LazyProfessorSignUp = lazy(() =>
  import(
    '../../ignitus-Authentication/ignitus-CommonSignupInterface/Containers/professorSignup'
  ),
);

export const AuthenticationRoutes: React.FunctionComponent = () => (
  <Fragment>
    <Suspense
      fallback={
        <Fragment>
          <LazyLoader />
        </Fragment>
      }
    >
      <Switch>
        <Route path="/login/professor" component={LazyLogInProfessor} />
        <Route path="/signup/professor" component={LazyProfessorSignUp} />
        <Route path="/login/student" component={LazyLogInStudent} />
        <Route path="/signup/student" component={LazySignUpStudent} />
        <Route path="/signup" component={CommonSignUpUI} />
        <Route path="/login" component={CommonLoginUI} />
        <Route path="/flow/studentSignUpFlow" component={StudentSignUpFlow} />
      </Switch>
    </Suspense>
  </Fragment>
);
