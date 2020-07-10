/* eslint-disable jsx-a11y/aria-role */
import React, { useState, FunctionComponent, useEffect } from 'react';
import {
  isEmpty,
  withErrorBoundary,
  SharedAuthentication,
  LoginStatePayload,
} from '../../../ignitus-Shared';
import { LogInProps } from '../types';

export const Login: FunctionComponent<LogInProps> = withErrorBoundary(
  ({
    logInRequestUsingUsername,
    logInRequestUsingEmail,
    logInData,
    clearPreviousLogin,
  }) => {
    const [state, setState] = useState(LoginStatePayload);
    const { userName, password } = state;

    useEffect(() => () => clearPreviousLogin(), [clearPreviousLogin]);

    const handleSubmit = e => {
      e.preventDefault();
      clearPreviousLogin();

      if (isEmpty(userName) || isEmpty(password)) {
        setState({
          ...state,
          emptyMessage: true,
        });
        return;
      }

      if (typeof userName !== 'undefined') {
        const lastAtPos = userName.lastIndexOf('@');
        const lastDotPos = userName.lastIndexOf('.');

        if (
          !(
            lastAtPos < lastDotPos &&
            lastAtPos > 0 &&
            userName.indexOf('@@') === -1 &&
            lastDotPos > 2 &&
            userName.length - lastDotPos > 2
          )
        ) {
          logInRequestUsingUsername(userName, password, 'student');
          setState(LoginStatePayload);
        } else {
          logInRequestUsingEmail({ email: userName }, password, 'student');
          setState(LoginStatePayload);
        }
      }
    };

    return (
      <SharedAuthentication
        authenticationType="LogIn"
        role="Student"
        handleSubmit={handleSubmit}
        state={state}
        setState={setState}
        authenticationData={logInData}
      />
    );
  },
);
