import React , { Component } from 'react';
import './login.css';

class Login extends Component {
	render () {
		return (
			<div className="container border mt-5 rounded">
			    <h1 className="mt-2 text-secondary font-weight-normal">Sign In</h1>
				<form className="mt-4">
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
				  <div class="form-group row ml-2">
				    <div class="col-sm-2"></div>
				    <div class="col-sm-10 ">
				      <div class="form-check">
				        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
				        <label class="form-check-label" for="gridCheck1">
				          Remember Me
				        </label>
				      </div>
				    </div>
				  </div>
				  <div className="form-group row text-center">
					<div className="col-sm-12"><button type="submit" className="btn btn-success px-4 py-2 mb-2"><h5 className="font-weight-bold">Sign in</h5></button></div>
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

