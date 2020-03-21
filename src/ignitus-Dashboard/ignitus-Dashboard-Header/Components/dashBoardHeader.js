/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import '../Styles/style.scss';
import ProfileDropDown from '../Components/profileDropdown';
import { Redirect} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../ignitus-Assets/Images/nav-logo.svg';
import { withErrorBoundary } from '../../../ignitus-Shared/Components/errorBoundary';
import StatusDropdown from './statusDropdown';

class dashBoardHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      text:'',
    };
    this.handleChange = this.handleChange.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleChange=(e)=>{
    e.preventDefault();
    this.setState({
      text:e.target.value,
    });
    console.log(this.text);
  }

  logout() {
    const {
      props: { logUserOut },
    } = this;
    localStorage.clear();
    logUserOut();
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
      ({ email } = JSON.parse(localStorage.getItem('data')));
    }
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg whitenav text-blue">
          <div className="element">
          <HashLink className="navbar-brand" to="/#">
            <img src={logo} width="40" height="40" alt="logo" />
          </HashLink>
          </div>

          <div className="nav-item element home">
          <HashLink smooth to="/#">
            <span className="nav-link">
              Home 
            </span>
          </HashLink>
          </div>
          
          <div className="nav-item element internship">
          <HashLink smooth to="/#">
            <span className="nav-link">
              Internships
            </span>
          </HashLink>
          </div>
          <div>
            <span></span>
          </div>

          <div className="nav-item element">
            <StatusDropdown />
          </div> 
          
          
          <div className="nav-item element">
            <span>
              <input  type="text" className="searchbox" value={this.state.text} onChange={this.handleChange}></input>
            </span>
          </div>

          <div className="btn-floating mx-1 link contact-btn element envelop" >
          <HashLink
            href="/"
            target="_blank" rel="noopener noreferrer" >
            <i className="fa fa-envelope fa-button" />
          </HashLink>
          </div>

          <div className="btn-floating mx-1 link contact-btn element bell" >
          <a
            href="/"
            target="_blank" rel="noopener noreferrer" >
            <i className="fa fa-bell fa-button" />
          </a>
          </div>

          <div className="btn-floating mx-1 link contact-btn element user" >
          <a
            href="/"
            target="_blank" rel="noopener noreferrer" >
            <i className="fa fa-user-circle fa-lg fa-button"/>
          </a>
          </div>
          <div className="nav-item element">
            <span>
              <ProfileDropDown User={"Sophia"}/>
            </span>
          </div>
        </nav> 
      </React.Fragment>
    );
  }
}

export default withErrorBoundary(dashBoardHeader);
