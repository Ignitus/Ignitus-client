import React, { Component } from 'react';
import logo from '../../Images/Logos/black_logo.png';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src={logo} width="40" height="40" alt={"logo"}/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#what-we-do">How It Works?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Why Ignitus?</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right ml-md-auto ">
              <li className="nav-item">
                <a className="nav-link" href="https://bit.ly/2NwWLhp">Join</a>
              </li>
              <li className="nav-item">
                <Link to='/login'><a className="nav-link" href="#">Sign in</a></Link>
              </li>
              <li className="nav-item">
                <Link to='/signup'><a className="nav-link" href="#">Sign up</a></Link>
              </li>
            </ul>
          </div>
    </nav>
    )
  }
}

export default Navigation;
