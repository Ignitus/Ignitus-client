/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import {
  Paragraph,
  Heading1,
  RoundedButton,
  DefaultCheckbox,
  withErrorBoundary
} from '../../../../ignitus-Shared';
import * as T from '../../ignitus-WelcomeFlow/Styles/style';
import * as C from '../Styles/style';

const InterestFlow: FunctionComponent = () => (
  <T.WelcomeContainer>
    <T.TopSection>
      <T.Progress src="https://storage.googleapis.com/ignitus_assets/ig-assets/progressTwo.png" alt="progress-bar" />
      <Heading1>What are you interested in?</Heading1>
      <Paragraph>This will customize your experience.</Paragraph>
      <Paragraph>
        This will help you to discover right people and opportunities.
      </Paragraph>
    </T.TopSection>
    <T.MiddleSection>
      <C.LeftSection>
        {' '}
        <form>
          <C.CheckboxContainer>
            <DefaultCheckbox label="Opportunities" value="true" />
          </C.CheckboxContainer>
          <C.CheckboxContainer>
            <DefaultCheckbox label="Build Network" value="true" />
          </C.CheckboxContainer>
          <C.CheckboxContainer>
            <DefaultCheckbox label="Read Blogs" value="true" />
          </C.CheckboxContainer>
          <C.CheckboxContainer>
            <DefaultCheckbox label="All of these" value="true" />
          </C.CheckboxContainer>
        </form>
      </C.LeftSection>
      <C.RightSection>
        <C.InterestImage src="https://storage.googleapis.com/ignitus_assets/ig-assets/interestFlow.png" alt="interests" />
      </C.RightSection>
    </T.MiddleSection>
    <T.BottomSection>
      <RoundedButton size="large" category="primary">
        <Link to="/flow/emailFlow">Save & Continue</Link>
      </RoundedButton>
      <Paragraph>
        Skip for now
        {' >> '}
      </Paragraph>
    </T.BottomSection>
  </T.WelcomeContainer>
);

export default withErrorBoundary(InterestFlow);
