import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Contributors from './components/Contributors';
import GetStarted from './components/GetStarted';
import Introduction from './components/Introduction';
import Testimonial from './components/Testimonial';
import CardLayout from './components/WhatWeDo';
import Partner from './components/Partners';
import Data from './components/Testimonial/Components/testimonial_data';
import AboutUs from './components/About';
import LoginProfessor from './components/Login';
import SignupProfessor from './components/SignUp';
import LoginStudent from './components/StudentLogin';
import SignupStudent from './components/StudentSignUp';
import loader from './Images/loader.gif';
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
              <CardLayout />
              <Contributors />
              <Partner />
              <Testimonial slides={Data} />
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
