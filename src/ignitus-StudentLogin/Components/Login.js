import React, { Component } from 'react';
import _ from 'lodash';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withErrorBoundary } from '../../ignitus-Internals';
import * as t from './Constants';
import loader from '../../ignitus-Assets/Images/loader2.gif';
import '../Styles/style.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', password: '', emptymessage: false, invalidEmail: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleSubmit(e) {
    e.preventDefault();

    const {
      state: { email, password },
    } = this;

    if (_.isEmpty(email) || _.isEmpty(password)) {
      this.setState({ emptymessage: true });
      return;
    }

    if (typeof email !== 'undefined') {
      const lastAtPos = email.lastIndexOf('@');
      const lastDotPos = email.lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
        this.setState({ invalidEmail: true });
        return;
      }
    }

    this.props.logInRequest(email, password);
    this.setState({ email: '', password: '', emptymessage: false });
  }

  render() {
    const { isFetching, message, success } = this.props.studentLoginData;
    const {
      state: { emptymessage, invalidEmail },
    } = this;

    if (isFetching) {
      return (
        <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto">
          <div className="loader">
            <img alt="loader" src={loader} />
          </div>
        </div>
      );
    }

    if (success) return <Redirect to="/dashboard" />;

    return (
      <div className="col-lg-12 container-bg">
        <div className="col-lg-8 container-custom p-5">
          <div className="row shadow border-rad">
            <div className="col-md-6 p-0 container-image">
              <img alt="Student auth" className="img-fluid img-login d-block" src={t.studentAuth} />
              <div className="text-below-image text-center">
                <p className="mb-5">Let's get started</p>
                <p>Skyrocket your career with best global opportunities</p>
                <p>
                  <Link to="/login/professor" className="text-center linkform">
                    {' '}
                   I am a Professor
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-6 container-form">
              <div className="my-4">
                <img className="img-fluid img mx-auto d-block" src={t.logo} />
              </div>
              {!_.isEmpty(message) && (
              <div className="alert alert-danger margin-Top">
                <strong>{message}</strong>
              </div>
              )}
              {emptymessage && (
              <div className="alert alert-danger margin-Top">
                <strong>Please fill the form to proceed!</strong>
              </div>
              )}
              <form>
                <div className="px-4">
                  <div className="input-group form-group mb-2">
                    <div className="input-group-prepend">
                      <span className="input-group-text span-bg">
                        <i className="fa fa-envelope-o fa-fw envelope-color" />
                      </span>
                    </div>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                      required
                    />
                  </div>
                  {invalidEmail && (
                  <div className="text-danger small mb-2">
                    <strong>Please </strong>{' '}input a valid mail!
                  </div>
                  )}
                  <div className="input-group form-group mb-2">
                    <div className="input-group-prepend">
                      <span className="input-group-text  span-bg">
                        <i className="fa fa-key fa-fw key-color" />
                      </span>
                    </div>
                    <input
                      name="password"
                      type="password"
                      id="pass"
                      className="form-control"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="text-center mb-3 mt-3">
                  <button
                    className="btn btn-success btn-rounded button-bg px-3 py-2"
                    onClick={this.handleSubmit}
                  >
                  Sign in as Student
                  </button>
                </div>
                <div className="or-seperator">
                  <i className="text-black-50">or</i>
                </div>
                <div className="mb-4">
                  <button className="btn btn-primary btn-rounded btn-linkedin mx-auto btn-block">
                    <i className="fa fa-linkedin mr-3" />
                  Linked-in
                  </button>
                </div>
                <div className="text-center mb-3 mt-3">
                  <div>
                  Don't have an account?
                    {' '}
                    <Link to="/signup/student" className="text-center linkform">
                      {' '}
                   Sign Up
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

Login.propTypes = {
  logInRequest: PropTypes.func.isRequired,
  studentLoginData: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    success: PropTypes.bool.isRequired,
  }).isRequired,
};

export default withErrorBoundary(Login);
