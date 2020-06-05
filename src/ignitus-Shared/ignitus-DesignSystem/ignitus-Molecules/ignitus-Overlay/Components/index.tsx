import React from 'react';
import * as O from '../styles';
import { OverlayProps } from '../types';
import { AppIcon } from '../../../..';

export const Overlay = ({ primaryText, secondaryText }: OverlayProps) => (
  <O.Overlay>
    <O.MessageSection>
      <O.Logo name={AppIcon.IgnitusLogo} />
      <O.Paragraph>{primaryText}</O.Paragraph>
      <O.Paragraph secondary>{secondaryText}</O.Paragraph>
    </O.MessageSection>
  </O.Overlay>
);
