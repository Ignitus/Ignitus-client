import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../ignitus-Assets/Images/nav-logo.svg';
import blackLogo from '../../ignitus-Assets/Images/black-logo.svg';
import '../Styles/style.scss';

class Navigation extends React.Component {
  constructor() {
    super();

    this.state = {
      navScrolled: false,
      displayClass: 'transparent',
      dynamicLogo: blackLogo,
    };
  }

  componentDidMount() {
    const { state: { navScrolled } } = this;
    window.addEventListener('scroll', () => {
      if (window.scrollY < 20) {
        if (navScrolled === true) {
          this.setState({
            navScrolled: false,
            displayClass: 'transparent',
            dynamicLogo: blackLogo,
          });
        }
      } else if (navScrolled === false) {
        this.setState({
          navScrolled: true,
          displayClass: 'whitenav',
          dynamicLogo: logo,
        });
      }
    });
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { state: { navScrolled } } = this;
    if (nextState.navScrolled !== navScrolled) {
      return true;
    }
    return false;
  }

  render() {
    const { state: { displayClass, dynamicLogo } } = this;
    return (
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
  }
}
export default Navigation;
