import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "../ignitus-Navigation";
import Footer from "../ignitus-Footer";

import Contributors from "../ignitus-Contributors";
import GetStarted from "../ignitus-GetStarted";
import Introduction from "../ignitus-Introduction";
import Testimonial from "../ignitus-Testimonial";
import WhatWeProvide from "../ignitus-WhatWeDo";
import Partner from "../ignitus-Partners";

import LoginProfessor from "../ignitus-ProfessorLogin";
import SignupProfessor from "../ignitus-ProfessorSignUp";
import LoginStudent from "../ignitus-StudentLogin";
import SignupStudent from "../ignitus-StudentSignUp";
import Interest from "../ignitus-StudentSignUp/Components/Interest";
import Email from "../ignitus-StudentSignUp/Components/Email";
import Email_Confirmed from "../ignitus-StudentSignUp/Components/Email_Confirmed";
import commonLoginUI from "../ignitus-Common-Auth-Student-Prof/Components/commonLoginUI";
import commonSignUpUI from "../ignitus-Common-Auth-Student-Prof/Components/commonSignUpUI";

import loader from "../ignitus-Assets/Images/loader2.gif";
import Loadable from "react-loadable";

import {Notfound} from './notFound';

// RouteBased CodeSplitting.

const Loading = () => (
  <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto loader">
    <div className="loader">
      <img src={loader} alt="Loading..." />
    </div>
  </div>
);

const AboutUs = Loadable({
  loader: () => import("../ignitus-About/Components/About"),
  loading: Loading
});

export const PublicRoutes = props => {
  return (
    <React.Fragment>
      <Navigation.components.Navigation id={35} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div className="content">
              <Introduction.components.Introduction />
              <WhatWeProvide.components.WhatWeProvide />
              <Contributors.components.Contributors />
              <Partner.components.Partner />
              <Testimonial.containers.TestimonialContainer />
              <GetStarted.components.GetStarted />
            </div>
          )}
        />
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
        <Route 
          path="/signup/interest"
          component={Interest} 
        />
        <Route 
          path="/signup/email"
          component={Email} 
        />
        <Route 
          path="/signup/email_confirmed"
          component={Email_Confirmed} 
        />
        <Route path="/Signup" component={commonSignUpUI} />
        <Route path="/Login" component={commonLoginUI} />
        <Route
          path="/"
          component={Notfound}
        />
      </Switch>
      <Footer.components.Footer />
    </React.Fragment>
  );
};
