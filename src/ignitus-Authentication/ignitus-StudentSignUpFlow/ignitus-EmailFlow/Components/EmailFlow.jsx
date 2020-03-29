/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import newsletter from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/newsletterIcon.png';
import { withErrorBoundary } from '../../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import {
  Paragraph,
  Heading2,
} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import * as T from '../../ignitus-WelcomeFlow/Styles/style';
import * as C from '../Styles/style';
import {
  PrimaryButton,
  WhiteButton,
} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/buttons';

const EmailFlow = () => (
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
        <PrimaryButton>
          <Link to="/flow/emailConfirmationFlow">Email confirmed</Link>
        </PrimaryButton>
        <WhiteButton>
          <Link to="/">I don’t see the email</Link>
        </WhiteButton>
      </C.ButtonContainer>
      <Paragraph><Link to="/">I don’t want to confirm my email yet.</Link></Paragraph>
    </T.BottomSection>
  </T.WelcomeContainer>
);

export default withErrorBoundary(EmailFlow);
