import React from 'react';
import { Link } from 'react-router-dom';
import * as t from './Constants';
import { withErrorBoundary } from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import '../Styles/style.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/no-unused-state
    this.state = { emptymessage: false, equalmessage: false, showPassword: false };
  }

  render() {
    const { state: { showPassword } } = this;
    return (
      <div className="col-lg-12 container-bg">
        <div className="col-lg-8 container-custom p-5">
          <div className="row shadow border-rad">
            <div className="col-md-6 p-0 container-image">
              <img className="img-fluid img-login d-block" src={t.professorAuth} alt="login" />
              <div className="text-below-image text-center">
                <p className="mb-5 ">Let&apos;s get started</p>
                <p>Help providing opportunities for your students</p>
                <p>
                  <Link to="/signup/student" className="text-center linkform">
                    {' '}
                    I am a Student
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-6 container-form">
              <div className="my-4">
                <img className="img-fluid img mx-auto d-block" src={t.logo} alt="logo" />
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
                      type="text"
                      id="email"
                      className="form-control email-border"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text span-bg">
                        <i className="fa fa-key fa-fw key-color" />
                      </span>
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="pass"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                    <div className="input-group-append">
                      <span
                        className="input-group-text password-visiblity-icon password-border"
                        onClick={() => {
                          this.setState({ showPassword: !showPassword });
                        }}
                      >
                        {!showPassword && <i className="fa fa-eye-slash" aria-hidden="true" />}
                        {showPassword && <i className="fa fa-eye" aria-hidden="true" />}
                      </span>
                    </div>
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text span-bg">
                        <i className="fa fa-key fa-fw key-color" />
                      </span>
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="confirmPass"
                      className="form-control password-border"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                  <div className="text-center mb-3 mt-3">
                    <button type="button" className="btn btn-success button-bg btn-rounded px-3 py-2" onClick={this.handleSubmit}>
                      Sign up as Professor
                    </button>
                  </div>
                  <div className="or-seperator">
                    <i className="text-black-50">or</i>
                  </div>
                  <div className="mb-4">
                    <button type="button" className="btn btn-primary btn-rounded btn-linkedin mx-auto btn-block">
                      <i className="fa fa-linkedin mr-3" />
                      Linkedin
                    </button>
                  </div>
                  <div className="text-center">
                    Don&apos;t have an account?
                    {' '}
                    <Link to="/login/professor" className="text-center linkform">
                      {' '}
                      Sign In
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

export default withErrorBoundary(Signup);
