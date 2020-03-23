/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/buttons';
import { Paragraph, Heading3 } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import { withErrorBoundary } from '../../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import progress from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/progressPage1.png';
import imageMap from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/profileImageMap.png';
import '../Styles/style.scss';
import * as T from '../Styles/style';
import { DefaultDropdown } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultlDropdown/Components';

const WelcomeFlow = () => (
  <T.WelcomeContainer>
    <T.TopSection>
      <T.Progress src={progress} alt="progress-bar" />
      <Heading3>Welcome, Sophia</Heading3>
      <Paragraph>Let’s start with your profile. This will get you successful on Ignitus</Paragraph>
      <Paragraph>Confirm your own location and time zone to make communication easier!</Paragraph>
    </T.TopSection>
    <T.MiddleSection>
      <T.LeftSection>
        <form>
          <T.DefaultDropdownContainer>
            <DefaultDropdown label="Country/Region" options={['Germany', 'Austria']} />
          </T.DefaultDropdownContainer>
          <T.DefaultDropdownContainer>
            {' '}
            <DefaultDropdown label="Province" options={['Bavaria', 'Berlin']} />
          </T.DefaultDropdownContainer>
          <T.DefaultDropdownContainer>
            <DefaultDropdown label="Time Zone" options={['CEST', 'IST']} />
          </T.DefaultDropdownContainer>
        </form>
      </T.LeftSection>
      <T.RightSection>
        <img className="profileImageMap" src={imageMap} alt="map" />
      </T.RightSection>
    </T.MiddleSection>
    <PrimaryButton>
      <Link to="/flow/interestFlow" className="saveText">
        Save & Continue
      </Link>
    </PrimaryButton>
    <Paragraph>
      Skip for now
      {' >> '}
    </Paragraph>
  </T.WelcomeContainer>
);

export default withErrorBoundary(WelcomeFlow);
