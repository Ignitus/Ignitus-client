/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import progress from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/progressPage2.png';
import interestsImage from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/interestsImage.png';
import { withErrorBoundary } from '../../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import '../Styles/style.scss';

const InterestFlow = () => (
  <div className="interest">
    <img className="progressBarSignup" src={progress} alt="progress-bar" />
    <p className="welcome">What are you interested in?</p>
    <p className="paragraph">This will customize your experience</p>
    <p className="paragraph">
      This will help you to discover right people and opportunities
    </p>
    <div className="checkboxContainer">
      <div className="checkboxes">
        <label htmlFor="User Interest" className="cbox">
          <input type="checkbox" name="Oppurtunities" value="yes" />
          Oppurtunities
        </label>
        <br />
        <label htmlFor="User Interest" className="cbox">
          <input type="checkbox" name="Build-Network" value="yes" />
          Build Network
        </label>
        <br />
        <label htmlFor="User Interest" className="cbox">
          <input type="checkbox" name="read-blogs" value="yes" />
          {' '}
          Read Blogs
        </label>
        <br />
        <label htmlFor="User Interest" className="cbox">
          <input type="checkbox" name="all-of-these" value="yes" />
          All of these
        </label>
        <br />
      </div>
      <img className="interestsImage" src={interestsImage} alt="interests" />
    </div>
    <div className="text-center">
      <button className="saveButton" type="button">
        <Link to="/signup/email" className="saveText">
          Save and Continue
        </Link>
      </button>
    </div>
    <p className="skip">Skip for now &nbsp;</p>
  </div>
);

export default withErrorBoundary(InterestFlow);
