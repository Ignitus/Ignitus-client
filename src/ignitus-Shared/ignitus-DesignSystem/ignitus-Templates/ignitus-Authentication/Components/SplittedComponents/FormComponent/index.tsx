import React, {FunctionComponent} from 'react';
import {Link} from 'react-router-dom';

import {isEmpty} from '../../../../../../ignitus-Utilities/HelperFunctions/lodashHelpers';
import {FormProps} from '../../../types';
import {AppIcon} from '../../../../../../types/iconsTypes/iconEnums';

import * as t from '../../../constants';
import * as A from '../../styles';

export const Form: FunctionComponent<FormProps> = ({
  role,
  authenticationType,
  alternateAuth,
  authRedirectText,
  state,
  setState,
  authenticationData,
  handleSubmit,
}) => {
  const {message, success} = authenticationData;
  return (
    <A.RightRow>
      <A.LeftColumnOne>
        <img
          className="img-fluid img mx-auto d-block"
          src={t.logo}
          alt="Ignitus Logo"
        />
      </A.LeftColumnOne>

      {/* SIGNUP SUCCESS */}
      {authenticationType === 'SignUp' && success && (
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

      <A.LeftColumnTwo>
        <A.InputGroup>
          <A.EmailInput
            name={AppIcon.MessageIcon}
            type="string"
            placeholder="Email"
            handleChange={email => {
              setState({
                ...state,
                email,
              });
            }}
          />
          {state.invalidEmail && (
            <div className="text-danger small mb-2">
              <strong>Please </strong> input a valid mail!
            </div>
          )}
          <A.PasswordInput
            placeholder="Password"
            handleChange={password => {
              setState({
                ...state,
                password,
              });
            }}
          />
          {/* SIGNUP CONFIRM PASSWORD */}
          {authenticationType === 'SignUp' && (
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
        </A.InputGroup>

        <div className="text-center mb-3 mt-3">
          <button
            type="button"
            className="btn btn-success btn-rounded button-bg px-3 py-2"
            onClick={e => handleSubmit(e)}
          >
            {authenticationType} as {role}
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
              {alternateAuth}
            </Link>
          </div>
        </div>
      </A.LeftColumnTwo>
    </A.RightRow>
  );
};
