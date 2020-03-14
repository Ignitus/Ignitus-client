/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {Component} from 'react'
import progress from '../Images/Group 12.6.png';
import newsletter from '../Images/newsletter_accept.png'
import { Link } from 'react-router-dom';
import { withErrorBoundary } from '../../ignitus-Internals';

import '../Styles/style.scss';

class Email_Confirmed extends Component {

  render() {
    return (
      <div className="col-lg-12" style={{height: "55vw", backgroundColor: "white"}}>
      <div className="progress-bar-signup" ><img  src={progress}></img></div>
      <div className="newsletter" ><img  src={newsletter}></img></div>
      <div className="welcome" id="confirm">Your email has been confirmed</div>
      <div className="content1" id="content5">Your verified email is sophia.crater@gmail.com</div>
      <div className="text-center">
      <button className="get-started"><Link to="/signup/interest" className="save">Get started</Link></button>
      </div>
      </div>
    )
  }
}

export default withErrorBoundary(Email_Confirmed);