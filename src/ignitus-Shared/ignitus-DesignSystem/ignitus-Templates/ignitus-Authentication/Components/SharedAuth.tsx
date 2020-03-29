import React, { FunctionComponent } from 'react';
import { Redirect, Link } from 'react-router-dom';
import loader from '../../../ignitus-Assets/ignitus-Logos/ignitusLoader.gif';
import {Props, userRole, authType} from '../types';
import {isEmpty} from '../../../../ignitus-Utilities/HelperFunctions/lodashHelpers';
import {withErrorBoundary} from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';
import * as t from '../Constants';

const SharedAuthComponent: FunctionComponent<Props> = ({
  authenticationType,
  role,
  tagline,
  handleSubmit,
  state,
  setState,
  authenticationData,
}) => {

  const alternateRole: userRole = (role === 'Student') ? 'Professor' : 'Student';
  const isStudent = (role === 'Student');
  const authSuffix = (authenticationType === 'Login') ? 'in' : 'up';
  const beautifiedAuth = (authenticationType === 'Login') ? 'Log In' : 'Sign Up';
  const alternateAuth: authType = (authenticationType === 'Login') ? 'Signup' : 'Login';
  const authRedirectText = (authenticationType === 'Login') ? `Don't have an account?` : `Already have an account?`;
  const {isFetching, message, success} = authenticationData;

  if (isFetching) {
    return (
      <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto">
        <div className="loader">
          <img alt="loader" src={loader} />
        </div>
      </div>
    );
  }

  if (authenticationType === 'Login' && success) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="col-lg-12 container-bg">
      <div className="col-lg-8 container-custom p-5">
        <div className="row shadow border-rad">
          <div className="col-md-6 p-0 container-image">
            <img
              alt={`${role}auth`}
              className="img-fluid img-login d-block"
              src={isStudent ? t.studentAuth : t.professorAuth}
            />

            <div className="text-below-image text-center">
              <p className="mb-5">Let&apos;s get started</p>
              <p>{tagline}</p>
              <p>
                <Link
                  to={`/${authenticationType.toLocaleLowerCase()}/${alternateRole.toLocaleLowerCase()}`}
                  className="text-center linkform"
                >
                  {' '}
                  I am a {alternateRole}
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-6 container-form">
            <div className="my-4">
              <img
                className="img-fluid img mx-auto d-block"
                src={t.logo}
                alt="Ignitus Logo"
              />
            </div>

            {/* SIGNUP SUCCESS */}
            {authenticationType === 'Signup' && success && (
              <div className="alert alert-success margin-Top">
                <strong>Success!</strong> Please login!.
              </div>
            )}

            {!success && !isEmpty(message) && (
              <div className="alert alert-danger margin-Top">
                <strong>{message}</strong>
              </div>
            )}

            {state.emptyMessage && (
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
                    value={state.email}
                    onChange={e => {
                      setState({
                        ...state,
                        email: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
                {state.invalidEmail && (
                  <div className="text-danger small mb-2">
                    <strong>Please </strong> input a valid mail!
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
                    type={state.showPassword ? 'text' : 'password'}
                    id="pass"
                    className="form-control"
                    placeholder="Password"
                    value={state.password}
                    onChange={e => {
                      setState({
                        ...state,
                        password: e.target.value,
                      });
                    }}
                    required
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text password-visiblity-icon"
                      onClick={() => {
                        setState({
                          ...state,
                          showPassword: !state.showPassword,
                        });
                      }}
                    >
                      {!state.showPassword && (
                        <i className="fa fa-eye-slash" aria-hidden="true" />
                      )}
                      {state.showPassword && (
                        <i className="fa fa-eye" aria-hidden="true" />
                      )}
                    </span>
                  </div>
                </div>
                {/* SIGNUP CONFIRM PASSWORD */}
                {authenticationType === 'Signup' && (
                  <>
                    <div className="input-group form-group mb-2">
                      <div className="input-group-prepend">
                        <span className="input-group-text span-bg">
                          <i className="fa fa-key fa-fw key-color" />
                        </span>
                      </div>
                      <input
                        type={state.showPassword ? 'text' : 'password'}
                        id="confirmPass"
                        className="form-control password-border"
                        placeholder="Confirm Password"
                        required
                        value={state.confirmPassword}
                        onChange={e =>
                          setState({...state, confirmPassword: e.target.value})
                        }
                      />
                    </div>

                    {state.equalmessage && (
                      <div className="text-danger small mb-1">
                        <strong>Password </strong> does not match the confirm
                        password.!
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className="text-center mb-3 mt-3">
                <button
                  type="button"
                  className="btn btn-success btn-rounded button-bg px-3 py-2"
                  onClick={e => handleSubmit(e)}
                >
                  Sign {authSuffix} as {role}
                </button>
              </div>
              <div className="or-seperator">
                <i className="text-black-50">or</i>
              </div>
              <div className="mb-4">
                <button
                  type="button"
                  className="btn btn-primary btn-rounded btn-linkedin mx-auto btn-block"
                >
                  <i className="fa fa-linkedin mr-3" />
                  Linked-in
                </button>
              </div>
              <div className="text-center mb-3 mt-3">
                <div>
                  {authRedirectText}{' '}
                  <Link
                    to={`/${alternateAuth.toLocaleLowerCase()}/${role.toLocaleLowerCase()}`}
                    className="text-center linkform"
                  >
                    {' '}
                    {beautifiedAuth}
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SharedAuthentication: FunctionComponent<Props> = withErrorBoundary(
  SharedAuthComponent,
);
