import React, {useState, useEffect} from 'react';
import {
  isEmpty,
  isEqual,
} from '../../../ignitus-Shared/ignitus-Utilities/HelperFunctions/lodashHelpers';
import {
  SharedAuthentication,
  SignupStatePayload,
} from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Templates/ignitus-Authentication';
import {withErrorBoundary} from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import {Props} from '../types';

const SignUp: React.FC<Props> = ({
  signUpData, signUpRequest, clearPreviousSignUp,
}) => {
  const [state, setState] = useState(SignupStatePayload);

  const { email, password, confirmPassword } = state;

  useEffect(() => (() => clearPreviousSignUp()), []);

  const handleSubmit = e => {
    e.preventDefault();
    clearPreviousSignUp();

    if (isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword)) {
      setState({
        ...state,
        emptyMessage: true,
        invalidEmail: false,
        equalmessage: false,
      });
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
          emptyMessage: false,
          invalidEmail: true,
          equalmessage: false,
        });
        return;
      }
    }

    if (!isEqual(password, confirmPassword)) {
      setState({
        ...state,
        invalidEmail: false,
        emptyMessage: false,
        equalmessage: true,
      });
      return;
    }

    signUpRequest(email, password, 'professor');
    setState(SignupStatePayload);
  };

  return (
    <SharedAuthentication
      authenticationType="SignUp"
      // eslint-disable-next-line jsx-a11y/aria-role
      role="Professor"
      state={state}
      setState={setState}
      handleSubmit={handleSubmit}
      authenticationData={signUpData}
    />
  );
};

export default withErrorBoundary(SignUp);
