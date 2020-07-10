import React, { useState, useEffect } from 'react';

import {
  SharedAuthentication,
  LoginStatePayload,
  AuthData,
  withErrorBoundary,
  isEmpty,
} from '../../../ignitus-Shared';

export interface LogInProps {
  logInRequestUsingEmail: Function;
  logInRequestUsingUsername: Function;
  logInData: AuthData;
  clearPreviousLogin: Function;
}

export const Login: React.FC<LogInProps> = withErrorBoundary(
  ({
    logInRequestUsingEmail,
    logInRequestUsingUsername,
    logInData,
    clearPreviousLogin,
  }: LogInProps) => {
    const professorLogInData: AuthData = logInData;

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
          logInRequestUsingUsername(userName, password, 'professor');
          setState(LoginStatePayload);
        } else {
          logInRequestUsingEmail({ email: userName }, password, 'professor');
          setState(LoginStatePayload);
        }
      }
    };

    return (
      <SharedAuthentication
        authenticationType="LogIn"
        role="Professor"
        authenticationData={professorLogInData}
        handleSubmit={handleSubmit}
        state={state}
        setState={setState}
      />
    );
  },
);
