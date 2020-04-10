import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/style.scss';
import * as T from '../constants';
import * as I from '../styles';
import {withErrorBoundary} from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';

export const Introduction: React.FunctionComponent = withErrorBoundary(() => (
  <I.Container>
    {/* <I.Torch src={T.TORCH} alt="Ignitus Torch" /> */}
    <I.LeftSection>
      <I.Title>Welcome to Ignitus</I.Title>
      <I.PrimaryText>
        Get handpicked top-quality global research <br />
        and industrial internships, for <span className="bold-txt">free</span>!
      </I.PrimaryText>
      <I.SecondaryText>
        Ignite your resume and get the{' '}
        <span className="bold-txt">
          best global <br />
          opportunities
        </span>{' '}
        and Skyrocketing your career
      </I.SecondaryText>
    </I.LeftSection>

    <I.RightSection />
  </I.Container>
));
