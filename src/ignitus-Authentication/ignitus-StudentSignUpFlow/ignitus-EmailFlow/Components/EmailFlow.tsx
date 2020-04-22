/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import newsletter from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/newsletterIcon.png';
import {
  Paragraph,
  Heading2,
  withErrorBoundary,
  Button,
} from '../../../../ignitus-Shared';
import * as T from '../../ignitus-WelcomeFlow/Styles/style';
import * as C from '../Styles/style';

const EmailFlow: FunctionComponent = () => (
  <T.WelcomeContainer>
    <T.TopSection>
      <T.Progress src="https://storage.googleapis.com/ignitus_assets/ig-assets/progressFive.png" alt="progress-bar" />
      <C.NewsletterImage src={newsletter} alt="newsletter" />
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
    <T.BottomSection>
      <C.ButtonContainer>
        <Button size="large" category="primary">
          <Link to="/flow/emailConfirmationFlow">Email confirmed</Link>
        </Button>
        <Button size="large" category="white">
          <Link to="/">I don’t see the email</Link>
        </Button>
      </C.ButtonContainer>
      <Paragraph><Link to="/">I don’t want to confirm my email yet.</Link></Paragraph>
    </T.BottomSection>
  </T.WelcomeContainer>
);

export default withErrorBoundary(EmailFlow);
