/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../ignitus-Assets/Images/nav-logo.svg';
import { withErrorBoundary } from '../../ignitus-Internals';

class dashBoardHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.clear();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.logUserOut();
    this.setState({ redirect: true });
  }

  render() {
    const {
      state: { redirect },
    } = this;
    if (redirect) {
      return <Redirect to="/" />;
    }
    let email = '';
    if (localStorage.getItem('data')) {
      email = JSON.parse(localStorage.getItem('data')).email;
    }
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg whitenav">
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
            <i className="fa fa-bars" />
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
                <a className="nav-link disabled" href="#">
                  Welcome
                  {' '}
                  {email}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={this.logout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default withErrorBoundary(dashBoardHeader);
