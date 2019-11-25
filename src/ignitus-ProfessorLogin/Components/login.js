/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withErrorBoundary } from '../../ignitus-Internals';
import * as t from './Constants';
import '../Styles/style.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { showPassword: false };
  }

  render() {
    const { state: { showPassword } } = this;
    return (
      <div className="col-lg-12 container-bg">
        <div className="col-lg-8 container-custom  p-5">
          <div className="row shadow border-rad">
            <div className="col-md-6 p-0 container-image">
              <img alt="Professor Auth" className="img-fluid img-login d-block" src={t.professorAuth} />
              <div className="text-below-image text-center">
                <p className="mb-5">Let&apos;s get started</p>
                <p>Help providing opportunities for your students</p>
                <p>
                  <Link to="/login/student" className="text-center linkform">
                    {' '}
                    I am a Student
                  </Link>
                </p>
              </div>
            </div>

            <div className="col-md-6 container-form">
              <div className="my-4">
                <img alt="logo" className="img-fluid img mx-auto d-block" src={t.logo} />
              </div>

              <form>
                <div className="px-4">
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text span-bg">
                        <i className="fa fa-envelope-o fa-fw envelope-color" />
                      </span>
                    </div>

                    <input
                      name="email"
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>

                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text  span-bg">
                        <i className="fa fa-key fa-fw key-color" />
                      </span>
                    </div>
                    <input
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      id="pass"
                      className="form-control"
                      placeholder="Password"
                    />
                    <div className="input-group-append">
                      <span
                        className="input-group-text password-visiblity-icon"
                        onClick={() => {
                          this.setState({ showPassword: !showPassword });
                        }}
                      >
                        {!showPassword && <i className="fa fa-eye-slash" aria-hidden="true" />}
                        {showPassword && <i className="fa fa-eye" aria-hidden="true" />}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-3 mt-3">
                  <button
                    type="button"
                    className="btn btn-success btn-rounded button-bg px-3 py-2"
                  >
                    Log in as Professor
                  </button>
                </div>

                <div className="or-seperator">
                  <i className="text-black-50">or</i>
                </div>

                <div className="mb-4">
                  <button type="button" className="btn btn-primary btn-rounded btn-linkedin mx-auto btn-block">
                    <i className="fa fa-linkedin mr-3" />
                    LinkedIn
                  </button>
                </div>
                <div className="text-center mb-3 mt-3">
                  <div>
                    Don&apos;t have an account?
                    {' '}
                    <Link to="/signup/professor" className="text-center linkform">
                      {' '}
                      Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withErrorBoundary(Login);
