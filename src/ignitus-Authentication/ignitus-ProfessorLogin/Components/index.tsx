import React, { useState, useEffect } from 'react';

import {
  SharedAuthentication,
  LoginStatePayload,
  authData,
  withErrorBoundary,
  isEmpty,
} from '../../../ignitus-Shared';

export interface LogInProps {
  logInRequest: Function;
  logInData: authData;
  clearPreviousLogin: Function;
};

const Login: React.FC<LogInProps> = ({
  logInRequest,
  logInData,
  clearPreviousLogin,
}) => {
  const professorLogInData: authData = logInData;

  const [state, setState] = useState(LoginStatePayload);
  const { email, password } = state;

  useEffect(() => (() => clearPreviousLogin()),[clearPreviousLogin]);

  const handleSubmit = e => {
    e.preventDefault();
    clearPreviousLogin();

    if (isEmpty(email) || isEmpty(password)) {
      setState({
        ...state,
        emptyMessage: true,
        invalidEmail: false,
      });
      return;
    }

    if (typeof email !== 'undefined') {
      const lastAtPos = email.lastIndexOf('@');
      const lastDotPos = email.lastIndexOf('.');

      if (
        !(
          lastAtPos < lastDotPos
          && lastAtPos > 0
          && email.indexOf('@@') === -1
          && lastDotPos > 2
          && email.length - lastDotPos > 2
        )
      ) {
        setState({
          ...state,
          invalidEmail: true,
          emptyMessage: false,
        });
        return;
      }
    }
    logInRequest(email, password, 'professor');
    setState(LoginStatePayload);
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
};

export default withErrorBoundary(Login);
