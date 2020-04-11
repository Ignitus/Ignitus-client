import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LoginProfessor from '../../ignitus-Authentication/ignitus-ProfessorLogin';
import SignupProfessor from '../../ignitus-Authentication/ignitus-ProfessorSignUp';
import LoginStudent from '../../ignitus-Authentication/ignitus-StudentLogin';
import SignupStudent from '../../ignitus-Authentication/ignitus-StudentSignUpFlow/ignitus-StudentSignUp';
import {
  CommonLoginUI,
  CommonSignUpUI,
} from '../../ignitus-Authentication/ignitus-CommonAuthenticationInterface/Components';

import {InterestFlow} from '../../ignitus-Authentication/ignitus-StudentSignUpFlow/ignitus-InterestFlow/Components/index';
import {EmailFlow} from '../../ignitus-Authentication/ignitus-StudentSignUpFlow/ignitus-EmailFlow/Components';
import {WelcomeFlow} from '../../ignitus-Authentication/ignitus-StudentSignUpFlow/ignitus-WelcomeFlow/Components';
import {EmailConfirmationFlow} from '../../ignitus-Authentication/ignitus-StudentSignUpFlow/ignitus-EmailConfirmationFlow/Components';
import {Notfound} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-NotFound/Components';
import {Footer} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-Footer/Components';
import {OptionalNavigation as Navigation} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-Navigation/Components';
import {Home} from '../../ignitus-HomePage/ignitus-Home/Components/index';

import JobConfirmation from '../../ignitus-Careers/ignitus-JobConfirmation';
import loader from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Logos/ignitusLoader.gif';
import Loadable from 'react-loadable';

// RouteBased CodeSplitting.

const Loading: React.FunctionComponent = () => (
  <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto loader">
    <div className="loader">
      <img src={loader} alt="Loading..." />
    </div>
  </div>
);

const AboutUs = Loadable({
  loader: () => import('../../ignitus-AboutPage/ignitus-About/Components'),
  loading: Loading,
});

export const PublicRoutes: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route
          exact
          path={['/', '/aboutus']}
          render={() => <Navigation transparentNavigation />}
        />
        <Route component={Navigation} />
      </Switch>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route
          path="/login/professor"
          component={LoginProfessor.components.Login}
        />
        <Route
          path="/signup/professor"
          component={SignupProfessor.components.Signup}
        />
        <Route
          path="/login/student"
          component={LoginStudent.containers.Login}
        />
        <Route
          path="/signup/student"
          component={SignupStudent.containers.Signup}
        />
        <Route path="/Signup" component={CommonSignUpUI} />
        <Route path="/Login" component={CommonLoginUI} />
        <Route
          path="/jobConfirmation"
          component={JobConfirmation.components.JobConfirmation}
        />
        <Route
          path="/flow/emailConfirmationFlow"
          component={EmailConfirmationFlow}
        />
        <Route path="/flow/emailFlow" component={EmailFlow} />
        <Route path="/flow/interestFlow" component={InterestFlow} />
        <Route path="/flow/welcomeFlow" component={WelcomeFlow} />

        <Route path="/" component={Notfound} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};
