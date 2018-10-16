
import React, { Component}  from 'react';
import { Redirect, Route } from 'react-router-dom';

class PrivateRoute extends React.Component{
  constructor(props){ 
    super(props) 
  }
  render(){
    const Component = this.props.component;
    console.log('session',localStorage.getItem('authenticated'))

    return( 
        <Route render={props => (
          localStorage.getItem('authenticated') ? (
            <Component {...this.props}/>
          ) : (
            <Redirect to={{
              pathname: '/login/student',
              state: {from: props.location}
            }} />
          )
        )} />
    )
  }
} 

export default PrivateRoute

