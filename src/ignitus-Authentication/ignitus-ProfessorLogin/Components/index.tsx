import React, { useState, FunctionComponent } from 'react';
import { withErrorBoundary } from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import {
  SharedAuthentication,
  LoginStatePayload,
  authData
} from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Templates/ignitus-Authentication';

const Login: FunctionComponent = () => {
  /* Dummy Implementation. */
  const professorLogInData: authData = {
    isFetching: false,
    message: '',
    success: false,
  };

  const [state, setState] = useState(LoginStatePayload);

  const handleSubmit = e => {
    e.preventDefault();
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
