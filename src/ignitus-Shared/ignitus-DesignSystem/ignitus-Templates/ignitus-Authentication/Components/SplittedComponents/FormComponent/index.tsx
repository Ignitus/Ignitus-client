import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { isEmpty } from '../../../../../../ignitus-Utilities/HelperFunctions/lodashHelpers';
import { FormProps } from '../../../types';
import { AppIcon } from '../../../../../../types/iconsTypes/iconEnums';

import * as A from '../../../styles';

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
  const { message, success } = authenticationData;
  return (
    <A.RightRow>
      <A.LeftColumnOne>
        <A.Logo name={AppIcon.IgnitusLogo} />
      </A.LeftColumnOne>

      {/* SIGNUP SUCCESS */}
      {authenticationType === 'SignUp' && success && (
        <A.Message type="success">
          <A.Paragraph>
            <strong>Success!</strong> Please login!.
          </A.Paragraph>
        </A.Message>
      )}

      {!success && !isEmpty(message) && (
        <A.Message type="alert">
          <A.Paragraph>{message}</A.Paragraph>
        </A.Message>
      )}

      {state.emptyMessage && (
        <A.Message type="alert">Please fill the form to proceed!</A.Message>
      )}

      {state.invalidEmail && (
        <A.Message type="alert">
          <A.Paragraph>
            <strong>Please </strong> input a valid mail!
          </A.Paragraph>
        </A.Message>
      )}

      {state.equalmessage && (
        <A.Message type="alert">
          <A.Paragraph>
            <strong>Password </strong> does not match the confirm password.!
          </A.Paragraph>
        </A.Message>
      )}

      <A.LeftColumnTwo>
        <A.InputGroup>
          {authenticationType === 'SignUp' && (
            <>
              <A.UsernameInput
                name={AppIcon.AccountCircleIcon}
                type="string"
                state={state.userName}
                placeholder="Username"
                handleChange={userName => {
                  setState({
                    ...state,
                    userName,
                  });
                }}
              />
              <A.EmailInput
                name={AppIcon.MessageIcon}
                type="string"
                state={state.email}
                placeholder="Email"
                handleChange={email => {
                  setState({
                    ...state,
                    email,
                  });
                }}
              />
            </>
          )}

          {authenticationType !== 'SignUp' && (
            <A.EmailUsernameInput
              name={AppIcon.AccountCircleIcon}
              type="string"
              state={state.email}
              placeholder="Username or Email"
              handleChange={email => {
                setState({
                  ...state,
                  email,
                });
              }}
            />
          )}

          <A.PasswordInput
            placeholder="Password"
            state={state.password}
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
                name={AppIcon.KeyIcon}
                type="password"
                state={state.confirmPassword}
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
