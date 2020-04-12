import React, {Suspense, lazy} from 'react';
import {Switch, Route} from 'react-router-dom';

import {Notfound} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-NotFound/Components';
import {Footer} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-Footer/Components';
import {OptionalNavigation as Navigation} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-Navigation/Components';
import {Home} from '../../ignitus-HomePage/ignitus-Home/Components/index';

import JobConfirmation from '../../ignitus-Careers/ignitus-JobConfirmation';
import loader from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Logos/ignitusLoader.gif';
import AuthenticationRoutes from '../ignitus-AuthenticationRoutes';

/**
 * Route-based code splitting.
 * Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app.
 * While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.
 * The best way to introduce code-splitting into your app is through the dynamic import() syntax.
 * The React.lazy function lets you render a dynamic import as a regular component.
 * https://reactjs.org/docs/code-splitting.html
 */

const Loading: React.FunctionComponent = () => (
  <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto loader">
    <div className="loader">
      <img src={loader} alt="Loading..." />
    </div>
  </div>
);

const LazyAboutComponent = lazy(() =>
  import('../../ignitus-AboutPage/ignitus-About/Components'),
);

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
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <Switch>
          <Route path="/aboutus" component={LazyAboutComponent} />
        </Switch>
      </Suspense>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path={['/login', '/signup', '/flow']}
          component={AuthenticationRoutes}
        />
        <Route
          path="/jobConfirmation"
          component={JobConfirmation.components.JobConfirmation}
        />
        <Route path="/" component={Notfound} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};
