import React, { Component } from "react";
import _ from "lodash";
import { withErrorBoundary } from "../../ignitus-Internals";
import { Link } from "react-router-dom";
import * as t from './Constants';
import "../Styles/style.scss";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-lg-12 container-bg">
      <div className="col-lg-8 container-custom  p-5">
        <div className="row shadow border-rad">
          <div className="col-md-6 p-0 container-image">
            <img className="img-fluid img-login d-block" src={t.professorAuth} />
            <div className="text-below-image text-center">
              <p className="mb-5">Let's get started</p>
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
              <img className="img-fluid img mx-auto d-block" src={t.logo} />
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
                    type="password"
                    id="pass"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="text-center mb-3 mt-3">
                <button
                  className="btn btn-success btn-rounded button-bg px-3 py-2"
                >
                  Log in as Professor
                </button>
              </div>

              <div className="or-seperator">
                <i className="text-black-50">or</i>
              </div>

              <div className="mb-4">
                <button className="btn btn-primary btn-rounded btn-linkedin mx-auto btn-block">
                  <i className="fa fa-linkedin mr-3" />
                  LinkedIn
                </button>
              </div>
              <div className="text-center mb-3 mt-3">
                <div>
                  Don't have an account?{" "}
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
