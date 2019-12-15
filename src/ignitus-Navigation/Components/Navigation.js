/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../ignitus-Assets/Images/nav-logo.svg';
import blackLogo from '../../ignitus-Assets/Images/black-logo.svg';
import '../Styles/style.scss';


const PureNavigation = ({ displayClass, dynamicLogo }) => (
  <nav className={`navbar navbar-expand-lg ${displayClass}`}>
    <HashLink className="navbar-brand" to="/#">
      <img src={dynamicLogo} width="40" height="40" alt="logo" />
    </HashLink>
    <button
      className="navbar-toggler collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span />
      <span />
      <span />
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

        <li className="nav-item">
          <a
            className="nav-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://bit.ly/2SaYXMO"
          >
                Join
          </a>
        </li>

        <li className="nav-item">
          <Link to="/Login">
            <span className="nav-link" href="/Login">
                  Sign in
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/Signup">
            <span className="nav-link" href="/Signup">
                  Sign up
            </span>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);


const Navigation = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const [displayClass, setDisplayClass] = useState('transparent');
  const [dynamicLogo, setDynamicLogo] = useState(blackLogo);

  useEffect(() => {
    const scrollFn = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 20) {
        if (navScrolled === true) {
          setNavScrolled(false);
          setDisplayClass('transparent');
          setDynamicLogo(blackLogo);
        }
      } else if (navScrolled === false) {
        setNavScrolled(true);
        setDisplayClass('whitenav');
        setDynamicLogo(logo);
      }
    };
    window.addEventListener('scroll', scrollFn, { passive: true });
    return () => {
      window.removeEventListener('scroll', scrollFn);
    };
  }, [navScrolled]);

  return <PureNavigation displayClass={displayClass} dynamicLogo={dynamicLogo} />;
};

export default React.memo(Navigation);
