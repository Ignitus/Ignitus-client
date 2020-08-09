/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FunctionComponent } from 'react';
import {
  Paragraph,
  Heading1,
  DefaultCheckbox,
  withErrorBoundary,
} from '../../../../ignitus-Shared';
import * as T from '../../ignitus-WelcomeFlow/Styles/style';
import * as C from '../Styles/style';
import { MD } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';

export const InterestFlow: FunctionComponent = withErrorBoundary(() => (
  <T.WelcomeContainer>
    <T.TopSection>
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
            <DefaultCheckbox label="Opportunities" value="true" size={MD} />
          </C.CheckboxContainer>
          <C.CheckboxContainer>
            <DefaultCheckbox label="Build Network" value="true" size={MD} />
          </C.CheckboxContainer>
          <C.CheckboxContainer>
            <DefaultCheckbox label="Read Blogs" value="true" size={MD} />
          </C.CheckboxContainer>
          <C.CheckboxContainer>
            <DefaultCheckbox label="All of these" value="true" size={MD} />
          </C.CheckboxContainer>
        </form>
      </C.LeftSection>
      <C.RightSection>
        <C.InterestImage
          src="https://storage.googleapis.com/ignitus_assets/ig-assets/interestFlow.png"
          alt="interests"
        />
      </C.RightSection>
    </T.MiddleSection>
  </T.WelcomeContainer>
));
