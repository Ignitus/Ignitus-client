import React, { Component, Fragment } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Navigation from './ignitus-Navigation';
import Footer from './ignitus-Footer';
import Contributors from './ignitus-Contributors';
import GetStarted from './ignitus-GetStarted';
import Introduction from './ignitus-Introduction';
import Testimonial from './ignitus-Testimonial';
import CardLayout from './ignitus-WhatWeDo';
import Partner from './ignitus-Partners';

import AboutUs from './ignitus-About';
import LoginProfessor from './ignitus-ProfessorLogin';
import SignupProfessor from './ignitus-ProfessorSignUp';
import LoginStudent from './ignitus-StudentLogin';
import SignupStudent from './ignitus-StudentSignUp';
import loader from './Assets/Images/loader.gif';
import data from './Data/data-card-layout';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { isLoading: true };
  }

  componentDidMount() {
    /* questionable use of setTimeout
    I would implement simply a call to setState
    this.setState({ isLoading: true }); */

    setTimeout(() => this.setState({ isLoading: false }), 3000);
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto ">
          <img src={loader} className="_loader" alt="loading" />
        </div>
      );
    }
    return (
    <Router>
        <Fragment>
          <Navigation.components.Navigation />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div>
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
          <Footer.components.Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
