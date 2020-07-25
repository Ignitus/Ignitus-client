/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FunctionComponent } from 'react';
import newsletter from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/newsletterIcon.png';
import {
  Paragraph,
  Heading2,
  withErrorBoundary,
} from '../../../../ignitus-Shared';
import * as T from '../../ignitus-WelcomeFlow/Styles/style';
import { LazyImage } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/Ignitus-LazyImage/Component';

export const EmailFlow: FunctionComponent = withErrorBoundary(() => (
  <T.WelcomeContainer>
    <T.TopSection>
      <LazyImage src={newsletter} alt="newsletter" />
      <Heading2>Let’s confirm your email.</Heading2>
      <Paragraph>
        {' '}
        We recommend to confirm your email address to recieve further
        communication.
      </Paragraph>
      <Paragraph>
        Click the link we sent to sofia.carter@gmail.com to confirm you email.
      </Paragraph>
    </T.TopSection>
  </T.WelcomeContainer>
));
