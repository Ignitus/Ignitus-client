import React from 'react';
import * as O from '../styles';
import { OverlayProps } from '../types';
import { Heading1 } from '../../../../..';

export const OverlayLogout = ({
  title,
  primaryText,
  secondaryText,
}: OverlayProps) => (
  <O.Overlay>
    <O.TopSection>
      <Heading1>{title}</Heading1>
      <O.Paragraph>{primaryText}</O.Paragraph>
      <O.Paragraph secondary>{secondaryText}</O.Paragraph>
    </O.TopSection>
  </O.Overlay>
);
