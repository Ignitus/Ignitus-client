

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

import AboutUs from '../ignitus-About';
import LoginProfessor from '../ignitus-ProfessorLogin';
import SignupProfessor from '../ignitus-ProfessorSignUp';
import LoginStudent from '../ignitus-StudentLogin';
import SignupStudent from '../ignitus-StudentSignUp';

export const PublicRoutes = (props) => { 
  return(
      <div>
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
                  <Route path="/aboutus" component={AboutUs.components.About} />
                  <Route path="/login/professor" component={LoginProfessor.components.Login} />
                  <Route path="/signup/professor" component={SignupProfessor.components.Signup} />
                  <Route path="/login/student" component={LoginStudent.components.Login} />
                  <Route path="/signup/student" component={SignupStudent.containers.Signup} />
               </Switch>
          <Footer.components.Footer />
      </div>
  )
}