
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './ignitus-Navigation';
import Footer from './ignitus-Footer';
import Contributors from './ignitus-Contributors';
import GetStarted from './ignitus-GetStarted';
import Introduction from './ignitus-Introduction';
import Testimonial from './ignitus-Testimonial';
import CardLayout from './ignitus-WhatWeDo';
import Partner from './ignitus-Partners';

import AboutUs from './ignitus-About';
import LoginProfessor from './ignitus-Login';
import SignupProfessor from './ignitus-SignUp';
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
    setTimeout(() => this.setState({ isLoading: false }), 3000);
  }

  render() {
    const { state: { isLoading } } = this;
    if (isLoading) {
      return (
        <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto ">
          <img src={loader} className="_loader" />
        </div>
      );
    }
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Navigation />
              <Introduction />
              <CardLayout data={data} />
              <Contributors />
              <Partner.containers.partnerContainer />
              <Testimonial.containers.TestimonialContainer />
              <GetStarted />
              <Footer />
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
    );
  }
}

export default App;
