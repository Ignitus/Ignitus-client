import React from 'react';
import logo  from '../../ignitus-Assets/Images/ignitus-logo.png';
import loginImg from '../../ignitus-Assets/Images/login.png';
import loader from '../../ignitus-Assets/Images/loader.gif';
import { Link } from "react-router-dom";
import professorSignUp  from '../../ignitus-Assets/Images/professorAuth.svg'
import { withErrorBoundary } from '../../ignitus-Internals';

import _ from 'lodash';
import '../Styles/style.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { emptymessage:false, equalmessage: false };
  }
  handleSubmit(e) {}

  render() {
    return (
      <div className="col-lg-12 container-bg">
      <div className="col-lg-8 container-custom p-5">
        <div className="row shadow border-rad">
          <div className="col-md-6 p-0 container-image">
            <img className="img-fluid img-login d-block" src={professorSignUp} alt="login" />
            <div className="text-below-image text-center">
              <p className="mb-5 ">Let's get started</p>
              <p>Skyrocket your career with best global opportunities</p>
              <p>
                <Link to="/signup/student" className="text-center linkform">
                  {' '}
                   I am a Student
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-6 container-form">
            <div className="my-4">
              <img className="img-fluid img mx-auto d-block" src={logo} alt="logo" />
            </div>
            <form >
              <div className="px-4">
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text span-bg">
                      <i className="fa fa-envelope-o fa-fw envelope-color" />
                    </span>
                  </div>
                  <input
                    type="text"
                    id="email"
                    className="form-control email-border"
                    placeholder="Email"
                    required

                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text span-bg">
                      <i className="fa fa-key fa-fw key-color" />
                    </span>
                  </div>
                  <input
                    type="password"
                    id="pass"
                    className="form-control password-border"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text span-bg">
                      <i className="fa fa-key fa-fw key-color" />
                    </span>
                  </div>
                  <input
                    type="password"
                    id="confirmPass"
                    className="form-control password-border"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                <div className="text-center mb-3 mt-3">
                  <button className="btn btn-success button-bg btn-rounded px-3 py-2" onClick = {this.handleSubmit}>
                    Sign up
                  </button>
                </div>
                <div className="or-seperator">
                  <i className="text-black-50">or</i>
                </div>
                <div className="mb-4">
                  <button className="btn btn-primary btn-rounded btn-linkedin mx-auto btn-block">
                    <i className="fa fa-linkedin mr-3" />
                    Linkedin
                  </button>
                </div>
                <div className="text-center">
                  Already have an account?{" "}
                  <Link to="/login/professor" className="text-center linkform">
                  {' '}
                   Log In
                  </Link>                  
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default withErrorBoundary(Signup);
