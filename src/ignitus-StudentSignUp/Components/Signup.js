import React from 'react';
import logo  from '../../ignitus-Assets/Images/ignitus-logo.png';
import loginImg from '../../ignitus-Assets/Images/login.png';
import loader from '../../ignitus-Assets/Images/loader.gif';
import studentSignUp  from '../../ignitus-Assets/Images/studentAuth.svg'
import { withErrorBoundary } from '../../ignitus-Internals';

import _ from 'lodash';
import '../Styles/style.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', confirmPassword: '', emptymessage:false, equalmessage: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    
    const {state:{email,password,confirmPassword}} = this
    if(_.isEmpty(email) || _.isEmpty(password) || _.isEmpty(confirmPassword)){
        this.setState({emptymessage: true})
        return
    }
    if(!_.isEqual(password, confirmPassword)){
        this.setState({equalmessage: true, emptymessage:false})
        return
    }

    this.props.signUpRequest(email,password)
    this.setState({email: '', password: '', confirmPassword: '',emptymessage: false, equalmessage: false  })
  }

  render() {
    const {isFetching, success, message} = this.props.studentSignUpData;
    const {state:{emptymessage,equalmessage}} = this
    if (isFetching) {
      return (
        <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto">
          <div className = "loader"><img src={loader} /></div>
        </div>
      );
    }
    return (
      <div className="col-lg-12 container-bg">
      <div className="col-lg-8 container-custom p-5">
        <div className="row shadow border-rad">
          <div className="col-md-6 p-0 container-image">
            <img className="img-fluid img-login d-block" src={studentSignUp} alt="login" />
            <div className="text-below-image text-center">
              <p className="mb-5 ">Let's get started</p>
              <p>Skyrocket your career with best global opportunities</p>
              <p>
                <a href="/signup/professor" className="text-center linkform">
                  {' '}
                  I am a Professor
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6 container-form">
            <div className="my-4">
              <img className="img-fluid img mx-auto d-block" src={logo} alt="logo" />
            </div>
            <form >
              <div className="px-4">
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text span-bg">
                      <i className="fa fa-envelope-o fa-fw envelope-color" />
                    </span>
                  </div>
                  <input
                    type="text"
                    id="email"
                    className="form-control email-border"
                    placeholder="Email"
                    required
                    value={this.state.email}
                    onChange= { (e) => {this.setState({ email: e.target.value })}}
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text span-bg">
                      <i className="fa fa-key fa-fw key-color" />
                    </span>
                  </div>
                  <input
                    type="password"
                    id="pass"
                    className="form-control password-border"
                    placeholder="Password"
                    required
                    value={this.state.password}
                    onChange= { (e) => {this.setState({ password: e.target.value })}}
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text span-bg">
                      <i className="fa fa-key fa-fw key-color" />
                    </span>
                  </div>
                  <input
                    type="password"
                    id="confirmPass"
                    className="form-control password-border"
                    placeholder="Confirm Password"
                    required
                    value={this.state.confirmPassword}
                    onChange= { (e) => {this.setState({ confirmPassword: e.target.value })}}
                  />
                </div>
                <div className="text-center mb-3 mt-3">
                  <button className="btn btn-success button-bg btn-rounded px-3 py-2" onClick = {this.handleSubmit}>
                    Sign up
                  </button>
                </div>
                <div className="or-seperator">
                  <i className="text-black-50">or sign up with</i>
                </div>
                <div className="mb-4">
                  <button className="btn btn-primary btn-rounded btn-linkedin mx-auto btn-block">
                    <i className="fa fa-linkedin mr-3" />
                    Linkedin
                  </button>
                </div>
                <div className="text-center">
                  <p>Already have an account? <a href="/login/student" className="linkform">
                    {' '}
                    Sign In
                  </a></p>
                  
              </div>
              </div>
            </form>
          </div>
        </div>
          {success && <div className="alert alert-success alert-dismissible margin-Top">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <strong>Success!</strong> Please confirm your email address!
          </div>}

          {success == false && <div className="alert alert-success alert-dismissible margin-Top">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            {message}
          </div>}

          {emptymessage && <div className="alert alert-danger alert-dismissible margin-Top">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <strong>Please!</strong> fill the form!
          </div>}

          {equalmessage && <div className="alert alert-danger alert-dismissible margin-Top">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <strong>Password </strong> does not match the confirm password.!
          </div>}
      </div>
    </div>
    );
  }
}

export default withErrorBoundary(Signup);
