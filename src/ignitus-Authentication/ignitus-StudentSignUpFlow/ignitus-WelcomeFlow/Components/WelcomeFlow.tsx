/* eslint-disable import/extensions */
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import {
  Paragraph,
  Heading1,
  RoundedButton,
  DefaultDropdown,
  withErrorBoundary,
} from '../../../../ignitus-Shared';
import * as T from '../Styles/style';

const WelcomeFlow: FunctionComponent = () => (
  <T.WelcomeContainer>
    <T.TopSection>
      <T.Progress src="https://storage.googleapis.com/ignitus_assets/ig-assets/progressOne.png" alt="progress-bar" />
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
              display="block"
            />
          </T.DefaultDropdownContainer>
          <T.DefaultDropdownContainer>
            {' '}
            <DefaultDropdown label="Province" options={['Bavaria', 'Berlin']} display="block" />
          </T.DefaultDropdownContainer>
          <T.DefaultDropdownContainer>
            <DefaultDropdown label="Time Zone" options={['CEST', 'IST']} display="block" />
          </T.DefaultDropdownContainer>
        </form>
      </T.LeftSection>
      <T.RightSection>
        <img src="https://storage.googleapis.com/ignitus_assets/ig-assets/map.png" alt="map" />
      </T.RightSection>
    </T.MiddleSection>
    <T.BottomSection>
      <RoundedButton size="large" category="primary">
        <Link to="/flow/interestFlow">Save & Continue</Link>
      </RoundedButton>
      <Paragraph>
        Skip for now
        {' >> '}
      </Paragraph>
    </T.BottomSection>
  </T.WelcomeContainer>
);

export default withErrorBoundary(WelcomeFlow);
