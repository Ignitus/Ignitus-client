
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {withErrorBoundary} from './ignitus-Internals';
import { ProtectedRoutes } from './ignitus-Routes/protectedRoutes';
import { PublicRoutes } from './ignitus-Routes/publicRoutes';

import loader from './ignitus-Assets/Images/loader.gif';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = { isLoading: true };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 2000);
  }

  render() {
    const { state: { isLoading } } = this;
    if (isLoading) {
      return (
        <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto loader">
          <div className="loader">
            <img src={loader} alt="Loading..." />
          </div>
        </div>
      );
    }
    return (
      <div className="content-container">
<<<<<<< HEAD
        <header>
          <Navigation />
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div className="content">
                <Introduction />
                <CardLayout data={data} />
                <Contributors />
                <Partner.containers.partnerContainer />
                <Testimonial.containers.TestimonialContainer />
                <GetStarted />
              </div>
            )}
          />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/login/professor" component={LoginProfessor} />
          <Route path="/signup/professor" component={SignupProfessor} />
          <Route path="/login/student" component={LoginStudent} />
          <Route path="/signup/student" component={SignupStudent} />
          <Route path="/contributors" component={Contributors} />
        </Switch>
        <Footer />
=======
        <Switch>
          <Route path="/dashboard" component={ProtectedRoutes} />
          <Route path="/" component={PublicRoutes} />
        </Switch>
>>>>>>> upstream/master
      </div>
    );
  }
}

export default withErrorBoundary(App);
