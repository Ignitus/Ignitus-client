/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import { withErrorBoundary } from '../../ignitus-Shared/Components/ErrorBoundary';
import SharedLogin from '../../ignitus-Shared/Components/Login/Login';
import { statePayload } from '../../ignitus-Shared/Components/Login/Constants';

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

Login.propTypes = {
  logInRequest: PropTypes.func.isRequired,
  studentLoginData: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    success: PropTypes.bool.isRequired,
  }).isRequired,
};

export default withErrorBoundary(Login);
