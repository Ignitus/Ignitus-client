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

      {state.invalidEmail && (
        <div className="alert alert-danger margin-Top">
          <strong>Please </strong> input a valid mail!
        </div>
      )}

      {state.equalmessage && (
        <div className="alert alert-danger margin-Top">
          <strong>Password </strong> does not match the confirm password.!
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
              <A.ConfirmPasswordInput
                name={AppIcon.MessageIcon}
                type="password"
                placeholder="Confirm Password"
                handleChange={confirmPassword => {
                  setState({
                    ...state,
                    confirmPassword,
                  });
                }}
              />
            </>
          )}
        </A.InputGroup>
        <A.ButtonContainer>
          <A.Button
            category="primary"
            size="large"
            onClick={e => handleSubmit(e)}
          >
            {' '}
            {authenticationType} as {role}{' '}
          </A.Button>
        </A.ButtonContainer>
        <A.Paragraph>
          {authRedirectText}{' '}
          <Link
            to={`/${alternateAuth.toLocaleLowerCase()}/${role.toLocaleLowerCase()}`}
          >
            {' '}
            {alternateAuth}
          </Link>
        </A.Paragraph>
      </A.LeftColumnTwo>
    </A.RightRow>
  );
};
