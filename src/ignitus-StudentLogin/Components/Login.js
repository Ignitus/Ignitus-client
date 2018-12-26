import React, { Component } from "react";
import _ from "lodash";
import { Redirect, Route } from "react-router-dom";
import { withErrorBoundary } from "../../ignitus-Internals";

import loader from "../../ignitus-Assets/Images/loader.gif";
import loginImg from "../../ignitus-Assets/Images/login.png";
import { logo } from "./Constants";
import "../Styles/style.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", emptymessage: false, success:false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const {
      state: { email, password }
    } = this;

    if (_.isEmpty(email) || _.isEmpty(password)) {
      this.setState({ emptymessage: true });
      return;
    }

    this.props.logInRequest(email, password);
    this.setState({ email: "", password: "", emptymessage: false, success:true });
  }

  render() {
    const { isFetching, message } = this.props.studentLoginData;
    const { success } = this.state
    const {
      state: { emptymessage }
    } = this;

    if (isFetching) {
      return (
        <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto">
          <div className="loader">
            <img src={loader} />
          </div>
        </div>
      );
    }

    if (success) return <Redirect to="/dashboard" />;

    return (
      <div className="container-custom col-lg-8  p-5">
        <div className="row shadow">
          <div className="col-md-6 p-0 container-image">
            <img className="img-fluid img-login d-block" src={loginImg} />
            <div className="text-below-image text-center">
              <p className="mb-5">Let's get started</p>
              <p>Skyrocket your career with best global opportunities</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="my-4">
              <img className="img-fluid img mx-auto d-block" src={logo} />
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
                    name="email"
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={e => {
                      this.setState({ email: e.target.value });
                    }}
                  />
                </div>

                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-key fa-fw" />
                    </span>
                  </div>
                  <input
                    name="password"
                    type="password"
                    id="pass"
                    className="form-control"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={e => {
                      this.setState({ password: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="text-center mb-3 mt-3">
                <button
                  className="btn btn-success btn-rounded px-3 py-2"
                  onClick={this.handleSubmit}
                >
                  Log in
                </button>
              </div>

              <div className="or-seperator">
                <i className="text-black-50">or log in with</i>
              </div>

              <div className="mb-4">
                <button className="btn btn-primary btn-rounded mx-auto btn-block">
                  <i className="fa fa-linkedin mr-3" />
                  Linked-in
                </button>
              </div>
              <div className="text-center mb-3 mt-3">
                <div>
                  Don't have an account?{" "}
                  <a href="/signup/student" className="text-center linkform">
                    {" "}
                    Sign Up
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>

        {emptymessage && (
          <div className="alert alert-danger alert-dismissible margin-Top">
            <button type="button" className="close" data-dismiss="alert">
              &times;
            </button>
            <strong>Please!</strong> fill the form!
          </div>
        )}
      </div>
    );
  }
}

export default withErrorBoundary(Login);
