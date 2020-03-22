import React, { useState } from 'react';
import SharedSignup from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Templates/ignitus-AuthenticationComponents/SignUp/SignUp';
import { statePayLoad } from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Templates/ignitus-AuthenticationComponents/SignUp/Constants';
import { withErrorBoundary } from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import '../Styles/style.scss';

/*
  Core functionality of Professor signup is not implemented yet.
  To provide props to SharedSignup, few variables are hardcoded.
*/
const SignUp = () => {
  const professorSignUpData = {
    isFetching: false,
    message: '',
    success: undefined, // red/green box showing above email, if set true/false
  };

  const [state, setState] = useState(statePayLoad);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SharedSignup
      signUpType="Professor"
      tagline="Help providing opportunities to your students"
      state={state}
      setState={setState}
      handleSubmit={handleSubmit}
      signUpData={professorSignUpData}
    />
  );
};

export default withErrorBoundary(SignUp);
