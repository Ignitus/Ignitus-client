import React , { Component } from 'react';
import './Login.css';

class Login extends Component {
	render () {
		return (
			<div className="container  border mt-5 pb-5 px-5 pt-3 rounded center">
			    <p className="display-4 font-weight-normal pb-1" style={{color: '#212529cc'}}>Sign In</p>
				<form className="mt-3">
				  <div class="form-group row">
				    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
				    <div class="col-sm-10">
				      <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
				    </div>
				  </div>
				  <div class="form-group row">
				    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
				    <div class="col-sm-10">
				      <input type="password" class="form-control" id="inputPassword3" placeholder="Password"/>
				    </div>
				  </div>
				  <div class="form-group row ">
				    <div class="col-2"></div>
				    <div class="form-check col-sm-10 ">
				        <label class="form-check-label ml-3" for="gridCheck1">
				           <input class="form-check-input" type="checkbox" id="gridCheck1"/>Remember Me
				        </label> 
				    </div>
				  </div>
				  <div className="form-group row text-center">
					<div className="col-sm-12"><button type="submit" className="btn btn-success"><p className="h5">Sign in</p></button></div>
				  </div>
				<div className="or-seperator"><i>or</i></div>
				<div className="mx-auto social-btn">
					<a href="#" class="btn btn-primary btn-block text-center"><h5><i className="fa fa-linkedin"></i>Sign in with <b>Linked-in</b></h5></a>
				</div>
				</form>
			</div>
			)
	}
}

export default Login;
