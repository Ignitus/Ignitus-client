import React from 'react';
import { Link } from 'react-router-dom';

import * as T from '../constants';
import * as I from '../styles';

import { withErrorBoundary } from '../../../ignitus-Shared';

export const Introduction: React.FunctionComponent = withErrorBoundary(() => (
  <I.Container>
    <I.LeftSection>
      <I.TitleImage>
        <I.Title>Welcome to Ignitus</I.Title>
        <I.Torch src={T.TORCH} alt="Ignitus Torch" />
      </I.TitleImage>
      <I.PrimaryText>
        Get handpicked top-quality global research and industrial internships,
        for free! <br />
        Ignite your resume and get the best global opportunities and
        Skyrocketing your career
      </I.PrimaryText>
      {localStorage.getItem('authenticated') && (
        <a
          href="https://app.slack.com/client/TRN1H1V43/CUCLB9VJL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <I.Button category="primary" size="large">
            JOIN US
          </I.Button>
        </a>
      )}

      {!localStorage.getItem('authenticated') && (
        <I.Button category="primary" size="large">
          <Link to="/Signup">
            {' '}
            Sign Up{' '}
          </Link>
        </I.Button>
      )}
    </I.LeftSection>

    <I.RightSection>
      <I.Resume src={T.RESUME} alt="resume" />
    </I.RightSection>
  </I.Container>
));
