/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import { withErrorBoundary } from '../../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import '../Styles/style.scss';
import progress from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/progressPage6.png';
import newsletter from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/newsletterAcceptIcon.png';

const emailConfirmed = () => (
  <div className="emailConfirm">
    <img className="progressBarSignup" src={progress} alt="progress-bar" />
    <div className="newsletter">
      <img src={newsletter} alt="newsletter" />
    </div>
    <p className="welcome">Your email has been confirmed.</p>
    <p className="paragraph">Your verified email is sophia.crater@gmail.com</p>
    <div className="text-center">
      <button className="getStarted" type="button">
        <Link to="/" className="saveText">
          Get started
        </Link>
      </button>
    </div>
  </div>
);

export default withErrorBoundary(emailConfirmed);
