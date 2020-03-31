/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { isEmpty } from '../../../ignitus-Shared/ignitus-Utilities/HelperFunctions/lodashHelpers';
import { withErrorBoundary } from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import {
  SharedAuthentication,
  LoginStatePayload,
} from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Templates/ignitus-Authentication/index.ts';

const Login = ({ logInRequest, studentLoginData }) => {
  const [state, setState] = useState(LoginStatePayload);
  const { email, password } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmpty(email) || isEmpty(password)) {
      setState({
        ...state,
        emptyMessage: true,
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
        });
        return;
      }
    }
    logInRequest(email, password);
    setState({
      ...state,
      email: '',
      password: '',
      emptyMessage: false,
    });
  };

  return (
    <SharedAuthentication
      authenticationType="LogIn"
      role="Student"
      handleSubmit={handleSubmit}
      state={state}
      setState={setState}
      authenticationData={studentLoginData}
    />
  );
};

export default withErrorBoundary(Login);
