/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import progress from '../../../ignitus-Assets/Images/progressPage6.png';
import newsletter
  from '../../../ignitus-Assets/Images/newsletterAcceptIcon.png';
import {withErrorBoundary} from '../../../ignitus-Internals';

import '../Styles/style.scss';

const emailConfirmed = () => {
  return (
    <div className="emailConfirm">
      <img className="progressBarSignup" src={progress} alt="progress-bar" />
      <div className="newsletter">
        <img src={newsletter} alt="newsletter" />
      </div>
      <p className="confirmParagraph">Your email has been confirmed</p>
      <p className="paragraph">
        Your verified email is sophia.crater@gmail.com
      </p>
      <div className="text-center">
        <button className="getStarted">
          <Link to="/" className="saveText">Get started</Link>
        </button>
      </div>
    </div>
  );
};

export default withErrorBoundary (emailConfirmed);
