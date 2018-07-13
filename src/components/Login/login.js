import React , { Component } from 'react';
import logo from '../../Images/Logos/logo white bg.png';
import './login.css';

class Login extends Component {
	render () {
		return (
			<div className="">
			<div className="container mt-5 _form">
				<img src={logo} className="img-responsive img-css _img-css" alt={"logo"}/>
			
				<form className="mt-8 ">
				  
				   <div class="input-group mb-3 _input">
  					  <div class="input-group-prepend ">
    						<span class="input-group-text"><i class="fa fa-envelope-o fa-fw"></i></span>
  						</div>
  						<input class="form-control" type="text" placeholder="Email address"/>
				   </div>

				   <div class="input-group mb-3 _input">
    					<div class="input-group-prepend ">
      						<span class="input-group-text"><i class="fa fa-key fa-fw"></i></span>
    					</div>
    					<input class="form-control" type="password" placeholder="Password"/>
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
					<div className="col-sm-12 _vertical"><button type="submit" className="btn btn-success px-4 py-2 mb-2  _vertical"><h6>Sign in</h6></button></div>
				  </div>
				<div className="or-seperator"><i>or sign in with</i></div>
				<div className="mx-auto social-btn _linkedin _vertical">
					<a href="#" class="btn btn-primary btn-block text-center "><h6><i className="fa fa-linkedin"></i>Linkedin</h6></a>
				</div>
				<div className="or-seperator"></div>
				<div className="form-group row text-center">
					<div className="col-sm-12">Don't have an account? <a href="#" class="text-center _link"> Sign Up</a></div>
				  </div>
				</form>
			</div>
			</div>
			)
	}
}

export default Login;

