import React, { Component } from 'react';
import logo from '../../ignitus-Assets/Images/Logos/logo white bg.png';
import '../Styles/style.css';

import loginImg from '../../ignitus-Assets/Images/login.png';
import validate from '../../ignitus-Helpers/validate';

class Login extends Component {

  constructor() {
    super();

    this.state = {
      formIsValid: false,
      formControls: {
          email: {
            value: '',
            placeholder: 'Email',
            valid: false,
            touched: false,
            validationRules: {
                isEmail: true,
                isRequired: true
            }
          },
          password: {
            value: '',
            placeholder: 'Password',
            valid: false,
            touched: false,
            validationRules: {
                minLength: 3,
                isRequired: true
            }
          }
      }
    }
  }

  changeHandler = event => {
      const name = event.target.name;
      const value = event.target.value;

      const updatedControls = {
        ...this.state.formControls
      };
      const updatedFormElement = {
        ...updatedControls[name]
      };
      updatedFormElement.value = value;
      updatedFormElement.touched = true;
      updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

      updatedControls[name] = updatedFormElement;

      let formIsValid = true;
      for (let inputIdentifier in updatedControls) {
        formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
      }

      this.setState({
        formControls: updatedControls,
        formIsValid: formIsValid
      });
  }

  formSubmitHandler = event => {
    event.preventDefault();
    // console.dir(this.state.formControls);
    console.log('clicked')
  }

  render() {
    return (
      <div className="_container-custom container p-5">
        <div className="row shadow">
          <div className="col-md-6 p-0 container-image">
            <img className="img-fluid _img-login d-block" src={loginImg} />
            <div className="text-below-image text-center">
              <p className="mb-5">Let's get started</p>
              <p>Skyrocket your career with best global opportunities</p>
            </div>
          </div>

          <div className="col-md-6  _container-form ">
            <div className="my-4">
              <img className="img-fluid _img mx-auto d-block" src={logo} />
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
                    value={this.state.formControls.email.value}
                    onChange={this.changeHandler}
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
                    value={this.state.formControls.password.value}
                    onChange={this.changeHandler}
                  />
                </div>
              </div>

              <div className="text-center mb-3 mt-3">
                <button type="submit"
                className="btn btn-success btn-rounded px-3 py-2"
                onClick={this.formSubmitHandler}
                disabled={!this.state.formIsValid}
                >
                  Log in
                </button>
              </div>

              <div className="_or-seperator">
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
                    Don't have an account?
                  {' '}
                  <a href="/signup/student" className="text-center _link">
                    {' '}
                      Sign Up
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default Login;
