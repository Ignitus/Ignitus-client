
import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Redirect, Route } from 'react-router-dom';


class dashBoardHeader extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
      redirect: false
    }
    this.logout = this.logout.bind(this)
  }

  logout(){
    localStorage.clear();
    this.setState({redirect : true})
  }

  render() {  

    if (this.state.redirect) {
       return <Redirect to='/'/>;
     }

    let email = '';
    if(localStorage.getItem('data')){
      console.log(localStorage.getItem('data'))
      email = JSON.parse(localStorage.getItem('data')).email;
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
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
          <ul className="navbar-nav  mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Welcome{" "} {email}
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
              <li className="nav-item">
                  <a className="nav-link" href= "#" onClick = {this.logout}>Logout</a>
              </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default dashBoardHeader;
