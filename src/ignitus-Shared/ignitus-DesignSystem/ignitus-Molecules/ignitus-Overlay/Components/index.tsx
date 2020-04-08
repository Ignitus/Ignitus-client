import React from 'react';
import * as O from '../styles';
import {Heading1} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {OverlayProps} from '../types';
import { Button } from '../../../ignitus-Atoms/buttons';

const Overlay = ({
  title,
  primaryText,
  secondaryText,
  buttonText,
}: OverlayProps) => (
  <O.Overlay>
    <O.TopSection>
      <Heading1>{title}</Heading1>
      <O.Paragraph>{primaryText}</O.Paragraph>
      <O.Paragraph secondary>{secondaryText}</O.Paragraph>
    </O.TopSection>
    <O.BottomSection>
      <Button category="primary" size="medium">
        {' '}
        {buttonText}
      </Button>
    </O.BottomSection>
  </O.Overlay>
);

export default Overlay;
