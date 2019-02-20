import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Component = this.props.component;
    return (
      <Route
        render={props => (localStorage.getItem('authenticated') ? (
          <Component {...this.props} />
        ) : (
          <Redirect to="/login/student" />
        ))
        }
      />
    );
  }
}


