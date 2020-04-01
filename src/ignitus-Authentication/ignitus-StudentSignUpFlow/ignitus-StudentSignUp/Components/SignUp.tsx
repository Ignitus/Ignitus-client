import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  isEmpty,
  isEqual,
} from '../../../../ignitus-Shared/ignitus-Utilities/HelperFunctions/lodashHelpers';
import { withErrorBoundary } from '../../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import SharedSignup from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Templates/ignitus-SharedAuthentication/ignitus-sharedSignUp/Components/SharedSignUp';
import { statePayLoad } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Templates/ignitus-SharedAuthentication/ignitus-sharedSignUp/constants';

const Signup = ({signUpRequest, studentSignUpData}) => {
  const [state, setState] = useState({...statePayLoad});
  const {email, password, confirmPassword} = state;

  const handleSubmit = e => {
    e.preventDefault();

    if (isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword)) {
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
        return;
      }
    }

    if (!isEqual(password, confirmPassword)) {
      setState({
        ...state,
        emptyMessage: false,
        equalmessage: true,
      });
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
    <SharedSignup
      signUpType="Student"
      tagline="Skyrocket your career with best global opportunities"
      handleSubmit={handleSubmit}
      signUpData={studentSignUpData}
      state={state}
      setState={setState}
    />
  );
};

Signup.propTypes = {
  signUpRequest: PropTypes.func.isRequired,
  studentSignUpData: PropTypes.shape({
    isFetching: PropTypes.bool,
    success: PropTypes.bool,
    msg: PropTypes.string,
  }).isRequired,
};

export default withErrorBoundary(Signup);
