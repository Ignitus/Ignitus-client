/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import progress from '../../../ignitus-Assets/Images/progressPage1.png';
import imageMap from '../../../ignitus-Assets/Images/profileImageMap.png';
import {withErrorBoundary} from '../../../ignitus-Internals';

import '../Styles/style.scss';

const profile = () => {
  return (
    <div className="signUp">
      <img className="progressBarSignup" src={progress} alt="progress-bar" />
      <p className="welcome">Welcome, Sophia</p>
      <p className="paragragh">
        Let’s start with your profile. This will get you successful on Ignitus
      </p>
      <br />
      <p className="paragragh">
        Confirm your own location and time zone to make communication easier!
        {' '}
      </p>
      <div className="infoContainer">
        <form>
          <label className="labelDropdown">Country/Region</label>
          <br />
          <select className="dropdown">
            <option value="Select country" selected>Select country</option>
            <option value="country">Country</option>
          </select>
          <label className="labelDropdown">Province</label>
          <br />
          <select className="dropdown">
            <option value="Select province" selected>Select province</option>
            <option value="province">Province</option>
          </select>
          <label className="labelDropdown">Time zone</label>
          <br />
          <select className="dropdown">
            <option value="Select timezone" selected>Select timezone</option>
            <option value="timezone">Time Zone</option>
          </select>
        </form>
        <img className="profileImageMap" src={imageMap} alt="image-map" />
      </div>
      <div className="text-center">
        <button className="saveButton">
          <Link to="/signup/interest" className="saveText">
            Save and Continue
          </Link>
        </button>
      </div>
      <p className="skip">Skip for now &nbsp; >></p>
    </div>
  );
};

export default withErrorBoundary (profile);
