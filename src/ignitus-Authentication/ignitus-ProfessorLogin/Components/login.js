/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import { withErrorBoundary } from '../../../ignitus-Shared/Components/errorBoundary';
import { statePayload } from '../../../ignitus-Shared/Components/AuthenticationComponents/Login/Constants';
import SharedLogin from '../../../ignitus-Shared/Components/AuthenticationComponents/Login/Login';

const Login = () => {
  // Dummy Implementation.
  const professorLogInData = {
    isFetching: false,
    message: '',
    success: false,
  };
  const [state, setState] = useState(statePayload);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SharedLogin
      loginType="Professor"
      tagline="Help providing opportunities for your students"
      handleSubmit={handleSubmit}
      logInData={professorLogInData}
      state={state}
      setState={setState}
    />
  );
};
export default withErrorBoundary(Login);
