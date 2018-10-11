
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
    setTimeout(() => this.setState({ isLoading: false }), 3000);
  }

  render() {
    const { state: { isLoading } } = this;
    if (isLoading) {
      return (
        <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto ">
          <img src={loader} className="loader" />
        </div>
      );
    }
    return (
      <div className="content-container">
        <header>
          <Navigation.components.Navigation />
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div className="content">
                <Introduction.components.Introduction />
                <CardLayout.components.CardLayout data={data} />
                <Contributors.components.Contributors />
                <Partner.components.Partner />
                <Testimonial.containers.TestimonialContainer />
                <GetStarted.components.GetStarted />
              </div>
            )}
          />
          <Route path="/aboutus" component={AboutUs.components.About} />
          <Route path="/login/professor" component={LoginProfessor.components.Login} />
          <Route path="/signup/professor" component={SignupProfessor.components.Signup} />
          <Route path="/login/student" component={LoginStudent.components.Login} />
          <Route path="/signup/student" component={SignupStudent.components.Signup} />
          <Route path="/contributors" component={Contributors.components.Contributors} />
        </Switch>
        <Footer.components.Footer />
      </div>
    );
  }
}

export default App;
