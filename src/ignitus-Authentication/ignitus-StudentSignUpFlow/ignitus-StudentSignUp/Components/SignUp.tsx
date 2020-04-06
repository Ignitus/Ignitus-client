import React, {useState} from 'react';
import {
  isEmpty,
  isEqual,
} from '../../../../ignitus-Shared/ignitus-Utilities/HelperFunctions/lodashHelpers';
import {withErrorBoundary} from '../../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import {
  SharedAuthentication,
  SignupStatePayload,
} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Templates/ignitus-Authentication/index';

const Signup = ({signUpRequest, studentSignUpData}) => {
  const [state, setState] = useState(SignupStatePayload);
  const {email, password, confirmPassword} = state;

  const handleSubmit = e => {
    e.preventDefault();

    if (isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword)) {
      setState({
        ...state,
        emptyMessage: true,
      });
      setTimeout(() => setState({...state, emptyMessage: false}), 2000);
      return;
    }

    if (typeof email !== 'undefined') {
      const lastAtPos = email.lastIndexOf('@');
      const lastDotPos = email.lastIndexOf('.');

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf('@@') === -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        setState({
          ...state,
          invalidEmail: true,
        });
        setTimeout(() => setState({...state, invalidEmail: false}), 2000);
        return;
      }
    }

    if (!isEqual(password, confirmPassword)) {
      setState({
        ...state,
        emptyMessage: false,
        equalmessage: true,
      });
      setTimeout(() => setState({...state, equalmessage: false}), 3000);
      return;
    }

    signUpRequest(email, password);
    setState({
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      emptyMessage: false,
      equalmessage: false,
      invalidEmail: false,
    });
  };

  return (
    <SharedAuthentication
      authenticationType="SignUp"
      role="Student"
      state={state}
      setState={setState}
      authenticationData={studentSignUpData}
      handleSubmit={handleSubmit}
    />
  );
};

export default withErrorBoundary(Signup);
