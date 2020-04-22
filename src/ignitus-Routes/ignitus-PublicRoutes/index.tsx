import React, {Suspense, lazy, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Notfound, Footer, OptionalNavigation as Navigation} from '../../ignitus-Shared';
import {Home} from '../../ignitus-HomePage/ignitus-Home/Components/index';
import {AuthenticationRoutes} from '../ignitus-AuthenticationRoutes';
import {LazyLoader} from '../../ignitus-Shared/ignitus-DesignSystem/shared';
import { StudentProfile } from '../../ignitus-Profile/ignitus-StudentProfile/Components';

/**
 * Route-based code splitting.
 * Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app.
 * While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.
 * The best way to introduce code-splitting into your app is through the dynamic import() syntax.
 * The React.lazy function lets you render a dynamic import as a regular component.
 * https://reactjs.org/docs/code-splitting.html
 */

const LazyAboutComponent = lazy(() =>
  import('../../ignitus-AboutPage/ignitus-About/Components'),
);

export const PublicRoutes: React.FunctionComponent = () => {
  return (
    <Fragment>
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
          <Fragment>
            <LazyLoader />
          </Fragment>
        }
      >
        <Switch>
          <Route path="/aboutus" component={LazyAboutComponent} />
          <Route exact path="/" component={Home} />
          <Route
            path={['/login', '/signup', '/flow']}
            component={AuthenticationRoutes}
          />
          <Route path="/profile" component={StudentProfile} />
          <Route path="/" component={Notfound} />
        </Switch>
      </Suspense>
      <Footer />
    </Fragment>
  );
};
