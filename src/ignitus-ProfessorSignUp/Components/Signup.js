import React from 'react';
import logo from '../../ignitus-Assets/Images/Logos/logo white bg.png';
import { withErrorBoundary } from '../../ignitus-Internals';
import '../Styles/style.scss';

const Signup = props => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-4" />
      <div className="container mt-5 col-xs-6">
        <div className="my-5">
          <img className="img-fluid _img mx-auto d-block" src={logo} alt="Ignitus" />
        </div>
        <form>
          <div className="_login-form mx-auto">
          <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-user-o fa-fw" />
                </span>
              </div>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Full Name"
              />
            </div>
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
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="text-center mb-3 mt-3">
              <button type="submit" className="btn btn-success btn-rounded px-3 py-2">
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
  </div>
);

export default withErrorBoundary(Signup);
