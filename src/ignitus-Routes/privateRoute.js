/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function

const PrivateRoute = ({ Component }) => (
  <Route
    render={() => (localStorage.getItem('authenticated') ? (
      <Component />
    ) : (
      <Redirect to="/login/student" />
    ))
    }
  />
);

PrivateRoute.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default PrivateRoute;
