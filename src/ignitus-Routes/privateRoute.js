
import React, { Component}  from 'react';
import { Redirect, Route } from 'react-router-dom';

class PrivateRoute extends React.Component{
  constructor(props){ 
    super(props) 
  }
  render(){
    const Component = this.props.component;
    console.log('session',localStorage.getItem('authenticated'))

    let bool;

    if(localStorage.getItem('authenticated')){
      bool = true;
    }
    else{
      bool = false;
    }

    console.log('bool',bool)

    return( 
        <Route render={props => (
          bool  ? (
            <Component {...this.props}/>
          ) : (
            <Redirect to='/login/student'/>
          )
        )} />
    )
  }
} 

export default PrivateRoute

