/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import progress from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/progressPage2.png';
import {
  Paragraph,
  Heading1,
} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import interestsImage from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/interestsImage.png';
import { withErrorBoundary } from '../../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import * as T from '../../ignitus-WelcomeFlow/Styles/style';
import * as C from '../Styles/style';
import { RoundedPrimaryButton } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/buttons';

const InterestFlow = () => (
  <T.WelcomeContainer>
    <T.TopSection>
      <T.Progress src={progress} alt="progress-bar" />
      <Heading1>What are you interested in?</Heading1>
      <Paragraph>This will customize your experience</Paragraph>
      <Paragraph>
        This will help you to discover right people and opportunities
      </Paragraph>
    </T.TopSection>
    <T.MiddleSection>
      <T.LeftSection>
        {' '}
        <form>
          <C.CheckboxContainer>
            <C.Label htmlFor="User Interest">
              <C.Input type="checkbox" name="Oppurtunities" value="yes" />
              Opportunities
            </C.Label>
          </C.CheckboxContainer>
          <C.CheckboxContainer>
            <C.Label htmlFor="User Interest">
              <C.Input type="checkbox" name="Build-Network" value="yes" />
              Build Network
            </C.Label>
          </C.CheckboxContainer>
          <C.CheckboxContainer>
            <C.Label htmlFor="User Interest">
              <C.Input type="checkbox" name="read-blogs" value="yes" />
              Read Blogs
            </C.Label>
          </C.CheckboxContainer>
          <C.CheckboxContainer>
            <C.Label htmlFor="User Interest">
              <C.Input type="checkbox" name="all-of-these" value="yes" />
              All of These
            </C.Label>
          </C.CheckboxContainer>
        </form>
      </T.LeftSection>
      <T.RightSection>
        <C.InterestImage src={interestsImage} alt="interests" />
      </T.RightSection>
    </T.MiddleSection>
    <T.BottomSection>
      <RoundedPrimaryButton>
        <Link to="/flow/emailFlow">Save & Continue</Link>
      </RoundedPrimaryButton>
      <Paragraph>
        Skip for now
        {' >> '}
      </Paragraph>
    </T.BottomSection>
  </T.WelcomeContainer>
);

export default withErrorBoundary(InterestFlow);
