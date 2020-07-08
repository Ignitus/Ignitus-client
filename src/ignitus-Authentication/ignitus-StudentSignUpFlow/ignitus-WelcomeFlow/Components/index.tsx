/* eslint-disable import/extensions */
import React, { FunctionComponent } from 'react';
import {
  Paragraph,
  Heading1,
  DefaultDropdown,
  withErrorBoundary,
} from '../../../../ignitus-Shared';
import * as T from '../Styles/style';

export const WelcomeFlow: FunctionComponent = withErrorBoundary(() => (
  <T.WelcomeContainer>
    <T.TopSection>
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
            <DefaultDropdown
              label="Province"
              options={['Bavaria', 'Berlin']}
              display="block"
            />
          </T.DefaultDropdownContainer>
          <T.DefaultDropdownContainer>
            <DefaultDropdown
              label="Time Zone"
              options={['CEST', 'IST']}
              display="block"
            />
          </T.DefaultDropdownContainer>
        </form>
      </T.LeftSection>
      <T.RightSection>
        <img
          src="https://storage.googleapis.com/ignitus_assets/ig-assets/map.png"
          alt="map"
        />
      </T.RightSection>
    </T.MiddleSection>
  </T.WelcomeContainer>
));
