import React from 'react';
import logo from '../../Assets/Images/Logos/logo white bg.png';
import loginImg from '../../Assets/Images/login.png';
import '../Styles/style.css';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', confirmPassword: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const {state:{email,password,confirmPassword}} = this
    this.props.submit(email,password, confirmPassword)
    this.setState({email: '', password: '', confirmPassword: ''})
  }

  render() {
    return (
      <div className="container _container-custom p-5">
        <div className="row shadow">
          <div className="col-md-6 p-0 container-image">
            <img className="img-fluid _img-login d-block" src={loginImg} alt="login" />
            <div className="text-below-image text-center">
              <p className="mb-5 ">Let's get started</p>
              <p>Skyrocket your career with best global opportunities</p>
              <p>
                <a href="/signup/professor" className="text-center _link">
                  {' '}
                  I am a Professor
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6  _container-form ">
            <div className="my-4">
              <img className="img-fluid _img mx-auto d-block" src={logo} alt="logo" />
            </div>
            <form>
              <div className="px-4">
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-envelope-o fa-fw" />
                    </span>
                  </div>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    value={this.state.email}
                    onChange= { (e) => {this.setState({ email: e.target.value })}}
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-key fa-fw" />
                    </span>
                  </div>
                  <input
                    type="password"
                    id="pass"
                    className="form-control"
                    placeholder="Password"
                    required
                    value={this.state.password}
                    onChange= { (e) => {this.setState({ password: e.target.value })}}
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-key fa-fw" />
                    </span>
                  </div>
                  <input
                    type="password"
                    id="confirmPass"
                    className="form-control"
                    placeholder="Confirm Password"
                    required
                    value={this.state.confirmPassword}
                    onChange= { (e) => {this.setState({ confirmPassword: e.target.value })}}
                  />
                </div>
                <div className="text-center mb-3 mt-3">
                  <button className="btn btn-success btn-rounded px-3 py-2" onClick = {this.handleSubmit}>
                    Sign up
                  </button>
                </div>
                <div className="_or-seperator">
                  <i className="text-black-50">or sign up with</i>
                </div>
                <div className="mb-4">
                  <button className="btn btn-primary btn-rounded mx-auto btn-block">
                    <i className="fa fa-linkedin mr-3" />
                    Linked-in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
          {this.props.studentData.success && <div class="alert alert-success alert-dismissible">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Success!</strong> Please confirm your email address!
          </div>}
      </div>
    );
  }
}

export default Signup;
