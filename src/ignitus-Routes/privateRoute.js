
import React, { Component}  from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    false ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login/student',
        state: {from: props.location}
      }} />
    )
  )} />
)