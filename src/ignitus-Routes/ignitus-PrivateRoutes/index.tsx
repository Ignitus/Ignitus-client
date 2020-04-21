import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ Component }: any) => (
  <Route
    render={() => (localStorage.getItem('authenticated') ? (
      <Component />
    ) : (
      <Redirect to="/login/student" />
    ))
    }
  />
);
