/* eslint-disable import/extensions */
import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';

import { InterestFlow } from './ignitus-InterestFlow/Components';
import { WelcomeFlow } from './ignitus-WelcomeFlow/Components';
import { EmailFlow } from './ignitus-EmailFlow/Components';
import { EmailConfirmationFlow } from './ignitus-EmailConfirmationFlow/Components';
import {
  withErrorBoundary,
  RoundedButton,
  Paragraph,
  Button,
} from '../../ignitus-Shared';
import { Progress } from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Templates/ignitus-Progress/Components/Progress';

import * as T from './style';
import { ProfileDetailsFlow } from './ignitus-DetailsProfileFlow/Components/index';

export const StudentSignUpFlow: FunctionComponent = withErrorBoundary(() => {
  const [current, updateCurrent] = useState(1);
  const steps = 5;

  const next = () =>
    current === steps + 1 ? null : updateCurrent(current + 1);

  return (
    <T.Container>
      <Progress steps={steps} current={current} />

      {current && current === 1 && <WelcomeFlow />}
      {current && current === 2 && <InterestFlow />}
      {current && current === 3 && <ProfileDetailsFlow />}

      {current && current === 4 && (
        <React.Fragment>
          <EmailFlow />
          <T.BottomSection>
            <T.ButtonContainer>
              <Button size="large" category="primary" onClick={next}>
                Email confirmed
              </Button>
              <Button size="large" category="white">
                <Link to="/">I don’t see the email</Link>
              </Button>
            </T.ButtonContainer>
            <Paragraph>
              <Link to="/">I don’t want to confirm my email yet.</Link>
            </Paragraph>
          </T.BottomSection>
        </React.Fragment>
      )}
      {current && current === 5 && <EmailConfirmationFlow />}

      {current && (
        <T.BottomSection>
          <RoundedButton size="large" category="primary" onClick={next}>
            Save & Continue
          </RoundedButton>
          <Paragraph>
            Skip for now
            {' >> '}
          </Paragraph>
        </T.BottomSection>
      )}
    </T.Container>
  );
});
