/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FunctionComponent } from 'react';
import {
  Heading1,
  withErrorBoundary,
  AppIcon,
} from '../../../../ignitus-Shared';

import {
  WelcomeContainer,
  TopSection,
} from '../../ignitus-WelcomeFlow/Styles/style';

import * as C from '../style';

export const BasicProfileFlow: FunctionComponent = withErrorBoundary(() => (
  <WelcomeContainer>
    <TopSection>
      <Heading1>Basic Profile</Heading1>
      <C.SubTitle>This won&apos;t take much time to complete</C.SubTitle>
    </TopSection>
    <C.BottomSection>
      <C.LeftSection>
        <C.ImageContainer>
          <img
            alt="Student"
            src="https://storage.googleapis.com/ignitus_assets/ig-avatars/grant.png"
          />
        </C.ImageContainer>
        <C.InputContainer>
          <C.Row>
            <C.StyledDefaultInput
              placeholder="First Name"
              type="text"
              name="firstName"
            />{' '}
            <C.StyledDefaultInput
              placeholder="Last Name"
              type="text"
              name="lastName"
            />{' '}
          </C.Row>
          <C.Row>
            <C.StyledDefaultInput
              placeholder="Major or Speciality"
              type="text"
              name="major"
            />{' '}
          </C.Row>
          <C.Row>
            <C.StyledDefaultInput
              placeholder="State"
              type="text"
              name="state"
            />{' '}
            <C.StyledDefaultInput
              placeholder="Enter Country"
              type="text"
              name="country"
            />
          </C.Row>
          <C.StyledDefaultButtonWithIcon
            size="medium"
            category="primary"
            name={AppIcon.UploadIcon}
            content="Upload Resume &nbsp;"
          />
        </C.InputContainer>
      </C.LeftSection>
      <C.RightSection>
        <C.Row>
          <C.Icon name={AppIcon.LinkedInIcon} />
          <C.StyledDefaultInput
            placeholder="LinkedIn"
            type="text"
            name="linkedIn"
          />
        </C.Row>
        <C.Row>
          <C.Icon name={AppIcon.FacebookIcon} />
          <C.StyledDefaultInput
            placeholder="Facebook"
            type="text"
            name="facebook"
          />
        </C.Row>
        <C.Row>
          <C.Icon name={AppIcon.GithubIcon} />
          <C.StyledDefaultInput
            placeholder="GitHub"
            type="text"
            name="gitHub"
          />
        </C.Row>
      </C.RightSection>
    </C.BottomSection>
  </WelcomeContainer>
));
