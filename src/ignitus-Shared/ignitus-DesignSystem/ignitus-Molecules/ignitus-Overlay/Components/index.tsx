import React from 'react';
import * as O from '../styles';
import {Heading1} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

const Overlay = () => (
  <O.Overlay>
    <O.TopSection>
      <Heading1>Hooray!</Heading1>
      <O.Paragraph>Your application has been sent successfully!</O.Paragraph>
      <O.Paragraph secondary>
        Make sure to keep an eye on your email.
      </O.Paragraph>
    </O.TopSection>
    <O.BottomSection>
      <O.Button category="primary" size="medium">
        {' '}
        Go Back
      </O.Button>
    </O.BottomSection>
  </O.Overlay>
);

export default Overlay;
