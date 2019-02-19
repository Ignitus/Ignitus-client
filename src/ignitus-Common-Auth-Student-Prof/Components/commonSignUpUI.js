import React, { Component } from 'react';
import _ from 'lodash';
import { Redirect, Route, Link } from 'react-router-dom';
import { withErrorBoundary } from '../../ignitus-Internals';

import loader from '../../ignitus-Assets/Images/loader.gif';
import * as t from './Constants';
import logo from '../../ignitus-Assets/Images/ignitus-logo.png';
import '../Styles/style.scss';

const commonSignUpUI = () => (
  <div className="col-lg-12 col-sm-12 col-md-12 col-12 container-bg">
    <div className="p-5">

      <div className="col-lg-7 col-md-8 col-sm-12 col-8 box-container">
        <div className="login-signup m-top">
          <h3> Sign Up </h3>
          <p> Who are you? </p>
        </div>
        <div className="row mt-4">
          <div className=" col-lg-5 col-md-5 ml-lg-5 ml-md-4 col-sm-5 p-0 common-auth-ui-css">
            <p className="mb-5 text-center common-ui-text">Student</p>
            <Link to="/signup/student" className="">
              <img className="img-fluid" src={t.studentAuth} />
            </Link>
          </div>

          <div className="col-lg-5 col-md-5 ml-lg-4  ml-md-4 col-sm-5 ml-sm-4  p-0 common-auth-ui-css">
            <p className="mb-5 text-center common-ui-text">Professor</p>
            <Link to="/signup/professor" className="">
              <img className="img-fluid" src={t.professorAuth} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default withErrorBoundary(commonSignUpUI);
