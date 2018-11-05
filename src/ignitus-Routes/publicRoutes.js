

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from '../ignitus-Navigation';
import Footer from '../ignitus-Footer';

import Contributors from '../ignitus-Contributors';
import GetStarted from '../ignitus-GetStarted';
import Introduction from '../ignitus-Introduction';
import Testimonial from '../ignitus-Testimonial';
import CardLayout from '../ignitus-WhatWeDo';
import Partner from '../ignitus-Partners';

// import AboutUs from '../ignitus-About';
import LoginProfessor from '../ignitus-ProfessorLogin/loadables';
import SignupProfessor from '../ignitus-ProfessorSignUp';
import LoginStudent from '../ignitus-StudentLogin';
import SignupStudent from '../ignitus-StudentSignUp';

import loader from '../ignitus-Assets/Images/loader.gif';
import Loadable from 'react-loadable';

// RouteBased CodeSplitting.

const Loading = () =>
                     <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto loader">
                        <div className="loader">
                          <img src={loader} alt="Loading..." />
                        </div>
                      </div>;


const AboutUs = Loadable({
  loader: () => import('../ignitus-About/Components/About'),
  loading: Loading,
});


export const PublicRoutes = (props) => { 
  return(
      <React.Fragment>
          <Navigation.components.Navigation />
              <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <div className="content">
                        <Introduction.components.Introduction />
                        <CardLayout.components.CardLayout/>
                        <Contributors.components.Contributors />
                        <Partner.components.Partner />
                        <Testimonial.containers.TestimonialContainer />
                        <GetStarted.components.GetStarted />
                      </div>
                    )}
                  />
                  <Route path="/aboutus" component={AboutUs} />
                  <Route path="/login/professor" component={LoginProfessor.components.Login} />
                  <Route path="/signup/professor" component={SignupProfessor.components.Signup} />
                  <Route path="/login/student" component={LoginStudent.containers.Login} />
                  <Route path="/signup/student" component={SignupStudent.containers.Signup} />
               </Switch>
          <Footer.components.Footer />
      </React.Fragment>
  )
}