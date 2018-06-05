import React, { Component } from 'react';
import logo from '../../images/black_logo.png';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      
      <footer className="bg-dark text-white mt-4">
              <div className="container text-center text-md-left">
                <div className="row">
                <hr className="clearfix w-100 d-md-none" />

                  <div className="col-md-2 mx-auto">
                    <h5 className="mt-3 mb-4 heading">Features</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a  className="link" href="#!">Resume</a>
                      </li>
                      <li>
                        <a  className="link" href="#!">Opportunities</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-2 mx-auto">
                    <h5 className="mt-3 mb-4 heading">Community</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a  className="link" href="#!">Personal</a>
                      </li>
                      <li>
                        <a  className="link" href="#!">Open Source</a>
                      </li>
                      <li>
                        <a  className="link" href="#!">Partners</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-2 mx-auto">
                    <ul className="list-unstyled">
                      <li>
                        <img src={logo} className="img-responsive img-css" alt={"logo"}/>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-2 mx-auto">
                    <h5 className=" mt-3 mb-4 heading">Company</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a  className="link" href="#!">About</a>
                      </li>
                      <li>
                        <a  className="link" href="#!">Careers</a>
                      </li>
                      <li>
                        <a  className="link" href="#!">Blog</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-2 mx-auto">
                    <h5 className=" mt-3 mb-4 heading">Links</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a  className="link" href="#!">Home</a>
                      </li>
                      <li>
                        <a  className="link" href="#!">How it Works?</a>
                      </li>
                      <li>
                        <a  className="link" href="#!">Features</a>
                      </li>
                      <li>
                        <a  className="link" href="#!" >Why Ignitus</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <ul className="list-unstyled list-inline text-center">
                <li className="list-inline-item">
                  <a className="btn-floating mx-1 link" href="#!">
                    <i className="fa fa-facebook"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating mx-1 link" href="#!">
                    <i className="fa fa-twitter"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating mx-1 link" href="#!">
                    <i className="fa fa-angellist"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating mx-1 link"href="#!">
                    <i className="fa fa-slack"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating mx-1 link" href="#!">
                    <i className="fa fa-linkedin"> </i>
                  </a>
                </li>
              </ul>

              <div className="footer-copyright text-center py-3 heading">© 2018 Copyright Ignitus
              </div>

      </footer>                       
    )
  }
}

export default Footer;