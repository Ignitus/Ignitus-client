/* eslint-disable jsx-a11y/aria-role */
import React, { useState, FunctionComponent, useEffect } from 'react';
import { isEmpty } from '../../../ignitus-Shared/ignitus-Utilities/HelperFunctions/lodashHelpers';
import { withErrorBoundary } from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import {
  SharedAuthentication,
  LoginStatePayload
} from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Templates/ignitus-Authentication';
import { LogInProps } from '../types';

const Login: FunctionComponent<LogInProps> = ({ logInRequest, logInData, clearPreviousLogin }) => {
  const [state, setState] = useState(LoginStatePayload);
  const { email, password } = state;

  useEffect(() => (() => clearPreviousLogin()),[]);

  const handleSubmit = (e) => {
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
    logInRequest(email, password, 'student');
    setState(LoginStatePayload);
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
};

export default withErrorBoundary(Login);
