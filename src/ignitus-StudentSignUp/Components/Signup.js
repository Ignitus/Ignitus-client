/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import loader from '../../ignitus-Assets/Images/loader2.gif';
import * as t from './Constants';
import { withErrorBoundary } from '../../ignitus-Internals';

import '../Styles/style.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', password: '', confirmPassword: '', emptymessage: false, equalmessage: false, invalidEmail: false, showPassword: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { state: { email, password, confirmPassword } } = this;
    if (isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword)) {
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

    if (!isEqual(password, confirmPassword)) {
      this.setState({ equalmessage: true, emptymessage: false });
      return;
    }

    // eslint-disable-next-line react/destructuring-assignment
    this.props.signUpRequest(email, password);
    this.setState({
      email: '', password: '', confirmPassword: '', emptymessage: false, equalmessage: false,
    });
  }

  render() {
    const { props: { studentSignUpData: { isFetching, success, msg } } } = this;
    const {
      state: {
        emptymessage, email, equalmessage, invalidEmail, showPassword, password, confirmPassword,
      },
    } = this;

    if (isFetching) {
      return (
        <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto">
          <div className="loader"><img alt="loader" src={loader} /></div>
        </div>
      );
    }
    return (
      <div className="col-lg-12 container-bg">
        <div className="col-lg-8 container-custom p-5">
          <div className="row shadow border-rad">
            <div className="col-md-6 p-0 container-image">
              <img className="img-fluid img-login d-block" src={t.studentAuth} alt="login" />
              <div className="text-below-image text-center">
                <p className="mb-5 ">Let&apos;s get started</p>
                <p>Skyrocket your career with best global opportunities</p>
                <p>
                  <Link to="/signup/professor" className="text-center linkform">
                    {' '}
                    I am a Professor
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-6 container-form">
              <div className="my-4">
                <img className="img-fluid img mx-auto d-block" src={t.logo} alt="logo" />
              </div>

              {success && (
                <div className="alert alert-success margin-Top">
                  <strong>Success!</strong>
                  {' '}
                  Please login!.
                </div>
              )}

              {success === false && (
                <div className="alert alert-danger margin-Top">
                  {msg}
                </div>
              )}

              {emptymessage && (
                <div className="alert alert-danger margin-Top">
                  <strong>Please!</strong>
                  {' '}
                  fill the form!
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
                      type="email"
                      id="email"
                      className="form-control email-border"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => { this.setState({ email: e.target.value }); }}
                    />
                  </div>

                  {invalidEmail && (
                    <div className="text-danger small mb-1">
                      <strong>Please </strong>
                      {' '}
                      input a valid mail!
                    </div>
                  )}

                  <div className="input-group form-group mb-2">
                    <div className="input-group-prepend">
                      <span className="input-group-text span-bg">
                        <i className="fa fa-key fa-fw key-color" />
                      </span>
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="pass"
                      className="form-control"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => { this.setState({ password: e.target.value }); }}
                    />
                    <div className="input-group-append">
                      <span
                        className="input-group-text password-visiblity-icon password-border"
                        onClick={() => {
                          this.setState({ showPassword: !showPassword });
                        }}
                      >
                        {!showPassword && <i className="fa fa-eye-slash" aria-hidden="true" />}
                        {showPassword && <i className="fa fa-eye" aria-hidden="true" />}
                      </span>
                    </div>
                  </div>
                  <div className="input-group form-group mb-2">
                    <div className="input-group-prepend">
                      <span className="input-group-text span-bg">
                        <i className="fa fa-key fa-fw key-color" />
                      </span>
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="confirmPass"
                      className="form-control password-border"
                      placeholder="Confirm Password"
                      required
                      value={confirmPassword}
                      onChange={(e) => { this.setState({ confirmPassword: e.target.value }); }}
                    />
                  </div>

                  {equalmessage && (
                    <div className="text-danger small mb-1">
                      <strong>Password </strong>
                      {' '}
                      does not match the confirm password.!
                    </div>
                  )}

                  <div className="text-center mb-3 mt-3">
                    <button type="button" className="btn btn-success button-bg btn-rounded px-3 py-2" onClick={this.handleSubmit}>
                      Sign up as Student
                    </button>
                  </div>
                  <div className="or-seperator">
                    <i className="text-black-50">or</i>
                  </div>
                  <div className="mb-4">
                    <button type="button" className="btn btn-primary btn-rounded btn-linkedin mx-auto btn-block">
                      <i className="fa fa-linkedin mr-3" />
                      Linkedin
                    </button>
                  </div>
                  <div className="text-center">
                    <div>
                      Already have an account?
                      {' '}
                      <Link to="/login/student" className="text-center linkform">
                        {' '}
                        Log In
                      </Link>
                    </div>
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

Signup.propTypes = {
  signUpRequest: PropTypes.func.isRequired,
  studentSignUpData: PropTypes.shape({
    isFetching: PropTypes.bool,
    success: PropTypes.bool,
    msg: PropTypes.string,
  }).isRequired,
};

export default withErrorBoundary(Signup);
