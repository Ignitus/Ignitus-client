import React from 'react';

import * as T from '../constants';
import * as I from '../styles';

import {withErrorBoundary} from '../../../ignitus-Shared';

export const Introduction: React.FunctionComponent = withErrorBoundary(() => (
  <I.Container>
    <I.LeftSection>
      <I.TitleImage>
        <I.Title>Welcome to Ignitus</I.Title>
        <I.Torch src={T.TORCH} alt="Ignitus Torch" />
      </I.TitleImage>
      <I.PrimaryText>
        Get handpicked top-quality global research and industrial internships,
        for free! <br/>
        Ignite your resume and get the best global opportunities and
        Skyrocketing your career
        </I.PrimaryText>
      <I.Button category="primary" size="large">
        SIGN UP
      </I.Button>
    </I.LeftSection>

    <I.RightSection>
      <I.Resume src={T.RESUME} alt="resume" />
    </I.RightSection>
  </I.Container>
));
