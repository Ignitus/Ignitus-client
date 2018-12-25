import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { logo } from './Constants';


const Navigation = () => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <HashLink className="navbar-brand" to="/#">
      <img src={logo} width="40" height="40" alt="logo" />
    </HashLink>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="nav navbar-nav">
        <li className="nav-item active">
          <HashLink smooth to="/#">
            <span className="nav-link">
              Home
              {' '}
              <span className="sr-only">(current)</span>
            </span>
          </HashLink>
        </li>
        <li className="nav-item">
          <HashLink smooth to="/#what-we-do">
            <span className="nav-link">What we provide?</span>
          </HashLink>
        </li>
        <li className="nav-item">
          <HashLink smooth to="/#contributors">
            <span className="nav-link">Contributors</span>
          </HashLink>
        </li>
        <li className="nav-item">
          <Link to="/aboutus">
            <span className="nav-link" href="/aboutus">
              About
            </span>
          </Link>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right ml-md-auto ">
        <li className="nav-item">
          <a
            className="nav-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://bit.ly/2NwWLhp"
          >
            Join
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            rel="noopener noreferrer"
            target="_blank"
            href="#"
          >
          Signin
          </a>
          
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            rel="noopener noreferrer"
            target="_blank"
            href="#"
          >
          Signup
          </a>
          
        </li>
        
        
      </ul>
    </div>
  </nav>
);
export default Navigation;
