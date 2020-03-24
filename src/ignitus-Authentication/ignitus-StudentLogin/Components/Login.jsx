/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { isEmpty } from '../../../ignitus-Shared/ignitus-Utilities/HelperFunctions/lodashHelpers';
import { withErrorBoundary } from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import { statePayload } from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Templates/ignitus-AuthenticationComponents/Login/Constants';
import SharedLogin from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Templates/ignitus-AuthenticationComponents/Login/Login';

const Login = ({ logInRequest, studentLoginData }) => {
  const [state, setState] = useState(statePayload);
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
    <SharedLogin
      loginType="Student"
      tagline="Skyrocket your career with best global opportunities"
      handleSubmit={handleSubmit}
      logInData={studentLoginData}
      state={state}
      setState={setState}
    />
  );
};

export default withErrorBoundary(Login);
