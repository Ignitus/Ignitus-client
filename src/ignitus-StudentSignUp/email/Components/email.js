/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import progress from '../../../ignitus-Assets/Images/progressPage5.png';
import newsletter from '../../../ignitus-Assets/Images/newsletterIcon.png';
import {withErrorBoundary} from '../../../ignitus-Internals';

import '../Styles/style.scss';

const email = () => {
  return (
    <div className="email">
      <img className="progressBarSignup" src={progress} alt="progress-bar" />
      <div className="newsletter">
        <img src={newsletter} alt="newsletter" />
      </div>
      <p className="confirmParagraph">Let’s confirm your email</p>
      <p className="paragraph">
        We recommend to confirm your email address to recieve further communication. Click the link we sent to sofia.carter@gmail.com to confirm you email
      </p>
      <div className="emailConfirmContainer">
        <button className="emailConfirmed">
          <Link to="/signup/emailConfirmed" className="emailConfirmedText">
            Email confirmed
          </Link>
        </button>
        <button className="noEmail">
          <Link to="/" className="noEmailText">I Don’t see the email</Link>
        </button>
      </div>
      <p className="paragraph">I don’t want to confirm my email yet</p>
    </div>
  );
};

export default withErrorBoundary (email);
