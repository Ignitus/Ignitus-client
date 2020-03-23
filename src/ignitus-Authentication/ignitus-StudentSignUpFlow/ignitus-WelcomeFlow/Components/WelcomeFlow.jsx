/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import progress from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/progressPage1.png';
import imageMap from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/profileImageMap.png';
import { withErrorBoundary } from '../../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import '../Styles/style.scss';
import { PrimaryButton } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/buttons';
import { Paragraph, Heading3 } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

import * as T from '../Styles/style';

const WelcomeFlow = () => (
  <T.SignUp>
    <img className="progressBarSignup" src={progress} alt="progress-bar" />
    <Heading3>Welcome, Sophia</Heading3>
    <Paragraph>Let’s start with your profile. This will get you successful on Ignitus</Paragraph>
    <Paragraph>Confirm your own location and time zone to make communication easier!</Paragraph>
    <T.InfoContainer>
      <form className="dropdownContainer">
        <label htmlFor="Select Country/Region" className="labelDropdown">Country/Region</label>
        <br />
        <select className="dropdown" value="Select country">
          <option value="Select country">Select country</option>
          <option value="country">Country</option>
        </select>
        <label htmlFor="Select Province" className="labelDropdown">Province</label>
        <br />
        <select className="dropdown" value="Select province">
          <option value="Select province">Select province</option>
          <option value="province">Province</option>
        </select>
        <label htmlFor="Select Time Zone" className="labelDropdown">Time zone</label>
        <br />
        <select className="dropdown" alue="Select timezone">
          <option value="Select timezone">Select timezone</option>
          <option value="timezone">Time Zone</option>
        </select>
      </form>
      <img className="profileImageMap" src={imageMap} alt="map" />
    </T.InfoContainer>
    <PrimaryButton>
      <Link to="/flow/interestFlow" className="saveText">
        Save and Continue
      </Link>
    </PrimaryButton>
    <p>
      Skip for now
      {' >> '}
    </p>
  </T.SignUp>
);

export default withErrorBoundary(WelcomeFlow);
