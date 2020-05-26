import React from 'react';
import * as O from '../styles';
import { Heading1 } from '../../../..';
import { OverlayProps } from '../types';

export const Overlay = ({
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
      <O.Button category="primary" size="medium">
        {' '}
        {buttonText}
      </O.Button>
    </O.BottomSection>
  </O.Overlay>
);
