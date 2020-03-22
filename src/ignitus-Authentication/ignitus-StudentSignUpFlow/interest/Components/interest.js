/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import {Link} from 'react-router-dom';
import progress from '../../../ignitus-Assets/Images/progressPage2.png';
import interestsImage from '../../../ignitus-Assets/Images/interestsImage.png';
import {withErrorBoundary} from '../../../ignitus-Internals';

import '../Styles/style.scss';

const interest = () => (
  <div className="interest">
    <img className="progressBarSignup" src={progress} alt="progress-bar" />
    <p className="welcome">What are you interested in?</p>
    <p className="paragraph">This will customize your experience</p>
    <p className="paragraph">
      This will help you to discover right people and opportunities
    </p>
    <div className="checkboxContainer">
      <div className="checkboxes">
        <label className="cbox">
          <input type="checkbox" name="Oppurtunities" value="yes" />
          Oppurtunities
        </label>
        <br />
        <label className="cbox">
          <input type="checkbox" name="Build-Network" value="yes" />
          Build Network
        </label>
        <br />
        <label className="cbox">
          <input type="checkbox" name="read-blogs" value="yes" /> Read Blogs
        </label>
        <br />
        <label className="cbox">
          <input type="checkbox" name="all-of-these" value="yes" />
          All of these
        </label>
        <br />
      </div>
      <img className="interestsImage" src={interestsImage} alt="interests" />
    </div>
    <div className="text-center">
      <button className="saveButton">
        <Link to="/signup/email" className="saveText">
          Save and Continue
        </Link>
      </button>
    </div>
    <p className="skip">Skip for now &nbsp; >></p>
  </div>
);

export default withErrorBoundary(interest);
