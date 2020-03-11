/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import { withErrorBoundary } from '../../../ignitus-Shared/Components/errorBoundary';
import { statePayload } from '../../../ignitus-Shared/Components/Login/Constants';
import SharedLogin from '../../../ignitus-Shared/Components/Login/Login';

const Login = ({ logInRequest, professorLogInData }) => {
  // dummy values
  logInRequest = () => {};
  professorLogInData = {
    isFetching: false,
    message: '',
    success: false,
  };
  // remove above dummy values once implemented

  const [state, setState] = useState(statePayload);

  const handleSubmit = (e) => {
    e.preventDefault();
    // professor login logic here
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
