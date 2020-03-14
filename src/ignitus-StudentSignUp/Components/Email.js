/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {Component} from 'react'
import progress from '../Images/Group 12.5.png';
import newsletter from '../Images/newsletter.png'
import { Link } from 'react-router-dom';
import { withErrorBoundary } from '../../ignitus-Internals';

import '../Styles/style.scss';

class Email extends Component {

  render() {
    return (
      <div className="col-lg-12" style={{height: "60vw", backgroundColor: "white"}}>
      <div className="progress-bar-signup" ><img  src={progress}></img></div>
      <div className="newsletter" ><img  src={newsletter}></img></div>
      <div className="welcome" id="confirm">Let’s confirm your email</div>
      <div className="content1" id="content5">We recommend to confirm your email address to recieve further communication. Click the link we sent to sofia.carter@gmail.com to confirm you email</div>
      <div className="display-block">
      <button className="email_confirmed"><Link to="/signup/email_confirmed" className="email_confirmed_text">Email confirmed</Link></button>
      <button className="no_email"><Link to="/" className="no_email_text">I Don’t see the email</Link></button>
      </div>
      <div className="content1" id="content5">I don’t want to confirm my email yet</div>
      </div>
    )
  }
}

export default withErrorBoundary(Email);