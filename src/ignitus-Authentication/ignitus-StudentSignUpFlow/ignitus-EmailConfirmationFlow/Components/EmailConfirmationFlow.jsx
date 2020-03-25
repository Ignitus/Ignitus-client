/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import {Link} from 'react-router-dom';
import progress from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/progressPage6.png';
import newsletter from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/newsletterAcceptIcon.png';
import {
  Paragraph,
  Heading1,
} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {withErrorBoundary} from '../../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import * as T from '../../ignitus-WelcomeFlow/Styles/style';
import * as C from '../Styles/style';
import {RoundedPrimaryButton} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/buttons';

const EmailConfirmationFlow = () => (
  <T.WelcomeContainer>
    <T.TopSection>
      <T.Progress src={progress} alt="progress-bar" />
      <C.NewsletterImage src={newsletter} alt="newsletter" />
      <Heading1>Your email has been confirmed.</Heading1>
      <Paragraph> Your verified email is sophia.crater@gmail.com</Paragraph>
    </T.TopSection>
    <C.BottomSection>
      <RoundedPrimaryButton>
        <Link to="/">Get started</Link>
      </RoundedPrimaryButton>
    </C.BottomSection>
  </T.WelcomeContainer>
);

export default withErrorBoundary(EmailConfirmationFlow);
