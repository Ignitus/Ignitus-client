import React from 'react';
import { Link } from 'react-router-dom';
import { RoundedPrimaryButton } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/buttons';
import {
  Paragraph,
  Heading1,
} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import { withErrorBoundary } from '../../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';

/** Image will be replaced by progress component in the future. */
import progress from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/progressPage1.png';
import imageMap from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/profileImageMap.png';

import { DefaultDropdown } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultDropdown/Components';
import * as T from '../Styles/style';

const WelcomeFlow = () => (
  <T.WelcomeContainer>
    <T.TopSection>
      <T.Progress src={progress} alt="progress-bar" />
      <Heading1>Welcome, Sophia</Heading1>
      <Paragraph>
        Let’s start with your profile. This will get you successful on Ignitus
      </Paragraph>
      <Paragraph>
        Confirm your own location and time zone to make communication easier!
      </Paragraph>
    </T.TopSection>
    <T.MiddleSection>
      <T.LeftSection>
        <form>
          <T.DefaultDropdownContainer>
            <DefaultDropdown
              label="Country/Region"
              options={['Germany', 'Austria']}
            />
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
    <T.BottomSection>
      <RoundedPrimaryButton>
        <Link to="/flow/interestFlow">Save & Continue</Link>
      </RoundedPrimaryButton>
      <Paragraph>
        Skip for now
        {' >> '}
      </Paragraph>
    </T.BottomSection>
  </T.WelcomeContainer>
);

export default withErrorBoundary(WelcomeFlow);
