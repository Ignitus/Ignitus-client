import React from 'react';
import * as O from '../styles';
import {
  Heading1,
  Paragraph,
  TextLink,
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

import {Button} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/buttons';

const interfaceOverlay = () => (
  <O.OverlayContainer>
    <O.Overlay>
      <O.TopSection>
        <Heading1>Hooray!</Heading1>
        <O.Paragraph>Your application has been sent successfully!</O.Paragraph>
        <O.Paragraph secondary>
          Make sure to keep an eye on your email.
        </O.Paragraph>
      </O.TopSection>
      <O.BottomSection>
        <O.Button category="orange" size="medium"> Go Back</O.Button>
      </O.BottomSection>
    </O.Overlay>
  </O.OverlayContainer>
);

export default interfaceOverlay;
