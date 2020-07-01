/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import {
  Paragraph,
  Heading1,
  withErrorBoundary,
  AppIcon,
  RoundedButton,
  DefaultButtonWithIcon,
} from '../../../../ignitus-Shared';
import {
  White,
  IgnitusBlue,
} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';

import * as T from '../../ignitus-WelcomeFlow/Styles/style';
import * as C from '../Styles/style';

export const BasicProfileFlow: FunctionComponent = withErrorBoundary(() => (
  <T.WelcomeContainer>
    <T.TopSection>
      <T.Progress
        src="https://storage.googleapis.com/ignitus_assets/ig-assets/progressSix.png"
        alt="progress-bar"
      />
      <Heading1>Basic Profile</Heading1>
      <Paragraph>This won&apos;t take much time to complete</Paragraph>
    </T.TopSection>
    <T.MiddleSection>
      <C.LeftSection>
        <C.ImageContainer src="https://storage.googleapis.com/ignitus_assets/ig-section/courses.png" />
        <C.InputContainer>
          <C.LeftRow>
            <C.FirstText
              placeholder="First Name"
              type="text"
              name="firstName"
            />
            <C.LastText placeholder="Last Name" type="text" name="lastName" />
          </C.LeftRow>
          <C.LeftRow>
            <C.Text
              placeholder="Major or Speciality"
              type="text"
              name="major"
            />
          </C.LeftRow>
          <C.LeftRow>
            <C.FirstText placeholder="Enter State" type="text" name="state" />
            <C.LastText
              placeholder="Enter Country"
              type="text"
              name="country"
            />
          </C.LeftRow>
          <DefaultButtonWithIcon
            size="large"
            category="primary"
            name={AppIcon.UploadIcon}
            content="Upload Resume &nbsp;"
          />
        </C.InputContainer>
      </C.LeftSection>
      <C.RightSection>
        <C.LeftRow>
          <C.Icon name={AppIcon.LinkedInIcon} color={White} />
          <C.Text placeholder="LinkedIn" type="text" name="LinkedIn" />
        </C.LeftRow>
        <C.LeftRow>
          <C.Icon name={AppIcon.FacebookIcon} color={IgnitusBlue} />
          <C.Text placeholder="Facebook" type="text" name="Facebook" />
        </C.LeftRow>
        <C.LeftRow>
          <C.Icon name={AppIcon.GithubIcon} color={IgnitusBlue} />
          <C.Text placeholder="GitHub" type="text" name="GitHub" />
        </C.LeftRow>
      </C.RightSection>
    </T.MiddleSection>
    <T.BottomSection>
      <RoundedButton size="large" category="primary">
        <Link to="/flow/interestFlow">Save and Continue</Link>
      </RoundedButton>
      <Paragraph>
        Skip for now
        {' >> '}
      </Paragraph>
    </T.BottomSection>
  </T.WelcomeContainer>
));
