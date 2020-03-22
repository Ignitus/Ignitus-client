import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as t from './Constants';
import loader from '../../../ignitus-Assets/ignitus-Logos/ignitusLoader.gif';
import { withErrorBoundary } from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';

const SharedSignUp = ({
  signUpType, tagline, state, setState, signUpData, handleSubmit,
}) => {
  const alternateSignUp = signUpType === 'Student' ? 'Professor' : 'Student';
  const {
    email, password, confirmPassword, equalmessage, emptyMessage, invalidEmail, showPassword,
  } = state;

  const { isFetching, msg, success } = signUpData;

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
              <p>{tagline}</p>
              <p>
                <Link to={`/signup/${alternateSignUp.toLocaleLowerCase()}`} className="text-center linkform">
                  {' '}
                    I am a
                  {' '}
                  {alternateSignUp}
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

            {emptyMessage && (
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
                    onChange={e => setState({ email: e.target.value })}
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
                    onChange={e => setState({ password: e.target.value })}
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text password-visiblity-icon password-border"
                      onClick={() => {
                        setState({ showPassword: !showPassword });
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
                    onChange={e => setState({ confirmPassword: e.target.value })}
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
                  <button type="button" className="btn btn-success button-bg btn-rounded px-3 py-2" onClick={e => handleSubmit(e)}>
                      Sign up as
                    {' '}
                    {signUpType}
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
                    <Link to={`/login/${signUpType.toLowerCase()}`} className="text-center linkform">
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
};

SharedSignUp.propTypes = {
  signUpType: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  state: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
    equalmessage: PropTypes.bool.isRequired,
    emptyMessage: PropTypes.bool.isRequired,
    invalidEmail: PropTypes.bool.isRequired,
    showPassword: PropTypes.bool.isRequired,
  }).isRequired,
  setState: PropTypes.func.isRequired,
  signUpData: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    msg: PropTypes.string.isRequired,
    success: PropTypes.bool.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default withErrorBoundary(SharedSignUp);
