/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../ignitus-Assets/ignitus-Logos/logo-Svg/ignitusBlueLogo.svg';
import '../Styles/style.scss';

const handleSmallerScreen = () => {
  const navlinks = document.querySelector('.navlinks');
  const lines = document.querySelectorAll('.line');
  lines.forEach((line) => {
    line.classList.toggle('mobile');
  });
  navlinks?.classList.toggle('mobile');
};

const PureNavigation: React.FC = () => (
  <nav className={`navbar  whitenav`}>
    <HashLink className="navbar-brand" to="/#">
      <img src={logo} width="40" height="40" alt="logo" />
    </HashLink>

    <ul className="navlinks">
      <li className="navlinks-item active">
        <HashLink smooth to="/#" className="navlink">Home</HashLink>
      </li>

      <li className="navlinks-item">
        <HashLink smooth to="/#what-we-do" className="navlink">What we provide?</HashLink>
      </li>

      <li className="navlinks-item">
        <HashLink smooth to="/#contributors" className="navlink">Contributors</HashLink>
      </li>

      <li className="navlinks-item">
        <Link to="/aboutus" className="navlink">About</Link>
      </li>

      <li className="navlinks-item">
        <a
          className="navlink"
          rel="noopener noreferrer"
          target="_blank"
          href="https://bit.ly/2SaYXMO"
        >
          Join
        </a>
      </li>

      <li className="navlinks-item">
        <Link to="/Login" className="navlink">Sign in</Link>
      </li>

      <li className="navlinks-item">
        <Link to="/Signup" className="navlink">Sign up</Link>
      </li>
    </ul>

    <div id="burger" onClick={handleSmallerScreen}>
      <span className="line mobile" />
      <span className="line mobile" />
      <span className="line mobile" />
    </div>
  </nav>
);

export default PureNavigation;
