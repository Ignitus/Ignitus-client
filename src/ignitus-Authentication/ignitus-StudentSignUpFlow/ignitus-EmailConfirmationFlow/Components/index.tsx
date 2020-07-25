/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import newsletter from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/newsletterAcceptIcon.png';
import {
  Paragraph,
  Heading2,
  RoundedButton,
  withErrorBoundary,
} from '../../../../ignitus-Shared';
import { LazyImage } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/Ignitus-LazyImage/Component';

import * as T from '../../ignitus-WelcomeFlow/Styles/style';
import * as C from '../Styles/style';

export const EmailConfirmationFlow: FunctionComponent = withErrorBoundary(
  () => (
    <T.WelcomeContainer>
      <T.TopSection>
        <LazyImage src={newsletter} alt="newsletter" />
        <C.TopMiddleSection>
          <Heading2>Your email has been confirmed.</Heading2>
          <Paragraph> Your verified email is sophia.crater@gmail.com</Paragraph>
        </C.TopMiddleSection>
      </T.TopSection>
      <C.BottomSection>
        <RoundedButton size="large" category="primary">
          <Link to="/">Get started</Link>
        </RoundedButton>
      </C.BottomSection>
    </T.WelcomeContainer>
  ),
);
