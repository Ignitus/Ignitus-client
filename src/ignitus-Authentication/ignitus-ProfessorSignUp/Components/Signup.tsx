import React, {useState} from 'react';
import {
  SharedAuthentication,
  SignupStatePayload,
} from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Templates/ignitus-Authentication';
import {withErrorBoundary} from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
// import '../Styles/style.scss';

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

  const [state, setState] = useState(SignupStatePayload);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <SharedAuthentication
      authenticationType="SignUp"
      // eslint-disable-next-line jsx-a11y/aria-role
      role="Professor"
      state={state}
      setState={setState}
      handleSubmit={handleSubmit}
      authenticationData={professorSignUpData}
    />
  );
};

export default withErrorBoundary(SignUp);
